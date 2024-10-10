// Get the button element and the menu icon image
let btnmenu = document.querySelector('.menu-btn');
let menuIcon = document.querySelector('#menu-icon');
let sidebar = document.querySelector('.side-bar');

btnmenu.addEventListener('click', () => {
    // Toggle 'active' class on nav links
    sidebar.classList.toggle('active');

    // Check if nav links have the 'active' class
    if (sidebar.classList.contains('active')) {
        // Change the menu icon to a close icon
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-times');
    } else {
        // Revert back to the hamburger icon
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
    }
});
