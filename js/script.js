// Copyright (c)2024 George Khalil All rights reserved
//
// Created by: George Khalil
// Created on: Mar 2024
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates area of a triangle.
 */
function salaryProgram() {
  // input
  const HoursWorked= parseInt(document.getElementById('Hours-Worked').value)
  const HourlyWage = parseInt(document.getElementById('Hourly-Wage').value)

  // process
  const pay = (HoursWorked * HourlyWage) * (1.00 - 0.18) ;
  const taxes = (HoursWorked * HourlyWage) *  0.18 ;

  // output
  document.getElementById('pay').innerHTML = `Your pay will be: $ ${pay.toFixed(2)}` ; 
  document.getElementById('taxes').innerHTML = 'Your pay will be: $' + taxes.toFixed(2) ; 
}
