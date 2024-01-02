

function FilterReducer(state, action) {

    switch (action.type) {
        case "SORT_VALUE":
            return { ...state, sorting: action.payload }

        case "SET_SORTING_DATA":
            let x = [...action.payload]
            let newData;
            function sortingValue(a, b) {
                if (state.sorting == "lowest") {
                    return a.price - b.price;
                }
                if (state.sorting == "highest") {
                    return b.price - a.price;
                }
                if (state.sorting == "A_Z") {
                    return a.title
                        .trim()
                        .toUpperCase()
                        .localeCompare(b.title.trim().toUpperCase());
                }
                if (state.sorting == "Z_A") {
                    return b.title
                        .trim()
                        .toUpperCase()
                        .localeCompare(a.title.trim().toUpperCase());
                }
            }
            newData = x.sort(sortingValue);
            return { ...state, sorted: newData }

        case "SET_FILTER_VALUE":
            let { name, value } = action.payload.target;
            return { ...state, filter: { ...state.filter, [name]: value, valueBtn : value } }

        case "SET_FILTER_DATA":
            let y = action.payload.map((data) => {
                return data.price;
            })
            let maxRate = Math.max(...y)
            return {
                ...state,
                allData: [...action.payload],
                sorted: [...action.payload],
                filter: { ...state.filter, price: maxRate, maxPrice: maxRate }
            }

        case "FILTERATION":
            let arr = [...state.allData];
            if (state.filter.text) {
                arr = arr.filter((item) => {
                    return item.title.trim().toUpperCase().includes(state.filter.text.toUpperCase())
                })
            }
            if (state.filter.category) {
                arr = arr.filter((item) => {
                    if (state.filter.category == item.category) {
                        return item
                    }
                    else if (state.filter.category == 'ALL') {
                        return item
                    }
                })
            }
            if (state.filter.brand) {
                arr = arr.filter((item) => {
                    if (state.filter.brand == item.brand) {
                        return item
                    }
                    else if (state.filter.brand == 'ALL') {
                        return item
                    }
                })
            }
            if(state.filter.price){
                arr=arr.filter((item)=>{
                    return item.price<=state.filter.price
                })
            }
            // if (state.filter.valueBtn) {
            //     arr = arr.filter((item) => {
            //         if (state.filter.valueBtn === "5000-10000") {
            //             return item.price <= 10000
            //         }
            //         else if (state.filter.valueBtn === '10000-20000') {
            //             return item.price <= 20000
            //         }
            //         else if (state.filter.valueBtn === '20000-30000') {
            //             return item.price <= 30000
            //         }
            //         else if (state.filter.valueBtn === '30000-40000') {
            //             return item.price <= 40000
            //         }
            //         else if (state.filter.valueBtn === '40000-50000') {
            //             return item.price <= 50000
            //         }
            //         else if(state.filter.valueBtn==='morethan50000'){
            //             return item.price > 50000
            //         }
            //         else if(state.filter.valueBtn==='clear'){
            //             return item
            //         }
            //     })
            // }
            return { ...state, sorted: arr }

        default:
            return state;
    }
}

export default FilterReducer