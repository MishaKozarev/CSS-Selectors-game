import ViewFooter from '../components/app/view/footer/viewFooter';

describe('test: function createLogoRss return HTMLDivElement', () => {
    const viewFooter = new ViewFooter();
    const divElement: HTMLDivElement = viewFooter.createLogoRss();
    const logo: HTMLDivElement = document.createElement('div');
    beforeEach(() => {
        logo.classList.add('footer__logo');
        logo.classList.add('footer__logo-rss');
    });
    it('return HTMLDivElement', () => {
        expect(divElement).toStrictEqual(logo);
    });
});