import axios from "axios"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const userFunction = createAsyncThunk("userFunction ",          // Get JSON data
    async function functionThunk() {
        try {
            // const res = await axios.get(`https://fakestoreapi.com/users`);
            // dispatch(setUser({res}))
            const res = await fetch('https://fakestoreapi.com/users')
            const data = await res.json()
            return data
        }
        catch (Error) {
            console.log("Error")
        }
    })
export const postUserFunction = createAsyncThunk("postUserFunction",   // Post JSON data
    async function functionThunk(data) {
        const res = await fetch('https://fakestoreapi.com/users', {
            method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data)
        })
        try {
            const data = await res.json()
            return data
        }
        catch (Error) {
            console.log("Error")
        }
    })
export const deleteUserFunction = createAsyncThunk("deleteUserFunction",   
    async function functionThunk(val,{rejectWithValue}) {                       //Delete Json data
        // console.log("VAL",val.id)
        const response = await fetch(`https://fakestoreapi.com/users/${val.id}`, {method: "DELETE"});
        console.log("Res",response)
        try {
            const data = await response.json()
            return data
        }
        catch (Error) {
            console.log("Error")
        }
    })
    export const putUserFunction = createAsyncThunk("deleteUserFunction",   
    async function functionThunk(val,{rejectWithValue}) {
        // console.log("VAL",val.id)
        const response = await fetch(`http://localhost:3333/users/${val.id}`, {      //Put JSON data
            method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(val)
        })
        try {
            const data = await response.json()
            return data
        }
        catch (Error) {
            console.log("Error")
        }
    })
const userDataSlice = createSlice({
    name: "users",
    initialState: {
        data: []
    },
    extraReducers: {
        [userFunction.fulfilled]: (state, actions) => {
            state.data = actions.payload;
        },
        [postUserFunction.fulfilled]: (state, actions) => {
            state.data.push(actions.payload);
        }, [deleteUserFunction.fulfilled]: (state, actions) => {
            state.data= state.data.state.filter((item) => item.id !== actions.payload && item);
            console.log("Delete ActionPayload",actions.payload)
        }, [putUserFunction.fulfilled]: (state, actions) => {
            // state.data= state.data.filter((item) => item.id !== actions.payload.id);
            console.log("ActionPayload",actions.payload)
        }
    }
})
export default userDataSlice.reducer








