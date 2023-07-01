import ViewLevel from './aside/viewLevel';

class View {
    viewLevel: ViewLevel;
    constructor() {
        this.viewLevel = new ViewLevel();
    }
    view() {
        this.viewLevel.createLevel();
        this.viewLevel.createBtnReset();
    }
}
export default View;
