import {createRoot} from 'react-dom/client';
import {BrowserRouter, Route, Routes} from "react-router";
import './index.css';
import AppLayout from "./pages/appLayout";
import HomePage from "./pages/homePage";
import CoursesListPage from "./pages/coursesListPage";
import DocumentPage from "./pages/documentPage";
import SettingsPage from "./pages/settingsPage";

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<AppLayout/>}>
                <Route index element={<HomePage/>}></Route>
                <Route path="/courses" element={<CoursesListPage/>}></Route>
                <Route path="/documents" element={<DocumentPage/>}></Route>
                <Route path="/settings" element={<SettingsPage/>}></Route>
            </Route>

        </Routes>
    </BrowserRouter>,
)
