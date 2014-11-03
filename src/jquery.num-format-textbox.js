/*
 * num-format-textbox
 * https://github.com/dazpinto/num-format-textbox
 *
 * Copyright (c) 2014 Darryl Pinto
 * Licensed under the MIT license.
 */

(function($) {

  // Collection method.
  $.fn.num_format_textbox = function() {
    return this.each(function(i) {
      // Do something awesome to each selected element.
      $(this).html('awesome' + i);
    });
  };

  // Static method.
  $.num_format_textbox = function(options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.num_format_textbox.options, options);
    // Return something awesome.
    return 'awesome' + options.punctuation;
  };

  // Static method default options.
  $.num_format_textbox.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].num_format_textbox = function(elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

}(jQuery));
