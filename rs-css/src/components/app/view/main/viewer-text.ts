import data from '../../game/control/data';

class ViewText {
    VIEWER: HTMLElement | null;
    constructor() {
        this.VIEWER = document.querySelector('.viewer__description');
    }
    createText(index: number): void {
        const last: string | null = localStorage.getItem('last');
        const arrViewer: string[] = data.level_viewer[index].split('\n');
        const arrViewerNumber: number = arrViewer.length;
        if (this.VIEWER) {
            this.VIEWER.innerText = '';
            for (let i = 0; i < arrViewerNumber; i += 1) {
                const VIEWER_TEXT: HTMLDivElement = document.createElement('div');
                VIEWER_TEXT.setAttribute('id', `${i + 1}`);
                VIEWER_TEXT.classList.add('viewer_html-code');
                this.VIEWER?.append(VIEWER_TEXT);
                VIEWER_TEXT.append(arrViewer[i]);
                const idViewerText = VIEWER_TEXT.getAttribute('id');
                if (last === '1' || last === '2' || last === '3') {
                    if (idViewerText === '2' || idViewerText === '3' || idViewerText === '4') {
                        VIEWER_TEXT.style.marginLeft = '20px';
                    }
                }
                if (last === '4' || last === '5') {
                    if (idViewerText === '2' || idViewerText === '4' || idViewerText === '5' || idViewerText === '7') {
                        VIEWER_TEXT.style.marginLeft = '20px';
                    } else if (idViewerText === '3' || idViewerText === '6') {
                        VIEWER_TEXT.style.marginLeft = '40px';
                    }
                }
                if (last === '6' || last === '7' || last === '8' || last === '9' || last === '10') {
                    if (
                        idViewerText === '2' ||
                        idViewerText === '4' ||
                        idViewerText === '5' ||
                        idViewerText === '7' ||
                        idViewerText === '8' ||
                        idViewerText === '10'
                    ) {
                        VIEWER_TEXT.style.marginLeft = '20px';
                    } else if (idViewerText === '3' || idViewerText === '6' || idViewerText === '9') {
                        VIEWER_TEXT.style.marginLeft = '40px';
                    }
                }
            }
        }
    }
}
export default ViewText;
