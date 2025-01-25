import {Container, CssBaseline} from "@mui/material";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import style from "./style.module.scss";
import NavigationPanel from "../../widgets/navigationPanel";
import {Outlet} from "react-router";

const theme = createTheme({
    palette: {
        success: {main: "#58baab"},
        error: {main: "#fc6b58"},
        primary: {main: "#5dceca"},
        secondary: {main: "#83827b"},
        warning: {main: "#f6ba00"}
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
                                <div>контент</div>
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