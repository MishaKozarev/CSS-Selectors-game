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
                this.mouseOver();
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
        if (data.level_editor[lastNumber - 1].split(' | ').some((el) => el === EDITOR_INPUT_VALUE)) {
            const arrMotion: string[] = data.level_animation[lastNumber - 1].split(' | ');
            arrMotion.forEach((el) => {
                document.querySelector(`.${el}`)?.classList.add('trueAnswer-animation');
                document.getElementById(`${el}`)?.classList.add('trueAnswer-animation');
            });
            if (lastNumber === 10) {
                this.level.saveLastLevel(1);
            } else this.level.saveLastLevel(lastNumber + 1);
        } else {
            const arrMotion: string[] = data.level_animation[lastNumber - 1].split(' | ');
            arrMotion.forEach((el) => {
                document.querySelector(`.${el}`)?.classList.add('falseAnswer-animation');
                document.getElementById(`${el}`)?.classList.add('falseAnswer-animation');
            });
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
        setTimeout(() => this.mouseOver(), 1000);
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
    mouseOver() {
        document.querySelector('.box')?.addEventListener('mouseover', (event) => {
            this.addOpacity(event.target);
        });
        document.querySelector('.box')?.addEventListener('mouseout', (event) => {
            this.removeOpacity(event.target);
        });
    }

    addOpacity<T>(element: T): void {
        (element as HTMLElement).classList.add('opacity');
        const PROMPT = document.querySelector('.prompt');
        PROMPT?.classList.add('visible');
        const attributeClass = (element as HTMLElement).getAttribute('class')?.split(' ')[0];
        const attributeId = (element as HTMLElement).getAttribute('id')?.split(' ')[0];
        if (PROMPT) {
            console.log((element as HTMLElement).getAttribute('class')?.split(' ')[0]);
            if ((element as HTMLElement).getAttribute('id')) {
                PROMPT.textContent = `<div id="${attributeId}"></div>`;
            } else {
                PROMPT.textContent = `<div class="${attributeClass}"></div>`;
            }
        }
        const VIEWER_DESCRIPTION: HTMLElement | null = document.querySelector('.viewer__description');
        VIEWER_DESCRIPTION?.classList.add('opacity_one');

        console.log(VIEWER_DESCRIPTION);
    }
    removeOpacity<T>(element: T): void {
        const PROMPT = document.querySelector('.prompt');
        (element as HTMLElement).classList.remove('opacity');
        PROMPT?.classList.remove('visible');
        const VIEWER_DESCRIPTION: HTMLElement | null = document.querySelector('.viewer__description');
        VIEWER_DESCRIPTION?.classList.remove('opacity_one');
    }
}
export default Events;
