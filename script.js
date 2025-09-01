const toggleBtn = document.getElementById("toggle-sidebar");
const sidebar = document.getElementById("sidebar");
const backdrop = document.getElementById("backdrop");
function toggleSidebar() {
  const isOpen = sidebar.classList.contains("open");
  if (isOpen) {
    sidebar.classList.remove("open");
    backdrop.hidden = true;
    toggleBtn.setAttribute("aria-expanded", "false");
  } else {
    sidebar.classList.add("open");
    backdrop.hidden = false;
    toggleBtn.setAttribute("aria-expanded", "true");
  }
}
toggleBtn.addEventListener("click", toggleSidebar);
backdrop.addEventListener("click", () => {
  sidebar.classList.remove("open");
  backdrop.hidden = true;
  toggleBtn.setAttribute("aria-expanded", "false");
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    sidebar.classList.remove("open");
    backdrop.hidden = true;
    toggleBtn.setAttribute("aria-expanded", "false");
  }
});
console.log("Sidebar logic loaded ✅");
