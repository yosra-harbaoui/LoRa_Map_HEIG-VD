jQuery(document).ready(function($)
{
    var p = jQuery( "#navbar" );
    var h = jQuery( "#footer" );

    var a = p.outerHeight( true );
    var b = h.outerHeight( true );

    var c = a + b;

	function fullscreen(c)
    {
		jQuery('#map').css(
        {
            width: jQuery(window).width(),
            height: jQuery(window).height() - c
        });
	}
  
	fullscreen(c);

    // Run the function in case of window resize
    jQuery(window).resize(function()
    {
        var p = jQuery( "#navbar" );
        var h = jQuery( "#footer" );

        var a = p.outerHeight( true );
        var b = h.outerHeight( true );

        var c = a + b;

        fullscreen(c);         
    });
});