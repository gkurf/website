/*
  Arduino Nano code running inside the Mole Scale designed by Gabe Kurfman from 2021-2022
*/

#include "HX711.h"

#define DOUT  3
#define CLK  2

HX711 scale;

float calibration_factor = -427.31;
char serial_code;

void setup() {
  Serial.begin(9600);
  Serial.println("Mole Scale - Created by Gabe Kurfman 2022");

  scale.begin(DOUT, CLK);
  scale.set_scale();
  scale.tare(); //Reset the scale to 0
  scale.set_scale(calibration_factor);
}

void loop() {
  Serial.println(scale.get_units(5), 2);
  //Serial.println(calibration_factor);
  if (Serial.available())
  {
    serial_code = Serial.read();
    if (serial_code == '1') {
      scale.tare();
    }
    if (serial_code == '2') {
      while (!Serial.available()) {}
      Serial.readString();
      scale.tare();
      while (!Serial.available()) {}
      scale.set_scale();
      calibration_factor = scale.get_units(10) / Serial.readString().toInt();
      scale.set_scale(calibration_factor); //Adjust to this calibration factor
    }
  }
}
