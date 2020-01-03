import React, { useState } from "react";
import {
    Input,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const Search = () => {
    const [searchValue, setSearchValue] = useState('');
    const classes = useStyles();

    return (
        <>
            <Input className={classes.searchBar} placeholder='Search...' onChange={(e) => setSearchValue(e.target.value)} value={searchValue} />
        </>
    );
};

const useStyles = makeStyles((theme) => ({
    searchBar: {
        margin: '20px 0 0 25px',
        width: '300px',
    }
}));

export default Search;