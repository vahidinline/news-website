import {
  Grid,
  ListItem,
  ListItemButton,
  ListItemText,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const MainView = () => {
  const [news, setNews] = useState([]);
  const { value } = useSelector((state) => state.token.user.value);
  const { email } = useSelector((state) => state.token.user.email);
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

      <ul>
        {news.map((e, i) => {
          return (
            <ListItem key={i} component="div" disablePadding>
              <ListItemButton>
                <Link
                  style={{ textDecoration: 'none', color: 'black' }}
                  to={`/story/:${i}`}
                  state={{ data: e }}
                  className="link">
                  <ListItemText primary={e.title} />
                </Link>
              </ListItemButton>
            </ListItem>
          );
        })}
      </ul>
    </div>
  );
};

export default MainView;
