import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
    Input,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { search } from '../store/action';

const Search = ({ searchType }) => {
    const [searchValue, setSearchValue] = useState('');
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(search(searchType, searchValue));
    }, [searchValue]);

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