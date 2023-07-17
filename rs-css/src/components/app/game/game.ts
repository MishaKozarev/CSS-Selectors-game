import Events from './control/events';

class Game {
    events: Events;
    constructor() {
        this.events = new Events();
    }
    render(): void {
        this.events.addEventListenerLevel();
        this.events.addEventsOnClickButtonEnter();
        this.events.addEventListenerButtonHelp();
        this.events.addEventListenerButtonWin();
        this.events.addEventListenerButtonReset();
        this.events.addEventsOnkeydownEnter();
    }
}

export default Game;
