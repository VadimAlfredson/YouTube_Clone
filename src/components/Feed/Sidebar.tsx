import React from "react";
import {Stack} from "@mui/material";
import {categories} from "../../utils/constants";

const Sidebar = () => {
    return (
        <Stack>
            {categories.map((category) => (
                <button></button>
            ))}
        </Stack>
    )
}