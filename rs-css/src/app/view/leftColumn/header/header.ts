import './header.css';
import logoHeader from './img/logoHeader.png';

class Header {
    private header: HTMLElement;
    constructor() {
        this.header = document.createElement('header');
    }
    private createHeaderTitle(text: string): HTMLElement {
        const headerTitle: HTMLElement = document.createElement('h2');
        headerTitle.classList.add('header__title');
        headerTitle.innerText = text;
        return headerTitle;
    }

    private createHeaderLogo(): HTMLElement {
        const headerLogo: HTMLElement = document.createElement('div');
        headerLogo.classList.add('header__logo');
        headerLogo.style.backgroundImage = `url(${logoHeader})`;
        return headerLogo;
    }

    render() {
        const title = this.createHeaderTitle('Select the plates');
        const logo = this.createHeaderLogo();
        this.header.append(logo, title);
        return this.header;
    }
}
export default Header;
