export default class Board {
    constructor() {
        this.body = document.querySelector('body');
        this.board = document.createElement('ul');
    }

    init() {
        this.board.classList.add('board');
        this.body.appendChild(this.board);
        let i = 0;
        while (i < 16) {
            const item = document.createElement('il');
            item.classList.add('item');
            this.board.appendChild(item);
            i++;
        }
    }
}