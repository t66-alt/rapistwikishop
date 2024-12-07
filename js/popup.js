// Get the popup element
let popup = document.getElementById("popupAd");

// Get the close button element
let closeBtn = document.getElementById("closePopup");

// Show the popup after 1 second of page load
window.onload = function() {
    setTimeout(function() {
        popup.style.display = "flex";
    }, 1000);
};

// Close the popup when the user clicks the close button
closeBtn.onclick = function() {
    popup.style.display = "none";
}

// Also close the popup if the user clicks anywhere outside the popup
window.onclick = function(event) {
    if (event.target === popup) {
        popup.style.display = "none";
    }
}
