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
}
export default ViewLevel;
