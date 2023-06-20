import './level.css';
import logoLevel from './img/mark.png';
import imgPrev from './img/prev.png';
import imgNext from './img/next.png';
import imgBurger from './img/burger.png';

class Level {
    private level: HTMLElement;
    constructor() {
        this.level = document.createElement('div');
    }
    addLevelClass() {
        this.level.classList.add('level');
    }

    private createLevelTitle(text: string): HTMLElement {
        const levelTitle: HTMLElement = document.createElement('h2');
        levelTitle.classList.add('level__title');
        levelTitle.innerText = text;
        return levelTitle;
    }

    private createLevelMark(): HTMLElement {
        const headerLogo: HTMLElement = document.createElement('div');
        headerLogo.classList.add('level__mark');
        headerLogo.style.backgroundImage = `url(${logoLevel})`;
        return headerLogo;
    }

    private createBtnPrev(): HTMLElement {
        const prev: HTMLElement = document.createElement('div');
        prev.classList.add('level__btn');
        prev.style.backgroundImage = `url(${imgPrev})`;
        return prev;
    }

    private createBtnNext(): HTMLElement {
        const next: HTMLElement = document.createElement('div');
        next.classList.add('level__btn');
        next.style.backgroundImage = `url(${imgNext})`;
        return next;
    }

    private createBtnBurger(): HTMLElement {
        const burger: HTMLElement = document.createElement('div');
        burger.classList.add('level__btn');
        burger.style.backgroundImage = `url(${imgBurger})`;
        return burger;
    }

    render() {
        const title = this.createLevelTitle('Level 1 of 32');
        const mark = this.createLevelMark();
        const prevBtn = this.createBtnPrev();
        const nextBtn = this.createBtnNext();
        const burgerBtn = this.createBtnBurger();
        this.level.append(title, mark, prevBtn, nextBtn, burgerBtn);
        this.addLevelClass();
        return this.level;
    }
}
export default Level;
