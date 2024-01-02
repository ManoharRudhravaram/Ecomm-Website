import { createContext, useContext } from 'react';
import LaptopArray from '../Assets/LaptopArray';
import MobileArray from '../Assets/MobileArray';
import WashingArray from '../Assets/WashingMachines';

 export  let DataContext = createContext()
 
function ProductContext({children}) {
  let Products=[...LaptopArray,...MobileArray,...WashingArray]
  return (
    <DataContext.Provider value={Products}>
        {children}
    </DataContext.Provider>
  )
}
 export let  useProduct =()=>{
  return useContext(DataContext)
 }
export default ProductContext;