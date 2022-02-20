import React from 'react';
import {Link} from "react-router-dom"
import useLocalStorage from "use-local-storage"

const Header = () => {
    //
    // const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')
    //
    // const switchTheme = () => {
    //     const newTheme = theme === 'light' ? 'dark' : 'light';
    //     setTheme(newTheme)
    // }
    // data-theme={theme}
    return (
        <div  >
            <div className="header">
                <div className="container">
                    <div className="header-general">
                        <div className="header-general__title">
                            <Link to="/">
                                <h1 className="header-general__item"> home</h1>
                            </Link>

                            <Link to="/catalog">
                                <h1 className="header-general__item">katalog</h1>
                            </Link>

                            <Link to="/favorite">
                                <h1 className="header-general__item">faworite</h1>
                            </Link>

                            <Link to="/basket">
                                <h1 className="header-general__item">basket</h1>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;