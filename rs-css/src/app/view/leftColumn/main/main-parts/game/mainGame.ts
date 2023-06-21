import './mainGame.css';

class MainGame {
    private mainGame: HTMLElement;
    constructor() {
        this.mainGame = document.createElement('div');
    }

    addGameTableClass() {
        this.mainGame.classList.add('game');
    }

    render() {
        this.addGameTableClass();
        return this.mainGame;
    }
}
export default MainGame;
