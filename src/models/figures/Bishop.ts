import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figures, FiguresName } from "./Figures";

import black from '../../assets/black-bishop.png'
import white from '../../assets/white-bishop.png'


export class Bishop extends Figures{
    constructor(color: Colors, cell: Cell){
        super(color, cell);
        this.logo = color === Colors.BLACK ? black : white;
        this.name = FiguresName.BISHOP;
    }

    canMove(target: Cell): boolean {
        if(!super.canMove(target)){
            return false
        }
        if (this.cell.isEmptyDiagonal(target)){
            return true
        }
        return false
    }
}