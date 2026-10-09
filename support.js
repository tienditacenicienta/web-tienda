
(() => {
  const trigger = document.getElementById("support-trigger");
  const panel = document.getElementById("support-panel");
  const close = document.getElementById("support-close");

  if (!trigger || !panel || !close) return;

  function openSupport() {
    panel.hidden = false;
    trigger.setAttribute("aria-expanded", "true");
    close.focus();
  }

  function closeSupport() {
    panel.hidden = true;
    trigger.setAttribute("aria-expanded", "false");
    trigger.focus();
  }

  trigger.addEventListener("click", () => {
    if (panel.hidden) {
      openSupport();
    } else {
      closeSupport();
    }
  });

  close.addEventListener("click", closeSupport);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !panel.hidden) {
      closeSupport();
    }
  });

  document.addEventListener("click", (event) => {
    if (
      !panel.hidden &&
      !panel.contains(event.target) &&
      !trigger.contains(event.target)
    ) {
      panel.hidden = true;
      trigger.setAttribute("aria-expanded", "false");
    }
  });
})();
