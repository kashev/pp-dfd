/*
  Kashev Dalmia
  kashev.dalmia@gmail.com

  'Persona Prototyping : Designing for Designers'
  or
  'Fake Apps for Fake People'

  A Project for ARTD 313 @ UIUC, Sp 2014
  proj2b - dalmia3

  user.js
*/

// Add to remove JSHint Error about $
/* global     $:false   */
/* global fries:false   */

$(document).ready(function(){
  $('#your-account-save-changes').click(function(){
    var toast = new fries.Toast({ content: "Changes Saved!"});
  });
});
