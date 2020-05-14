// Global Variables
chevronDown.classList.add("fa-chevron-up");
chevronDown.classList.remove("fa-chevron-up");

// Nav-menu for Mobile & Small Tablet Screens
function showNavigationMenu() {
  var navMenuMobileHidden = document.querySelector(".nav-menu-mobile-hidden");

  if (
    !navMenuMobileHidden.style.display ||
    navMenuMobileHidden.style.display == "none"
  ) {
    navMenuMobileHidden.style.display = "block";
  } else {
    navMenuMobileHidden.style.display = "none";
  }
}

function showSoftware() {
  var dropdownContentDefaultHidden = document.getElementById("dropdown-1");
  var dropdownContent = document.getElementById("dropdown-content-1");
  var chevronDown = document.getElementById("chevron-1");

  if (
    !dropdownContent.style.display ||
    dropdownContent.style.display == "none"
  ) {
    dropdownContentDefaultHidden.style.display = "block";
    dropdownContent.style.display = "block";
    chevronDown.classList.remove("fa-chevron-down");
    chevronDown.classList.toggle("fa-chevron-up");
  } else {
    dropdownContentDefaultHidden.style.display = "none";
    dropdownContent.style.display = "none";
    chevronDown.classList.remove("fa-chevron-up");
    chevronDown.classList.toggle("fa-chevron-down");
  }
}

function showPCsDevices() {
  var dropdownContentDefaultHidden = document.getElementById("dropdown-2");
  var dropdownContent = document.getElementById("dropdown-content-2");
  var chevronDown = document.getElementById("chevron-2");

  if (
    !dropdownContent.style.display ||
    dropdownContent.style.display == "none"
  ) {
    dropdownContentDefaultHidden.style.display = "block";
    dropdownContent.style.display = "block";
    chevronDown.classList.remove("fa-chevron-down");
    chevronDown.classList.toggle("fa-chevron-up");
  } else {
    dropdownContentDefaultHidden.style.display = "none";
    dropdownContent.style.display = "none";
    chevronDown.classList.remove("fa-chevron-up");
    chevronDown.classList.toggle("fa-chevron-down");
  }
}

function showEntertainment() {
  var dropdownContentDefaultHidden = document.getElementById("dropdown-3");
  var dropdownContent = document.getElementById("dropdown-content-3");
  var chevronDown = document.getElementById("chevron-3");

  if (
    !dropdownContent.style.display ||
    dropdownContent.style.display == "none"
  ) {
    dropdownContentDefaultHidden.style.display = "block";
    dropdownContent.style.display = "block";
    chevronDown.classList.remove("fa-chevron-down");
    chevronDown.classList.toggle("fa-chevron-up");
  } else {
    dropdownContentDefaultHidden.style.display = "none";
    dropdownContent.style.display = "none";
    chevronDown.classList.remove("fa-chevron-up");
    chevronDown.classList.toggle("fa-chevron-down");
  }
}

function showBusiness() {
  var dropdownContentDefaultHidden = document.getElementById("dropdown-4");
  var dropdownContent = document.getElementById("dropdown-content-4");
  var chevronDown = document.getElementById("chevron-4");

  if (
    !dropdownContent.style.display ||
    dropdownContent.style.display == "none"
  ) {
    dropdownContentDefaultHidden.style.display = "block";
    dropdownContent.style.display = "block";
    chevronDown.classList.remove("fa-chevron-down");
    chevronDown.classList.toggle("fa-chevron-up");
  } else {
    dropdownContentDefaultHidden.style.display = "none";
    dropdownContent.style.display = "none";
    chevronDown.classList.remove("fa-chevron-up");
    chevronDown.classList.toggle("fa-chevron-down");
  }
}

function showDeveloperIT() {
  var dropdownContentDefaultHidden = document.getElementById("dropdown-5");
  var dropdownContent = document.getElementById("dropdown-content-5");
  var chevronDown = document.getElementById("chevron-5");

  if (
    !dropdownContent.style.display ||
    dropdownContent.style.display == "none"
  ) {
    dropdownContentDefaultHidden.style.display = "block";
    dropdownContent.style.display = "block";
    chevronDown.classList.remove("fa-chevron-down");
    chevronDown.classList.toggle("fa-chevron-up");
  } else {
    dropdownContentDefaultHidden.style.display = "none";
    dropdownContent.style.display = "none";
    chevronDown.classList.remove("fa-chevron-up");
    chevronDown.classList.toggle("fa-chevron-down");
  }
}

function showOther() {
  var dropdownContentDefaultHidden = document.getElementById("dropdown-6");
  var dropdownContent = document.getElementById("dropdown-content-6");
  var chevronDown = document.getElementById("chevron-6");

  if (
    !dropdownContent.style.display ||
    dropdownContent.style.display == "none"
  ) {
    dropdownContentDefaultHidden.style.display = "block";
    dropdownContent.style.display = "block";
    chevronDown.classList.remove("fa-chevron-down");
    chevronDown.classList.toggle("fa-chevron-up");
  } else {
    dropdownContentDefaultHidden.style.display = "none";
    dropdownContent.style.display = "none";
    chevronDown.classList.remove("fa-chevron-up");
    chevronDown.classList.toggle("fa-chevron-down");
  }
}

// Nav-menu for Laptop & Desktop Screens
function showNavmenu() {
  var allMicrosoftContent = document.querySelector(".dropdown-content");
  if (
    !allMicrosoftContent.style.display ||
    allMicrosoftContent.style.display == "none"
  ) {
    allMicrosoftContent.style.display = "block";
  } else {
    allMicrosoftContent.style.display = "none";
  }
}

// Search-filled
function showSearchFilled() {
  var searchFilled = document.querySelector(".search-filled-hidden");
  var navFlexHidden = document.querySelector(".nav-flex-hidden");
  var navMenuMobileHidden = document.querySelector(".nav-menu-mobile-hidden");

  if (!searchFilled.style.display || searchFilled.style.display == "none") {
    navFlexHidden.style.display = "none";
    navMenuMobileHidden.style.display = "none";
    searchFilled.style.display = "block";
  } else {
    searchFilled.style.display = "none";
    navFlexHidden.style.display = "block";
  }
}

// Search-filled Back button
function back() {
  var navFlexHidden = document.querySelector(".nav-flex-hidden");
  var searchFilled = document.querySelector(".search-filled-hidden");
  var formBorder = document.querySelector(".search-filled");

  if (!navFlexHidden.style.display || navFlexHidden.style.display == "none") {
    searchFilled.style.display = "none";
    formBorder.style.border = "1px solid rgb(0, 0, 0)";
    navFlexHidden.style.display = "block";
  } else {
  }
}

// Highlight input when click
function inputHighlight() {
  var formBorder = document.querySelector(".search-filled");

  if (
    !formBorder.style.border ||
    formBorder.style.border == "1px solid rgb(0, 0, 0)"
  ) {
    formBorder.style.border = "2px solid rgb(0, 0, 0)";
  } else {
    formBorder.style.border = "1px solid rgb(0, 0, 0)";
  }
}
