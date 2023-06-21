import './main.css';
import MainHelp from './main-parts/help/mainHelp';
import MainGame from './main-parts/game/mainGame';

class Main {
    private main: HTMLElement;
    private mainHelp: MainHelp;
    private mainGame: MainGame;

    constructor() {
        this.main = document.createElement('main');
        this.mainHelp = new MainHelp();
        this.mainGame = new MainGame();
    }
    render() {
        const mainHelp = this.mainHelp.render();
        const mainGame = this.mainGame.render();
        this.main.append(mainHelp, mainGame);
        return this.main;
    }
}
export default Main;
