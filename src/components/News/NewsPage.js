import React from 'react'
import { Typography, Paper, Container, ButtonBase } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Header from '../Header';

// Two types of headlines. World based and Canada based
const headlines = [
    {
      title: "World Top Headlines",
      url: "https://newsapi.org/v2/top-headlines?language=en&apiKey=0cb2c08812d14e1aa92180104c618652",
    },
    {
      title: "Canada Top Headlines",
      url: "https://newsapi.org/v2/top-headlines?country=ca&apiKey=0cb2c08812d14e1aa92180104c618652",
    },
];

function NewsPage() {
  
  const navigate = useNavigate();  // To navigate

  const handleHeadlineClick = (title, url) => {
    navigate('/dashboard/news', { state: { selectedHeadline: { title, url } } });
  };

  return (
    <div>
      <Header />
      <Typography variant="h4" gutterBottom color='white'> News Feed </Typography>
      <div className='Horizontal-line' />

      <Container maxWidth="lg" className='main-container'>
        {headlines.map((headline, index) => (
          <ButtonBase
          key={index}
          component={Paper}
          elevation={5}
          className='button-base'
          onClick={() => handleHeadlineClick(headline.title, headline.url)}
          >
            <Typography variant="h4">{headline.title}</Typography>
          </ButtonBase>
        ))}
      </Container>
    </div>
  )
}

export default NewsPage