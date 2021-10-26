import TextField from '@material-ui/core/TextField';

// TÓPICO 9 INACABADO
// import { makeStyles } from '@material-ui/core/styles';
// const useStyles = makeStyles((theme) => ({
//     root: {
//         '& .MuiTextField-root': {
//             margin: theme.spacing(1),
//             width: '25ch',
//         },
//     },
// }));
// export default function CustomTextField() {
//     const classes = useStyles();
//     return (
//         <form className={classes.root} noValidate autoComplete="off">
//             <div>
//                 <TextField required id="standard-required" label="Required" defaultValue="Hello World" />
//             </div>
//         </form>
//     );
// }

// TÓPICO 7
function CustomTextField() {
    return (
        <>
            <TextField id="standard-basic" label="Standard" />
            <TextField id="filled-basic" label="Filled" variant="filled" />
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </>
    )
}

export default CustomTextField;