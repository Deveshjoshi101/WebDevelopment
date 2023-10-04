// script.js

document.addEventListener("DOMContentLoaded", function () {
  const contentDiv = document.getElementById("content");
  const links = {
    "precursor-link": "content-precursor.html",
    "birth-link": "content-birth.html",
    "dotcom-link": "content-dotcom.html",
    "standards-link": "content-standards.html",
    "web2-link": "content-web2.html",
    "mobile-link": "content-mobile.html",
    "modern-link": "content-modern.html",
    "accessibility-security-link": "content-accessibility-security.html",
  };

  // Function to load content
  function loadContent(url) {
    fetch(url)
      .then((response) => response.text())
      .then((data) => {
        contentDiv.innerHTML = data;
      })
      .catch((error) => {
        console.error("Error loading content:", error);
      });
  }

  // Add event listeners to each link
  for (const linkId in links) {
    if (links.hasOwnProperty(linkId)) {
      const link = document.getElementById(linkId);
      link.addEventListener("click", function (e) {
        e.preventDefault();
        loadContent(links[linkId]);
      });
    }
  }
});
