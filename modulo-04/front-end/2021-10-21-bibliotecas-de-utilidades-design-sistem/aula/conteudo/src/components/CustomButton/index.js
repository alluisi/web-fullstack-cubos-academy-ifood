import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';

function CustomButton() {
    return (
        <>
            <Button
                variant="outlined"
                color="primary"
                size="large"
                startIcon={<DeleteIcon />}
                endIcon={<AddIcon />}
                fullWidth={false}
            >
                Primary
            </Button>
            {/* TÓPICO 7
            <Button variant="contained" color="primary">Primary</Button>
            <Button variant="contained" color="secondary">Secondary</Button>
            <Button variant="contained" disadled>Disabled</Button>
            <Button variant="contained" color="primary" href="#contained-buttons">Link</Button> */}
        </>
    )
}

export default CustomButton;