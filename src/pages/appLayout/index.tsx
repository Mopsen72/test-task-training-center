import {Container, CssBaseline} from "@mui/material";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import style from "./style.module.scss";
import NavigationPanel from "../../widgets/navigationPanel";
import {Outlet} from "react-router";
import HeaderLine from "../../widgets/headerLine";

const theme = createTheme({
    palette: {
        success: {main: "#58baab", dark: "#6eb3a7"},
        error: {main: "#fc6b58", dark: "#e86351"},
        primary: {main: "#5dceca", dark: "#56beba"},
        secondary: {main: "#83827b"},
        warning: {main: "#f6ba00", dark: "#e3ab00"}
    },
    transitions: {
        duration: {
            shortest: 150,
            shorter: 200,
            short: 250,
            // most basic recommended timing
            standard: 300,
            // this is to be used in complex animations
            complex: 375,
            // recommended when something is entering screen
            enteringScreen: 225,
            // recommended when something is leaving screen
            leavingScreen: 195,
        },
    },
})


function index() {
    return (
        <>
            <CssBaseline>
                <ThemeProvider theme={theme}>
                    <div className={style.layout}>
                        <Container maxWidth="lg" className={style.layout__container}>
                            <NavigationPanel className={style.layout__navigation}/>
                            <div className={style.layout__contentBox}>
                                <HeaderLine/>
                                <Outlet></Outlet>
                            </div>
                        </Container>
                    </div>
                </ThemeProvider>
            </CssBaseline>
        </>
    )
}

export default index