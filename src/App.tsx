
import { Route, Routes } from "react-router-dom";
import Counter from "./components/Counter";
import './index.scss';
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import { Link } from "react-router-dom";
import { Suspense, useContext, useState } from "react";
import "./styles/index.scss";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";


const App = () => {
    const {theme, toogleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toogleTheme}>Toogle</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync />}/>
                    <Route path={'/'} element={<MainPageAsync />}/> 
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;