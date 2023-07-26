import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figures, FiguresName } from "./Figures";

import black from '../../assets/black-queen.png'
import white from '../../assets/white-queen.png'

export class Queen extends Figures{
    constructor(color: Colors, cell: Cell){
        super(color, cell);
        this.logo = color === Colors.BLACK ? black : white;
        this.name = FiguresName.BISHOP;
    }
}