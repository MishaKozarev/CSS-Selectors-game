import ViewFooter from '../components/app/view/footer/viewFooter';

describe('test: function createLinkRss return HTMLAnchorElement', () => {
    const viewFooter = new ViewFooter();
    const anchorElement: HTMLAnchorElement = viewFooter.createLinkRss();
    const link: HTMLAnchorElement = document.createElement('a');
    beforeEach(() => {
        link.classList.add('footer__logo-rss-link');
        link.setAttribute('href', 'https://rs.school/js/');
    });
    it('return HTMLAnchorElement', () => {
        expect(anchorElement).toStrictEqual(link);
    });
});