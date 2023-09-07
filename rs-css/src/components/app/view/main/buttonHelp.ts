class ViewButtonHelp {
    main: HTMLElement | null;
    constructor() {
        this.main = document.querySelector('.main');
    }
    createBtnHelp(): HTMLButtonElement {
        const btnHelp: HTMLButtonElement = document.createElement('button');
        btnHelp.classList.add('help__btn-open');
        btnHelp.textContent = 'Help';
        return btnHelp;
    }
}
export default ViewButtonHelp;
