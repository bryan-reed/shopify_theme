import $ from 'jquery';

class MobileMenu {
    constructor() {
        this.menuIcon = $('.main-header__menu-icon');
        this.menu = $('.main-header__nav__top');
        this.events();
    }
    events() {
        this.menuIcon.click(this.toggleMenu.bind(this));
    }
    toggleMenu() {
        this.menu.toggleClass('main-header__nav__top--open');
        this.menuIcon.toggleClass('main-header__menu-icon--close-x')
    }
}
export default MobileMenu;