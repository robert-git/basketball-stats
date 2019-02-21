"use strict";

var BasketballStats = ( function() {
  var _ts = function( pts, fga, fta ) {
    return 0;
  };

  return {
    trueShootingPct : _ts
  };
})();

if ( typeof module !== 'undefined' ) //module only exists when testing in node/jest.  
{
    module.exports = BasketballStats;
}
