import React from 'react'
import '../Css/SortingComp.css'
import { useFilter } from '../Context/FilterContext'

function SortComp() {

  let { setSorting,sorted } = useFilter()
  return (
    <>
      <div className="main mt-4">
        <h4>Products Available : {sorted.length}</h4>
        <select onChange={(e) => { setSorting(e) }}>
        <option value="lowest">Lowest</option>
            <option disabled></option>
            <option value="highest">Highest</option>
            <option disabled></option>
            <option value="A_Z">A_Z</option>
            <option disabled></option>
            <option value="Z_A">Z_A</option>
        </select>
      </div>
    </>
  )
}

export default SortComp