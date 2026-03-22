// ============================================
// Theme Toggle - Dark/Light Mode
// ============================================

/**
 * Initialize theme on page load
 * Checks localStorage for saved preference, falls back to light mode
 */
function initTheme() {
  const savedTheme = localStorage.getItem("theme") || "light";
  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

/**
 * Toggle between dark and light theme
 * Saves preference to localStorage
 */
function toggleTheme() {
  const html = document.documentElement;
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    html.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
}

// ============================================
// Smooth Scrolling
// ============================================

/**
 * Scroll to projects section
 */
function scrollToProjects() {
  const projectsSection = document.getElementById("projects");
  if (projectsSection) {
    projectsSection.scrollIntoView({ behavior: "smooth" });
  }
}

/**
 * Scroll to contact section
 */
function scrollToContact() {
  const contactSection = document.getElementById("contact");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
}

// ============================================
// Modal Management
// ============================================

/** Element that had focus before a modal was opened */
let _modalPreviousFocus = null;

/**
 * Open modal by project ID.
 * Saves the currently focused element and moves focus into the modal.
 * @param {string} projectId - The project identifier
 */
function openModal(projectId) {
  const modal = document.getElementById(projectId + "-modal");
  if (modal) {
    _modalPreviousFocus = document.activeElement;
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";

    // Move focus to the first focusable element inside the modal
    const focusable = modal.querySelectorAll(
      'button, [href], input, select, textarea, [contenteditable="true"], [tabindex]:not([tabindex="-1"])'
    );
    if (focusable.length > 0) {
      focusable[0].focus();
    } else {
      modal.setAttribute("tabindex", "-1");
      modal.focus();
    }
  }
}

/**
 * Close modal by project ID.
 * Restores focus to the element that was focused before the modal opened.
 * @param {string} projectId - The project identifier
 */
function closeModal(projectId) {
  const modal = document.getElementById(projectId + "-modal");
  if (modal) {
    modal.classList.add("hidden");
    document.body.style.overflow = "auto";

    // Return focus to the element that triggered the modal
    if (_modalPreviousFocus) {
      _modalPreviousFocus.focus();
      _modalPreviousFocus = null;
    }
  }
}

// ============================================
// Event Listeners
// ============================================

/**
 * Close modal when ESC key is pressed
 */
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    const modals = document.querySelectorAll(
      '[id$="-modal"]:not(.hidden)'
    );
    modals.forEach((modal) => {
      const projectId = modal.id.replace("-modal", "");
      closeModal(projectId);
    });
  }
});

/**
 * Initialize theme when DOM is ready
 */
document.addEventListener("DOMContentLoaded", initTheme);
