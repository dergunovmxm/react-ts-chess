import React, {FC} from 'react'
import { Cell } from '../models/Cell'

interface CellsProps {
  cell: Cell
}

const CellComponent: FC<CellsProps> = ({cell}) => {
  return (
    <div className={['cell', cell.color].join(' ')}></div>
  )
}

export default CellComponent