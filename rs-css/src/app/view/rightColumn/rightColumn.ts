import './rightColumn.css';
import Level from './level/level';
import Display from './display/display';

class RightColumn {
    private rightColumn: HTMLElement;
    private level: Level;
    private display: Display;

    constructor() {
        this.rightColumn = document.createElement('div');
        this.level = new Level();
        this.display = new Display();
    }
    addRightColumnClass() {
        this.rightColumn.classList.add('right-column');
    }
    render() {
        const levelHtml = this.level.render();
        const displayHtml = this.display.render();
        this.rightColumn.append(levelHtml, displayHtml);
        this.addRightColumnClass();
        return this.rightColumn;
    }
}
export default RightColumn;
