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

