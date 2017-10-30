  var navWrapper = document.querySelector(".page-header__nav-wrapper");
  var menuToggle = document.querySelector(".page-header__toggle");
  var toggleIcon = document.querySelector(".page-header__toggle-icon");
  var headerLogo = document.querySelector(".page-header__logo");

  navWrapper.classList.remove("page-header__nav-wrapper--nojs");
  menuToggle.classList.remove("page-header__toggle--nojs");
  headerLogo.classList.remove("page-header__logo--nojs");
  // headerTitle.classList.remove("page-header__title--nojs");
  // if (promo) {
  //   promo.classList.remove("promo--nojs");
  // }
  // if (blockHead) {
  //   blockHead.classList.remove("block-head__wrapper--nojs");
  // }

menuToggle.addEventListener("click", function() {

    if (navWrapper.classList.contains("page-header__nav-wrapper--closed")) {
      navWrapper.classList.remove("page-header__nav-wrapper--closed");
      navWrapper.classList.add("page-header__nav-wrapper--opened");
      toggleIcon.classList.add("page-header__toggle-icon--cross");
    } else {
      navWrapper.classList.add("page-header__nav-wrapper--closed");
      navWrapper.classList.remove("page-header__nav-wrapper--opened");
      toggleIcon.classList.remove("page-header__toggle-icon--cross");
    }
});
