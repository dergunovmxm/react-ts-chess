import React, {FC} from 'react'
import { Cell } from '../models/Cell'

interface CellsProps {
  cell: Cell
}

const CellComponent: FC<CellsProps> = ({cell}) => {
  return (
    <div className={['cell', cell.color].join(' ')}>

      {cell.figure?.logo && <img src={cell.figure.logo} alt='image' />}
    </div>
  )
}

export default CellComponent