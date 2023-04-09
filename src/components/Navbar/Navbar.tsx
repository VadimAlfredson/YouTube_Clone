import React from "react";
import {Stack} from "@mui/material";
import {logo} from "../../utils/constants";
import {Link} from 'react-router-dom'
import s from "./Navbar.module.css"
import SearchBar from "./SearchBar";

const Navbar: React.FC = () => {
    return <Stack
        sx={{
            zIndex: 5,
            position: 'static',
            background: '#000',
            top: 0,
            justifyContent: 'space-between'
        }}
        direction='row'
        alignItems='center'
        p={2}
    >
        <Link to='/' className={s.link}>
            <img src={logo} alt='logo' className={s.imgLogo}/>
        </Link>
        <SearchBar/>
    </Stack>
}

export default Navbar