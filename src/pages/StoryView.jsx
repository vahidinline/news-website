import { Link, useLocation } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Grid, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
const theme = createTheme();

const StoryView = (props) => {
  const location = useLocation();
  const data = location.state?.data;
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          <Grid>
            <Grid container spacing={5} sx={{ mt: 3 }}>
              <Grid item xs={12} md={12}>
                <Typography variant="h3">{data.title}</Typography>
                <Typography variant="h6">{data.publishedAt}</Typography>
                <Typography variant="h6">{data.author}</Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} md={12}>
              <Box
                component="img"
                sx={{
                  height: 233,
                  width: 350,
                  maxHeight: { xs: 233, md: 167 },
                  maxWidth: { xs: 350, md: 250 },
                }}
                src={data.urlToImage}
                alt={data.title}
              />
            </Grid>
          </Grid>

          <Grid item xs={12} md={12}>
            <Typography variant="body1">{data.content}</Typography>
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
