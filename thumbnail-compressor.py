#!/usr/bin/env python3
"""
Thumbnail Image Compressor
Processes all images from a folder and creates compressed versions
"""

import os
from PIL import Image
import sys
import glob

# Supported image extensions
SUPPORTED_EXTENSIONS = ('.jpg', '.jpeg', '.png', '.bmp', '.tiff', '.tif', '.gif')

def compress_image(input_path, output_path, quality=75, max_width=400, max_height=400):
    """
    Compress an image with specified quality and maximum dimensions
    
    Args:
        input_path (str): Path to input image
        output_path (str): Path to output compressed image
        quality (int): JPEG quality (1-100, higher = better quality)
        max_width (int): Maximum width in pixels
        max_height (int): Maximum height in pixels
    """
    try:
        with Image.open(input_path) as img:
            # Convert to RGB if necessary (handles PNG with transparency)
            if img.mode in ('RGBA', 'LA', 'P'):
                # Create white background for transparent images
                background = Image.new('RGB', img.size, (255, 255, 255))
                if img.mode == 'P':
                    img = img.convert('RGBA')
                background.paste(img, mask=img.split()[-1] if img.mode in ('RGBA', 'LA') else None)
                img = background
            elif img.mode != 'RGB':
                img = img.convert('RGB')
            
            # Resize image while maintaining aspect ratio
            img.thumbnail((max_width, max_height), Image.Resampling.LANCZOS)
            
            # Save with compression
            img.save(output_path, 'JPEG', quality=quality, optimize=True)
            
            return True
    except Exception as e:
        print(f"Error processing {input_path}: {str(e)}")
        return False

def get_compressed_filename(original_path):
    """
    Generate the compressed filename by replacing the extension with -small.jpg
    """
    directory = os.path.dirname(original_path)
    filename = os.path.basename(original_path)
    name, ext = os.path.splitext(filename)
    
    compressed_filename = f"{name}-small.jpg"
    return os.path.join(directory, compressed_filename)

def get_images_from_folder(folder_path):
    """
    Get all image files from the specified folder
    
    Args:
        folder_path (str): Path to the folder containing images
        
    Returns:
        list: List of image file paths
    """
    image_files = []
    
    for ext in SUPPORTED_EXTENSIONS:
        # Add both lowercase and uppercase extensions
        pattern = os.path.join(folder_path, f"*{ext}")
        image_files.extend(glob.glob(pattern))
        pattern = os.path.join(folder_path, f"*{ext.upper()}")
        image_files.extend(glob.glob(pattern))
    
    # Remove duplicates and sort
    image_files = sorted(list(set(image_files)))
    
    return image_files

def main():
    """
    Main function to process all thumbnail images
    """
    print("Thumbnail Image Compressor")
    print("=" * 40)
    
    # Get folder path from user or use current directory
    if len(sys.argv) > 1:
        folder_path = sys.argv[1]
    else:
        folder_path = input("Enter the folder path (or press Enter for current directory): ").strip()
        if not folder_path:
            folder_path = "."
    
    # Check if folder exists
    if not os.path.isdir(folder_path):
        print(f"Error: Folder '{folder_path}' does not exist!")
        sys.exit(1)
    
    # Get all image files from the folder
    image_files = get_images_from_folder(folder_path)
    
    if not image_files:
        print(f"No supported image files found in '{folder_path}'")
        print(f"Supported extensions: {', '.join(SUPPORTED_EXTENSIONS)}")
        sys.exit(0)
    
    print(f"Found {len(image_files)} image(s) in '{folder_path}'")
    
    # Configuration
    quality = 75  # JPEG quality (adjust as needed)
    max_width = 5000  # Maximum width in pixels
    max_height = 600  # Maximum height in pixels
    
    processed_count = 0
    error_count = 0
    skipped_count = 0
    
    for image_path in image_files:
        compressed_path = get_compressed_filename(image_path)
        
        # Skip if this is already a compressed file
        if image_path.endswith('-small.jpg'):
            print(f"\nSkipping compressed file: {image_path}")
            skipped_count += 1
            continue
        
        print(f"\nProcessing: {image_path}")
        
        # Check if compressed version already exists
        if os.path.exists(compressed_path):
            response = input(f"  📁 Compressed file already exists: {compressed_path}\n     Overwrite? (y/n): ")
            if response.lower() != 'y':
                print(f"  ⏭️  Skipped")
                skipped_count += 1
                continue
        
        # Get original file size
        original_size = os.path.getsize(image_path)
        
        # Compress the image
        success = compress_image(image_path, compressed_path, quality, max_width, max_height)
        
        if success:
            compressed_size = os.path.getsize(compressed_path)
            compression_ratio = (1 - compressed_size / original_size) * 100
            
            print(f"  ✅ Success!")
            print(f"     Original: {original_size:,} bytes")
            print(f"     Compressed: {compressed_size:,} bytes")
            print(f"     Savings: {compression_ratio:.1f}%")
            print(f"     Output: {compressed_path}")
            
            processed_count += 1
        else:
            print(f"  ❌ Failed to compress")
            error_count += 1
    
    # Summary
    print("\n" + "=" * 40)
    print("SUMMARY")
    print("=" * 40)
    print(f"Processed successfully: {processed_count}")
    print(f"Errors: {error_count}")
    print(f"Skipped: {skipped_count}")
    print(f"Total images found: {len(image_files)}")
    
    if processed_count > 0:
        print(f"\n✨ Successfully compressed {processed_count} thumbnail images!")
        print(f"   Compressed files saved with '-small.jpg' suffix")
        print(f"   Quality: {quality}%, Max dimensions: {max_width}x{max_height}px")

if __name__ == "__main__":
    # Check if PIL is available
    try:
        from PIL import Image, ImageOps
    except ImportError:
        print("Error: Pillow (PIL) is required but not installed.")
        print("Install it using: pip install Pillow")
        sys.exit(1)
    
    main()