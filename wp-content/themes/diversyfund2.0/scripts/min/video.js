function parseVideo(e){if(e.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),RegExp.$3.indexOf("youtu")>-1);else if(RegExp.$3.indexOf("vimeo")>-1);return RegExp.$6}function vimeoVimeoThumbnail(e,o){$.ajax({type:"GET",url:"//vimeo.com/api/v2/video/"+e+".json",jsonp:"callback",dataType:"jsonp",success:function(e){var i=e[0].thumbnail_large;o(i)}})}$(".video-inliner").each((function(){var e=$(this).attr("data-url"),o=parseVideo(e);if(e.indexOf("vimeo")>-1)var i='<iframe src="https://player.vimeo.com/video/'+o+'?color=ffffff" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';else if(e.indexOf("youtube")>-1)i='<iframe src="//www.youtube.com/embed/'+o+'?enablejsapi=1" frameborder="0" allowfullscreen></iframe>';$(this).html(i)})),$("body").on("click","a",(function(e){var o=$(this).attr("href");if($(window).width()>991&&(~o.indexOf("vimeo")||~o.indexOf("youtube"))){e.preventDefault();var i=parseVideo(o);if($(".video-popup-overlay").fadeIn(),o.indexOf("vimeo")>-1)var a='<iframe src="https://player.vimeo.com/video/'+i+'?color=ffffff" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';else if(o.indexOf("youtube")>-1)a='<iframe src="//www.youtube.com/embed/'+i+'?enablejsapi=1" frameborder="0" allowfullscreen></iframe>';$(".video-popup-overlay").find(".video .iframe").html(a)}})),$("body").on("click",".video-popup-overlay .close-popup",(function(){$(".video-popup-overlay").fadeOut(),setTimeout((function(){$(".video-popup-overlay").find(".video .iframe").html(null)}),1e3)}));
//# sourceMappingURL=video.js.map