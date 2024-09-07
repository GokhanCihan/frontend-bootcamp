import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { useNavigate } from 'react-router-dom';
import { Divider } from '@mui/material';
import { useContext } from 'react';
import StarshipContext from '../../Context/StarshipContext';

export default function StarshipActionCard({starship}) {
  const { setDetailUrl } = useContext(StarshipContext);
  const navigate = useNavigate();

  const handleClick = () => {
    setDetailUrl(starship.url);
    navigate(`/starships/${starship.url.slice(-2)}`);
  }

  return (
    <Card 
      variant="elevation" 
      sx={{ width: 350 }}
      onClick={handleClick}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          alt="starship"
        />
        <Divider />
        <CardContent>
          <Typography gutterBottom variant="subtitle1" component="div">
            {starship.name}
          </Typography>
          <div className='info-container'>
            <Typography variant="string" align="left" sx={{ color: 'text.primary' }}>
              Class:
            </Typography>
            <Typography variant="string" align="left" sx={{ color: 'text.secondary' }}>
              {starship.starship_class}
            </Typography>
          </div>
          <Divider />
          <div className='info-container'>
            <Typography variant="string" align="left" sx={{ color: 'text.primary' }}>
              Model:
            </Typography>
            <Typography variant="string" align="left" sx={{ color: 'text.secondary' }}>
              {starship.model}
            </Typography>
          </div>
          <Divider />
          <div className='info-container'>
            <Typography variant="string" align="left" sx={{ color: 'text.primary' }}>
              Hyperdrive:
            </Typography>
            <Typography variant="string" align="left" sx={{ color: 'text.secondary' }}>
              {starship.hyperdrive_rating}
            </Typography>
          </div>
          <Divider />
          <div className='info-container'>
            <Typography variant="string" align="left" sx={{ color: 'text.primary' }}>
              Manufacturer:
            </Typography>
            <Typography variant="string" align="left" sx={{ color: 'text.secondary' }}>
              {starship.manufacturer}
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}