import ViewLevel from './aside/viewLevel';
import ViewPage from './main/page';

class View {
    viewLevel: ViewLevel;
    viewPage: ViewPage;
    constructor() {
        this.viewLevel = new ViewLevel();
        this.viewPage = new ViewPage();
    }
    view(): void {
        this.viewLevel.createLevel();
        this.viewLevel.createBtnReset();
        this.viewPage.showPage();
    }
}
export default View;
