window.addEventListener("orientationchange", function () {
    window.location.reload()
}), function () {
    var a, r = new URL(window.location.href),
        c = ["l", "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "param1", "param2"];
    r.searchParams.has("redirectUrl") && 4 === (a = new URL(r.searchParams.get("redirectUrl"))).href.match(/\//g).length && a.searchParams.get("l") && localStorage.setItem("redirectUrl", a.href), c.forEach(function (a) {
        r.searchParams.has(a) && localStorage.setItem(a, r.searchParams.get(a))
    }), ["affid", "cpaid"].forEach(function (a) {
        r.searchParams.has(a) && localStorage.setItem(a, r.searchParams.get(a))
    }), window.addEventListener("click", function (a) {
        var e, t = a.target.closest("a");
        "https://tds.favbet.partners" === t.getAttribute("href") && t && (a.preventDefault(), localStorage.getItem("redirectUrl") ? e = new URL(localStorage.getItem("redirectUrl")) : (e = new URL(t.href), affid = localStorage.getItem("affid"), cpaid = localStorage.getItem("cpaid"), affid && cpaid && (e.pathname = "/" + affid + "/" + cpaid)), c.forEach(function (a) {
            r.searchParams.has(a) && e.searchParams.set(a, localStorage.getItem(a))
        }), document.location.href = e)
    })
}();