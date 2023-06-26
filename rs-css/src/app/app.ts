import AppView from './view/appView';
import Help from './view/help';
import Level from './view/level';

class App {
    view: AppView;
    help: Help;
    level: Level;
    id: Level;
    render: Level;

    constructor() {
        this.view = new AppView();
        this.help = new Help();
        this.level = new Level();
        this.id = new Level();
        this.render = new Level();
    }
    start() {
        this.view.run();
        this.help.openHelp();
        this.help.closeHelp();
        this.level.changeLevel();
        this.render.getId();
    }
}
export default App;
