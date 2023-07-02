import data from './data';
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
    showPage() {
        let passed = 0;
        let help = 0;
        for (let index = 0; index < 10; index += 1) {
            const level: Element = document.querySelectorAll('.level')[index];
            if (localStorage.getItem('levels')) {
                const levels = JSON.parse(localStorage.getItem('levels') as string);
                if (levels[index].active === 'true') {
                    level.classList.add('active');
                    if (this.TABLE) {
                        this.TABLE.innerHTML = data.level_viewer[index];
                    }
                    if (this.VIEWER) {
                        this.VIEWER.innerText = data.level_viewer[index];
                    }
                    if (this.LEVEL_NAME) {
                        this.LEVEL_NAME.innerText = data.level_name[index];
                    }
                    document.querySelector(`.${data.level_editor[index]}`)?.classList.add('motion-animation');
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
        const count = passed + help;
        localStorage.setItem('count', count + '');
        if (Number(localStorage.getItem('count')) === 10) {
            const WIN: HTMLElement | null = document.querySelector('.win');
            if (WIN) {
                WIN.classList.add('visible');
            }
        }
    }

    saveLevels() {
        const levelsData = {
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
