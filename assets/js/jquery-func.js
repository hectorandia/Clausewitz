!function ($) {
	//=================================== scroll  ===================================//

$body.scrollspy({
      target: '#navbar-main',
      offset: navHeight
    })

    $window.on('load', function () {
      $body.scrollspy('refresh')
    })

    $('#navbar-main [href=#]').click(function (e) {
      e.preventDefault()
    })
	
	$('#stoptest').click(function () {
            $("#ytplayer").stopVideo();
          });
};

function stopVideo(){
	
	var iframe = document.getElementById("youtubeVideo");
	var iframeSrc = iframe.src;
	iframe.src = iframeSrc;
}