import Save from './save';
import Level from './level';
import data from './data';

class Events {
    save: Save;
    level: Level;
    constructor() {
        this.save = new Save();
        this.level = new Level();
    }
    clickLevel() {
        document.querySelectorAll('.level').forEach((LEVEL, index) => {
            LEVEL.addEventListener('click', () => {
                this.level.saveLastLevel(index + 1);
                this.save.saveLevels();
                this.save.showPage();
            });
        });
    }

    clickEnter() {
        const btnEnter: HTMLElement | null = document.querySelector('.editor__btn-enter');
        if (btnEnter) {
            btnEnter.addEventListener('click', () => {
                this.getEnter();
            });
        }
    }

    keyDownEnter() {
        const EDITOR_INPUT: HTMLInputElement | null = document.querySelector('.editor__input');
        EDITOR_INPUT?.focus();
        if (EDITOR_INPUT) {
            EDITOR_INPUT.addEventListener('keydown', (event) => {
                if ((event as KeyboardEvent).key === 'Enter') {
                    this.getEnter();
                }
            });
        }
    }

    getEnter() {
        const EDITOR_OUTPUT: HTMLElement | null = document.querySelector('.editor__output');
        const EDITOR_INPUT: HTMLInputElement | null = document.querySelector('.editor__input');
        const EDITOR_INPUT_VALUE: string = (document.querySelector('.editor__input') as HTMLInputElement).value;
        const last: string | null = localStorage.getItem('last');
        const lastNumber = Number(last);
        this.level.addStylePassedLevel();
        if (data.level_editor[lastNumber - 1] === EDITOR_INPUT_VALUE) {
            document.querySelector(`.${data.level_editor[lastNumber - 1]}`)?.classList.add('trueAnswer-animation');
            if (lastNumber === 10) {
                this.level.saveLastLevel(1);
            } else this.level.saveLastLevel(lastNumber + 1);
        } else {
            document.querySelector(`.${data.level_editor[lastNumber - 1]}`)?.classList.add('falseAnswer-animation');
            this.level.saveLastLevel(lastNumber);
        }
        if (EDITOR_INPUT) {
            EDITOR_INPUT.value = '';
            EDITOR_INPUT.style.opacity = '1';
        }
        if (EDITOR_OUTPUT) {
            EDITOR_OUTPUT.innerText = '';
            EDITOR_OUTPUT.classList.remove('text');
        }
        setTimeout(() => this.save.saveLevels(), 1000);
        setTimeout(() => this.save.showPage(), 1000);
    }

    clickHelp() {
        const btnHelp: HTMLElement | null = document.querySelector('.help__btn-open');
        if (btnHelp) {
            btnHelp.addEventListener('click', () => {
                this.level.addStyleIsHelp();
                this.save.saveLevels();
            });
        }
    }

    clickWin() {
        const btnWin: HTMLElement | null = document.querySelector('.win__btn-close');
        if (btnWin) {
            btnWin.addEventListener('click', () => {
                localStorage.removeItem('levels');
                localStorage.removeItem('last');
                this.save.showPage();
                this.save.removeStorage();
                const WIN: HTMLElement | null = document.querySelector('.win');
                if (WIN) {
                    WIN.classList.remove('visible');
                }
            });
        }
    }

    clickReset() {
        const btnReset: HTMLElement | null = document.querySelector('.btn-reset');
        if (btnReset) {
            btnReset.addEventListener('click', () => {
                localStorage.removeItem('levels');
                localStorage.removeItem('last');
                this.save.showPage();
                this.save.removeStorage();
            });
        }
    }
}
export default Events;
