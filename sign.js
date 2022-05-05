var isMobile = false; var isTablet = false; var isDesktop = false; var isLargeDesktop = false; var WFClientTypeDef = { "large": "(min-width: 1024px)", "small": "(max-width: 767px)", "medium": "(min-width: 768px) and (max-width: 1023px)" }; for (var type in WFClientTypeDef) { if (window.matchMedia(WFClientTypeDef[type]).matches) { switch (type) { case "large": isDesktop = true; break; case "medium": isTablet = true; break; case "small": isMobile = true; break; } break; } }
function isDeviceEnabled(skipOnDeviceValue) { if (skipOnDeviceValue == "large" && isDesktop) { return true; } if (skipOnDeviceValue == "medium" && isTablet) { return true; } if (skipOnDeviceValue == "small" && isMobile) { return true; } return false; }
var desktop = isDeviceEnabled("large");
var isIos = navigator.vendor && navigator.vendor.indexOf('Apple') > -1;
var isFirefox = navigator.userAgent && navigator.userAgent.indexOf("Firefox") != -1;
function showMWebLogin() {
    if (desktop || isIos || isFirefox) {
        $("#tcmBtn").hide();
    }
    else {
        $("#tcmBtn").show();
    }
}
showMWebLogin();