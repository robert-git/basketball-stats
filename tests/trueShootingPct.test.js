"use strict";

const Stats = require( "../src/trueShootingPct" );

// https://www.basketball-reference.com/about/glossary.html

const decimalPlacePrecisionAtBkrefDotCom = 3;

test( "Calculating Kyrie's 2017-18 TS%", () => {
  // https://www.basketball-reference.com/players/i/irvinky01.html
  var pts = 1466;
  var fga = 1087;
  var fta = 261;
  var actualTsPct = Stats.trueShootingPct( pts, fga, fta );
  var expectedTsPct = 0.610;
  expect( actualTsPct ).toBeCloseTo( expectedTsPct, decimalPlacePrecisionAtBkrefDotCom );
});
