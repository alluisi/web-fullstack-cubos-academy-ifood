import useStyles from './style';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

function CustomCard({ name, abilities, image }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader title={name} className={classes.cardHeader} />
      <CardMedia
        component="img"
        className={classes.media}
        image={image}
        title={name}
      />
      <CardContent>
        <Typography variant="h6" >
          Habilidades
        </Typography>
        {abilities && abilities.map(item => (
          <Typography variant="body2" key={item.ability.name} color="textSecondary" component="p" >
            {item.ability.name}
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
}

export default CustomCard;