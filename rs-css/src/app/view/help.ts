class Help {
    BTN_HELP_OPEN: HTMLElement | null;
    BTN_HELP_CLOSE: HTMLElement | null;
    HELP_POPUP: HTMLElement | null;
    constructor() {
        this.BTN_HELP_OPEN = document.querySelector('.help__btn-open');
        this.BTN_HELP_CLOSE = document.querySelector('.help__btn-close');
        this.HELP_POPUP = document.querySelector('.help');
    }
    openHelp() {
        this.BTN_HELP_OPEN?.addEventListener('click', () => {
            if (this.HELP_POPUP) this.HELP_POPUP.style.display = 'block';
        });
    }

    closeHelp() {
        this.BTN_HELP_CLOSE?.addEventListener('click', () => {
            if (this.HELP_POPUP) this.HELP_POPUP.style.display = 'none';
        });
    }
}
export default Help;
