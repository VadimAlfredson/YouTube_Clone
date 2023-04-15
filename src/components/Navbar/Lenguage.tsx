import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import React, {useEffect, useState} from "react";
import LanguageIcon from '@mui/icons-material/Language';
import {useAppDispatch, useAppSelector} from "../../types/hooks";
import { getRegionCode } from "../../redux/videos_reducer";
import {regionCodeType} from "../../types/typesItems";


const Language: React.FC = () => {
    const dispatch = useAppDispatch()
    const regionCode = useAppSelector(state => state.videos.regionCode)

    useEffect(() => {
        setLanguage(regionCode)
    }, [regionCode])

    const [language, setLanguage] = useState(regionCode)

    let handleChange = (code: any) => {
        dispatch(getRegionCode(code.target.value))
        console.log(code.target.value)
    }
    return (<div style={{flexDirection: 'row'}}>
        <LanguageIcon sx={{width: '30px', height: '30px', color: 'white'}}/>
        <FormControl sx={{width: 'auto', height: '30px'}} color={"primary"} variant={'standard'} margin={'none'}>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={language}
                onChange={handleChange}
                sx={{color: 'white', ml: '5px'}}
            >
                <MenuItem value={'RU'}>Rus</MenuItem>
                <MenuItem value={'UK'}>UK</MenuItem>
                <MenuItem value={'US'}>US</MenuItem>
            </Select>
        </FormControl>
        </div>
    )
}

export default Language
