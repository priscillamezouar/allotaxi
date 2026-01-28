document.addEventListener("DOMContentLoaded", () => {
    // Menu responsive
    const nav = document.querySelector("nav");
    const openIcon = document.querySelector("#openIcon");
    const closeIcon = document.querySelector("#closeIcon");

    openIcon.addEventListener("click", () => {
        nav.style.display = "flex";
        closeIcon.style.display = "block";
        openIcon.style.display = "none";
    });

    closeIcon.addEventListener("click", () => {
        nav.style.display = "none";
        openIcon.style.display = "block";
        closeIcon.style.display = "none";
    });
});
