import GameController from "./GameController";
import Board from "./Board";

const board = new Board();
board.init();

const game = new GameController();
game.init();