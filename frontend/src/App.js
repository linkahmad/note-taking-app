// src/App.js

import React from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Notes from './components/Notes';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#f50057',
        },
    },
});

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Notes />
        </ThemeProvider>
    );
};

export default App;
