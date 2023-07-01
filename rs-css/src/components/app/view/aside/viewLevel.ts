class ViewLevel {
    ASIDE: HTMLElement | null;
    constructor() {
        this.ASIDE = document.querySelector('.aside__container');
    }
    createLevel() {
        for (let i = 1; i < 11; i += 1) {
            const LEVELS: HTMLElement = document.createElement('p');
            LEVELS.id = `level-${i}`;
            LEVELS.className = `level`;
            LEVELS.innerText = `level ${i}`;
            this.ASIDE?.append(LEVELS);
        }
    }
    createBtnReset() {
        const BTN_RESET: HTMLElement = document.createElement('button');
        BTN_RESET.className = 'btn-reset';
        BTN_RESET.innerText = 'reset';
        this.ASIDE?.append(BTN_RESET);
    }
}
export default ViewLevel;
