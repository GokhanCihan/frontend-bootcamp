import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function StarshipActionCard({ name, model, shipClass, hpRating, manufacturer, imgUrl, detailUrl}) {
  return (
    <Card variant="elevation" sx={{ width: 350 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imgUrl}
          alt="starship"
        />
        <CardContent>
          <Typography gutterBottom variant="subtitle1" component="div">
            {name}
          </Typography>
          <div className='info-container'>
            <Typography variant="string" align="left" sx={{ color: 'text.primary' }}>
              Class:
            </Typography>
            <Typography variant="string" align="left" sx={{ color: 'text.secondary' }}>
              {shipClass}
            </Typography>
          </div>
          <div className='info-container'>
            <Typography variant="string" align="left" sx={{ color: 'text.primary' }}>
              Model:
            </Typography>
            <Typography variant="string" align="left" sx={{ color: 'text.secondary' }}>
              {model}
            </Typography>
          </div>
          <div className='info-container'>
            <Typography variant="string" align="left" sx={{ color: 'text.primary' }}>
              Hyperdrive:
            </Typography>
            <Typography variant="string" align="left" sx={{ color: 'text.secondary' }}>
              {hpRating}
            </Typography>
          </div>
          <div className='info-container'>
            <Typography variant="string" align="left" sx={{ color: 'text.primary' }}>
              Manufacturer:
            </Typography>
            <Typography variant="string" align="left" sx={{ color: 'text.secondary' }}>
              {manufacturer}
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}