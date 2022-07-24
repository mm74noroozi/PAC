var FindProxyForURL = function(init, profiles) {
    return function(url, host) {
        "use strict";
        var result = init, scheme = url.substr(0, url.indexOf(":"));
        do {
            result = profiles[result];
            if (typeof result === "function") result = result(url, host, scheme);
        } while (typeof result !== "string" || result.charCodeAt(0) === 43);
        return result;
    };
}("+auto switch", {
    "+auto switch": function(url, host, scheme) {
        "use strict";
        if (/(?:^|\.)youtube\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)deezer\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)softpedia\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)upwork\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)zarfilm\./.test(host)) return "+proxy";
        if (/(?:^|\.)stackshare\.io$/.test(host)) return "+proxy";
        if (/firebase\.google\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)similarweb\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)hackerrank\.com$/.test(host)) return "+proxy";
        return "DIRECT";
    },
    "+proxy": function(url, host, scheme) {
        "use strict";
        if (/^127\.0\.0\.1$/.test(host) || /^::1$/.test(host) || /^localhost$/.test(host)) return "DIRECT";
        return "SOCKS5 localhost:1080; SOCKS localhost:1080";
    }
});