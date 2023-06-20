import './display.css';

class Display {
    private display: HTMLElement;
    constructor() {
        this.display = document.createElement('div');
    }
    addLevelClass() {
        this.display.classList.add('display');
    }
    render() {
        this.addLevelClass();
        return this.display;
    }
}
export default Display;
