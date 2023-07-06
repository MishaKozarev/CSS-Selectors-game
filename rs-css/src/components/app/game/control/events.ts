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
            this.addSymbolToElement(event.target);
        });
        document.querySelector('.box')?.addEventListener('mouseout', (event) => {
            this.removeSymbolToElement(event.target);
        });
        document.querySelector('.viewer__description')?.addEventListener('mouseover', (event) => {
            this.addSymbolToCode(event.target);
        });
        document.querySelector('.viewer__description')?.addEventListener('mouseout', (event) => {
            this.removeSymbolToCode(event.target);
        });
    }

    addSymbolToElement<T>(element: T): void {
        (element as HTMLElement).classList.add('opacity');
        const PROMPT = document.querySelector('.prompt');
        const VIEWER_HTML_CODE: NodeListOf<Element> | null = document.querySelectorAll('.viewer_html-code');
        PROMPT?.classList.add('visible');
        const attributeClass = (element as HTMLElement).getAttribute('class')?.split(' ')[0];
        const attributeId = (element as HTMLElement).getAttribute('id')?.split(' ')[0];
        if (PROMPT) {
            if ((element as HTMLElement).getAttribute('id')) {
                PROMPT.textContent = `<div id="${attributeId}"></div>`;
                VIEWER_HTML_CODE.forEach((el) => {
                    if (PROMPT.textContent === el.textContent) el.classList.add('opacity_one');
                });
            } else {
                PROMPT.textContent = `<div class="${attributeClass}"></div>`;
                VIEWER_HTML_CODE.forEach((el) => {
                    if (PROMPT.textContent === el.textContent || PROMPT.textContent === el.textContent + '</div>')
                        el.classList.add('opacity_one');
                });
            }
        }
    }
    removeSymbolToElement<T>(element: T): void {
        const PROMPT = document.querySelector('.prompt');
        const VIEWER_HTML_CODE: NodeListOf<Element> | null = document.querySelectorAll('.viewer_html-code');
        (element as HTMLElement).classList.remove('opacity');
        PROMPT?.classList.remove('visible');
        if (PROMPT) {
            VIEWER_HTML_CODE.forEach((el) => {
                if (PROMPT.textContent === el.textContent || PROMPT.textContent === el.textContent + '</div>')
                    el.classList.remove('opacity_one');
            });
        }
    }

    addSymbolToCode<T>(element: T): void {
        (element as HTMLElement).classList.add('opacity_one');
        const PROMPT = document.querySelector('.prompt');
        PROMPT?.classList.add('visible');
        if (PROMPT) {
            PROMPT.textContent = (element as HTMLElement).textContent;
            const nameAttribute = PROMPT.textContent?.split('"')[1];
            if (nameAttribute !== 'box') {
                const namesAttributeClass = document.querySelectorAll(`[class="${nameAttribute}"]`);
                const namesAttributeClassMotion = document.querySelectorAll(
                    `[class="${nameAttribute} motion-animation"]`
                );
                const namesAttributeId = document.querySelectorAll(`[id="${nameAttribute}"]`);
                const namesAttributeIdMotion = document.querySelectorAll(`[id="${nameAttribute} motion-animation"]`);
                namesAttributeClass.forEach((element) => {
                    element?.classList.add('opacity');
                });
                namesAttributeClassMotion.forEach((element) => {
                    element?.classList.add('opacity');
                });
                namesAttributeId.forEach((element) => {
                    element?.classList.add('opacity');
                });
                namesAttributeIdMotion.forEach((element) => {
                    element?.classList.add('opacity');
                });
            }
        }
    }

    removeSymbolToCode<T>(element: T): void {
        (element as HTMLElement).classList.remove('opacity_one');
        const PROMPT = document.querySelector('.prompt');
        if (PROMPT) {
            PROMPT.textContent = '';
            const nameAttribute = PROMPT.textContent?.split('"')[1];
            const namesAttributeClass = document.querySelectorAll(`[class="${nameAttribute}"]`);
            const namesAttributeClassMotion = document.querySelectorAll(`[class="${nameAttribute} motion-animation"]`);
            const namesAttributeId = document.querySelectorAll(`[id="${nameAttribute}"]`);
            const namesAttributeIdMotion = document.querySelectorAll(`[id="${nameAttribute} motion-animation"]`);
            namesAttributeClass.forEach((element) => {
                element?.classList.remove('opacity');
            });
            namesAttributeClassMotion.forEach((element) => {
                element?.classList.remove('opacity');
            });
            namesAttributeId.forEach((element) => {
                element?.classList.remove('opacity');
            });
            namesAttributeIdMotion.forEach((element) => {
                element?.classList.remove('opacity');
            });
        }
    }
}
export default Events;
