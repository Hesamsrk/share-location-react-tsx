import React from 'react';
import './App.css';
import MainPage from './views/mainPage/mainPage'
import {useMemo} from 'react'
import {createTheme, ThemeProvider} from '@material-ui/core'


let App: React.FC = () => {
    const thm = useMemo(
        () =>
            createTheme({
                palette: {
                    primary: {
                        main: '#0dd4ad',
                    },
                    secondary: {
                        main: '#9800d7',
                    },
                    // Used by `getContrastText()` to maximize the contrast between
                    // the background and the text.
                    contrastThreshold: 3,
                    // Used by the functions below to shift a color's luminance by approximately
                    // two indexes within its tonal palette.
                    // E.g., shift from Red 500 to Red 300 or Red 700.
                    tonalOffset: 0.2,
                },
            }), [],
    );
    return (
        <>
            <ThemeProvider theme={thm}>
                <MainPage/>
            </ThemeProvider>
        </>
    )
}

export default App;
