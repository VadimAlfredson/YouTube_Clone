import React from "react";
import {Stack} from "@mui/material";
import {Link} from 'react-router-dom'
import s from "./Navbar.module.css"
import SearchBar from "./SearchBar";
import Language from "./Lenguage";

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
            <div className={s.redBoxLogo}>
                <div className={s.whiteBoxLogo}>
                    <div className={s.whiteLogo}/>
                </div>
            </div>

        </Link>
        <SearchBar/>
        <Language />
    </Stack>
}

export default Navbar