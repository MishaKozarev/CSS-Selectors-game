import './footer.css';
import logoGithub from './img/github.png';
import logoRss from './img/rsschool.svg';

enum link {
    urlGithub = 'https://github.com/MishaKozarev',
    urlRss = 'https://rs.school/js/',
}

class Footer {
    private footer: HTMLElement;
    constructor() {
        this.footer = document.createElement('footer');
    }
    private createLogoGithub(): HTMLElement {
        const createLogoGithub: HTMLElement = document.createElement('div');
        const createLinkGithub: HTMLElement = document.createElement('a');
        createLinkGithub.setAttribute('href', link.urlGithub);
        createLogoGithub.classList.add('footer__logo');
        createLogoGithub.style.backgroundImage = `url(${logoGithub})`;
        createLinkGithub.append(createLogoGithub);
        return createLinkGithub;
    }

    private createLogoRss(): HTMLElement {
        const createLogoRss: HTMLElement = document.createElement('div');
        createLogoRss.style.backgroundImage = `url(${logoRss})`;
        const createLinkRss: HTMLElement = document.createElement('a');
        createLinkRss.setAttribute('href', link.urlRss);
        createLogoRss.classList.add('footer__logo');
        createLinkRss.append(createLogoRss);
        return createLinkRss;
    }

    private createFooterTitle(text: string): HTMLElement {
        const footerTitle: HTMLElement = document.createElement('h4');
        footerTitle.classList.add('footer__title');
        footerTitle.innerText = text;
        return footerTitle;
    }

    render() {
        const title = this.createFooterTitle('Misha Kozarev, 2023');
        const github = this.createLogoGithub();
        const rss = this.createLogoRss();
        this.footer.append(github, title, rss);
        return this.footer;
    }
}
export default Footer;
