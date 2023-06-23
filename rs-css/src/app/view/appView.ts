class AppView {
    private body: HTMLElement;
    constructor() {
        this.body = document.body;
    }
    run() {
        console.log(this.body);
    }
}
export default AppView;
