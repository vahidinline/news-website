import { Button, ListItem, ListItemButton, ListItemText } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import StoryView from './StoryView';

const MainView = () => {
  const navigate = useNavigate();
  const [news, setNews] = useState([]);
  const { value } = useSelector((state) => state.token);

  const getNews = () => {
    axios
      .get(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${value}`)
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
  }, []);
  return (
    <div>
      <ul>
        {news.map((e, i) => {
          return (
            <ListItem key={i} component="div" disablePadding>
              <ListItemButton>
                <ListItemText primary={e.title} secondary={e.publishedAt} />
                <Link to={`/story/:${i}`} state={{ data: e }} className="link">
                  Click
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
