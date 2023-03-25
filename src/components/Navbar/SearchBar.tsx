import React, {useState} from "react";
import {
    Formik, FormikHelpers, FormikProps, Form, Field, FieldProps, useFormik,
} from 'formik';
import {IconButton, Paper} from "@mui/material";
import s from "./Navbar.module.css"
import {Search} from "@mui/icons-material";
import {useNavigate, useParams} from "react-router-dom";
/*
const SearchBar = () => {
    const navigate = useNavigate()

    const [searchTerm, setSearchTerm] = useState('')
const handleSubmit = (event) => {
        event.preventDefault();
}

if (searchTerm){
    navigate(`/search/${searchTerm}`)
    setSearchTerm('')
}
    return <Paper
    component='form'
    onSubmit={handleSubmit}
    className={s.paper}
    >
        <input
        className='search-bar'
        placeholder='Search...'
        value={searchTerm}
        onChange={(event) => {setSearchTerm(event.target.value)}}
        />
        <IconButton
        type='submit'
        className={s.iconButton}
        >
        <Search />
        </IconButton>

    </Paper>
}

export default SearchBar

*/


interface MyFormValues {
    searchTerm: string;
}

export const SearchBar: React.FC<{}> = () => {
    const navigate = useNavigate()
    const [searchTerm, setSearchTerm] = useState('')


    if (!!searchTerm){
        navigate(`/search/${searchTerm}`)
        setSearchTerm('')
    }

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
};

export default SearchBar