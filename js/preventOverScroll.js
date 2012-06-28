function preventOverScroll(scrollPane) {
    // See http://www.quirksmode.org/js/events_order.html
    var CAPTURE_PHASE = true;  // happens first, outside to inside
    var BUBBLE_PHASE  = false; // happens second, inside to outside

    // These variables will be captured by the closures below
    var allowScrollUp = true, allowScrollDown = true, lastY = 0;

    scrollPane.addEventListener
    ('touchstart',
     function(e) { 
         
         // See http://www.w3.org/TR/cssom-view/#dom-element-scrolltop
         allowScrollUp = (this.scrollTop > 0);
         allowScrollDown = (this.scrollTop < this.scrollHeight - this.clientHeight);
         
         // Remember where the touch started
         lastY = e.pageY;
     }, 
     CAPTURE_PHASE);

    // If the touch is on the scroll pane, don't let it get to the
    // body object which will cancel it
    scrollPane.addEventListener
    ('touchmove', 
     function (e) {
         var up   = (event.pageY > lastY);
         var down = ! up;
         lastY    = event.pageY;
         
         // Trying to start past scroller bounds
         if ((up && allowScrollUp) || (down && allowScrollDown)) {
             // Stop this event from propagating, lest 
             // another object cancel it.
             e.stopPropagation(); 
         } else {
             // Cancel this event
             e.preventDefault();
         }
     }, 
     CAPTURE_PHASE);
};