import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figures, FiguresName } from "./Figures";

import black from '../../assets/black-king.png'
import white from '../../assets/white-king.png'

export class King extends Figures{
    constructor(color: Colors, cell: Cell){
        super(color, cell);
        this.logo = color === Colors.BLACK ? black : white;
        this.name = FiguresName.BISHOP;
    }

    canMove(target: Cell): boolean {
        if(!super.canMove(target)){
            return false
        }
        return true
    }
}