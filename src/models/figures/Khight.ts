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
}