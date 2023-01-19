import {IFlight} from "../interfaces/flight.interface";
import {AxiosError} from "axios";
import {flightService} from "../services/flight.service";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

interface IState{
    flights:IFlight[];
    flight: IFlight | null;
}
const initialState:IState = {
    flights:[],
    flight: null
}

const getAll = createAsyncThunk<IFlight[], void>(
    'userSlice/getAll',
    async (_ , {rejectWithValue}) => {
        try {
            const {data} = await flightService.getAll()
            return data
        }catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)

const flightSlice = createSlice({
    name:'flightSlice',
    initialState,
    reducers: {

    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.flights = action.payload
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.flight = action.payload
            })
})
const filter = createSlice({
    name:'filterSlice',
    initialState,
    reducers: {

    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.flights = action.payload
            })
})


const getById = createAsyncThunk(
    'userSlice/getById',
    async ({id}:any, {rejectWithValue}) => {
        try {
            const {data} = await flightService.getFlight(id)
            // console.log(data);
            return data
        }catch (e) {
            // @ts-ignore
            return rejectWithValue(e.response.data)
        }
    }
)

const {reducer:flightReducer} = flightSlice
const flightActions = {
    getAll,getById
}
export {
    flightActions,
    flightReducer
}