import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/material';

export default function MediaCard() {

  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const url = process.env.REACT_APP_BASE_URL
    const GetData = async () => {
      const response = await fetch(url);
      const dataProduct = await response.json();
      setData(dataProduct);
      console.log(dataProduct);
    }
    GetData()
  }, [])

  return (
    <Box m={5}>
      <Grid container spacing={3}>
          {data.map((item) => (
          <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ width: 400, height: 500, borderRadius: '16px', boxShadow: '0px 3px 6px rgba(0, 0, 255, 0.16)'}} key={item.id}>
              <CardMedia
                sx={{ height: 200 }}
                image={item.image}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          ))
          }
      </Grid>
    </Box>
    
  );
}