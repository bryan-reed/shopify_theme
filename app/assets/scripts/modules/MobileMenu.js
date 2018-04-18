import $ from 'jquery';

class MobileMenu {
    constructor() {
        this.menuIcon = $('.main-header__menu-icon');
        this.menu = $('.main-header__nav');
        this.moveOver = $('.move-over');
        this.subNav1 = '.main-header__nav--open .dropdown-1 a';
        this.subNav2 = '.main-header__nav--open .mega-menu a';
        this.events();
    }
    events() {
        this.menuIcon.click(this.toggleMenu.bind(this));
        $(document).on('click', this.subNav1, this.expandSubMenu.bind(this));
        $(document).on('click', this.subNav2, this.expandMegaMenu.bind(this));
    }
    toggleMenu() {
        this.menu.toggleClass('main-header__nav--open');
        this.moveOver.toggleClass('open');
        this.menuIcon.toggleClass('main-header__menu-icon--close-x')
    }
    expandSubMenu(e) {
        e.preventDefault();
        console.log('Open the sub menu');
    }
    expandMegaMenu(e) {
        e.preventDefault();
        console.log('Open the mega menu');
    }
}
export default MobileMenu;