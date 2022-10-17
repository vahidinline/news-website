import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  CircularProgress,
  Grid,
  IconButton,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Error from '../components/Error';
import { sourceData } from '../api/sourceData';
console.log(sourceData);
const localDate = (e) => {
  const localDate = new Date(e);
  return localDate.toLocaleString();
};
const MainView = () => {
  const [news, setNews] = useState([]);
  const { value } = useSelector((state) => state.token.user);
  console.log(value);
  const [error, setError] = useState(false);
  const [msg, setMsg] = useState('');
  // const { email } = useSelector((state) => state.token.user.email);
  const [keyword, setKeyword] = useState('us');
  const [loading, setLoading] = useState(true);
  const searchMode = [
    {
      top: `http://newsapi.org/v2/top-headlines?country=us&apiKey=${value}`,
    },
    {
      search: `http://newsapi.org/v2/everything?q=${keyword}&apiKey=${value}`,
    },
  ];

  const getNews = () => {
    axios
      .get(keyword === 'us' ? searchMode[0].top : searchMode[1].search)
      .then((e) => {
        setNews(e.data.articles);
        setLoading(false);
      })
      .catch((e) => {
        setError(true);
        setMsg(e.message);
      });
  };
  useEffect(() => {
    getNews();
  }, [keyword]);

  const handleChange = (event) => {
    setKeyword(event.target.value);
  };
  const handleClose = () => {
    setError(false);
  };
  return (
    <div>
      <Error open={error} message={msg} handleClose={handleClose} />
      {loading ? <CircularProgress /> : null}
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
          size="small"
          label="Language"
          onChange={handleChange}>
          {sourceData.map((e) => {
            return (
              <MenuItem value={e.alpha2} key={e.id}>
                {e.name}
              </MenuItem>
            );
          })}
        </Select>
      </Grid>
      <Grid container justifyContent="center">
        {news.map((e, i) => {
          return (
            <Card key={i} sx={{ maxWidth: 350, m: 1 }}>
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
                style={{ textDecoration: 'none', color: 'gray' }}
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
                  subheader={localDate(e.publishedAt)}
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
