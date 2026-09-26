const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".primary-nav");

menuButton?.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
  navigation?.classList.toggle("is-open", !isOpen);
});

navigation?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement && window.matchMedia("(max-width: 850px)").matches) {
    menuButton?.setAttribute("aria-expanded", "false");
    menuButton?.setAttribute("aria-label", "Open navigation");
    navigation.classList.remove("is-open");

    
  }
});

// adding new changes for this page
