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

if ( typeof module !== 'undefined' ) //module only exists when testing in node/jest.  
{
    module.exports = BasketballStats;
}