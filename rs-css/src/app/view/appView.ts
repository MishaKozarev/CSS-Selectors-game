import LeftColumn from './leftColumn/leftColumn';
import RightColumn from './rightColumn/rightColumn';

class AppView {
    private body: HTMLElement;
    private LeftColumn: LeftColumn;
    private RightColumn: RightColumn;
    constructor() {
        this.body = document.body;
        this.LeftColumn = new LeftColumn();
        this.RightColumn = new RightColumn();
    }
    run() {
        const LeftColumnHtml = this.LeftColumn.render();
        const RightColumnHtml = this.RightColumn.render();
        this.body.append(LeftColumnHtml, RightColumnHtml);
    }
}
export default AppView;
