import data from '../../game/control/data';

class ViewText {
    VIEWER: HTMLElement | null;
    constructor() {
        this.VIEWER = document.querySelector('.viewer__description');
    }
    createText(index: number) {
        const last: string | null = localStorage.getItem('last');
        const str: string = data.level_viewer[index];
        str.match(/<(.*?)>/g);
        console.log(Array.from(str.matchAll(/<(.*?)>/g)));
        const arrViewer: string[] = data.level_viewer[index].split('\n');
        const arrViewerNumber: number = arrViewer.length;
        if (this.VIEWER) {
            this.VIEWER.innerText = '';
            for (let i = 0; i < arrViewerNumber; i += 1) {
                const VIEWER_TEXT = document.createElement('div');
                VIEWER_TEXT.setAttribute('id', `${i + 1}`);
                VIEWER_TEXT.classList.add('viewer_html-code');
                this.VIEWER?.append(VIEWER_TEXT);
                VIEWER_TEXT.append(arrViewer[i]);
                if (last === '1' || last === '2' || last === '3') {
                    if (
                        VIEWER_TEXT.getAttribute('id') === '2' ||
                        VIEWER_TEXT.getAttribute('id') === '3' ||
                        VIEWER_TEXT.getAttribute('id') === '4'
                    ) {
                        VIEWER_TEXT.style.marginLeft = '20px';
                    }
                }
                if (last === '4' || last === '5') {
                    if (
                        VIEWER_TEXT.getAttribute('id') === '2' ||
                        VIEWER_TEXT.getAttribute('id') === '4' ||
                        VIEWER_TEXT.getAttribute('id') === '5' ||
                        VIEWER_TEXT.getAttribute('id') === '7'
                    ) {
                        VIEWER_TEXT.style.marginLeft = '20px';
                    } else if (VIEWER_TEXT.getAttribute('id') === '3' || VIEWER_TEXT.getAttribute('id') === '6') {
                        VIEWER_TEXT.style.marginLeft = '40px';
                    }
                }
                if (last === '6' || last === '7' || last === '8' || last === '9' || last === '10') {
                    if (
                        VIEWER_TEXT.getAttribute('id') === '2' ||
                        VIEWER_TEXT.getAttribute('id') === '4' ||
                        VIEWER_TEXT.getAttribute('id') === '5' ||
                        VIEWER_TEXT.getAttribute('id') === '7' ||
                        VIEWER_TEXT.getAttribute('id') === '8' ||
                        VIEWER_TEXT.getAttribute('id') === '10'
                    ) {
                        VIEWER_TEXT.style.marginLeft = '20px';
                    } else if (
                        VIEWER_TEXT.getAttribute('id') === '3' ||
                        VIEWER_TEXT.getAttribute('id') === '6' ||
                        VIEWER_TEXT.getAttribute('id') === '9'
                    ) {
                        VIEWER_TEXT.style.marginLeft = '40px';
                    }
                }
            }
        }
    }
}
export default ViewText;
