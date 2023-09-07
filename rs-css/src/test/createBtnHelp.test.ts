import ViewButtonHelp from '../components/app/view/main/buttonHelp';
describe('test: function viewButtonHelp return HTMLButtonElement', () => {
    const viewButtonHelp = new ViewButtonHelp();
    const btnElement: HTMLButtonElement = viewButtonHelp.createBtnHelp();
    const btnHelp: HTMLButtonElement = document.createElement('button');
    beforeEach(() => {
        btnHelp.classList.add('help__btn-open');
        btnHelp.textContent = 'Help';
    });
    it('return HTMLButtonElement', () => {
        expect(btnHelp).toStrictEqual(btnElement);
    });
});