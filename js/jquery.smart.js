/**
 * Simple template for a JQuery plug-in.
 *
 * Based on http://docs.jquery.com/Plugins/Authoring.
 *
 * Replace "example" with the name of your plug-in.
 *
 * Original author: http://www.capricasoftware.co.uk.
 *
 * Use freely and at your own risk.
 */

;(function($) {

    var methods = {

        init : function(options) {

            return this.each(function() {
  
                var settings = {
                };
  
                if(options) {
                    $.extend(settings, options);
                }

                var plugin = this;
                var $plugin = $(this);

                $plugin.settings = settings;

                this.privateMethod = function() {
                }

                $plugin.data("example", {});

                // Plug-in code here...
            });

        },

        publicFunction : function() {
        }
    };

    $.fn.example = function(method) {
        if(methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } 
        else if(typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } 
        else {
            $.error("Method " +  method + " does not exist on jQuery.example");
        }    
    };

})(jQuery);
