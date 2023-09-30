const navbarLinks = document.querySelectorAll(
    '.navbar-link'
) as NodeListOf<HTMLAnchorElement>;
const menuMobile = document.querySelector('.menu-mobile') as HTMLDivElement;
const navbarList = document.querySelector('.navbar-list') as HTMLUListElement;

// Active link
const activeUrl: string = window.location.href.split('/')[3];

const activeLink = Array.from(navbarLinks).find((link) =>
    link.href.includes(activeUrl)
);
if (activeLink) {
    activeLink.parentElement!.classList.add('active');
}

// Toggle menu
let isMenuOpen: boolean = false;

const toggleMenu = () => {
    navbarList.classList.toggle('toggle'); // Toggle the 'toggle' class
    isMenuOpen = !isMenuOpen; // Invert the menu state
};

menuMobile?.addEventListener('click', toggleMenu);

// Close menu when clicking outside
document.addEventListener('click', (event) => {
    const targetElement = event.target as HTMLElement;
    if (isMenuOpen && targetElement && !targetElement.closest('.navbar')) {
        toggleMenu();
    }
});
