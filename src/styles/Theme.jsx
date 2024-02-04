import {GlobalStyle} from "./Global.styled.js";
import {ThemeProvider} from "styled-components";
export const theme = {
    colors: {
        primaryBg: '#FFF',
        colorMain: '#22A0D9',
        title: '#2A2651',
        text: '#6D768C',
        textBlack: '#1B1D32',
        lightText: '#FFF',
    },
    media: {
        desktop: 'screen and (max-width: 1200px)',
        tablet: 'screen and (max-width: 1024px)',
        mobile: 'screen and (max-width: 768px)',
        mobileSmall: 'screen and (max-width: 480px)',
    }
}

export const Theme = ({children, isMenuOpen}) => {
    return (
        <ThemeProvider theme={{ ...theme, isMenuOpen }}>
            <GlobalStyle/>
            {children}
        </ThemeProvider>
    );
}