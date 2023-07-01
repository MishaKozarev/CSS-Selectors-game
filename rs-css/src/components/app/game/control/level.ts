import data from './data';

class Level {
    addClassLevel(level: number) {
        if (!localStorage.getItem('last')) localStorage.setItem('last', level + '');
        const last: string | null = localStorage.getItem('last');
        const lastNumber = Number(last);
        document.querySelectorAll('.level')[level - 1].classList.add('active');
        if (lastNumber !== level) {
            document.querySelectorAll('.level')[lastNumber - 1].classList.remove('active');
        }
        localStorage.setItem('last', level + '');
    }

    addClassPassed() {
        const LEVELS: NodeListOf<Element> = document.querySelectorAll('.level');
        const last: string | null = localStorage.getItem('last');
        const lastNumber = Number(last);
        const EDITOR_INPUT: string = (document.querySelector('.editor__input') as HTMLInputElement).value;
        if (last) {
            if (data.level_editor[lastNumber - 1] === EDITOR_INPUT) {
                if (LEVELS[lastNumber - 1].classList.contains('isHelp')) {
                    LEVELS[lastNumber - 1].classList.add('help');
                } else {
                    document.querySelectorAll('.level')[lastNumber - 1].classList.add('passed');
                }
            }
        }
    }

    addClassIsHelp() {
        const last: string | null = localStorage.getItem('last');
        const lastNumber = Number(last);
        if (last) {
            document.querySelectorAll('.level')[lastNumber - 1].classList.add('isHelp');
            const EDITOR_INPUT: HTMLInputElement | null = document.querySelector('.editor__input');
            if (EDITOR_INPUT) {
                EDITOR_INPUT.value = data.level_editor[lastNumber - 1];
            }
        }
    }
}
export default Level;
