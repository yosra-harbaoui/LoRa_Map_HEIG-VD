jQuery(document).ready(function()
{
  setTimeout( function() { map.updateSize();}, 200);
});

jQuery(window).resize(function()
{
  setTimeout( function() { map.updateSize();}, 200);
});