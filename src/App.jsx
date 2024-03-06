import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Content from "./components/Content.jsx";
import {SessionProvider} from "./context/SessionContext.jsx";
import Layout from "./components/Layout.jsx";

const theme = createTheme();


function App() {
    return (
        <>
            <SessionProvider>
                <BrowserRouter>
                    <ThemeProvider theme={theme}>
                        <CssBaseline/>
                        <Layout>
                            <Routes>
                                <Route path="/" element={<Content/>}/>
                                {/*<Route path="/signin" element={<SignIn/>}/>*/}
                            </Routes>
                        </Layout>
                    </ThemeProvider>
                </BrowserRouter>
            </SessionProvider>
        </>
    );
}

export default App;
