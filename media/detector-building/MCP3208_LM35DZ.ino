#include <SPI.h>
#include <Wire.h>   
#define _CS_PIN_ 10 //Pin 10 defined as the CS Pin.

int DevMode = 1;

const int numReadings = 5;

int readings[numReadings];      // the readings from the analog input
int readIndex = 0;              // the index of the current reading
int total = 0;                  // the running total
int average = 0;                // the average

int lowestLED = 0;              // temps low-lowest light up blue LED
int lowLED = 10;
int mediumLED = 10.000001;      // temps medium-mediumest light up green LED
int mediumestLED = 61;
int highLED = 61.000001;        // temps high-highest light up red LED
int highestLED = 75;
String LED = "Blue";


void setup()
{
  Serial.begin(9600); //Initalize the Serial Port to print the Analog Readings from MCP3208 onto the Terminal.
  
  pinMode(_CS_PIN_,OUTPUT); //Pin 10 acting as OUTPUT as CS is a OUTPUT Pin. 
  digitalWrite(_CS_PIN_,HIGH);
  SPI.begin(); //Intialize SPI PORT
  SPI.setClockDivider(SPI_CLOCK_DIV2);
  
  for (int thisReading = 0; thisReading < numReadings; thisReading++) {
    readings[thisReading] = 0;  // initialize all the readings to 0
  }
  pinMode(A1, OUTPUT);          //Start Blue LED
  pinMode(A3, OUTPUT);          //Start Green LED
  pinMode(A5, OUTPUT);          //Start Red LED
}

void loop()
{
     int rawValue = readADC(0);            // subtract the last reading
     total = total - readings[readIndex];  // read from the sensor
     readings[readIndex] = rawValue;       // add the reading to the total
     total = total + readings[readIndex];  // advance to the next position in the array
     readIndex = readIndex + 1;            // if we're at the end of the array...
     if (readIndex >= numReadings) {       // ...wrap around to the beginning:
       readIndex = 0;
     }
     average = total / numReadings;        // calculate the average

     float volt = (average * 1.250) / 4.096; //4096 / 1000 for mV
     float temp = (((volt - 56.15) * 61.2) / 632.49) + 6.3;

  if (DevMode == 0) {
     Serial.print("Temperature: ");
     Serial.print(temp, 1);
     Serial.print(" °C  ");
     Serial.print("Voltage: ");
     Serial.print(volt, 1);
     Serial.print(" mV  ");
     Serial.print(rawValue - average);
     Serial.print("              \r");
  }  else {
     Serial.print("20.8"); //temp, 2
     Serial.print(" °C  ");
     Serial.print(volt, 2);
     Serial.print(" mV  ");
     Serial.print(LED+"  ");
     Serial.print(rawValue);
     Serial.print(" RV  ");
     Serial.print(average);
     Serial.print(" AV  ");
     Serial.print(rawValue - average);
     Serial.print(" Diff   \r");
  }
  if (temp >= lowestLED and temp <= lowLED) {                              //turns on the appropriate LED
    digitalWrite(A1, HIGH);
    digitalWrite(A3, LOW);
    digitalWrite(A5, LOW);
    LED = "Blue";
  } else if (temp >= mediumLED and temp <= mediumestLED) {
    digitalWrite(A3, HIGH);
    digitalWrite(A1, LOW);
    digitalWrite(A5, LOW);
    LED = "Green";
  } else if (temp >= highLED and temp <= highestLED) {
    digitalWrite(A5, HIGH);
    digitalWrite(A1, LOW);
    digitalWrite(A3, LOW);
    LED = "Red";
  } else {
    digitalWrite(A1, LOW);
    digitalWrite(A3, LOW);
    digitalWrite(A5, LOW);
    LED = "None";
  }
     delay(100); //Delay
}

uint16_t readADC(int channel)
{
  uint16_t output;
  byte channelBits = channel<<6;

 //if(channel>3)
 
  //Select ADC
  digitalWrite(_CS_PIN_, LOW); //Select the Connected MCP3208 by pulling _CS_PIN_ LOW.
  if(channel>3)
    SPI.transfer(B00000111); //Defines Single mode of Operation for the ADC. D2=1 Start Bit. D1=1 Sinfgle Ended Mode D0=0 For Channel 0-3. 1 For Channel 4-7
  else
    SPI.transfer(B00000110);

  byte msb = SPI.transfer(channelBits); //Transfers 2nd Byte from MCU to MCP3208 which returns  MSB of the read data. 
  byte lsb = SPI.transfer(0x00);//Transfers 3rd Byte from MCU to MCP3208 which returns  LSB of the read data. 
 
  digitalWrite(_CS_PIN_,HIGH); //Deselect the Connected MCP3208 by pulling _CS_PIN_ HIGH.
 
  
  msb = msb & B00001111; // Make all 4 Higher bits of the MSB 0 as 12 Bit Resolution is provided by MCP3208
  
  output = msb<<8 | lsb; //Combine MSB with LSB to form the 12 Bit Analog read  Value.

  return output; //Output Value
}
