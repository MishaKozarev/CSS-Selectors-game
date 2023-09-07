import ViewLevel from '../components/app/view/aside/viewLevel';
describe('test: function createLevel return HTMLButtonElement', () => {
    const viewLevel = new ViewLevel();
    const levelElement: HTMLParagraphElement = viewLevel.createLevel();
    const levels: HTMLParagraphElement = document.createElement('p');
    beforeEach(() => {
        levels.classList.add('aside__level-name');
    });
    it('return HTMLParagraphElement', () => {
        expect(levelElement).toStrictEqual(levels);
    });
});