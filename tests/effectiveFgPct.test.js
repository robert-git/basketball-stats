"use strict";

const Stats = require( "../src/effectiveFgPct" );

// https://www.basketball-reference.com/about/glossary.html

const decimalPlacePrecisionAtBkrefDotCom = 3;

test( "Calculating Kyrie's 2017-18 eFG%", () => {
  // https://www.basketball-reference.com/players/i/irvinky01.html
  var fgm           =  534;
  var fga           = 1087;
  var threePtrsMade =  166;
  var actual_eFG = Stats.effectiveFgPct( fgm, fga, threePtrsMade );
  var expected_eFG = 0.568;
  expect( actual_eFG ).toBeCloseTo( expected_eFG, decimalPlacePrecisionAtBkrefDotCom );
});
