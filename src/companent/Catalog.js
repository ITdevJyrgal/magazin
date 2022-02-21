import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const Catalog = () => {
    const catalog = useSelector(state => state.catalog)
    const dispatch = useDispatch()
    const addToBasket = (item) => {
        dispatch({type: "ADD_TO_BASKET", payload: item})
    }
    return (
        <div className="catalog">
            <div className="container">
                <div className="catalog-general">
                    <div className="row">
                        {
                            catalog.map(el => (
                                <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-12 " key={el.id}>

                                    <img src={el.image} alt="" className="my-3" width="300px" height="400px"/>
                                    <span className="d-flex align-items-center justify-content-between">

                        <h5 className="catalog-general__title" >{el.title}</h5>
                        <p className="catalog-general__price" >{el.price}</p>
                    </span>
                                    <span className="d-flex justify-content-between">
                            <button className="btn btn-success"
                                    onClick={() => addToBasket(el)}
                            >В корзину</button>
                            <button className="btn btn-primary">В избранное</button>

                        </span>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Catalog;