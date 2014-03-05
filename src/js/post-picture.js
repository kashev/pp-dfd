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
/* global       $:false */
/* global WebFont:false */

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
initColorPicker('.alaska-1', '#4F769E');
initColorPicker('.alaska-2', '#35372F');
initColorPicker('.alaska-3', '#F9F9F9');
initColorPicker('.alaska-4', '#67956E');

/*
 * SET BUTTON HANDLERS
 */

$('#done-button').click(function(){
  $('#font-view').css('visibility', 'visible');

  $('.picture-view').fadeOut(500);
  $('.palette-view').css('height', '100%');

  /* Set New Click Handlers */
  $('#done-button').off('click');
  $('#done-button').click(function(){
    window.location = "/index.html";
  });

});

$('#cancel-button').click(function(){
  window.location = "/index.html";
});

/*
 * FONT PICKER
 */
$('#weight-picker').change(function() {
  if( $(this).val() === "Bold" )
  {
    $('#preview-text').css({
      'font-family':"",
      'font-weight':"bold"
    });
  }
  else if ( $(this).val() === "Italic" )
  {
    $('#preview-text').css({
      'font-family':"italic",
      'font-weight':""
    });
  }
  else if ( $(this).val() === "Bold Italic")
  {
    $('#preview-text').css({
      'font-family':"italic",
      'font-weight':"bold"
    });
  }
  else
  {
    $('#preview-text').css({
      'font-family':"",
      'font-weight':""
    });
  }
});

/*
 * FONT PICKER
 */

$('#font-picker').change(function() {
  if ( $(this).val() === "Default font" )
  {
    $('#preview-text').css('font-family',"");
  }
  else
  {
    $('#preview-text').css("font-family", $(this).val());
  }
});

/*
 * WEB FONT LOADER : LOAD FONTS FOR THE FONT PICKER
 */
WebFont.load({
  google: {
    families: ['Abril Fatface',
               'Akronim',
               'Arvo',
               'Audiowide',
               'Bubbler One',
               'Codystar',
               'Condiment',
               'Diplomata',
               'Droid Sans',
               'Droid Serif',
               'Esteban',
               'Flamenco',
               'Freckle Face',
               'Gafata',
               'Germania One',
               'Gravitas One',
               'Hammersmith One',
               'Iceland',
               'Inconsolata',
               'Josefin Slab',
               'Lato',
               'Merriweather',
               'Merriweather Sans',
               'Monofett',
               'Montserrat',
               'Old Standard TT',
               'Open Sans',
               'Proxima Nova',
               'PT Sans',
               'PT Serif',
               'Revalia',
               'Roboto',
               'Sail',
               'Sigmar One',
               'Ubuntu',
               'Vampiro One',
               'Vollkorn']
  }
});

});
