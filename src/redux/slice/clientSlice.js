import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 clients: [],
}

export const clientSlice = createSlice({
    name: 'client',
    initialState,
    reducers: {
     addclient: (state, action) => { 
     state.clients.push(action.payload);
    },

        
    }
})

// Action creators are generated for each case reducer function
export const {  addclient } = clientSlice.actions

export default clientSlice.reducer