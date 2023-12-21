import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Container } from '@mui/material';
import { blue } from '@mui/material/colors';
import Lego from '../assets/5.jpeg';
import blueo from '../assets/5.jpeg';
import crayola from '../assets/5.jpeg';
import kinderkraft from '../assets/6.jpeg';
import funskool from '../assets/6.jpeg';
import hamleys from '../assets/6.jpeg';
import bluetrip from '../assets/8.jpeg';
import nerf from '../assets/8.jpeg';
import doodlehog from '../assets/8.jpeg';

const services = [
  {
    title: 'DEL -> BKK Rs.10721',
    description: 'Delhi to Bangkok',
    image: Lego,
  },
  {
    title: 'BLR -> DEL Rs.5269',
    description: 'Banglore to Delhi',
    image:blueo
  },
  {
    title: 'BOM ->BLR Rs.3547',
    description: 'Mumbai->Banglore',
    image:crayola
  },
  {
    title: 'DEL -> PNQ Rs.5421',
    description: 'Delhi to Pune',
    image:kinderkraft
  },
  {
    title: 'BOM -> EDI Rs 42378',
    description: 'Bombay to Edinburgh',
    image:funskool
  },
  {
    title: 'CHN -> CBE Rs.2400',
      description: 'Coimbatore to Chennai ',
      image:hamleys
  },
  {
    title: 'BLR->CHN Rs.2300',
    description: 'Banglore To Chennai',
    image:bluetrip
  },
  {
  title: 'CHN -> PNQ Rs.3504',
    description: 'Chennai to Pune ',
    image:nerf
  },
  {
    title: 'PNQ-> RR RS 5095',
    description: 'Pune to Rajastan',
    image:doodlehog
  }
];
function Services(){ 
  return (
    <div>
      
      <Container>
        <Typography variant="h3" component="div" style={{ marginTop: '20px', marginBottom: '20px',color:blue }}>
        TRIP ROUTES
        </Typography>
        <Grid container spacing={3}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
              <CardMedia
                component="img"
                height="140"
                image={service.image}
                alt={service.title}
                sx={{ objectFit: 'cover' }}
              />
                <CardContent>
                  <Typography variant="h6" component="div" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      
    </div>
  );
}

export default Services;