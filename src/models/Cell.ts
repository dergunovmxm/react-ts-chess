/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Board } from "./Board";
import { Colors } from "./Colors";
import { Figures } from "./figures/Figures";

export class Cell {
    readonly x: number;
    readonly y: number;
    readonly color: Colors;
    figure: Figures | null;
    board: Board;
    available: boolean;
    id: number;

    constructor(
        board:  Board,
        x: number,
        y: number,
        color: Colors,
        figure: Figures | null,
    ){
        this.board = board,
        this.x = x,
        this.y = y,
        this.color = color,
        this.figure = figure,
        this.available = false,
        this.id = Math.random()
    }
}