// JavaScript Document
$(function () {
    window.changeContent = function (a, b, c, d) {
        if (!Date.now) {
            Date.now = function() { return new Date().getTime(); }
        }
        var cacheBuster = '?v='+Math.floor(Date.now() / 1000);
        if (b == "img") {

            a = a + cacheBuster;
            //CHANGE 'CONTENT' TO IMAGE DEFINED WITH VAR 'a'
            document.getElementById("content").innerHTML = '<img src=\"work-images/' + a + '\"  alt=\"\" \/ >';

        } else if (b == "txt") {

            //CHANGE 'CONTENT' TO TEXT CONTENT DEFINED WITH VAR 'a'
            document.getElementById("content").innerHTML = '<h1>' + a + '</h1>';

        } else if (b == "html") {

            a = a + cacheBuster;
            //CHANGE 'CONTENT' TO IFRAME WITH URL DEFINED WITH VAR 'a' - USE FOR HTML PAGES AND PDFS
            var myWidth = document.documentElement.clientWidth;
            var myHeight = document.documentElement.clientHeight;

            document.getElementById("content").innerHTML = '<iframe id=\"myframe\" frameborder=\"0\" src=\"' + a + '\" width=\"' + myWidth + '\" height=\"' + myHeight + '\"></iframe>';

        }
    }

    function requestConfig(a, b, c, d) {

        //$.ajax({
        //    url: "./config.csv",
        //    async: false,
        //    success: function (csvd) {
        //        data = $.csv2Array(csvd);
        //    },
        //    error: function () {
        //        console.log('error');
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = './config.js';

        document.body.appendChild(script);
        //$("body").append(script);
        //    },
        //    dataType: "text",
        //    complete: function () {
        //        // call a function on complete
        //    }
        //});
    }

    window.loadConfig = function (config) {
        //console.log(config);
        $('head title').text(config["Page Title"]);
        $("#client-name").text(config["Client Name"]);
        $("#job-number").text(config["Job Number"]);
        $("#job-description").text(config["Job Description"]);

        var banner;
        var indexBanner;
        for (indexBanner in config["Flash Banner"]) {
            banner = config["Flash Banner"][indexBanner]
            //console.log(banner);

            $('#flash-banner').append(
                $('<li>').append(
                    $('<a>').attr('href', '#')
                        .attr('onclick', "changeContent('" + banner.path + "','" + banner.type + "')")
                        .append(banner.description)
                )
            );
        }

        for (indexBanner in config["HTML5 Banner"]) {
            banner = config["HTML5 Banner"][indexBanner]
            //console.log(banner);

            $('#html5-banner').append(
                $('<li>').append(
                    $('<a>').attr('href', '#')
                        .attr('onclick', "changeContent('" + banner.path + "','" + banner.type + "')")
                        .append(banner.description)
                )
            );
        }

        for (indexBanner in config["Static Images PDF"]) {
            banner = config["Static Images PDF"][indexBanner]
            //console.log(banner);

            $('#static-images-pdf').append(
                $('<li>').append(
                    $('<a>').attr('href', '#')
                        .attr('onclick', "changeContent('" + banner.path + "','" + banner.type + "')")
                        .append(banner.description)
                )
            );
        }
    }

    function initMobileMenu() {
        // Create the dropdown base
        var select = $("<select />").appendTo(".mobile-menu");
        var customEvents = [];
        var i = 0;

        select.change(function(){
            console.log('customEvents',customEvents, 'select.val()', select.val());
            var index = select.val();
            if (index >= 0) {
                var params = customEvents[index].split('\'');
                changeContent(params[1], params[3]);
            }
        })

        // Create default option "Go to..."
        $("<option />", {
            "selected": "selected",
            "value": "",
            "text": "Go to..."
        }).appendTo(".leftcontent select");

        $("<option />", {
            "value": '',
            "text": "Animated Flash Banners",
            "disabled": "disabled"
        }).appendTo(".leftcontent select");

        // Populate dropdown with menu items
        $(".leftcontent ul#flash-banner li").each(function () {
            var el = $(this);
            window.axel =el;
            //console.log('el', el)
            $("<option />", {
                "value": i,
                "text": '| '+el.text()
            }).appendTo(".leftcontent select");
            customEvents[i] = el.find('a').attr("onclick");
            i++;
        });

        $("<option />", {
            "value": '',
            "text": "HTML5 Banners",
            "disabled": "disabled"
        }).appendTo(".leftcontent select");

        // Populate dropdown with menu items
        $(".leftcontent ul#html5-banner li").each(function () {
            var el = $(this);
            window.axel =el;
            //console.log('el', el)
            $("<option />", {
                "value": i,
                "text": '| '+el.text()
            }).appendTo(".leftcontent select");
            customEvents[i] = el.find('a').attr("onclick");
            i++;
        });

        $("<option />", {
            "value": '',
            "text": "Static Images & PDF",
            "disabled": "disabled"
        }).appendTo(".leftcontent select");

        // Populate dropdown with menu items
        $(".leftcontent ul#static-images-pdf li").each(function () {
            var el = $(this);
            window.axel =el;
            //console.log('el', el)
            $("<option />", {
                "value": i,
                "text": '| '+el.text()
            }).appendTo(".leftcontent select");
            customEvents[i] = el.find('a').attr("onclick");
            i++;
        });
    }
    initMobileMenu();
    requestConfig();
});