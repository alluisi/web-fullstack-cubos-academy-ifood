import { TextField, Button } from '@material-ui/core';
import useStyles from './style';

function SearchItem({ searchPokemon, setSearchPokemon, handleFindPokemon }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <TextField
                label="Search new pokemon"
                value={searchPokemon}
                onChange={e => setSearchPokemon(e.target.value)}
                variant="outlined"
            />
            <Button
                className={classes.button}
                variant="contained"
                onClick={handleFindPokemon}
                color="secondary"
            >
                Search
            </Button>
        </div>
    )
}

export default SearchItem;