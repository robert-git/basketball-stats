"use strict";

var BasketballStats = ( function() {
  var _ts = function( pts, fga, fta ) {
    // TS% definition: https://www.basketball-reference.com/about/glossary.html

    var tsa = fga + 0.44 * fta;
    return pts / ( 2 * tsa );
  };

  return {
    trueShootingPct : _ts
  };
})();

// module.exports is available only when testing in nodejs:
if ( typeof module !== 'undefined' && typeof module.exports !== 'undefined' ) 
{
    module.exports = BasketballStats;
}
