import ViewFooter from '../components/app/view/footer/viewFooter';

describe('test: function createText return HTMLDivElement', () => {
    const viewFooter = new ViewFooter();
    const divElement: HTMLDivElement = viewFooter.createText();
    const text: HTMLDivElement = document.createElement('div');
    beforeEach(() => {
        text.classList.add('footer__text');
        text.textContent = 'Misha Kozarev, 2023';
    });
    it('return HTMLDivElement', () => {
        expect(divElement).toStrictEqual(text);
    });
});