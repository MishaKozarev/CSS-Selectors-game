import './main.css';

class Main {
    private main: HTMLElement;
    constructor() {
        this.main = document.createElement('main');
    }

    private createMainHelp(): HTMLElement {
        const mainHelp: HTMLElement = document.createElement('div');
        mainHelp.classList.add('help');
        return mainHelp;
    }
    private createMainGame(): HTMLElement {
        const creatMainGame: HTMLElement = document.createElement('div');
        creatMainGame.classList.add('game');
        return creatMainGame;
    }
    private createMainEditor(): HTMLElement {
        const creatMainEditor: HTMLElement = document.createElement('div');
        creatMainEditor.classList.add('editor');
        return creatMainEditor;
    }

    render() {
        const help = this.createMainHelp();
        const game = this.createMainGame();
        const editor = this.createMainEditor();
        this.main.append(help, game, editor);
        return this.main;
    }
}
export default Main;
