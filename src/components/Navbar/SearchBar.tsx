/*import React, {useEffect, useState} from "react";
import {
    Formik, FormikHelpers, FormikProps, Form, Field, FieldProps, useFormik,
} from 'formik';
import {IconButton, Paper} from "@mui/material";
import s from "./Navbar.module.css"
import {Search} from "@mui/icons-material";
import {useNavigate, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../types/hooks";
import {getSearchTerm} from "../../redux/videos_reducer";

interface MyFormValues {
    searchTerm: string;
}

export const SearchBar: React.FC<{}> = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const term = useAppSelector(state => state.videos.searchTerm)

    const [searchTerm, setSearchTerm] = useState(term)

useEffect(() => {
    if (searchTerm != term || '') {
        debugger
        dispatch(getSearchTerm(searchTerm))
        navigate(`/search/${searchTerm}`)
    }
}, [searchTerm])

    const formik = useFormik({
        initialValues: {searchTerm: ''},
        onSubmit: (values) => {
            console.log(values.searchTerm)
            setSearchTerm(values.searchTerm)
        },
    });

    console.log('refresh')

    return (
                <Paper
                    component='form'
                    className={s.paper}
                >
                    <input
                        id={'searchTerm'}
                        name={'searchTerm'}
                        className='search-bar'
                        placeholder={'Search...'}
                        value={formik.values.searchTerm}
                        onChange={formik.handleChange}
                    />
                    <IconButton
                        type={'submit'}
                        className={s.iconButton}
                        onClick={() => formik.handleSubmit()}
                    >
                        <Search />
                    </IconButton>
                </Paper>
    );
};*/

import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const onhandleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (searchTerm) {
            navigate(`/search/${searchTerm}`);

            setSearchTerm('');
        }
    };

    return (
        <Paper
            component='form'
            onSubmit={onhandleSubmit}
            sx={{
                borderRadius: 20,
                border: '1px solid #e3e3e3',
                pl: 2,
                boxShadow: 'none',
                mr: { sm: 5 },
            }}
        >
            <input
                className='search-bar'
                placeholder='Search...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <IconButton type='submit' sx={{ p: '10px', color: 'red' }} aria-label='search'>
                <SearchIcon />
            </IconButton>
        </Paper>
    );
};

export default SearchBar