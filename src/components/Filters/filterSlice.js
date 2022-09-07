// Redux core
// const initState = {
//     search: '',
//     status: '',
//     priorities: [],
// };

// const flitersReducer = (state = initState, action) => {
//     switch (action.type) {
//         case 'filters/searchFilterChange':
//             return {
//                 ...state,
//                 search: action.payload
//             };

//         case 'filters/statusFilterChange':
//             return {
//                 ...state,
//                 status: action.payload
//             }
//         default:
//             state;
//     }
// };
 
import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
    name: 'filters',
    initialState: {
        search: '',
        status: 'All',
        priorities: [],
    },
    reducers: {
        searchFilterChange: (state, action) => {
            // mutation : giong thao tac truc tiep  || IMMER ( tim hieu)
            state.search = action.payload;
        }, // => { type: 'filters/searchFilterChange'}
        statusFilterChange: (state, action) => {
            state.status = action.payload;
        },
        prioritiesFilterChange: (state, action) => {
            state.priorities = action.payload;
        },
    }
});