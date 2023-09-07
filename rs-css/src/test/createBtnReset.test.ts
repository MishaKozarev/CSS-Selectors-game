import ViewLevel from '../components/app/view/aside/viewLevel';
describe('test: function createBtnReset return HTMLButtonElement', () => {
    const viewLevel = new ViewLevel();
    const btnReset: HTMLButtonElement = viewLevel.createBtnReset();
    const btnElement: HTMLButtonElement = document.createElement('button');
    beforeEach(() => {
        btnElement.className = 'btn-reset';
        btnElement.innerText = 'reset';
    });
    it('return HTMLButtonElement', () => {
        expect(btnReset).toStrictEqual(btnElement);
    });
});
