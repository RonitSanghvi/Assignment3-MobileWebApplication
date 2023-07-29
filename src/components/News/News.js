import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, Card, CardContent, CardMedia, CardActions, Button, Link } from '@mui/material';
import { useLocation } from "react-router-dom";
import Header from '../Header';

const News = () => {
  const [articles, setArticles] = useState([]);
  const location = useLocation();

  // Fetches the data from the API.
  useEffect(() => {
    if (location?.state?.selectedHeadline) {
      const fetchNewsData = async () => {
        try {
          const response = await axios.get(location.state.selectedHeadline.url);
          setArticles(response.data.articles);
        } catch (error) {
          console.error('Error fetching news data:', error);
        }
      };
      fetchNewsData();
    }
  }, [location]);

  return (
    <div>
      <Header />
      {location?.state?.selectedHeadline && (
        <>
          <Typography variant="h3" gutterBottom color='white'> {location.state.selectedHeadline.title} </Typography>
          <div className='Horizontal-line' />
        </>
      )}

      <div className='news-box'>

          {articles.map((article) => (
              <Card key={article.publishedAt} className='news-card' >
              <CardMedia
              sx={{ height: 160 }}
              src={article.urlToImage}
              component="img"
              alt="Img not available in API"
              />
              <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                  {article.title}
              </Typography>
              <Typography variant="body2">
                  {article.description}
              </Typography>
              </CardContent>
              <CardActions>
              <Button size="small" > <Link href={article.url} target="_blank" rel="noopener noreferrer" >Learn More</Link></Button>
              </CardActions>
          </Card>
          ))}

      </div>
      
    </div>
  );
};

export default News;
