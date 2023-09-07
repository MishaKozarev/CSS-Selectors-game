class ViewSelectText {
    main: HTMLElement | null;
    constructor() {
        this.main = document.querySelector('.main');
    }
    createSelectText(): HTMLElement {
        const selectText: HTMLElement = document.createElement('h2');
        selectText.classList.add('main__select-text');
        return selectText;
    }
}
export default ViewSelectText;
