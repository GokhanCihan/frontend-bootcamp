import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { useNavigate } from 'react-router-dom';

export default function StarshipActionCard({starship, imgUrl}) {
  const navigate = useNavigate();

  return (
    <Card 
      variant="elevation" 
      sx={{ width: 350 }}
      onClick={() => navigate(`/starships/${detailUrl.slice(-2)}`)}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imgUrl}
          alt="starship"
        />
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
          <div className='info-container'>
            <Typography variant="string" align="left" sx={{ color: 'text.primary' }}>
              Model:
            </Typography>
            <Typography variant="string" align="left" sx={{ color: 'text.secondary' }}>
              {starship.model}
            </Typography>
          </div>
          <div className='info-container'>
            <Typography variant="string" align="left" sx={{ color: 'text.primary' }}>
              Hyperdrive:
            </Typography>
            <Typography variant="string" align="left" sx={{ color: 'text.secondary' }}>
              {starship.hyperdrive_rating}
            </Typography>
          </div>
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