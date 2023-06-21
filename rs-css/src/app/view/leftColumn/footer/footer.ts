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
        const imgGithub: HTMLElement = document.createElement('div');
        const linkGithub: HTMLElement = document.createElement('a');
        linkGithub.setAttribute('href', link.urlGithub);
        imgGithub.classList.add('footer__logo');
        imgGithub.style.backgroundImage = `url(${logoGithub})`;
        linkGithub.append(imgGithub);
        return linkGithub;
    }

    private createLogoRss(): HTMLElement {
        const imgRss: HTMLElement = document.createElement('div');
        imgRss.style.backgroundImage = `url(${logoRss})`;
        const linkRss: HTMLElement = document.createElement('a');
        linkRss.setAttribute('href', link.urlRss);
        imgRss.classList.add('footer__logo');
        linkRss.append(imgRss);
        return linkRss;
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
