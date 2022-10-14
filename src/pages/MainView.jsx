import {
  Grid,
  ListItem,
  ListItemButton,
  ListItemText,
  TextField,
} from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const MainView = () => {
  const [news, setNews] = useState([]);
  const { value } = useSelector((state) => state.token);
  const [keyword, setKeyword] = useState('us');
  const searchMode = [
    {
      top: `https://newsapi.org/v2/top-headlines?country=us&apiKey=${value}`,
    },
    {
      search: `https://newsapi.org/v2/everything?q=${keyword}&apiKey=${value}`,
    },
  ];

  console.log(keyword);
  const getNews = () => {
    axios
      .get(keyword === 'us' ? searchMode[0].top : searchMode[1].search)
      .then((e) => {
        console.log(e.data.articles);
        setNews(e.data.articles);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    getNews();
  }, [keyword]);
  return (
    <div>
      <Grid>
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
