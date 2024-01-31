export default class GameController {
    constructor() {
        this.interval;
        this.countWins = 0;
        this.countMovesOfGoblin = 0;
        this.cellOfGoblin;
        
    }

    init() {
        this.interval = setInterval(this.moveGoblin.bind(this),1000);
    }

    moveGoblin() {
        const arrayItems = document.querySelectorAll('.item');
        for(let i = 0; i < arrayItems.length; i++) {
            arrayItems[i].classList.remove('goblin');
        }
        const randomIndex = Math.floor(Math.random() * arrayItems.length);
        arrayItems[randomIndex].classList.add('goblin');
        this.cellOfGoblin = arrayItems[randomIndex];
        this.countMovesOfGoblin++;
        this.registerListeners(this.cellOfGoblin);
        if (this.countMovesOfGoblin == 5) {
            this.countMovesOfGoblin = 0;
            this.countWins = 0;
            clearInterval(this.interval);
            this.removeListeners(this.cellOfGoblin);
            alert('You Failed');
            this.init();
        }
    }

    registerListeners(goblin) {
        goblin.addEventListener('click', () => {
            // if (goblin.classList.contains('goblin')) {
                this.countWins++;
                if (this.countWins == 5) {
                    this.countMovesOfGoblin = 0;
                    this.countWins = 0;
                    this.removeListeners(this.cellOfGoblin);
                    clearInterval(this.interval);
                    alert('You Won!!!');
                    this.init();
                }
            // }
            return;
        }, {once: true});
        goblin.addEventListener('mouseenter', () => {
            if (goblin.classList.contains('goblin')) {
                goblin.classList.add('cursored')
            }
        });
        goblin.addEventListener('mouseleave', () => {
            goblin.classList.remove('cursored')
        });
    }

    removeListeners(goblin) {
        goblin.removeEventListener('click', () => {
            if (goblin.classList.contains('goblin')) {
                this.countWins++;
                if (this.countWins == 5) {
                    this.countMovesOfGoblin = 0;
                    this.countWins = 0;
                    clearInterval(this.interval);
                    alert('You Won!!!');
                    this.init();
                }
            }
        });
        goblin.removeEventListener('mouseenter', () => {
            if (goblin.classList.contains('goblin')) {
                goblin.classList.add('cursored')
            }
        });
        goblin.removeEventListener('mouseleave', () => {
            goblin.classList.remove('cursored')
        });
    }
}