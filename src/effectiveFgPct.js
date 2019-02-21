"use strict";

var BasketballStats = ( function() {
  var _efg = function( fgm, fga, threePtrsMade ) {
    // eFG% definition: https://www.basketball-reference.com/about/glossary.html

    return ( fgm + 0.5 * threePtrsMade ) / fga;
  };

  return {
    effectiveFgPct : _efg
  };
})();

// module.exports is available only when testing in nodejs:
if ( typeof module !== 'undefined' && typeof module.exports !== 'undefined' )   
{
    module.exports = BasketballStats;
}
