import data from './data';
class Save {
    LEVEL_NAME: HTMLElement | null;
    LEVELS: NodeListOf<Element> | null;
    TABLE: HTMLElement | null;
    VIEWER: HTMLElement | null;
    EDITOR_INPUT: HTMLInputElement | null;
    constructor() {
        this.LEVELS = document.querySelectorAll('.level');
        this.TABLE = document.querySelector('.table');
        this.VIEWER = document.querySelector('.viewer__description');
        this.LEVEL_NAME = document.querySelector('.main__select-text');
        this.EDITOR_INPUT = document.querySelector('.editor__input');
    }
    saveStorage(): number {
        const levelsData = {
            active: '',
            passed: '',
            isHelp: '',
        };
        let passed = 0;
        let help = 0;
        if (!localStorage.getItem('levels')) localStorage.setItem('levels', JSON.stringify(Array(10).fill(levelsData)));
        const levels = JSON.parse(localStorage.getItem('levels') as string);
        document.querySelectorAll('.level').forEach((level, index) => {
            if (level.classList.contains('active')) {
                levels[index].active = 'true';
                if (this.TABLE) {
                    this.TABLE.innerHTML = data.level_viewer[index];
                }
                if (this.VIEWER) {
                    this.VIEWER.innerText = data.level_viewer[index];
                }
                if (this.LEVEL_NAME) {
                    this.LEVEL_NAME.innerText = data.level_name[index];
                }
            } else levels[index].active = 'false';
            if (level.classList.contains('passed')) {
                levels[index].passed = 'true';
                passed += 1;
            } else levels[index].passed = 'false';
            if (level.classList.contains('isHelp')) {
                levels[index].isHelp = 'true';
                help += 1;
            } else levels[index].isHelp = 'false';
        });
        const count = passed + help;
        localStorage.setItem('levels', JSON.stringify(levels));
        return count;
    }
}
export default Save;
