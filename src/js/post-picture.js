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

// Add to remove JSHint Error about $, etc.
/* global       $:false */
/* global WebFont:false */
/* global console:false */

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
  $('#preview-text').css('visibility', 'visible');
  $('#picker-box').css('visibility', 'visible');

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
 * PICKERS PICKERS PICKERS
 *   This section sets the callbacks on all the the font picker modifying options.
 */

/*
 * WEIGHT & STYLE PICKER
 */
$('#weight-picker').change(function() {
  if( $(this).val() === "Bold" )
  {
    $('#preview-text').css({
      'font-style':"",
      'font-weight':"bold"
    });
  }
  else if ( $(this).val() === "Italic" )
  {
    $('#preview-text').css({
      'font-style':"italic",
      'font-weight':""
    });
  }
  else if ( $(this).val() === "Bold Italic")
  {
    $('#preview-text').css({
      'font-style':"italic",
      'font-weight':"bold"
    });
  }
  else
  {
    $('#preview-text').css({
      'font-style':"",
      'font-weight':""
    });
  }
});

/*
 * FONT PICKER
 */
var loaded_fonts = ['Arial', 'Helvetica', 'Book Antiqua', 'Courier New', 'Times New Roman', 'Verdana'];

$('#font-picker').change(function() {
  if ( $(this).val() === "Default font" )
  {
    $('#preview-text').css('font-family',"");
  }
  else
  {
    /*
     * WEB FONT LOADER : LOAD FONTS FOR THE FONT PICKER
     */
    if ( $.inArray($(this).val(), loaded_fonts) < 0 )
    {
      // load all variants; bold, italic, bold italic
      WebFont.load({
        google : { families : [$(this).val(),
                               $(this).val().concat("b"),
                               $(this).val().concat("i"),
                               $(this).val().concat("bi"),
        ]},
        active : function () {
          // font is now loaded
          loaded_fonts.push($(this).val());
        }
      });
    }
    // set the new font
    $('#preview-text').css("font-family", $(this).val());
  }
});

/*
 * SIZE PICKER
 */
$('#size-picker').change(function() {
  var fsize = $(this).val().concat("px");
  $('#size-indicator').html('<span style="font-size:1.0rem">A</span>A : '.concat(fsize));
  $('#preview-text').css("font-size", fsize);
  $('#preview-text').css("line-height", fsize);
});

/*
 * SPACING PICKER
 */
$('#spacing-picker').change(function() {
  var fspace = $(this).val().concat("px");
  $('#spacing-indicator').html("&harr; : ".concat(fspace));
  $('#preview-text').css("letter-spacing", fspace);
});

/*
 * HEIGHT PICKER
 */
$('#height-picker').change(function() {
  var fspace = $(this).val().concat("px");
  $('#height-indicator').html("&#x2195; : ".concat(fspace));
  $('#preview-text').css("line-height", fspace);
});

/*
 * FONT COLOR PICKER
 */
$('#font-color-picker').ColorPicker({
  color : '#000',
  onShow : function (colpkr) {
    $(colpkr).fadeIn(500);
    return false;
  },
  onHide : function (colpkr) {
    $(colpkr).fadeOut(500);
    return false;
  },
  onChange : function (hsb, hex, rgb) {
    $('#preview-text').css('color', '#' + hex);
    $('#font-color-picker').css('background-color', '#' + hex);
  }
});


});
