import './App.css';
import Header from "./companent/Header";
import Home from "./companent/Home";
import Catalog from "./companent/Catalog";
import Faworite from "./companent/Faworite";
import Basket from "./companent/Basket";
import {Routes, Route} from "react-router-dom"
import {useDispatch} from "react-redux";
import useLocalStorage from "use-local-storage";
import "./style/style.scss";

function App() {
    const dispatch = useDispatch()

    const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme)
    }


    return (

        <div className="App" data-theme={theme}>
            <div onClick={switchTheme} className="apps">
                <div onClick={switchTheme} className="apps2"/>
            </div>
            <Header data-theme={theme}/>
            <Routes>
                <Route path="/" element={<Home/>} data-theme={theme}/>
                <Route path="/catalog" element={<Catalog/>} data-theme={theme}/>
                <Route path="/faworite" element={<Faworite/>} data-theme={theme}/>
                <Route path="/basket" element={<Basket/>} data-theme={theme}/>
            </Routes>
        </div>
    );
}

export default App;
