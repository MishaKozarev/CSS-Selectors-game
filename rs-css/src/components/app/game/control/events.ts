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
                this.level.addClassLevel(index + 1);
                this.save.saveStorage();
            });
        });
    }

    clickEnter() {
        const btnEnter: HTMLElement | null = document.querySelector('.editor__btn-enter');
        if (btnEnter) {
            btnEnter.addEventListener('click', () => {
                const last: string | null = localStorage.getItem('last');
                const lastNumber = Number(last);
                this.level.addClassPassed();
                if (lastNumber === 10) {
                    this.level.addClassLevel(1);
                } else this.level.addClassLevel(lastNumber + 1);
                const EDITOR_INPUT: HTMLInputElement | null = document.querySelector('.editor__input');
                if (EDITOR_INPUT) {
                    EDITOR_INPUT.value = '';
                }
                this.save.saveStorage();
                if (this.save.saveStorage() === 10) {
                    const WIN: HTMLElement | null = document.querySelector('.win');
                    if (WIN) {
                        WIN.classList.add('visible');
                    }
                }
            });
        }
    }

    clickHelp() {
        const btnHelp: HTMLElement | null = document.querySelector('.help__btn-open');
        if (btnHelp) {
            btnHelp.addEventListener('click', () => {
                this.level.addClassIsHelp();
                this.save.saveStorage();
            });
        }
    }

    clickWin() {
        const btnWin: HTMLElement | null = document.querySelector('.win__btn-close');
        if (btnWin) {
            btnWin.addEventListener('click', () => {
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
                this.save.saveStorage();
                this.save.removeStorage();
            });
        }
    }
}
export default Events;
