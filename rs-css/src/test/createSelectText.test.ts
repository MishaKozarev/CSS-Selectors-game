import ViewSelectText from '../components/app/view/main/select-text';
describe('test: function createSelectText return HTMLElement', () => {
    const viewSelectText = new ViewSelectText();
    const selectTextElement: HTMLElement = viewSelectText.createSelectText();
    const selectText: HTMLElement = document.createElement('h2');
    beforeEach(() => {
        selectText.classList.add('main__select-text');
    });
    it('return HTMLElement', () => {
        expect(selectTextElement).toStrictEqual(selectText);
    });
});