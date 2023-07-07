import Events from './control/events';

class Game {
    events: Events;
    constructor() {
        this.events = new Events();
    }
    render(): void {
        this.events.clickLevel();
        this.events.clickEnter();
        this.events.clickHelp();
        this.events.clickWin();
        this.events.clickReset();
        this.events.keyDownEnter();
    }
}

export default Game;
