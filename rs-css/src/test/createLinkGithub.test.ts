import ViewFooter from '../components/app/view/footer/viewFooter';

describe('test: function createLinkGithub return HTMLAnchorElement', () => {
    const viewFooter = new ViewFooter();
    const anchorElement: HTMLAnchorElement = viewFooter.createLinkGithub();
    const link: HTMLAnchorElement = document.createElement('a');
    beforeEach(() => {
        link.setAttribute('href', 'https://github.com/MishaKozarev');
    });
    it('return HTMLAnchorElement', () => {
        expect(anchorElement).toStrictEqual(link);
    });
});