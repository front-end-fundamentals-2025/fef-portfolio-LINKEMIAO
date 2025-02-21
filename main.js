document.addEventListener("DOMContentLoaded", function() {
    const heartbutton = document.getElementById("heartbutton");
    const heart = document.querySelector(".heart"); 

    heartbutton.addEventListener("click", function() {
        const currentColor = getComputedStyle(heart).backgroundColor;

        if (currentColor === "rgb(169, 169, 169)") {
            heart.style.backgroundColor = "rgb(222, 51, 116)"; 
            heart.style.setProperty("--color", "rgb(222, 51, 116)");
        } else {
            heart.style.backgroundColor = "rgb(169, 169, 169)"; 
        }
    });
});
//reference from Chatgpt:https://chatgpt.com/share/67b88007-1b58-8000-ad44-784adcfdf7b0
document.addEventListener("DOMContentLoaded", function() {
    const heart = document.querySelector(".heart");

    heart.addEventListener("click", function() {
        heart.classList.toggle("active"); 
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const portfolioMenu = document.querySelector("li > a[href='portfolio.html']");
    const submenu = document.querySelector(".submenu");
 
    // Hide the submenu initially
    submenu.style.display = "none";
 
    // Add event listeners to show/hide submenu on hover
    portfolioMenu.addEventListener("mouseover", function() {
       submenu.style.display = "block";
    });
 
    portfolioMenu.addEventListener("mouseout", function() {
       submenu.style.display = "none";
    });
 
    // Add event listeners for submenu items (optional)
    const submenuItems = submenu.querySelectorAll("a");
    submenuItems.forEach(item => {
       item.addEventListener("click", function(event) {
          event.preventDefault();  // Prevent default link behavior for now
          alert("You clicked on " + item.textContent);
       });
    });
 });