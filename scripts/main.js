const sideBar = $(".sidebar");
const btnSideBarToggle = $("#btnSidebarToggle");
const mainContent = $(".main-content");
const overlay = $(".overlay");
const mainWrapper = $(".main-wrapper");
const filterMenu = $(".filter-menu");
const body = $("body");
const minWidth = 992;

$(window).resize(function () {
  if ($(window).outerWidth() >= minWidth) {
    mainWrapper.removeClass("show-on-mobile");
    filterMenu.removeClass("show");
    overlay.css("display", "none");
  } else {
    mainWrapper.removeClass("hide-on-desktop");
  }
});

btnSideBarToggle.click(function () {
  if ($(window).outerWidth() >= minWidth) {
    mainWrapper.removeClass("show-on-mobile");
    mainWrapper.toggleClass("hide-on-desktop");
  } else {
    mainWrapper.removeClass("hide-on-desktop");
    mainWrapper.toggleClass("show-on-mobile");
    overlay.css("display", "block");
    body.css("overflow", "hidden");
  }
});

const popoverToggle = $(".popover-toggle");
const popoverButtonWidth = popoverToggle.outerWidth();
const pointerWidth = $(".popover-menu .popover-pointer").outerWidth();
const popoverMenu = $(".popover-menu");
const closeFilterButton = $(".close-filter-button");

function centerPopoverPointer() {
  const leftPosition = (popoverButtonWidth - pointerWidth) / 2;
  $(".popover-menu .popover-pointer").css("left", `${leftPosition}px`);
}

centerPopoverPointer();

popoverToggle.click(function () {
  $(this).next().toggleClass("show");
  overlay.css("display", "block");
  body.css("overflow", "hidden");
});

closeFilterButton.click(function () {
  popoverMenu.removeClass("show");
  overlay.css("display", "none");
  mainWrapper.removeClass("show-on-mobile");
  body.css("overflow", "unset");
});

overlay.click(function () {
  $(this).css("display", "none");
  mainWrapper.removeClass("show-on-mobile");
  popoverMenu.removeClass("show");
  body.css("overflow", "unset");
});

// popover toggle
// $(btnFilterToggle).click(function () {
//   filterMenu.toggleClass("show");
//   overlay.css("display", "block");
//   body.css("overflow", "hidden");
// });

// overlay
// overlay.click(function () {
//   $(this).css("display", "none");
//   mainWrapper.removeClass("show-on-mobile");
//   popoverMenu.removeClass("show");
//   body.css("overflow", "unset");
// });

// close filter
// closeFilterButton.click(function () {
//   overlay.css("display", "none");
//   mainWrapper.removeClass("show-on-mobile");
//   filterMenu.removeClass("show");
//   body.css("overflow", "unset");
// });
