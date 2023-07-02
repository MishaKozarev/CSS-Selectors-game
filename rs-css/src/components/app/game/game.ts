import Save from './control/save';
import Events from './control/events';

class Game {
    save: Save;
    events: Events;
    constructor() {
        this.save = new Save();
        this.events = new Events();
    }
    render() {
        this.save.showPage();
        this.events.clickLevel();
        this.events.clickEnter();
        this.events.clickHelp();
        this.events.clickWin();
        this.events.clickReset();
        this.events.keyDownEnter();
    }
}

export default Game;
