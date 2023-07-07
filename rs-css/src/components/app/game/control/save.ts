import { LevelsStorage } from '../../../types/types';

class Save {
    LEVEL_NAME: HTMLElement | null;
    LEVELS: NodeListOf<Element> | null;
    TABLE: HTMLElement | null;
    VIEWER: HTMLElement | null;
    EDITOR_INPUT: HTMLInputElement | null;
    EDITOR_INPUT_VALUE: string | undefined;

    constructor() {
        this.LEVELS = document.querySelectorAll('.level');
        this.TABLE = document.querySelector('.table');
        this.VIEWER = document.querySelector('.viewer__description');
        this.LEVEL_NAME = document.querySelector('.main__select-text');
        this.EDITOR_INPUT = document.querySelector('.editor__input');
        this.EDITOR_INPUT_VALUE = this.EDITOR_INPUT?.value;
    }

    saveLevels() {
        const levelsData: LevelsStorage = {
            active: '',
            passed: '',
            isHelp: '',
            help: '',
        };
        if (!localStorage.getItem('levels')) localStorage.setItem('levels', JSON.stringify(Array(10).fill(levelsData)));
        const levels = JSON.parse(localStorage.getItem('levels') as string);
        document.querySelectorAll('.level').forEach((level, index) => {
            if (level.classList.contains('active')) {
                levels[index].active = 'true';
            } else levels[index].active = 'false';
            if (level.classList.contains('passed')) {
                levels[index].passed = 'true';
            } else levels[index].passed = 'false';
            if (level.classList.contains('isHelp')) {
                levels[index].isHelp = 'true';
            } else levels[index].isHelp = 'false';
            if (level.classList.contains('help')) {
                levels[index].help = 'true';
            } else levels[index].help = 'false';
        });
        localStorage.setItem('levels', JSON.stringify(levels));
    }

    removeStorage() {
        if (this.TABLE) this.TABLE.innerHTML = '';
        if (this.VIEWER) this.VIEWER.innerText = '';
        if (this.LEVEL_NAME) this.LEVEL_NAME.innerText = '';
        if (this.EDITOR_INPUT) this.EDITOR_INPUT_VALUE = '';
        document.querySelectorAll('.level').forEach((level) => {
            level.classList.remove('active');
            level.classList.remove('passed');
            level.classList.remove('help');
            level.classList.remove('isHelp');
        });
    }
}
export default Save;
