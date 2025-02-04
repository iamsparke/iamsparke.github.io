document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(button => {
        button.addEventListener("mouseover", () => {
            button.style.boxShadow = "0px 0px 10px rgba(255, 255, 255, 0.5)";
        });

        button.addEventListener("mouseout", () => {
            button.style.boxShadow = "none";
        });
    });
});