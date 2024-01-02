import { createContext, useContext, useEffect, useReducer } from 'react';
import {useProduct} from '../Context/ProductContext';
import reducer from '../Reducer/FilterReducer';

let FilterContextData=createContext()
function FilterContext({children}) {

 let Data = useProduct();
 
 let initialValue={
     allData:[],
     sorted:[],
     sorting:'LOW',
     filter:{text:'',price:'',category:'',brand:'',maxPrice:"",valueBtn:""}
    }
    
    let [state,dispatch] = useReducer(reducer,initialValue)
    
    function setSorting(e){
        dispatch({type:"SORT_VALUE",payload:e.target.value})
    }

    function setFilterValue(e){
        dispatch({type:"SET_FILTER_VALUE",payload:e})
    }

    useEffect(()=>{
        dispatch({type:"SET_SORTING_DATA",payload:Data})
    },[state.sorting])

    useEffect(()=>{
        dispatch({type:"SET_FILTER_DATA",payload:Data})
    },[Data])

    useEffect(()=>{
        dispatch({type:"FILTERATION"})
    },[state.filter])
    return(
        <FilterContextData.Provider value={{...state,setSorting,setFilterValue}}>
            {children}
        </FilterContextData.Provider>
    )
}
    export let useFilter=()=>{
        return useContext(FilterContextData)
    }

export default FilterContext