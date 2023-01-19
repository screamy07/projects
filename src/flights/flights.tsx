import {FC, ReactNode, useEffect, useMemo, useState} from "react";
import {flightService} from "../services/flight.service";
import {IFlight} from "../interfaces/flight.interface";
import {Flight} from "./flight";
import {useAppDispatch, useAppSelector} from "../hooks/reduxhooks";
import {flightActions} from "../slice/slice";

export interface IProps{
    search:any;
    setCount: any;
}

const Flights:FC<IProps> = ({search,setCount}) => {
    const {flights} = useAppSelector(state => state.flightReducer)
    const dispatch = useAppDispatch()

    const filter = flights.filter(val => val?.summary.toUpperCase().includes(search?.toUpperCase()) || val?.title.toUpperCase().includes(search?.toUpperCase())  || !search )

    useEffect(() => {
        dispatch(flightActions.getAll())
    }, [dispatch,search])

    useEffect(()=>{
        setCount(filter.length)
    },[flights])

    // @ts-ignore
    return(
        <>
            {filter.map(flight => <Flight flight={flight} search={search}/>)}
        </>
    )
}
export {
    Flights
}