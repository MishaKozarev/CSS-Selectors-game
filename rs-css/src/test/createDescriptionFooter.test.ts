import ViewFooter from '../components/app/view/footer/viewFooter';

describe('test: function createDescriptionFooter return HTMLDivElement', () => {
    const viewFooter = new ViewFooter();
    const divElement: HTMLDivElement = viewFooter.createDescriptionFooter();
    const description: HTMLDivElement = document.createElement('div');
    beforeEach(() => {
        description.classList.add('footer__description');
    });
    it('return HTMLDivElement', () => {
        expect(divElement).toStrictEqual(description);
    });
});