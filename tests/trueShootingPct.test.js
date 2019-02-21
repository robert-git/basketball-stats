const Stats = require( "../src/trueShootingPct" )

// https://www.basketball-reference.com/about/glossary.html

const decimalPlacePrecision = 5;

test( "Calculating Kyrie's 2017-18 TS%", () => {
  // https://www.basketball-reference.com/players/i/irvinky01.html
  var pts = 1466;
  var fga = 1087;
  var fta = 261;
  var actualTsPct = Stats.trueShootingPct( pts, fga, fta );
  var expectedTsPct = 0.580;
  expect( actualTsPct ).ToBeCloseTo( expectedtspct, decimalPlacePrecision );
})
