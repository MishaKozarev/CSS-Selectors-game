import './mainHelp.css';

enum text {
    btnOpen = 'Help, I`am stack!',
    title = "No worries, you've got this!",
    text = "You're about to learn CSS Selectors! Selectors are how you pick which element to apply styles to.",
    subtitle = 'Exhibit 1 - A CSS Rule',
    example = 'p{margin-bottom: 12px;}',
    description = "Here, the 'p' is the selector (selects all <p> elements) and applies the margin-bottom style.To play, type in a CSS selector in the editor below to select the correct items on the table.If you get it right, you'll advance to the next level.Hover over the items on the table to see their HTML markup.Get help with selectors on the right! →",
    close = 'Ok,got it!',
}

class MainHelp {
    private mainHelp: HTMLElement;
    constructor() {
        this.mainHelp = document.createElement('div');
    }

    createBtnOpen(): HTMLElement {
        const btnOpen: HTMLElement = document.createElement('button');
        btnOpen.classList.add('help__btn-open');
        btnOpen.innerText = text.btnOpen;
        return btnOpen;
    }

    createBtnClose(): HTMLElement {
        const popupBtnClose: HTMLElement = document.createElement('button');
        popupBtnClose.classList.add('popup__btn-close');
        popupBtnClose.innerText = text.close;
        return popupBtnClose;
    }

    createPopupTitle(): HTMLElement {
        const popupTitle: HTMLElement = document.createElement('h3');
        popupTitle.classList.add('popup__title');
        popupTitle.innerText = text.title;
        return popupTitle;
    }

    createPopupText(): HTMLElement {
        const popupText: HTMLElement = document.createElement('p');
        popupText.classList.add('popup__text');
        popupText.innerText = text.text;
        return popupText;
    }

    createPopupSubtitle(): HTMLElement {
        const popupSubtitle: HTMLElement = document.createElement('h4');
        popupSubtitle.classList.add('popup__subtitle');
        popupSubtitle.innerText = text.subtitle;
        return popupSubtitle;
    }

    createPopupExample(): HTMLElement {
        const popupExample: HTMLElement = document.createElement('pre');
        popupExample.classList.add('popup__example');
        popupExample.innerText = text.example;
        return popupExample;
    }
    createPopupDescription(): HTMLElement {
        const popupDescription: HTMLElement = document.createElement('p');
        popupDescription.classList.add('popup__description');
        popupDescription.innerText = text.description;
        return popupDescription;
    }

    createPopup(): HTMLElement {
        const popup: HTMLElement = document.createElement('div');
        popup.classList.add('popup');
        return popup;
    }

    addMainHelpClass() {
        this.mainHelp.classList.add('help');
    }

    render() {
        const popup = this.createPopup();
        const btnOpen = this.createBtnOpen();
        const popupTitle = this.createPopupTitle();
        const popupText = this.createPopupText();
        const popupSubtitle = this.createPopupSubtitle();
        const popupExample = this.createPopupExample();
        const popupDescription = this.createPopupDescription();
        const popupBtnClose = this.createBtnClose();
        popup.append(popupTitle, popupText, popupSubtitle, popupExample, popupDescription, popupBtnClose);
        this.mainHelp.append(btnOpen, popup);
        this.addMainHelpClass();
        btnOpen.addEventListener('click', () => {
            popup.style.display = 'block';
        });
        popupBtnClose.addEventListener('click', () => {
            popup.style.display = 'none';
        });
        return this.mainHelp;
    }
}
export default MainHelp;
