setTimeout(() => {
    // 접속 3초 후 추천
    $("#player_area > div.htmlplayer_wrap > div > div.player_item_list.on.pip > ul > li.up_recommend > button").trigger("click");
    $("#player_area > div.htmlplayer_wrap > div > div.player_item_list.on.pip.smallest > ul > li.up_recommend > button").trigger("click");
}, 3000);

setInterval(function(){
    // 매 61초마다 꿀잼각 누르기
    $("#player_area > div.htmlplayer_wrap > div > div.player_item_list.on.pip > ul > li.honey_fun > button").trigger("click");
    $("#player_area > div.htmlplayer_wrap > div > div.player_item_list.on.pip.smallest > ul > li.honey_fun > button").trigger("click");
}, 5000);