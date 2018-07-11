jQuery(document).ready(function($) {
  var $menu =  $("#mobileMenu").mmenu({
      extensions:[
          "pagedim-black"
        ], 
      
        "navbar":{
            title:"Edgewood College"},
             "navbars": [
                            { 
                                height: 2,
                                position: 'top',
                                content: [
                                    "<div id='mmenuHeader'><img src='https://web22.edgewood.edu/Portals/_default/skins/ecCoreGrid/assets/src/img/logos/EC_Web_LogoH.png' alt='Edgewood College' ></div>"
                                ]
                            },
                            {

                                position: "bottom",
                                "content": [
                                "<a class='fas fa-envelope' href='mailto:info@edgewood.edu' ></i>",
                                "<a class='fab fa-facebook' href='https://www.facebook.com/edgewoodcollege/' ></i>",
                                "<a class='fab fa-twitter' href='https://twitter.com/edgewoodcollege' ></i>"
                                ]
                            
                            }
                        ] 
}, {
    //this is hear to make it work on the asp.net form tag
    offCanvas: {
        menuWrapperSelector: "#Form",
        pageNodetype: "form",
        pageSelector: "#Form"
    }   
}); 


    var $icon = $("#hamburgerIcon");
    var API = $menu.data("mmenu");
 

    $icon.on( "click", function() {
       API.open();
    });
    
    API.bind( "open:finish", function() {
       setTimeout(function() {
          $icon.addClass( "is-active" );
       }, 100);
    });
    API.bind( "close:finish", function() {
       setTimeout(function() {
          $icon.removeClass( "is-active" );
       }, 100);
    });
 });
