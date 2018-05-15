$(document).ready(function(){  
  $(function(){
    // Bind the event.
    $(window).hashchange( function(){
      // Alerts every time the hash changes!
      if (!hashChangeIgnore)
      {
        hash = location.hash;
        if (hash in names)
        {
          //console.log(names);
          $("html, body").scrollTop($("#opinion").offset().top);        
          // console.log(hash + ' is in names');
          $(".modal").modal('hide');
          $( hash ).modal('show');  
        }
        else {
          // console.log(hash + 'is not a name');
        }
      }    
    });

    // Trigger the event (useful on page load).
    $(window).hashchange();
    hashChangeIgnore = false;
  });;
})