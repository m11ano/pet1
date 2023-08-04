
import { Route, Routes } from "react-router-dom";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";
import { Link } from "react-router-dom";
import { Suspense, useContext, useState } from "react";
import "./styles/index.scss";
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";


const App = () => {
    const {theme, toogleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toogleTheme}>Toogle</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPage />}/>
                    <Route path={'/'} element={<MainPage />}/> 
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;