var CURID = "1";

function getMallInfo(a) {
    var b = {};
    switch (a) {
        case "1":
            b.acf = "acjd()";
            b.framecolor = "#E4393C";
            b.sugbkcolor = "";
            b.btnhovercolor = "";
            b.mname = "京东";
            return b;
        case "2":
            b.acf = "actaobao()";
            b.framecolor = "#ff5500";
            b.sugbkcolor = "";
            b.btnhovercolor = "";
            b.mname = "淘宝";
            return b;
        case "3":
            b.acf = "actmall()";
            b.framecolor = "#c40000";
            b.sugbkcolor = "";
            b.btnhovercolor = "";
            b.mname = "天猫";
            return b;
        case "4":
            b.acf = "acgeneral('4')";
            b.framecolor = "#ff9900";
            b.sugbkcolor = "";
            b.btnhovercolor = "";
            b.mname = "亚马逊";
            return b;
        case "5":
            b.acf = "acsuning('5')";
            b.framecolor = "#3392e2";
            b.sugbkcolor = "";
            b.btnhovercolor = "";
            b.mname = "苏宁";
            return b;
        case "6":
            b.acf = "acgeneral('6')";
            b.framecolor = "#ff3c3c";
            b.sugbkcolor = "";
            b.btnhovercolor = "";
            b.mname = "1号店";
            return b;
        case "7":
            b.acf = "acgeneral('7')";
            b.framecolor = "#5db95b";
            b.sugbkcolor = "";
            b.btnhovercolor = "";
            b.mname = "逛丢";
            return b;
        default:
            b.acf = "acjd()";
            b.framecolor = "#E4393C";
            b.sugbkcolor = "";
            b.btnhovercolor = "";
            b.mname = "京东";
            return b
    }
}

function acjd() {
    $("#searchfield").autocomplete({
        source: function(b, a) {
            $.ajax({
                url: "http://dd.search.jd.com/",
                dataType: "jsonp",
                data: {
                    key: b.term
                },
                success: function(c) {
                    a($.map(c, function(d) {
                        return {
                            label: d.keyword,
                            amount: d.amount,
                            value: d.keyword
                        }
                    }))
                }
            })
        },
        minLength: 1,
        select: function(a, b) {
            dosearch(b.item.value, "1", "sug")
        }
    }).data("ui-autocomplete")._renderItem = function(a, b) {
        return $("<li>").data("ui-autocomplete-item", b).append('<span class="headsuggestitem"><span class="headsuggestitemlabel">' + b.label + '</span><span class="headsuggestitemcount">约' + b.amount + "个商品</span></span>").appendTo(a)
    }
}

function actmall() {
    $("#searchfield").autocomplete({
        source: function(b, a) {
            $.ajax({
                url: "http://suggest.taobao.com/sug",
                dataType: "jsonp",
                data: {
                    q: b.term,
                    area: "b2c",
                    code: "utf-8"
                },
                success: function(c) {
                    a($.map(c.result, function(d) {
                        return {
                            label: d[0],
                            value: d[0]
                        }
                    }))
                }
            })
        },
        minLength: 1,
        select: function(a, b) {
            dosearch(b.item.value, "3", "sug")
        }
    }).data("ui-autocomplete")._renderItem = function(a, b) {
        return $("<li>").data("ui-autocomplete-item", b).append('<span class="headsuggestitem">' + b.label + "</span>").appendTo(a)
    }
}

function actaobao() {
    $("#searchfield").autocomplete({
        source: function(b, a) {
            $.ajax({
                url: "http://suggest.taobao.com/sug",
                dataType: "jsonp",
                data: {
                    q: b.term,
                    code: "utf-8"
                },
                success: function(c) {
                    a($.map(c.result, function(d) {
                        return {
                            label: d[0],
                            value: d[0]
                        }
                    }))
                }
            })
        },
        minLength: 1,
        select: function(a, b) {
            dosearch(b.item.value, "2", "sug")
        }
    }).data("ui-autocomplete")._renderItem = function(a, b) {
        return $("<li>").data("ui-autocomplete-item", b).append('<span class="headsuggestitem">' + b.label + "</span>").appendTo(a)
    }
}

function acsuning() {
    $("#searchfield").autocomplete({
        source: function(b, a) {
            $.ajax({
                url: "http://search.suning.com/emall/autocomplete.jsonp",
                dataType: "jsonp",
                data: {
                    keyword: b.term,
                    categoryId: "0"
                },
                success: function(c) {
                    a($.map(c.words, function(e) {
                        var d = delhtmltag(e.keyname);
                        return {
                            label: e.keyname,
                            value: d
                        }
                    }))
                }
            })
        },
        minLength: 1,
        select: function(a, b) {
            dosearch(b.item.value, "5", "sug")
        }
    }).data("ui-autocomplete")._renderItem = function(a, b) {
        return $("<li>").data("ui-autocomplete-item", b).append('<span class="headsuggestitem">' + b.label + "</span>").appendTo(a)
    }
}

function acgeneral(a) {
    $("#searchfield").autocomplete({
        source: function(c, b) {
            $.ajax({
                url: "http://dd.search.jd.com/",
                dataType: "jsonp",
                data: {
                    key: c.term
                },
                success: function(d) {
                    b($.map(d, function(e) {
                        return {
                            label: e.keyword,
                            value: e.keyword
                        }
                    }))
                }
            })
        },
        minLength: 1,
        select: function(b, c) {
            dosearch(c.item.value, a, "sug")
        }
    }).data("ui-autocomplete")._renderItem = function(b, c) {
        return $("<li>").data("ui-autocomplete-item", c).append('<span class="headsuggestitem">' + c.label + "</span>").appendTo(b)
    }
}

function init() {
    changemall(CURID)
}

function dosearch(g, e, d) {
    var c = "";
    var a = "";
    switch (e) {
        case "1":
            a = "http://search.jd.com/Search?keyword=" + encodeURIComponent(g) + "&enc=utf-8";
            c = "http://c.duomai.com/track.php?t=" + encodeURIComponent(a) + "&aid=61&site_id=174&euid=hao";
            break;
        case "2":
            c = "http://s8.taobao.com/search?q="+ encodeURIComponent(g)+"&pid=mm_15694889_2180121_8986650&commend=all&unid=408&taoke_type=1";
            break;
        case "3":
		   c = "http://s8.taobao.com/search?tab=mall&q="+ encodeURIComponent(g)+"&pid=mm_15694889_2180121_8986650&commend=all&unid=408&taoke_type=1";
            break;
        case "4":
            c = "http://www.amazon.cn/s/?field-keywords=" + encodeURIComponent(g) + "&tag=guangdiu-23";
            break;
        case "5":
            a = "http://search.suning.com/" + encodeURIComponent(g) + "/";
            c = "http://c.duomai.com/track.php?t=" + encodeURIComponent(a) + "&aid=84&site_id=174&euid=hao";
            break;
        case "6":
            a = "http://search.yhd.com/s2/c0-0/k" + encodeURIComponent(g) + "/2/";
            c = "http://c.duomai.com/track.php?t=" + encodeURIComponent(a) + "&aid=58&site_id=174&euid=hao";
            break;
        case "7":
            c = "http://zhi.fyigou.com/index.php/zhi/index.html?q=" + encodeURIComponent(g) + "&keyfrom=hao";
            break
    }
    var f = "search_" + e;
    var b = "query_" + g;
    _hmt.push(["_trackEvent", "dosearch", f]);
    _hmt.push(["_trackEvent", "query", b]);
    window.open(c)
}

function delhtmltag(a) {
    return a.replace(/<[^>]+>/g, "")
}

function changemall(mallid) {
    mallinfo = getMallInfo(mallid);
    $("#searchfielddiv").css("border", "3px solid " + mallinfo.framecolor);
    $("#searchbutton").css("background-color", mallinfo.framecolor);
    $("#searchboxtitlebk").css("background-color", mallinfo.framecolor);
    $("#searchbutton").text("在" + mallinfo.mname + "搜索");
    eval(mallinfo.acf + ";");
    $("#searchfield").focus();
    var eachmallobj = $(".eachmall[mallid=" + mallid + "]");
    var mallitem = eachmallobj.find(".mallitem");
    var mallbase = mallitem.attr("id");
    resettoinactive();
    mallitem.removeClass(mallbase + "inactive");
    mallitem.removeClass(mallbase + "hover");
    mallitem.addClass(mallbase);
    $(".eachmall").hover(function() {
        var mallitem = $(this).find(".mallitem");
        var mallbase = mallitem.attr("id");
        if (mallitem.hasClass(mallbase + "inactive")) {
            mallitem.removeClass(mallbase + "inactive");
            mallitem.addClass(mallbase + "hover")
        }
    }, function() {
        var mallitem = $(this).find(".mallitem");
        var mallbase = mallitem.attr("id");
        if (mallitem.hasClass(mallbase + "hover")) {
            mallitem.removeClass(mallbase + "hover");
            mallitem.addClass(mallbase + "inactive")
        }
    })
}

function resettoinactive() {
    $(".eachmall").each(function() {
        var a = $(this).find(".mallitem").attr("id");
        $(this).find(".mallitem").removeClass(a);
        $(this).find(".mallitem").addClass(a + "inactive")
    })
}

function enterkey() {
    if (event.keyCode == 13 && !jQuery(this).data("ui-autocomplete").menu.active) {
        var a = $("#searchfield").val();
        dosearch(a, CURID, "entersearch")
    }
}
$("#searchfield").keydown(function(b) {
    if (b.keyCode == 13 && !jQuery(this).data("ui-autocomplete").menu.active) {
        if ($("#searchfield").is(":focus")) {
            $(".ui-autocomplete").hide()
        }
        var a = $("#searchfield").val();
        dosearch(a, CURID, "entersearch")
    }
});
$(function() {
    init();
    $("#tiparea").click(function() {
        $("#tip").hide();
        $.get("setcookie.php?name=tipclick&value=2");
        $("#searchfield").focus();
        _hmt.push(["_trackEvent", "tipclick", "tipclick"])
    });
    $(".eachmall").click(function() {
        CURID = $(this).attr("mallid");
        changemall(CURID);
        var a = "changemall" + CURID;
        _hmt.push(["_trackEvent", "changemall", a])
    });
    $(".navitem").hover(function() {
        $(this).css("background-color", "#f9f8f9");
        $(this).find("span.navmallname").css("text-decoration", "underline")
    }, function() {
        $(this).css("background-color", "#ffffff");
        $(this).find("span.navmallname").css("text-decoration", "none")
    });
    $(".navitem").click(function() {
        var a = $(this).attr("href");
        _hmt.push(["_trackEvent", "navitem", a])
    });
    $(".navhotitem").click(function() {
        var a = $(this).attr("href");
        _hmt.push(["_trackEvent", "navhotitem", a])
    });
    $(".navhotitem").hover(function() {
        $(this).css("background-color", "#f2f1f2");
        $(this).find("span.navmallname").css("text-decoration", "underline")
    }, function() {
        $(this).css("background-color", "#f9f8f9");
        $(this).find("span.navmallname").css("text-decoration", "none")
    });
    $("#searchbutton").click(function() {
        var a = $("#searchfield").val();
        dosearch(a, CURID, "btnsearch")
    });
    $(".hotnavitem").hover(function() {
        $(this).find(".navitemlogobk").css("background-color", "#f8f8f8")
    }, function() {
        $(this).find(".navitemlogobk").css("background-color", "#ffffff")
    })
});