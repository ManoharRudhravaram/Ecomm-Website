import React from 'react'
import { useFilter } from '../Context/FilterContext'

function FilterComp() {
  let { setFilterValue, allData ,filter:{maxPrice,price}} = useFilter();
  let temp = [...allData]
  function findData(arg) {
    let arr = temp.map((item) => {
      return item[arg];
    })
    let uniqueValue = ["ALL",...new Set(arr)]
    return uniqueValue;
  }
  let Category = findData('category')
  let Brand = findData('brand')

  return (
    <>
      <div className="m-5">
        <input type="text" name='text' onChange={(e) => {setFilterValue(e)}} placeholder='search product'/>
        <br /><br />
        <h4>Category</h4>
        {Category.map((item, i) => {
          return <div key={i}><button className='btn' onClick={(e) => { setFilterValue(e) }} name='category' value={item}>{item}</button></div>
        })}
        <br />
        <h4>Brand</h4>
        <select name="brand" onChange={(e)=>{setFilterValue(e)}}>{
          Brand.map((item,i)=>{
            return <option value={item} key={i}>{item}</option>
          })
        }</select>
      </div>
      <br />
      <h4>Price</h4>
      <input type="range" max={maxPrice}  name="price" value={price} onChange={(e)=>{setFilterValue(e)}}/>
      <br />
      {/* <button onClick={(e)=>{setFilterValue(e)}} className='btn' name='price' value='5000-10000'>5000-10000</button>
      <button onClick={(e)=>{setFilterValue(e)}} className='btn' name='price' value='10000-20000'>10000-20000</button>
      <button onClick={(e)=>{setFilterValue(e)}} className='btn' name='price' value='20000-30000'>20000-30000</button>
      <button onClick={(e)=>{setFilterValue(e)}} className='btn' name='price' value='30000-40000'>30000-40000</button>
      <button onClick={(e)=>{setFilterValue(e)}} className='btn' name='price' value='morethan50000'>more than 50000</button>
      <button onClick={(e)=>{setFilterValue(e)}} className='btn' value="clear">Clear</button> */}
    </>
  )
}

export default FilterComp