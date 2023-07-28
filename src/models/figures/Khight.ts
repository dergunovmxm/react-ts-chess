import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figures, FiguresName } from "./Figures";

import black from '../../assets/black-knight.png'
import white from '../../assets/white-knight.png'

export class Knight extends Figures{
    constructor(color: Colors, cell: Cell){
        super(color, cell);
        this.logo = color === Colors.BLACK ? black : white;
        this.name = FiguresName.BISHOP;
    }
    canMove(target: Cell): boolean {
        if(!super.canMove(target)){
            return false
        }
        const dx = Math.abs(this.cell.x - target.x)        
        const dy = Math.abs(this.cell.y - target.y)        
        return (dx === 1 && dy === 2) || (dx === 2 && dy === 1)
    }
}