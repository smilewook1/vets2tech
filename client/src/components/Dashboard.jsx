import {IconButton, Divider, Container, Typography, Toolbar, Box, AppBar, Button, Card, CardActions, CardContent, Grid, Stack} from '@mui/material/';
import LogoutIcon from '@mui/icons-material/Logout';
import PeopleIcon from '@mui/icons-material/People';
import { createTheme, ThemeProvider } from '@mui/material/styles';
  
const theme = createTheme();
  
export default function Dashboard() {
    return (
    <ThemeProvider theme={theme}>
        <Box
            sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
            }}
        >
            <Container maxWidth="sm">
            <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
            >
                Admin
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
                
            </Typography>
            <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
            >
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    sx={{ mr: 2 }}
                    href='#'
                    >
                    <PeopleIcon />
                        
                    </IconButton>

                    <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    sx={{ mr: 2 }}
                    href='#'
                    >
                    <LogoutIcon />
                        
                </IconButton>
            </Stack>
            </Container>
        </Box>

        <Grid 
            container spacing={0}
            justifyContent="center"
            >
        <Stack 
            direction="row" 
            spacing={5}
            >
            <Card variant="outlined"
            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                    Student
                    </Typography>
                    <Typography>
                    This is a media card. You can use this section to describe the
                    content.
                    </Typography>
                </CardContent>

                <CardActions >
                    <Button
                        fullWidth
                        variant="text" sx={{ mt: 3, mb: 2 }}
                        href='/registration'
                        > Approve Registration 
                    </Button>
                
                    <Button
                        fullWidth
                        variant="text" sx={{ mt: 3, mb: 2 }}
                        color='success'
                        href='/profile'
                        > Create Profile 
                    </Button>
                
                    <Button
                        fullWidth
                        variant="text" sx={{ mt: 3, mb: 2 }}
                        color='secondary'
                        href='/data'
                        > Edit Data 
                    </Button>
                </CardActions>
            </Card>
        
            <Card variant="outlined"
            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                    Employer
                    </Typography>
                    <Typography>
                    This is a media card. You can use this section to describe the
                    content.
                    </Typography>
                </CardContent>

                <CardActions>
                    <Button
                        fullWidth
                        variant="text" sx={{ mt: 3, mb: 2 }}
                        href='/registration'
                        > Approve Registration 
                    </Button>
                
                    <Button
                        fullWidth
                        variant="text" sx={{ mt: 3, mb: 2 }}
                        color='success'
                        href='/profile'
                        > Create Profile 
                    </Button>

                    <Button
                        fullWidth
                        variant="text" sx={{ mt: 3, mb: 2 }}
                        color='error'
                        href='/data'
                        > Edit Data 
                    </Button>
                </CardActions>
            </Card>
        </Stack>
        </Grid>
    </ThemeProvider>
    );
}