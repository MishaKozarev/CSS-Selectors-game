class ViewLevel {
    aside: HTMLElement | null;
    constructor() {
        this.aside = document.querySelector('.aside__container');
    }
    render(): HTMLElement {
        const aside: HTMLElement = this.aside as HTMLElement;
        const btnReset = this.createBtnReset();
        const ELEMENT_NUMBER = 11;
        for (let i = 1; i < ELEMENT_NUMBER; i += 1) {
            const levels = this.createLevel();
            levels.id = `level-${i}`;
            levels.className = `level`;
            levels.innerText = `level ${i}`;
            aside?.append(levels);
        }
        aside?.append(btnReset);
        return aside;
    }

    createLevel(): HTMLParagraphElement {
        const levels: HTMLParagraphElement = document.createElement('p');
        return levels;
    }

    createBtnReset(): HTMLButtonElement {
        const btnReset: HTMLButtonElement = document.createElement('button') as HTMLButtonElement;
        btnReset.className = 'btn-reset';
        btnReset.innerText = 'reset';
        return btnReset;
    }
}
export default ViewLevel;
