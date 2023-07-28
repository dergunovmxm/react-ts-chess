import { Colors } from "../Colors";
import logo from '../../assets/black-king.png'
import { Cell } from "../Cell";

export enum FiguresName{
    FIGURE = 'Фигура',
    KING = 'Король',
    KHIGHT = 'Конь',
    PAWN = 'Пешка',
    QUEEN = 'Ферзь',
    ROOK = 'Ладья',
    BISHOP = 'Слон',

}

export class Figures {
    color: Colors;
    logo: typeof logo | null;
    cell: Cell;
    name: FiguresName; 
    id: number;

    constructor(color: Colors, cell: Cell){
        this.cell = cell;
        this.color = color;
        this.cell.figure = this;
        this.logo = null;
        this.name = FiguresName.FIGURE;
        this.id = Math.random()
    }

    canMove(target: Cell) : boolean{
        return true
    }

    moveFigure(target: Cell){
        
    }
}