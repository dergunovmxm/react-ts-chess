import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figures, FiguresName } from "./Figures";

import black from '../../assets/black-rook.png'
import white from '../../assets/white-rook.png'

export class Rook extends Figures{
    constructor(color: Colors, cell: Cell){
        super(color, cell);
        this.logo = color === Colors.BLACK ? black : white;
        this.name = FiguresName.BISHOP;
    }
}