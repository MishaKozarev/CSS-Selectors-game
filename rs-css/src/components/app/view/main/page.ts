import data from '../../game/control/data';
import ViewText from '../../view/main/viewer-text';
import { LevelsStorage } from '../../../types/types';

class ViewPage {
    LEVEL_NAME: HTMLElement | null;
    LEVELS: NodeListOf<Element> | null;
    TABLE: HTMLElement | null;
    VIEWER: HTMLElement | null;
    EDITOR_INPUT: HTMLInputElement | null;
    EDITOR_INPUT_VALUE: string | undefined;
    viewText: ViewText;

    constructor() {
        this.LEVELS = document.querySelectorAll('.level');
        this.TABLE = document.querySelector('.table');
        this.VIEWER = document.querySelector('.viewer__description');
        this.LEVEL_NAME = document.querySelector('.main__select-text');
        this.EDITOR_INPUT = document.querySelector('.editor__input');
        this.EDITOR_INPUT_VALUE = this.EDITOR_INPUT?.value;
        this.viewText = new ViewText();
    }

    showPage(): void {
        let passed = 0;
        let help = 0;
        for (let index = 0; index < 10; index += 1) {
            const level: Element = document.querySelectorAll('.level')[index];
            if (localStorage.getItem('levels')) {
                const levels: Array<LevelsStorage> = JSON.parse(localStorage.getItem('levels') as string);
                if (levels[index].active === 'true') {
                    level.classList.add('active');
                    if (this.TABLE) {
                        this.TABLE.innerHTML = data.level_viewer[index];
                    }
                    if (this.VIEWER) {
                        this.viewText.createText(index);
                    }
                    if (this.LEVEL_NAME) {
                        this.LEVEL_NAME.innerText = data.level_name[index];
                    }
                    const arrMotion: string[] = data.level_animation[index].split(' | ');
                    arrMotion.forEach((el) => {
                        document.querySelector(`.${el}`)?.classList.add('motion-animation');
                        document.getElementById(`${el}`)?.classList.add('motion-animation');
                    });
                } else level.classList.remove('active');
                if (levels[index].passed === 'true') {
                    level.classList.add('passed');
                    passed += 1;
                } else level.classList.remove('passed');
                if (levels[index].isHelp === 'true') {
                    level.classList.add('isHelp');
                } else level.classList.remove('isHelp');
                if (levels[index].help === 'true') {
                    help += 1;
                    level.classList.add('help');
                } else level.classList.remove('help');
            }
        }
        const count: number = passed + help;
        localStorage.setItem('count', count + '');
        if (Number(localStorage.getItem('count')) === 10) {
            const WIN: HTMLElement | null = document.querySelector('.win');
            if (WIN) {
                WIN.classList.add('visible');
            }
        }
    }
}

export default ViewPage;
