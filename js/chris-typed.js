/*
 Chris Zenzel Typed Scripts
 Copyright 2015 Christopher Zenzel. All Rights Reserved.
 */

/* Protect Images */
$(document).ready(function () {

  /* Add Styled Rule */
  $('h1.site-title').after("<p class='site-title-ruler-p'><img ondrag='return false;' oncontextmenu='return false;' src='//czenzel.github.io/typed/images/typed-styled-rule.png' border='0' class='site-title-ruler-img' /></p>");

  /* Add Logo to Header - std:Template */
  $("h1.site-title").attr('style', 'text-align: left; float: left');
  $("h1.site-title").after('<div style="padding: 0; margin: 0; float: right;"><img src="https://images.typed.com/56fb7eb9-f972-4af4-8aab-9339391e6a85/1610917_965113540187846_2159509180776299155_n.jpg" ondrag="return false;" oncontextmenu="return false;" border="0" style="border-radius: 150px; width: 50px; height: auto;" /></div>');

  /* Add Post Image Icons to Post Articles in Blog */
  $('h1.post-title').before('<img src="//czenzel.github.io/typed/images/post.png" border="0" class="post-title-icon" />');

  /* Protect Images */
  $('img').bind('contextmenu', function(e) { return false; });
  $('img').mousedown(function(){ return false; });

});

/* Change Favorite Icon and Apple Touch Icon On-The-Fly */
$(window).load(function () {

  // Add Lightbox for Photographs in Post Content
  $('body').append('<script src="//czenzel.github.io/typed/js/lightbox.min.js"></script>');

  // Remove Shortcut Icon and Apple Touch Icon
  $('link').filter('[rel="icon"]').remove();
  $('link').filter('[rel="apple-touch-icon"]').remove();

  // Change Shortcut Icon and Apple Touch Icon to Profile Picture

  // Favorite Icon
  $('head').append('<link href="https://images.typed.com/56fb7eb9-f972-4af4-8aab-9339391e6a85/1610917_965113540187846_2159509180776299155_n.jpg" rel="shortcut icon" type="image/png" />');

  // Apple Touch Icon
  $('head').append('<link rel="apple-touch-icon" href="https://images.typed.com/56fb7eb9-f972-4af4-8aab-9339391e6a85/1610917_965113540187846_2159509180776299155_n.jpg" />');

});
