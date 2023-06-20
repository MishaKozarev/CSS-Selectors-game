// export interface Param {
//     tag: string;
//     classNames: string[];
//     textContent: string;
// }
// export default class ElementCreator {
//     element: HTMLElement;
//     constructor(params: Param) {
//         this.element = document.createElement(params.tag);
//         this.createElement(params);
//     }
//     createElement(params: Param) {
//         this.setCSSClasses(params.classNames);
//         this.setTextContent(params.textContent);
//     }

//     getElement() {
//         return this.element;
//     }

//     setCSSClasses(cssClasses: string[]): void {
//         cssClasses.forEach((className) => this.element.classList.add(className));
//     }

//     setTextContent(text: string) {
//         this.element.textContent = text;
//     }
// }
