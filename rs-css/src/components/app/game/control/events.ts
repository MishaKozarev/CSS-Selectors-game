import Save from './save';
import Level from './level';

class Events {
    save: Save;
    level: Level;
    constructor() {
        this.save = new Save();
        this.level = new Level();
    }
    changeLevel() {
        document.querySelectorAll('.level').forEach((LEVEL, index) => {
            LEVEL.addEventListener('click', () => {
                this.level.setLevel(index + 1);
                this.save.levelSaveChange();
                this.save.levelApply();
            });
        });
    }

    clickEnter() {
        const btnEnter: HTMLElement | null = document.querySelector('.editor__btn-enter');
        if (btnEnter) {
            btnEnter.addEventListener('click', () => {
                const last: string | null = localStorage.getItem('last');
                const lastNumber = Number(last);
                this.level.setComplete();
                if (lastNumber === 10) {
                    this.level.setLevel(1);
                } else this.level.setLevel(lastNumber + 1);
                const EDITOR_INPUT: HTMLInputElement | null = document.querySelector('.editor__input');
                if (EDITOR_INPUT) {
                    EDITOR_INPUT.value = '';
                }
                this.save.levelSaveChange();
                this.save.levelApply();
            });
        }
    }

    clickHelp() {
        const btnHelp: HTMLElement | null = document.querySelector('.help__btn-open');
        if (btnHelp) {
            btnHelp.addEventListener('click', () => {
                this.level.addClassIsHelp();
                this.save.levelSaveChange();
            });
        }
    }

    clickWin() {
        const btnWin: HTMLElement | null = document.querySelector('.win__btn-close');
        if (btnWin) {
            btnWin.addEventListener('click', () => {
                localStorage.removeItem('levels');
                localStorage.removeItem('last');
                this.save.levelApply();
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
                this.save.levelApply();
                this.save.removeStorage();
            });
        }
    }
}
export default Events;
