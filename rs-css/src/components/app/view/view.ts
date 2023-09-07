import ViewLevel from './aside/viewLevel';
import ViewPage from './main/page';
import ViewSelectText from './main/select-text';
import ViewButtonHelp from './main/buttonHelp';
import ViewFooter from './footer/viewFooter';

class View {
    viewLevel: ViewLevel;
    viewPage: ViewPage;
    viewSelectText: ViewSelectText;
    viewButtonHelp: ViewButtonHelp;
    viewFooter: ViewFooter;
    constructor() {
        this.viewLevel = new ViewLevel();
        this.viewPage = new ViewPage();
        this.viewSelectText = new ViewSelectText();
        this.viewButtonHelp = new ViewButtonHelp();
        this.viewFooter = new ViewFooter();
    }
    view(): void {
        this.viewLevel.render();
        this.viewLevel.createBtnReset();
        this.viewPage.showPage();
        this.viewFooter.render();
    }
}
export default View;
