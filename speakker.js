(function (a) {
    a.fn.speakker = function (i) {
        var j = $('script[src$="speakker.min.js"]');
        if (j.length > 0) {
            j = j.attr("src").replace(/speakker.min.js/g, "")
        } else {
            j = $('script[src$="speakker.js"]').attr("src").replace(/speakker.js/g, "")
        }
        var b = this,
            e = {
                file: "",
                title: "Speakker",
                playlist: false,
                theme: "dark",
                fat: false,
                wikipedia: false,
                lastfm: false,
                admin: false,
                poster: false,
                cover: false
            },
            c = $.extend(e, i),
            k = 
'<div class="skControls">'+
    '<div class="skMainControl">'+
        '<div class="skBackwards ppprev"></div>'+
        '<div class="skPlay ppplay"></div>'+
        '<div class="skPause pppause"></div>'+
        '<div class="skForwards ppnext"></div>'+
    '</div>'+
    '<div class="skActControl">'+
        '<div class="skHeart"></div>'+
        '<div class="skAct pptitle"></div>'+
        '<div class="skTime">'+
            '<span class="ppmin_dur"></span>:'+
            '<span class="ppsec_dur"></span> | '+
            '<span class="ppmin_rem"></span>:'+
            '<span class="ppsec_rem"></span>'+
        '</div>'+
        '<div class="skScrubbler ppscrubber"></div>'+
        '<div class="skLoad pploaded"></div>'+
        '<div class="skTimeRemain ppplayhead"></div>'+
    '</div>'+
    '<div class="skVolumeControl">'+
        '<div class="skMute ppmute"></div>'+
        '<div class="skVolumeWidth ppvslider">'+
            '<div class="skVolume"></div>'+
            '<div class="skVolumeRemain ppvmarker"></div>'+
        '</div>'+
        '<div class="skLoud ppvmax"></div>'+
    '</div>'+
    '<div class="skModuleControl">'+
        '<div class="skLoopOn pploopon"></div>'+
        '<div class="skLoopOff pploopoff"></div>'+
        '<div class="skOpener ppopen toggleskBiglayer"></div>'+
        '<div class="skCloser ppclose toggleskBiglayer"></div>'+
    '</div>'+
'</div>'+
'<div class="skBiglayer">'+
    '<div class="skLeftBlock">'+
        '<div class="skLabel"></div>'+
        '<div class="skCover ppdisplay" style="position:relative; width:72px; height:72px;"></div>'+
        '<ul class="skWiki">'+
            '<li>'+
                '<a class="lastfm ppshareicn_lastfm" href="#">Last.fm</a>'+
            '</li>'+
            '<li>'+
                '<a class="wiki ppshareicn_wikipedia" href="#">Wikipedia</a>'+
            '</li>'+
        '</ul>'+
    '</div>'+
    '<div class="skMiddleBlock">'+
        '<ul class="skArtistlist ppschedule"></ul>'+
    '</div>'+
    '<div class="skRightBlock">'+
        '<div class="skSocial">'+
            '<a href="#" class="skFacebook ppshareicn_facebook" title="share your mix on facebook">share your mix on facebook</a>'+
            '<a href="#" class="skTwitter ppshareicn_twitter" title="share your mix on twitter">share your mix on twitter</a>'+
        '</div>'+
        '<a href="#" class="skDownload ppshareicn_download" title="get the mix">get the mix</a>'+
    '</div>'+
    '<p class="skCopyright">'+
        '<a class="skEdit ppshareicn_admin" href="#">edit playlist</a>'+
        '<a class="skUrl" href="http://www.speakker.com" target="_blank">speakker under the hood</a>'+
    '</p>'+
'</div>',
            l = 
'<div class="mspeakker ' + c.theme + ' left">'+
    '<div class="skControls">'+
        '<div class="skAct pptitle"></div>'+
    '</div>'+
    '<div class="skLeftBlock">'+
        '<div class="skLabel"></div>'+
        '<div class="skCover ppdisplay" style="position:relative; width:60px; height:60px;"></div>'+
        '<div class="skVolumeControl">'+
            '<div class="skMute ppmute"></div>'+
            '<div class="skVolumeWidth ppvslider">'+
                '<div class="skVolume"></div>'+
                '<div class="skVolumeRemain ppvmarker"></div>'+
            '</div>'+
            '<div class="skLoud ppvmax"></div>'+
        '</div>'+
    '</div>'+
    '<div class="skRightBlock">'+
        '<div class="skTime">'+
            '<span class="ppmin_dur"></span>:'+
            '<span class="ppsec_dur"></span> | '+
            '<span class="ppmin_rem"></span>:'+
            '<span class="ppsec_rem"></span>'+
        '</div>'+
        '<div class="skMainControl">'+
            '<div class="skBackwards ppprev"></div>'+
            '<div class="skPlay ppplay"></div>'+
            '<div class="skPause pppause"></div>'+
            '<div class="skForwards ppnext"></div>'+
        '</div>'+
        '<div class="skSocial">'+
            '<a href="#" class="skFacebook ppshareicn_facebook" title="share your mix on facebook">share your mix on facebook</a>'+
            '<a href="#" class="skTwitter ppshareicn_twitter" title="share your mix on twitter">share your mix on twitter</a>'+
            '<a href="#" class="skDownload ppshareicn_download" title="get the mix">get the mix</a>'+
        '</div>'+
    '</div>'+
'</div>',
            d = {
                plugins: ((b.length > 0) ? ["Display", "Controlbar", "Share"] : ["Display", "Controlbar", "Share", "Schedule"]),
                height: false,
                width: false,
                controls: true,
                continuous: true,
                poster: c.poster,
                enableFullscreen: false,
                plugin_share: {
                    links: [{
                        domId: "twitter",
                        text: "I found a supercool HTML5 audio player. Check this out.",
                        code: "http://twitter.com/share?url={pageurl}&text={text}&via=speakker"
                    }, {
                        domId: "facebook",
                        text: "I found a supercool HTML5 audio player. Check this out. Speakker rockz",
                        code: "http://www.facebook.com/sharer.php?u={pageurl}&t={text}"
                    }, {
                        domId: "download",
                        code: ((c.playlist === true) ? c.file + "?download=true" : c.file)
                    }, {
                        domId: "lastfm",
                        code: c.lastfm
                    }, {
                        domId: "wikipedia",
                        code: c.wikipedia
                    }, {
                        domId: "admin",
                        code: c.admin
                    }]
                },
                playerFlashMP3: j + "swf/jarisplayer.swf",
                playerFlashMP4: j + "swf/jarisplayer.swf",
                playlist: [{
                    0: {
                        src: c.file,
                        type: ((c.playlist === true) ? "text/json" : "")
                    },
                    config: {
                        title: c.title
                    }
                }]
            };

        function h(m) {
            if (c.lastfm === false) {
                m.find(".lastfm").hide()
            }
            if (c.wikipedia === false) {
                m.find(".wiki").hide()
            }
            if (c.admin === false) {
                m.find(".skEdit").hide()
            }
        }
        function g(o, n) {
            if (o == "PLAYING") {
                var m = n.getId();
                projekktor("*").each(function () {
                    if (this.getId() !== m) {
                        this.setPause()
                    }
                })
            }
        }
        if (b.length == 0) {
            var f = $(document.createElement("div")).css("display", "block").addClass("speakker").addClass(c.theme).addClass((c.fat === true) ? "fat" : "").html(k).appendTo("body");
            projekktor(f, d, function (o) {
                var m = $(document).width(),
                    n = f.width();
                f.css("right", (m - n > 0 ? ((m / 2) - (n / 2)) + "px" : 0));
                h(f);
                o.addListener("state", g);
                if (o.getIsMobileClient()) {
                    f.css("position", "static");
                    o.addListener("resize", function () {
                        $("html, body").scrollTop($("body").height())
                    });
                    $(window).unbind()
                }
            })
        } else {
            $(b).html(l);
            projekktor($(b).children(".mspeakker"), d, function (m) {
                h($(b));
                m.addListener("state", g)
            })
        }
    }
})(jQuery);
