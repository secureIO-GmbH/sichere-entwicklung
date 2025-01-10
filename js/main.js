/**
 * Some supporting js code for the website in here.
 */

function main() {
  const currentUrl = window.location.pathname;
  const bodyElement = document.body;

  switch (true) {
    case currentUrl.includes("/entwicklung"):
      bodyElement.classList.add("entwicklung-page");
      break;
    case currentUrl.includes("/design"):
      bodyElement.classList.add("design-page");
      break;
    case currentUrl.includes("/wartung"):
      bodyElement.classList.add("wartung-page");
      break;
    default:
      bodyElement.classList.add("default-page");
  }

}

// adding classes to menu items based on the url
document.addEventListener("DOMContentLoaded", function() {
  main();
});