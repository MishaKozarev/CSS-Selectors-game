import AppView from './view/appView';

class App {
    view: AppView;

    constructor() {
        this.view = new AppView();
    }
    start() {
        this.view.run();
    }
}
export default App;
