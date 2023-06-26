class Level {
    ASIDE: HTMLElement | null;
    LEVELS: NodeListOf<Element> | null;
    TABLE: HTMLElement | null;
    VIEWER: HTMLElement | null;
    constructor() {
        this.ASIDE = document.querySelector('.aside__container');
        this.LEVELS = document.querySelectorAll('.level');
        this.TABLE = document.querySelector('.table');
        this.VIEWER = document.querySelector('.viewer__description');
    }
    changeLevel() {
        this.ASIDE?.addEventListener('click', (event) => {
            if (this.LEVELS) {
                for (const item of this.LEVELS) {
                    item.classList.remove('active');
                }
            }
            if (event.target instanceof Element) {
                event.target.classList.add('active');
            }
        });
    }

    createItemInst(): HTMLElement {
        const instagram: HTMLElement = document.createElement('plate');
        instagram.classList.add('item-1');
        return instagram;
    }

    getId() {
        this.ASIDE?.addEventListener('click', (event) => {
            if (this.LEVELS) {
                if (event.target instanceof Element) {
                    const id = event.target.getAttribute('id');
                    console.log(id);
                    if (id === 'level-1') {
                        for (let i = 0; i < 2; i += 1) {
                            const inst = this.createItemInst();
                            this.TABLE?.append(inst);
                        }
                        if (this.VIEWER) {
                            this.VIEWER.innerText = '<div class="table"><plate></plate></div>';
                        }
                    }
                    return id;
                }
            }
        });
    }
}
export default Level;
