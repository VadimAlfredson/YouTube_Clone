import React from "react";
import {IconButton, Paper} from "@mui/material";
import s from "./Navbar.module.css"
import {Search} from "@mui/icons-material";
const SearchBar = () => {
    return <Paper
    component='form'
    onSubmit={() => {}}
    className={s.paper}
    >
        <input
        className='search-bar'
        placeholder='Search...'
        value=''
        onChange={() => {}}
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