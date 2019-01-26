//---------------------------IN JQUERY ONLY--------------------------------------
$(document).ready( function(){

  //Change <h1> to something cheeky
  $('h1').text('Something Cheeky');

  //inside Upcoming Traversals, create an ordered list
  $('h4').after("<ol><li>Change the h1 to something cheeky.</li><li>I love to read books.</li><li>Colored pens are the best.</li></ol>");

  //replace all sad classes into happy
  $('.sad')
    .addClass('happy')
    .removeClass('sad');

  //make annoying popup link to something else {
  $('#annoying-popup a').attr('href', 'http://www.cashcats.biz');

 //change annoying-popup to right and 30px lower
  $('#annoying-popup')
    .css( 'right', '0' )
    .css('top', function(i, val) {
      return ( parseInt( val, 10 ) + 30 ) + 'px'; } );
      console.log( $('#annoying-popup') );

//replace the second to last <li> with something of your choice
  $('.suggested-topics ul li').last().prev().replaceWith('<li>Something I randomly put</li>' );


//replace form input with <textarea>
  $('input[type="text"]').replaceWith("<textarea></textarea>");

});
