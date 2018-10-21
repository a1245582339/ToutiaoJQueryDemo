(function () {
    $.getJSON("./news.json", function (res) {
        var data = res.data;
        $('.wcommonFeed>ul').html(function () {
            var str = ''
            for (let i = 0; i < data.length; i++) {
                str += '<li class="item" ga_event="wenda_item_click" ad_id="" qihu_ad_id="" ad_track="" group_id="' +
                    data[i].group_id +
                    '"><span id="ad_extra" style="display:none;"></span><div class="item-inner y-box"><div class="normal rbox "><div class="rbox-inner"><div class="title-box" ga_event="wenda_title_click"> <a class="link title" target="_blank" href="' +
                    data[i].source_url +
                    '">' +
                    data[i].title +
                    '</a> </div><div class="y-box footer"><div class="y-left"><div class="y-left"> <a target="_blank" class="lbtn media-avatar avatar-bg-1" href="/search/?keyword=' +
                    data[i].source +
                    '"ga_event="wenda_avatar_click"><img alt="" src="' +
                    data[i].media_avatar_url +
                    '"></a> <a class="lbtn source" target="_blank" href="/search/?keyword=' +
                    data[i].source +
                    '"ga_event="wenda_name_click">&nbsp;' +
                    data[i].source +
                    '&nbsp;⋅</a> </div> <span class="lbtn">&nbsp;' +
                    data[i].behot_time + '</span></div><div class="y-right"> <span class="dislike" data-groupid="' +
                    data[i].behot_time + '" ga_event="wenda_dislike_click">不感兴趣 <i class="y-icon icon-dislikenewfeed"></i> </span> </div></div></div></div><div class="lbox" ga_event="wenda_img_click"> <a class="img-wrap" target="_blank" href="' +
                    data[i].source_url +
                    '"><img alt="" src="' +
                    data[i].image_url +
                    '"> </a> </div></div></li>'
            }
            return str
        })
        $.getJSON("./hot.json", function(res) {
            var data = res.data;
            $('.news-content').html(function() {
                var str = '';
                for (let i = 0; i < data.length; i++) {
                    str += '<li class="news-list"> <a target="_blank" class="news-link" href="' 
                    + data[i].article_url 
                    + '"><div class="module-pic news-pic"><img src="' 
                    + data[i].cover_image_url 
                    + '"></div><div class="news-inner"><p class="module-title">' 
                    + data[i].title 
                    + '</p></div></a> </li>'
                }
                return str
            })
        })
    });
    
})()