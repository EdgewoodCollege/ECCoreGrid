jQuery(document).ready(function ($) {
    $("#secondaryNav").mmenu({
		offCanvas:{
			position:'right'
		},
        extensions: [
            "pagedim-black",
            "position-right"
        ],
        navbar: {
            title: 'Cutting Edge'
        },
        navbars: [
            {
                position: "top"
            },
            {
                position: "bottom",
                content: [
                    "<a class='fa fa-envelope' href='#/'></a>",
                    "<a class='fa fa-twitter' href='#/'></a>",
                    "<a class='fa fa-facebook' href='#/'></a>"
                ]
            }
        ]
    }, { clone: true }
    );
});

//$(function () {
//   
//$("#secondaryNav").mmenu({
//
//   offCanvas: {
//      position: 'right'
//   },
//   navbar: {
//      title: 'Cutting Edge'
//   },
//   navbars: [
//      {
//         position: 'top',
//         content: [
//            'something',
//            'close'
//         ]
//      }
//   ]
//}, {
//    clone: true
//});
//  
//});