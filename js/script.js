// Copyright (c)2024 George Khalil All rights reserved
//
// Created by: George Khalil
// Created on: Mar 2024
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates area of a triangle.
 */
function salaryProgram () {
  // input
  const hours = parseInt(document.getElementById('Your-Hours').value)
  const rate = parseInt(document.getElementById('rate-Per-Hour').value)
  // process
  const takeHomeSalary = (hours * rate) * (1.00 - 0.18) 
  const taxes = (hours * rate) * 0.18 

  // output
  document.getElementById('pay').innerHTML = `Your pay will be: $ ${takeHomeSalary.toFixed(2)}`
document.getElementById('taxes').innerHTML = 'Your pay will be: $' + takeHomeSalary.toFixed(2)
}
