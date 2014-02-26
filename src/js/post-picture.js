/*
  Kashev Dalmia
  kashev.dalmia@gmail.com

  'Persona Prototyping : Designing for Designers'
  or
  'Fake Apps for Fake People'

  A Project for ARTD 313 @ UIUC, Sp 2014
  proj2b - dalmia3

  main.js
*/

// Add to remove JSHint Error about $
/* global $:false       */

$(document).ready(function(){

/*
 * initColorPicker()
 *   given a selector and an initial color, turns that element into a ColorPicker.
 */
function initColorPicker (selector, initial_color) {
  $(selector).ColorPicker({
    color : initial_color,
    onShow : function (colpkr) {
      $(colpkr).fadeIn(500);
      return false;
    },
    onHide : function (colpkr) {
      $(colpkr).fadeOut(500);
      return false;
    },
    onChange : function (hsb, hex, rgb) {
      $(selector).css('backgroundColor', '#' + hex);
    }
  });
}


/*
 * SET COLOR PICKER
 */
initColorPicker('.color-1', '#4F769E');
initColorPicker('.color-2', '#35372F');
initColorPicker('.color-3', '#F9F9F9');
initColorPicker('.color-4', '#67956E');

});
