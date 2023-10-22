// Material Design JavaScript Library
const md = {
    // Toggle Dark Mode
    toggleDarkMode() {
      document.documentElement.classList.toggle("dark-mode");
    },
    
    // Navigation Menu
    navMenu() {
      const menuItems = document.querySelectorAll(".nav-link");
      menuItems.forEach((item) => {
        item.addEventListener("click", () => {
          document.querySelector(".nav-menu").classList.toggle("show");
        });
      });
    },
    
    // Scrollbar
    scrollBar() {
      const scrollbars = document.querySelectorAll(".scrollbar");
      scrollbars.forEach((scrollbar) => {
        scrollbar.style.height = "10px";
        scrollbar.style.background = "#333";
        scrollbar.style.borderRadius = "5px";
        scrollbar.style.position = "relative";
        
        const thumb = scrollbar.appendChild(document.createElement("div"));
        thumb.className = "thumb";
        thumb.style.width = "20px";
        thumb.style.height = "20px";
        thumb.style.background = "#fff";
        thumb.style.borderRadius = "50%";
        thumb.style.position = "absolute";
        thumb.style.top = "calc(50% - 10px)";
        thumb.style.left = "calc(50% - 10px)";
      });
    },
  };
  
  // Initialize
  md.navMenu();
  md.scrollBar();
  
  // Toggle Dark Mode on button click
  document.getElementById("dark-mode-btn").addEventListener("click", () => {
    md.toggleDarkMode();
  });

  // Get the modal element by ID from the HTML
var modal = document.getElementById("myModal");

// Get the button that opens the modal from the HTML
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal from the HTML
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span>, close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Close the modal when the user presses the Escape key
document.addEventListener("keydown", function(e) {
  if (e.keyCode === 27) {
    modal.style.display = "none";
  }
});