import { ExpandMore } from '@mui/icons-material';
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemText,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const MainView = () => {
  const [news, setNews] = useState([]);
  const { value } = useSelector((state) => state.token.user);
  // const { email } = useSelector((state) => state.token.user.email);
  const [keyword, setKeyword] = useState('us');
  const searchMode = [
    {
      top: `https://newsapi.org/v2/top-headlines?country=us&apiKey=${value}`,
    },
    {
      search: `https://newsapi.org/v2/everything?q=${keyword}&apiKey=${value}`,
    },
  ];

  const getNews = () => {
    axios
      .get(keyword === 'us' ? searchMode[0].top : searchMode[1].search)
      .then((e) => {
        setNews(e.data.articles);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    getNews();
  }, [keyword]);

  const handleChange = (event) => {
    setKeyword(event.target.value);
  };

  return (
    <div>
      <Grid sx={{ mt: 3 }}>
        <TextField
          id="search-bar"
          className="text"
          onInput={(e) => {
            setKeyword(e.target.value);
          }}
          label="Enter a Keyword"
          variant="outlined"
          placeholder="Search..."
          size="small"
        />
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={keyword}
          label="Language"
          onChange={handleChange}>
          <MenuItem value="ca">CA</MenuItem>
          <MenuItem value="il">IL</MenuItem>
          <MenuItem value="jp">JP</MenuItem>
          <MenuItem value="us">US</MenuItem>
          <MenuItem value="ru">RU</MenuItem>
        </Select>
      </Grid>

      <Grid container justifyContent="center">
        {news.map((e, i) => {
          return (
            <Card sx={{ maxWidth: 350, m: 1 }}>
              <CardMedia
                component="img"
                sx={{
                  height: 300,
                  width: 400,
                  maxHeight: { xs: 200, md: 300 },
                  maxWidth: { xs: 400, md: 400 },
                }}
                image={e.urlToImage}
                alt={e.title}
              />
              <Link
                style={{ textDecoration: 'none', color: 'black' }}
                to={`/story/:${i}`}
                state={{ data: e }}
                className="link">
                <CardHeader
                  avatar={
                    <Avatar
                      sx={{ bgcolor: 'red', width: 100, height: 100, m: 1 }}
                      variant="square"
                      aria-label="recipe">
                      {e.source.name}
                    </Avatar>
                  }
                  action={<IconButton aria-label="settings"></IconButton>}
                  title={e.title}
                  subheader={e.publishedAt.toLocaleString()}
                />
              </Link>

              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {e.description}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </Grid>
    </div>
  );
};

export default MainView;
