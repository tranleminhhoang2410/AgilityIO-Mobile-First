const navbarLinks = document.querySelectorAll(
    '.navbar-link'
) as NodeListOf<HTMLAnchorElement>;
const menuMobile = document.querySelector('.menu-mobile') as HTMLDivElement;
const navbarList = document.querySelector('.navbar-list') as HTMLUListElement;
const navbarItems = document.querySelectorAll(
    '.navbar-item'
) as NodeListOf<HTMLElement>;

// Active link
const currentUrl: string = window.location.href.split('/')[3];

const activeLink = Array.from(navbarLinks).find((link) =>
    link.href.includes(currentUrl)
) as HTMLAnchorElement;

if (activeLink && currentUrl !== 'case-study') {
    activeLink.parentElement?.classList.add('active');
}

// Toggle menu
let isMenuOpen: boolean = false;

const toggleMenu = () => {
    navbarList.classList.toggle('toggle'); // Toggle the 'toggle' class
    Array.from(navbarItems).forEach((item) =>
        item.classList.toggle('container')
    );
    isMenuOpen = !isMenuOpen; // Invert the menu state
};

menuMobile.addEventListener('click', toggleMenu);

//Close menu when click in Contact
navbarLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        if (link.innerText === 'Contact') {
            toggleMenu();
        }
    });
});

// Close menu when clicking outside
document.addEventListener('click', (event) => {
    const targetElement = event.target as HTMLElement;
    if (isMenuOpen && targetElement && !targetElement.closest('.navbar')) {
        toggleMenu();
    }
});
