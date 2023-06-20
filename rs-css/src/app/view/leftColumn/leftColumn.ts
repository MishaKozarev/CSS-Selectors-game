import './leftColumn.css';
import Header from './header/header';
import Main from './main/main';
import Footer from './footer/footer';

class LeftColumn {
    private leftColumn: HTMLElement;
    private header: Header;
    private main: Main;
    private footer: Footer;
    constructor() {
        this.leftColumn = document.createElement('div');
        this.header = new Header();
        this.main = new Main();
        this.footer = new Footer();
    }
    addLeftColumnClass() {
        this.leftColumn.classList.add('left-column');
    }
    render() {
        const headerHtml = this.header.render();
        const mainHtml = this.main.render();
        const footerHtml = this.footer.render();
        this.leftColumn.append(headerHtml, mainHtml, footerHtml);
        this.addLeftColumnClass();
        return this.leftColumn;
    }
}
export default LeftColumn;
