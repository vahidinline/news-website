import { Link, useLocation } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Breadcrumbs, Grid, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
const theme = createTheme();
const localDate = (date) => {
  const localDate = new Date(date);
  return localDate.toLocaleString();
};
const StoryView = (props) => {
  const location = useLocation();
  const data = location.state?.data;
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" to="/main">
            Home
          </Link>
          <Typography color="text.primary" variant="body2">
            {data.title}
          </Typography>
        </Breadcrumbs>
        <main>
          <Grid>
            <Grid container spacing={1} sx={{ mt: 3 }}>
              <Grid item xs={12} md={10}>
                <Grid item xs={12}>
                  <Typography sx={{}}> Author : {data.author}</Typography>
                </Grid>
                <Box
                  component="img"
                  sx={{
                    // height: 233,
                    // width: 350,
                    maxHeight: { xs: '100%', md: '75%' },
                    maxWidth: { xs: '100%', md: '75%' },
                  }}
                  src={data.urlToImage}
                  alt={data.title}
                />

                <Typography variant="h5">{data.title}</Typography>
                <Grid item xs={12} md={12}>
                  <Typography variant="body2" color="text.secondary">
                    {data.content}
                  </Typography>
                </Grid>
              </Grid>
              <Grid xs={12} md={2}>
                <a href={data.url} target="_blank" rel="noreferrer">
                  <Typography variant="caption" component="h2">
                    source : {data.source.name}
                  </Typography>
                </a>
                <Typography variant="caption">
                  Published at : {localDate(data.publishedAt)}
                </Typography>
              </Grid>
              <Grid item xs={12} md={12}></Grid>
            </Grid>
          </Grid>

          <Grid>
            <Link to="/main">Back</Link>
          </Grid>
        </main>
      </Container>
    </ThemeProvider>
  );
};

export default StoryView;
