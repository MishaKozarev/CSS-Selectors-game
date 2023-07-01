import View from './view/view';
import Game from './game/game';

class App {
    view: View;
    game: Game;
    constructor() {
        this.view = new View();
        this.game = new Game();
    }
    start() {
        this.view.view();
        this.game.render();
    }
}
export default App;
