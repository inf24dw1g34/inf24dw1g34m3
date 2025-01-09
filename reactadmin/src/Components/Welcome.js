import * as React from 'react';
import { Box, Card, CardActions, Button, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';

import publishArticleImage from '../icon.png';

const Welcome = () => {
    return (
        <Card
            sx={{
                background: theme =>
                    `linear-gradient(45deg, ${theme.palette.secondary.dark} 0%, ${theme.palette.secondary.light} 50%, ${theme.palette.primary.dark} 100%)`,
                color: theme => theme.palette.primary.contrastText,
                padding: '20px',
                marginTop: 2,
                marginBottom: '1em',
            }}
        >
            <Box display="flex">
                <Box flex="1">
                    <Typography variant="h5" component="h2" gutterBottom>
                        {"Library API"}
                    </Typography>
                    <Box maxWidth="50em">
                        <Typography variant="body1" component="p" gutterBottom>
                            {"The Library API makes it easy to manage everything in your library, like books, authors, genres, members, and loans. Whether you're keeping track of inventory or lending books, this simple and flexible tool helps you stay organized and get things done quickly."}
                        </Typography>
                    </Box>
                    <CardActions
                        sx={{
                            padding: { xs: 0, xl: null },
                            flexWrap: { xs: 'wrap', xl: null },
                            '& a': {
                                marginTop: { xs: '1em', xl: null },
                                marginLeft: { xs: '0!important', xl: null },
                                marginRight: { xs: '1em', xl: null },
                            },
                        }}
                    >
                        <Button
                            variant="contained"
                            href="https://marmelab.com/react-admin"
                            startIcon={<HomeIcon />}
                        >
                            {"React-Admin Framework"}
                        </Button>
                        <Button
                            variant="contained"
                            href="https://github.com/inf24dw1g34/inf24dw1g34m3/tree/main/reactadmin"
                            startIcon={<CodeIcon />}
                        >
                            {"Source Code"}
                        </Button>
                    </CardActions>
                </Box>
                <Box
                    display={{ xs: 'none', sm: 'none', md: 'block' }}
                    sx={{
                        background: `url(${publishArticleImage}) top right / cover`,
                        marginLeft: 'auto',
                    }}
                    width="16em"
                    height="9em"
                    overflow="hidden"
                />
            </Box>
        </Card>
    );
};

export default Welcome;
