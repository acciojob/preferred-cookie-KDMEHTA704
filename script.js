document.addEventListener("DOMContentLoaded", function () {
    function saveFontSettings() {
        const fontsize = document.getElementById("fontsize").value;
        const fontcolor = document.getElementById("fontcolor").value;

        // Set cookies for font size and color with path
        document.cookie = `fontsize=${fontsize}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/;`;
        document.cookie = `fontcolor=${fontcolor}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/;`;

        // Apply styles immediately
        document.documentElement.style.setProperty("--fontsize", `${fontsize}px`);
        document.documentElement.style.setProperty("--fontcolor", fontcolor);
    }

    function loadFontSettings() {
        const fontsizeCookie = document.cookie.match(/fontsize=([^;]*)/);
        const fontcolorCookie = document.cookie.match(/fontcolor=([^;]*)/);

        if (fontsizeCookie && fontcolorCookie) {
            const fontsize = fontsizeCookie[1];
            const fontcolor = fontcolorCookie[1];

            // Apply styles from cookies
            document.documentElement.style.setProperty("--fontsize", `${fontsize}px`);
            document.documentElement.style.setProperty("--fontcolor", fontcolor);

            // Update input fields
            document.getElementById("fontsize").value = fontsize;
            document.getElementById("fontcolor").value = fontcolor;
        }
    }

    // Attach event listener after DOM is loaded
    document.getElementById("font-settings").addEventListener("submit", (event) => {
        event.preventDefault();
        saveFontSettings();
    });

    // Load settings on page load
    loadFontSettings();
});
