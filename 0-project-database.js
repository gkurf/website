const CATEGORY_ORDER = [
    'Class Projects',
    'Extracurriculars',
    'Coding',
    'Misc'
];

const projectsData = [
    {
        id: 0,
        title: "Racing Quadcopter",
        category: "Misc",
        startDate: "2018-12-01",
        endDate: "2019-12-01",
        description: "Homemade FPV racing drone",
        fullDescription: [
            "Designed and built a custom First-Person-View (FPV) quadcopter for racing and recreational flying. The drone was constructed using a WhitenoiseFPV carbon fiber frame paired with Emax brushless motors and a 2.1mm RunCam camera for real-time video transmission."
        ],
        image: "media/racing-quadcopter/thumbnail.jpg",
        media: [
            {type: "image", src: "media/racing-quadcopter/1.jpg"},
            {type: "image", src: "media/racing-quadcopter/2.jpg"},
            {type: "image", src: "media/racing-quadcopter/3.jpg"}
        ],
    },
    {
        id: 1,
        title: "Detector Building",
        category: "Extracurriculars",
        startDate: "2019-09-01",
        endDate: "2020-03-01",
        description: "Designed and built an Arduino thermometer for Science Olympiad competition",
        fullDescription: [
            "Participated in the Science Olympiad \"Detector Building\" event, developing a custom temperature probe and microcontroller system to measure water samples. The device was constructed using an Arduino microcontroller, MCP3208 analog-to-digital converter, LM35DZ temperature sensor, and a set of indicator LEDs programmed to display temperature zones as required by competition rules. Data was displayed on a laptop via Serial and compared against a reference thermometer.",
            "Although the regional competition was cancelled due to COVID-19, extensive testing and calibration produced a reliable model converting voltage to temperature, demonstrating accurate readings across the full 0-75 °C range."
        ],
        
        image: "media/detector-building/thumbnail.jpg",
        media: [
            {type: "image", src: "media/detector-building/Circuit.jpg"},
            {type: "image", src: "media/detector-building/Probe.jpg"},
            {type: "image", src: "media/detector-building/Sample.jpg"},
            {type: "image", src: "media/detector-building/Setup.jpg"},
            {type: "image", src: "media/detector-building/Working.jpg"}
        ],
        downloads: [
            {
                name: "Official Rules",
                description: "2020 Division C Detector Building Rules",
                url: "media/detector-building/Science_Olympiad_Div_C_2020_Rules_DB.pdf"
            },
            {
                name: "MCP3208_LM35DZ",
                description: "Arduino microcontroller code",
                url: "media/detector-building/MCP3208_LM35DZ.ino"
            }
        ],
    },
    {
        id: 2,
        title: "Marble Roller Coaster",
        category: "Class Projects",
        startDate: "2021-02-01",
        endDate: "2021-03-01",
        description: "AP Physics marble roller coaster project",
        fullDescription: [
            "Designed and constructed a marble roller coaster for AP Physics that demonstrated principles of energy conservation and momentum with a March Madness basketball theme.",
            "The track and support structure were built from pre-printed construction paper structures. The coaster featured a custom hardwood base painted like a basketball court, two 3D-printed basketball hoops, and a counterweight lift mechanism to double the marble's travel time.",
        ],

        image: "media/marble-roller-coaster/thumbnail.jpg",
        media: [
            {type: "image", src: "media/marble-roller-coaster/1.jpg"},
            {type: "image", src: "media/marble-roller-coaster/2.jpg"},
            {type: "image", src: "media/marble-roller-coaster/3.jpg"},
            {type: "image", src: "media/marble-roller-coaster/4.jpg"},
            {type: "image", src: "media/marble-roller-coaster/5.jpg"},
            {type: "image", src: "media/marble-roller-coaster/6.jpg"},
            {type: "video", src: "https://youtu.be/Xms316Ph2jw"}
        ]
    },
    {
        id: 3,
        title: "Homemade 3D Printer",
        category: "Misc",
        startDate: "2020-04-01",
        endDate: "2021-06-01",
        description: "Built a functional 3D printer using salvaged parts from CD drives",
        fullDescription: [
            "Constructed a 3D printer using components salvaged from an old Dell computer. The project involved disassembling optical drives to extract stepper motor gantries, repurposing a computer power supply, and building a custom frame from fiberboard. The final printer achieved print quality comparable to commercial 3D printers at a fraction of the cost, albeit restricted to a small print volume.",
            "The build process required designing custom motor mounts, integrating an MKS control board with proper firmware configuration, installing an extruder, and implementing end-stop switches. While the physical construction took several months, the software configuration and calibration proved to be the most challenging aspect, requiring extensive troubleshooting to achieve reliable operation."
        ],
        
        image: "media/homemade-3d-printer/thumbnail.jpg",
        media: [
            {type: "image", src: "media/homemade-3d-printer/Complete.jpg"},
            {type: "image", src: "media/homemade-3d-printer/Disk Drive.jpg"},
            {type: "image", src: "media/homemade-3d-printer/Disassembly 1.jpg"},
            {type: "image", src: "media/homemade-3d-printer/Disassembly 2.jpg"},
            {type: "image", src: "media/homemade-3d-printer/Frame.jpg"},
            {type: "image", src: "media/homemade-3d-printer/Board.jpg"},
            {type: "image", src: "media/homemade-3d-printer/Frog.jpg"},
            {type: "video", src: "https://youtube.com/shorts/RHgSaGPMGO0"}
        ],
        downloads: [
            {
                name: "Inspiration",
                description: "Original Instractables tutorial",
                url: "https://www.instructables.com/eWaste-60-3DPrinter/"
            },
            {
                name: "Demo Video",
                description: "Warning: this is an old video and fairly embarrassing",
                url: "https://www.youtube.com/watch?v=7f9S2YBlEuY"
            },
        ],
    },
    {
        id: 4,
        title: "Eagle Scout Project",
        category: "Misc",
        startDate: "2021-04-01",
        endDate: "2021-09-01",
        description: "Butterfly garden installation for the Illinois Department of Natural Resources",
        fullDescription: [
            "Constructed a certified Monarch Waystation butterfly garden at Illinois Caverns State Natural Area following its 10-year closure to the public. The project addressed the Illinois Department of Natural Resources' dual objectives of site beautification and interpretive education improvements following its reopening.",
            "Led a team of 15 volunteers from Boy Scout Troop 622 in the planning and execution phases, coordinating transportation logistics and managing the acquisition of materials including mulch, landscaping bricks, and native plants. The finished product established native nectar plants and milkweed host plants essential for monarch butterfly migration and included an educational certification sign explaining the waystation's purpose."
        ],

        image: "media/eagle-scout-project/thumbnail.jpg",
        media: [
            {type: "image", src: "media/eagle-scout-project/1.jpg"},
            {type: "image", src: "media/eagle-scout-project/2.png"},
            {type: "image", src: "media/eagle-scout-project/3.jpg"},
            {type: "image", src: "media/eagle-scout-project/4.jpg"},
            {type: "image", src: "media/eagle-scout-project/5.jpg"},
        ]
    },
    {
        id: 5,
        title: "St. Paul Cemetery Map",
        category: "Misc",
        startDate: "2020-09-01",
        endDate: "2021-12-01",
        description: "Digitized and mapped grave plots for local cemetery",
        fullDescription: [
            "Volunteered to create a digital map of St. Paul's Church Cemetery in Columbia, Illinois, at the request of the cemetery board. They had previously been penciling over spreadsheet printouts to track burial records, and were looking for a more intuitive way to record and locate grave sites.",
            "The project involved documenting the position and headstone information of 870 individual grave plots across 42,000 square feet. Using AutoCAD, I mapped each plot to create both a comprehensive overview map and subdivided detail views. The resulting maps now serve as a reference tool for locating existing graves, planning new burials, and maintaining accurate records. The digital format allows for easy updates and modifications as new plots are added."
        ],

        image: "media/st-paul-cemetery-map/thumbnail.png",
        media: [
            {type: "image", src: "media/st-paul-cemetery-map/Grounds.jpg"},
            {type: "image", src: "media/st-paul-cemetery-map/CEMETERY AERIAL.jpg"},
            {type: "image", src: "media/st-paul-cemetery-map/Parcels.jpg"},
            {type: "image", src: "media/st-paul-cemetery-map/Old_Map.jpg"},
            {type: "image", src: "media/st-paul-cemetery-map/Full_New.png"},
            {type: "image", src: "media/st-paul-cemetery-map/Northwest_Plots_New.png"}
        ],
        downloads: [
            {
                name: "Cemetery Map Sheets",
                description: "Overview and subdivided maps of cemetery plots",
                url: "media/st-paul-cemetery-map/CEMETERY MAP2021-12-13.pdf"
            },
            {
                name: "Full Size Map",
                description: "11x17 print of entire cemetery plot",
                url: "media/st-paul-cemetery-map/FULL SIZE MAP2021-12-13.pdf"
            },
        ],
    },
    {
        id: 6,
        title: "Flip-Flop-O-Phone",
        category: "Misc",
        startDate: "2021-11-01",
        endDate: "2021-12-01",
        description: "PVC instrument for talent show",
        fullDescription: [
            "Designed and constructed a musical instrument dubbed the 'Flip-Flop-O-Phone' using PVC pipes for Belleville West High School's annual Mr. Maroon talent competition. The instrument featured 37 individual notes spanning three octaves (F1 to F4).",
            "The project required research on acoustic calculations to determine proper pipe lengths. The instrument was built with 200 feet of 2-inch conduit PVC pipe, 130 elbow joints, and 37 couplings, all mounted within a custom-built wooden frame designed in SolidWorks."
        ],

        image: "media/flip-flop-o-phone/thumbnail.jpg",
        media: [
            {type: "image", src: "media/flip-flop-o-phone/1.jpg"},
            {type: "image", src: "media/flip-flop-o-phone/3.jpg"},
            {type: "image", src: "media/flip-flop-o-phone/4.png"},
            {type: "image", src: "media/flip-flop-o-phone/5.jpg"},
            {type: "image", src: "media/flip-flop-o-phone/6.png"},
            {type: "video", src: "https://youtube.com/shorts/4nAmUmrGQeg"},
            {type: "video", src: "https://youtu.be/EJoxoUtYLyU"}
        ],
        downloads: [
            {
                name: "Design Calculations",
                description: "Spreadsheet to determine PVC lengths",
                url: "media/flip-flop-o-phone/FullPVC.xlsx"
            },
            {
                name: "Performance Video",
                description: "Warning: this is an old video and fairly embarrassing",
                url: "https://youtu.be/3_qqhLM_960?si=Bil8rWrUdHf38RFC"
            }
        ],
    },
    {
        id: 7,
        title: "Wright Stuff",
        category: "Extracurriculars",
        startDate: "2015-09-01",
        endDate: "2022-03-01",
        description: "Built rubber-powered balsa airplanes for Science Olympiad competition",
        fullDescription: [
            "Competed in the Science Olympiad \"Wright Stuff\" event from 6th through 12th grade, designing, building, and testing rubber-powered airplanes to achieve maximum time aloft. Planes were built using balsa wood, carbon fiber, and plastic wrap within strict size and weight specifications. Flight time was optimized through angle of attack adjustments, motor winding counts, and systematic test logging.",
            "Over the years, refined designs capable of sustained flights exceeding one minute in indoor gymnasiums. Achievements include multiple podium placements at the Illinois state competition during middle school and first-place finishes at Regionals throughout high school."
        ],

        image: "media/wright-stuff/thumbnail.jpg",
        media: [
            {type: "image", src: "media/wright-stuff/2022Building.jpg"},
            {type: "image", src: "media/wright-stuff/2021 Wing.jpg"},
            {type: "image", src: "media/wright-stuff/WSWeight.jpg"},
            {type: "image", src: "media/wright-stuff/2022Plane.jpg"},
            {type: "video", src: "https://youtube.com/shorts/Mtxfq2BxGtc"}
        ],
        downloads: [
            {
                name: "Demo Video",
                description: "2022 Regionals Demonstration Video",
                url: "https://youtu.be/7X6wkzkMvJQ?si=BXZQUfTnZTS_Fk4C"
            },
            {
                name: "Official Rules",
                description: "2022 Division C Wright Stuff Rules",
                url: "media/wright-stuff/Science_Olympiad_Div_C_2022_Rules_WS.pdf"
            }
        ],
    },
    {
        id: 8,
        title: "Mole Scale",
        category: "Misc",
        startDate: "2021-02-01",
        endDate: "2022-04-01",
        description: "Balance that calculates the number of molecules in chemical samples",
        fullDescription: [
            "Designed and built a custom scale for a high school chemistry teacher, who suggested the project as a way to visualize molecular quantities in everyday samples. The hardware was constructed using an Arduino Nano, HX711 load cell amplifier, and associated circuitry housed in an aluminum enclosure. The device sends mass data via Serial to a companion Windows application developed in C#.",
            "The software interface features a chemical formula parser to automatically calculate molecular quantities from mass measurements. It displays results in comprehensible units ranging from septillions to individual molecules. Additional features including tare functionality, hold capability, and scale calibration were implemented to provide a complete laboratory-grade (ish) instrument."
        ],

        image: "media/mole-scale/thumbnail.jpg",
        media: [
            {type: "image", src: "media/mole-scale/1.jpg"},
            {type: "image", src: "media/mole-scale/2.jpg"},
            {type: "image", src: "media/mole-scale/3.jpg"},
            {type: "image", src: "media/mole-scale/4.png"},
            {type: "image", src: "media/mole-scale/5.png"}
        ],
        downloads: [
            {
                name: "Arduino Source Code",
                description: ".ino file run on the scale's Arduino",
                url: "media/mole-scale/MoleScale.ino"
            },
            {
                name: "Windows App Source Code",
                description: "Windows program to interface with the scale",
                url: "media/mole-scale/Windows App.zip"
            }
        ],
    },
    {
        id: 9,
        title: "ENGR 161 Robot",
        category: "Class Projects",
        startDate: "2022-09-01",
        endDate: "2022-12-01",
        description: "LEGO Robot for class final competition",
        fullDescription: [
            "Designed and built a \"Mars Cargo Rover\" as part of a three-person engineering team to complete autonomous navigation, obstacle traversal, and cargo delivery tasks. The robot was constructed using LEGO Technic components and a Raspberry Pi board, along with sensors including color, Hall effect, gyro, and ultrasonic.",
            "The mechanical design featured a differential steering drivetrain and rear caster supports to maximize obstacle climbing ability. A cargo delivery system could secure different container shapes during transport and precisely drop cargo when triggered.",
            "The software included a custom line-following algorithm and calibration functions to ensure reliable sensor readings under different lighting conditions."
        ],

        image: "media/engr-161-robot/thumbnail.jpg",
        media: [
            {type: "image", src: "media/engr-161-robot/1.jpg"},
            {type: "image", src: "media/engr-161-robot/2.jpg"},
            {type: "image", src: "media/engr-161-robot/3.jpg"},
            {type: "image", src: "media/engr-161-robot/4.jpg"},
            {type: "image", src: "media/engr-161-robot/5.jpg"},
            {type: "image", src: "media/engr-161-robot/6.jpg"},
            {type: "video", src: "https://youtu.be/Y-S55jVe6ys"},
            {type: "video", src: "https://youtube.com/shorts/OLb1XjZp5CY"},

        ],
        downloads: [
            {
                name: "Written Report",
                description: "Final report on the project",
                url: "media/engr-161-robot/Proj3_Report_Team43.pdf"
            },
            {
                name: "Oral Presentation",
                description: "Final slideshow on the project",
                url: "media/engr-161-robot/Proj3_Pres_Team_43.pdf"
            }
        ],
    },
    {
        id: 10,
        title: "ENGR 162 Robot",
        category: "Class Projects",
        startDate: "2023-02-01",
        endDate: "2023-04-01",
        description: "LEGO Robot for class final competition",
        fullDescription: [
            "Designed and built a \"Global Emergency Autonomous Response System\" as part of a four-person engineering team to complete autonomous maze navigation, hazard detection, and cargo delivery tasks. The robot was constructed using LEGO components and a Raspberry Pi board, along with sensors including three ultrasonic sensors, gyroscope, magnetometer, and infrared sensor.",
            "The mechanical design featured a differential steering drivetrain with two large motorcycle wheels and custom caster wheels. A 3D-printed treasure chest cargo container with custom release mechanism transported \"supplies\" and deposited them upon exiting the maze. The software implemented a left-wall-following navigation algorithm with coordinate tracking and mapping capabilities."
        ],

        image: "media/engr-162-robot/thumbnail.jpg",
        media: [
            {type: "image", src: "media/engr-162-robot/1.jpg"},
            {type: "image", src: "media/engr-162-robot/2.jpg"},
            {type: "image", src: "media/engr-162-robot/3.jpg"},
            {type: "image", src: "media/engr-162-robot/OrthographicRender.png"},
            {type: "video", src: "https://youtu.be/zB8ffvr1eyU"}
        ],
        downloads: [
            {
                name: "Written Report",
                description: "Final report on the project",
                url: "media/engr-162-robot/Proj3_Report_Team45.pdf"
            },
            {
                name: "Oral Presentation",
                description: "Final slideshow on the project",
                url: "media/engr-162-robot/Proj3_Pres_Team_45.pdf"
            }
        ],
    },
    {
        id: 11,
        title: "2023 SL Payload",
        category: "Extracurriculars",
        startDate: "2022-08-01",
        endDate: "2023-5-01",
        description: "Extendable radio-controlled camera for model rocket",
        fullDescription: [
            "Developed an autonomous camera deployment system for the NASA USLI rocketry competition. The payload extends an imaging sensor outside the vehicle and can be commanded to take photos via radio after landing. The system combines mechanical actuators with autonomous software to monitor flight events and execute the deployment sequence.",
            "During flight, all components remain sealed inside the airframe. Once landing is detected, the system automatically rotates the payload vertical, separates the airframe to create an opening, and extends the camera assembly upward using a rack and pinion. Once deployed, the system receives NASA transmission commands through an integrated antenna and captures images of the landing site.",
        ],

        image: "media/2023-sl-payload/thumbnail.jpg",
        media: [
            {type: "image", src: "media/2023-sl-payload/1.jpg"},
            {type: "image", src: "media/2023-sl-payload/2.jpg"},
            {type: "image", src: "media/2023-sl-payload/3.jpg"},
            {type: "image", src: "media/2023-sl-payload/4.jpg"},
            {type: "image", src: "media/2023-sl-payload/5.jpg"},
            {type: "image", src: "media/2023-sl-payload/7.jpg"},
            {type: "image", src: "media/2023-sl-payload/8.jpg"},
            {type: "image", src: "media/2023-sl-payload/9.jpg"},
            {type: "image", src: "media/2023-sl-payload/10.jpg"},
            {type: "image", src: "media/2023-sl-payload/11.jpg"},
            {type: "video", src: "https://youtu.be/vqJHhLZJjjk"},

        ],
        downloads: [
            {
                name: "CDR Report",
                description: "Critical Design Review report for 2022-2023 rocket",
                url: "media/2023-sl-payload/Purdue University - 2023 - CDR - Report.pdf"
            },
            {
                name: "CDR Presentation",
                description: "Critical Design Review presentation for 2022-2023 rocket",
                url: "media/2023-sl-payload/Purdue University - 2023 - CDR - Presentation.pdf"
            }
        ],
    },
    {
        id: 12,
        title: "Drone Motor Test Stand",
        category: "Misc",
        startDate: "2023-11-01",
        endDate: "2023-12-01",
        description: "BLDC quadcopter motor thrust tester",
        fullDescription: [
             "Developed a motor testing apparatus to support quadcopter payload design for the NASA USLI competition. The test stand was engineered to provide thrust and torque measurements for a variety of brushless DC motors, enabling selection for optimal flight performance.",
            "The system features an aluminum frame construction with a custom-machined mounting plate designed for universal compatibility. Three load cells form the core of the measurement system: one 5kg load cell captures direct thrust measurements along the motor's axis, while two parallel 2kg load cells measure reaction torque. PEEK plastic washers provide electrical isolation for the load cells. Data acquisition is handled by an Arduino Uno microcontroller paired with HX711 load cell amplifiers."
        ],

        image: "media/drone-motor-test-stand/thumbnail.jpg",
        media: [
            {type: "image", src: "media/drone-motor-test-stand/CAD.png"},
            {type: "image", src: "media/drone-motor-test-stand/1.jpg"},
            {type: "image", src: "media/drone-motor-test-stand/2.jpg"},
            {type: "image", src: "media/drone-motor-test-stand/3.jpg"},
            {type: "image", src: "media/drone-motor-test-stand/4.jpg"}
        ],
    },
    {
        id: 13,
        title: "Sophomore Design Project",
        category: "Class Projects",
        startDate: "2024-02-01",
        endDate: "2024-04-01",
        description: "\"Sunriser\" blinds-opening alarm clock",
        fullDescription: [
            "Conducted product research, designed, and developed the \"Sunriser\" automatic blinds opener as part of a four-person engineering team to address morning wake-up difficulties experienced by 90.6% of adolescents. The device was constructed using 3D-printed components, an Arduino Nano, DC motor, and OLED display to create a windowsill-mounted alarm system.",
            "The mechanical design featured a clamp assembly that secures to windowsills, a belt-and-pulley system that opens blinds, and three adjustment buttons for alarm and volume settings. The system combines natural light exposure with customizable audio alerts to wake users non-disruptively. The final design meets all specifications including 95% wake reliability, sub-$120 retail cost, and 2000+ use cycle durability."
        ],

        image: "media/sophomore-design-project/thumbnail.jpg",
        media: [
            {type: "image", src: "media/sophomore-design-project/1.png"},
            {type: "image", src: "media/sophomore-design-project/2.jpg"},
            {type: "image", src: "media/sophomore-design-project/3.jpg"},
            {type: "image", src: "media/sophomore-design-project/4.jpg"},
            {type: "image", src: "media/sophomore-design-project/5.jpg"},
            {type: "image", src: "media/sophomore-design-project/6.jpg"},
            {type: "image", src: "media/sophomore-design-project/7.jpg"},
            {type: "video", src: "https://youtu.be/hFdIb7vcamo"}
        ],
        downloads: [
            {
                name: "Poster",
                description: "Design Fair display poster",
                url: "media/sophomore-design-project/ME_263_Poster.pdf"
            },
            {
                name: "Report",
                description: "Final written report",
                url: "media/sophomore-design-project/Report_3.pdf"
            },
            {
                name: "Presentation",
                description: "Final oral presentation slides",
                url: "media/sophomore-design-project/Final_Presentation.pdf"
            },
        ],
    },
    {
        id: 14,
        title: "2024 SL Payload",
        category: "Extracurriculars",
        startDate: "2023-08-01",
        endDate: "2024-05-01",
        description: "RC quadcopter deployed from model rocket in-flight",
        fullDescription: [
            "Developed the SAIL (STEMnauts Atmosphere Independent Lander) payload for the NASA USLI competition. The quadcopter featured four BLDC motors and folding propellers, designed to autonomously deploy from the launch vehicle and conduct a parachute-free landing.",
            "During ascent and descent under drogue parachute, the quadcopter remains secured and folded within the payload bay. At 400 ft AGL, an electronic latch releases the nose cone, allowing the payload bay to open and the SAIL to deploy. Once clear of the airframe, the drone's arms extend and can be manually piloted via RC to the desired landing zone."
        ],

        image: "media/2024-sl-payload/thumbnail.jpg",
        media: [
            {type: "image", src: "media/2024-sl-payload/1.jpg"},
            {type: "image", src: "media/2024-sl-payload/2.jpg"},
            {type: "image", src: "media/2024-sl-payload/3.jpg"},
            {type: "image", src: "media/2024-sl-payload/4.jpg"},
            {type: "image", src: "media/2024-sl-payload/5.jpg"},
            {type: "image", src: "media/2024-sl-payload/6.jpg"},
            {type: "image", src: "media/2024-sl-payload/7.jpg"},
            {type: "image", src: "media/2024-sl-payload/8.jpg"},
            {type: "image", src: "media/2024-sl-payload/9.jpg"},
            {type: "image", src: "media/2024-sl-payload/11.jpg"},

        ],
        downloads: [
            {
                name: "Video Compilation",
                description: "Flight highlights video",
                url: "https://youtu.be/m-z-ghWHfZ0"
            },
            {
                name: "CDR Report",
                description: "Critical Design Review report for 2023-2024 rocket",
                url: "media/2024-sl-payload/Purdue University - 2024 - CDR - Report.pdf"
            },
            {
                name: "CDR Presentation",
                description: "Critical Design Review presentation for 2023-2024 rocket",
                url: "media/2024-sl-payload/Purdue University - 2024 - CDR - Presentation.pdf"
            }
        ],
    },
    {
        id: 15,
        title: "Airbrakes Test Vehicle",
        category: "Extracurriculars",
        startDate: "2023-06-01",
        endDate: "2024-11-01",
        description: "Experimental rocket for active altitude control",
        fullDescription: [
            "Experimental test of automatic flaps to be used in controlling model rocket altitude, intended to be implemented the NASA USLI competition. The 3-inch diameter cardboard tube rocket was designed to be cheap, achieve an altitude of 1500 feet, and gather test data to determine feasibility for use on a full scale USLI rocket.",
            "Unfortunately, the vehicle crashed during its first test flight before any usable data could be gathered."
        ],

        image: "media/airbrakes-test-vehicle/thumbnail.jpg",
        media: [
            {type: "image", src: "media/airbrakes-test-vehicle/1.jpg"},
            {type: "image", src: "media/airbrakes-test-vehicle/2.jpg"},
            {type: "image", src: "media/airbrakes-test-vehicle/3.jpg"},
            {type: "image", src: "media/airbrakes-test-vehicle/4.jpg"},
            {type: "video", src: "https://youtube.com/shorts/mrXLcz599hA"},
            {type: "video", src: "https://youtube.com/shorts/v5hab24fZjk"},
            {type: "video", src: "https://youtube.com/shorts/jla9UXtLHIA"}
        ]
    },
    {
        id: 16,
        title: "Latex Formatter",
        category: "Coding",
        startDate: "2025-01-01",
        endDate: "2025-02-01",
        description: "CS assignment formatting tool",
        fullDescription: [
            "Coded a LaTeX formatting tool to streamline assignment submission for CS 251 students using Gradescope. The formatter eliminates the manual typing of LaTeX commands by automatically converting plain text algorithms and mathematical expressions into LaTeX compliant with course standards.",
            "The user interface features a dual-panel design with live preview functionality and comprehensive formatting controls. A toolbar provides quick access to common mathematical symbols (such as \\mathcal{F}), logical operators, and specialized notation. The tool automatically handles bold keywords, text styling, and proper indentation."
        ],

        image: "media/latex-formatter/thumbnail.png",
        media: [
            {type: "image", src: "media/latex-formatter/2.png"},
            {type: "image", src: "media/latex-formatter/thumbnail.png"}
        ],
        downloads: [
            {
                name: "Website",
                description: "latexformatter.com",
                url: "https://latexformatter.com"
            },
            {
                name: "Source Code",
                description: "Github link",
                url: "https://github.com/gkurf/latexformatter"
            }
        ],
    },
    {
        id: 17,
        title: "Slipstream Experiment",
        category: "Class Projects",
        startDate: "2025-03-01",
        endDate: "2025-04-01",
        description: "Wind tunnel test to determine drag reduction behind semi trucks",
        fullDescription: [
            "Designed and conducted a wind tunnel experiment for ME 30801 Fluids Lab to test drag reduction effects of vehicles tailgating semi trucks. The test setup utilized 1:50 scale 3D-printed models in a low-speed open-circuit wind tunnel.",
            "Variable separation distances were tested from 0.75 to 5.75 inches (representing 3-24 feet at full scale) at wind speeds of 40, 60, and 80 MPH to simulate highway conditions. A threaded rod mounting system allowed precise positioning of the passenger vehicle while the truck was secured to an adjustable ground plate. The data analysis revealed significant drag coefficient reductions (up to -0.27) when following closely behind the truck, with stronger slipstreaming effects at higher speeds."
        ],

        image: "media/slipstream-experiment/thumbnail.jpg",
        media: [
            {type: "image", src: "media/slipstream-experiment/1.jpg"},
            {type: "image", src: "media/slipstream-experiment/2.jpg"},
            {type: "image", src: "media/slipstream-experiment/3.jpg"},
            {type: "image", src: "media/slipstream-experiment/4.jpg"},
            {type: "image", src: "media/slipstream-experiment/5.jpg"},
            {type: "image", src: "media/slipstream-experiment/6.png"},
        ],
        downloads: [
            {
                name: "Lab Report",
                description: "Final report on methodology and results",
                url: "media/slipstream-experiment/ME30801_S25_OpenLab_Report_D1T21.pdf"
            },
            {
                name: "Presentation",
                description: "Final slideshow deck on methodology and results",
                url: "media/slipstream-experiment/ME30801_S25_D1T21.pdf"
            }
        ],
    },
    {
        id: 18,
        title: "ME 375 Robot",
        category: "Class Projects",
        startDate: "2025-03-01",
        endDate: "2025-04-01",
        description: "Line following control system competition",
        fullDescription: [
            "Programmed a Skitter Robot kit control system for the ME 375 final project. The robot was equipped with DC gearmotors with encoders, an IR distance sensor, a line-following sensor array, and an Arduino Mega microcontroller to navigate a track for two complete laps before parking 8 inches from a wall.",
            "The control architecture featured a three-state machine (line following, parking, complete) with dual feedback loops including a PD controller for line following and proportional controller for wall approach speed regulation. Sensor calibration was completed to establish transfer functions for motor-gearbox-wheel subsystems and mapping algorithms to convert sensor voltages into position data relative to track centerline.",
        ],

        image: "media/me-375-robot/thumbnail.jpg",
        media: [
            {type: "image", src: "media/me-375-robot/1.jpg"},
            {type: "video", src: "https://youtube.com/shorts/ScFwHVF58CQ"}
        ],
        downloads: [
            {
                name: "Report",
                description: "Final report on control system design, code, and functionality",
                url: "media/me-375-robot/ME375 Final Lab Report.pdf"
            }
        ],
    },
    {
        id: 19,
        title: "2025 SL Payload",
        category: "Extracurriculars",
        startDate: "2024-08-01",
        endDate: "2025-05-01",
        description: "Radio antenna deployed from model rocket",
        fullDescription: [
            "Developed a deployable radio antenna payload for the NASA USLI competition. The payload includes a spoolable dipole antenna that remains stowed inside the airframe during flight.",
            "After the software logs all flight events including landing, a mechanical latch is released to disconnect the parachute and prevent dragging. The mechanical system then begins to orient the antenna to vertical via a Geneva mechanism until it is aligned with the correct slit in the payload airframe. Once vertical, the antenna is extended away from the rocket body to maximize signal strength and line-of-sight. The onboard transceiver, powered by a dedicated battery pack, then transmits temperature, apogee, and elapsed time data to the ground station to satisfy NASA requirements."
        ],

        image: "media/2025-sl-payload/thumbnail.jpg",
        media: [
            {type: "image", src: "media/2025-sl-payload/1.jpg"},
            {type: "image", src: "media/2025-sl-payload/2.jpg"},
            {type: "image", src: "media/2025-sl-payload/3.jpg"},
            {type: "image", src: "media/2025-sl-payload/4.jpg"},
            {type: "image", src: "media/2025-sl-payload/5.jpg"},
            {type: "image", src: "media/2025-sl-payload/6.jpg"},
            {type: "image", src: "media/2025-sl-payload/7.jpg"},
            {type: "video", src: "https://youtube.com/shorts/INHJZHCGg3s"},
        ],
        downloads: [
            {
                name: "CDR Report",
                description: "Critical Design Review report for 2024-2025 rocket",
                url: "media/2025-sl-payload/Project Wolf CDR.pdf"
            },
            {
                name: "CDR Presentation",
                description: "Critical Design Review presentation for 2024-2025 rocket",
                url: "media/2025-sl-payload/PSP-SL 2025 CDR Presentation- Updated Payload Slides.pdf"
            }
        ],
    },
    {
        id: 20,
        title: "Personal Website",
        category: "Coding",
        startDate: "2025-07-01",
        endDate: "2025-08-01",
        description: "Custom portfolio and project showcase website",
        fullDescription: [
            "You are here!",
            "Coded using HTML/CSS/JS, with a little help from AI."
        ],

        image: "media/personal-website/thumbnail.png",
        media: [
            {type: "image", src: "media/personal-website/thumbnail.png"}
        ],
        downloads: [
            {
                name: "Source Code",
                description: "Github link",
                url: "https://github.com/gkurf/website"
            }
        ]
    },
];

// Export for module systems or make available globally
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {projectsData, CATEGORY_ORDER};
} else {
    window.projectsData = projectsData;
    window.CATEGORY_ORDER = CATEGORY_ORDER;
}