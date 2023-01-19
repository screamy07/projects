import React, {useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import {flightActions} from "../slice/slice";
import {useAppDispatch, useAppSelector} from "../hooks/reduxhooks";
import { Typography } from '@mui/material';

// @ts-ignore
const Detail = () => {
    const params = useParams()
    const {flight} = useAppSelector(state => state.flightReducer)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(flightActions.getById(params))
    }, [dispatch,params])
    return (
        <>
            <div className={'photo'}>
                <img className={'photo__img'} src={flight?.imageUrl} alt=""/>
            </div>
            <div className={'wrap'}>
                <div className={'box'}>
                    <Typography className={'box__title'}>{flight?.title}</Typography>
                    <Typography className={'box__text'}>{flight?.summary}</Typography>
                </div>
                <Link className={'link'} to={'/'} >Back to home page</Link>
            </div>
        </>
    );
}

export default Detail;