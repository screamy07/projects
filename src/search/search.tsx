import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import {useAppSelector} from "../hooks/reduxhooks";
import {FC} from "react";

interface IProps {
    setSearch: any
    count: any
}

export const Search:FC<IProps> = ({setSearch,count}) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };
    console.log(count);
    return (
        <div className={"search"}>
            <div className={"search_text"}>Filter by keywords</div>
            <Stack spacing={2} sx={{ width: 600, height: 50} }>
                <TextField onChange={handleChange} label="Search"/>
            </Stack>
            <Typography style={{fontWeight:'700', marginTop:'40px'}}>
                Results:{count}
            </Typography>
            <hr className={'line'}/>
        </div>
    );
}

