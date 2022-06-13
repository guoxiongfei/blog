//var blog_host = "http://localhost:8080";
var blog_host = "http://39.108.226.6:8080";
var _hmt = _hmt || [];
(function () {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?210cde56e2e4f49278531d8d7fae589a";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();

//search
function _search(w) {
    document.getElementById("rc_select_0").value = decodeURI(w);
    jsonp({
        url: blog_host + "/admin/s?keywords=" + w + "&domain=www.guoxiongfei.cn",
        data: {},
        success: function (obj) {
            console.log("obj=", obj);
        }
    });
}

function fn_s(obj) {
    var w = document.getElementById("rc_select_0").value.replaceAll(" ", "");
    if (w.length < 1) {
        document.getElementById("rc_select_0").focus();
        return;
    }
    w = w.replace("<", "").replace(">", "");
    if (window.location.href.indexOf("/search.html") < 0) {
        window.location.href = "/search.html?q=" + w;
    }
    _search(w);
}
