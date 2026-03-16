let headerNav = document.querySelectorAll('header nav ul a');
console.log(headerNav);

headerNav.forEach(e => {
    if (e.href === window.location.href) {
        e.classList.add("bg-black", "text-white");
    }
});

console.log(window.location)