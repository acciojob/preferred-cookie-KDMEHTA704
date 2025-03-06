//your JS code here. If required.
//your JS code here. If required.
// Function to save font settings in cookies
function saveFontSettings() {
    const fontsize = document.getElementById("fontsize").value;
    const fontcolor = document.getElementById("fontcolor").value;

    // Set cookies for font size and color
    document.cookie = fontsize=${fontsize}; expires=Fri, 31 Dec 9999 23:59:59 GMT;
    document.cookie = fontcolor=${fontcolor}; expires=Fri, 31 Dec 9999 23:59:59 GMT;

    // Update font size and color variables
    document.documentElement.style.setProperty("--fontsize", ${fontsize}px);
    document.documentElement.style.setProperty("--fontcolor", fontcolor);
}

// Function to load font settings from cookies
function loadFontSettings() {
    const fontsizeCookie = document.cookie.match(/fontsize=([^;]*)/);
    const fontcolorCookie = document.cookie.match(/fontcolor=([^;]*)/);

    if (fontsizeCookie && fontcolorCookie) {
        const fontsize = fontsizeCookie[1];
        const fontcolor = fontcolorCookie[1];

        // Update font size and color variables
        document.documentElement.style.setProperty("--fontsize", ${fontsize}px);
        document.documentElement.style.setProperty("--fontcolor", fontcolor);

        // Update form fields with cookie values
        document.getElementById("fontsize").value = fontsize;
        document.getElementById("fontcolor").value = fontcolor;
    }
}

// Add event listener for form submission
document.getElementById("font-settings").addEventListener("submit", (event) => {
    event.preventDefault();
    saveFontSettings();
});

// Load font settings from cookies on page load
loadFontSettings();