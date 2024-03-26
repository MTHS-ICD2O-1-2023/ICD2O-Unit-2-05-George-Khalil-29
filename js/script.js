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
  const hoursYouwork= parseInt(document.getElementById('Hours-You-work').value)
  const rateYouget = parseInt(document.getElementById('Rate-You-Get').value)
  xx = parseFloat(document.getElementById('pay').value)

  // process
  const pay = (hoursYouwork * rateYouget) * (1.00 - 0.18) ;
  const taxes = (hoursYouwork * rateYouget) *  0.18 ;
  const TAX_RATE = 0.18

  // output
  document.getElementById('pay').innerHTML = `Your pay will be: $ ${pay.toFixed(2)}` ; 
  document.getElementById('taxes').innerHTML = 'Your pay will be: $' + taxes.toFixed(2) ; 
  document.getElementById('TAX_RATE').innerHTML = 'TAX_RATE is: $' + TAX_RATE.toFixed(2) ; 
}
