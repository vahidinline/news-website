import { useLocation } from 'react-router-dom';

const StoryView = (props) => {
  console.log('props', props);
  const location = useLocation();
  const data = location.state?.data;
  console.log('data', data);
  return <h1> {data ? data.title : 'Go to Home'} </h1>;
};

export default StoryView;
