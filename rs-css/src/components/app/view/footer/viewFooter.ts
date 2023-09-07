class ViewFooter {
    footer: HTMLElement | null;
    constructor() {
        this.footer = document.querySelector('.footer');
    }
    render(): HTMLElement {
        const footer: HTMLElement = this.footer as HTMLElement;
        const linkGitHub = this.createLinkGithub();
        const logoGithub = this.createLogoGithub();
        const linkRss = this.createLinkRss();
        const logoRss = this.createLogoRss();
        const text = this.createText();
        linkGitHub.append(logoGithub);
        linkRss.append(logoRss);
        footer?.append(linkGitHub, text, linkRss);
        return footer;
    }

    createLinkGithub(): HTMLAnchorElement {
        const link: HTMLAnchorElement = document.createElement('a');
        link.setAttribute('href', 'https://github.com/MishaKozarev');
        return link;
    }

    createLogoGithub(): HTMLDivElement {
        const logo: HTMLDivElement = document.createElement('div');
        logo.classList.add('footer__logo');
        logo.classList.add('footer__logo-github');
        return logo;
    }

    createText(): HTMLDivElement {
        const text: HTMLDivElement = document.createElement('div');
        text.classList.add('footer__text');
        text.textContent = 'Misha Kozarev, 2023';
        return text;
    }

    createLinkRss(): HTMLAnchorElement {
        const link: HTMLAnchorElement = document.createElement('a');
        link.classList.add('footer__logo-rss-link');
        link.setAttribute('href', 'https://rs.school/js/');
        return link;
    }

    createLogoRss(): HTMLDivElement {
        const logo: HTMLDivElement = document.createElement('div');
        logo.classList.add('footer__logo');
        logo.classList.add('footer__logo-rss');
        return logo;
    }
}
export default ViewFooter;
