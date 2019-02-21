"use strict";

var BasketballStats = ( function() {
  var _ts = function( pts, fga, fta ) {
    var tsa = fga + 0.44 * fta;
    return pts / ( 2 * tsa );
  };

  return {
    trueShootingPct : _ts
  };
})();

if ( typeof module !== 'undefined' ) //module only exists when testing in node/jest.  
{
    module.exports = BasketballStats;
}
