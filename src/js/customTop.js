//----  Google Search
//START adding alt tag to google search image
var imgAltTagsFix = function() {
    $('img.gsc-branding-img').attr("alt", "Google Custom Search Branding");
    $('input.gsc-search-button').attr('alt', "Google Custom Search Button");
  };
  window.__gcse = {
    callback: imgAltTagsFix
  };
//END adding alt tag to google search image

(function () {
    var cx = '009218488641614189685:qy03z331or8';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
        '//www.google.com/cse/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
})();
//----  End of Google Search
