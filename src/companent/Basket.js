import React from 'react';
import {Table} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";

const Basket = () => {

    const basket = useSelector(s => s.basket)
    const dispatch = useDispatch()


    return (
        <div className="basket">
            <div className="basket-general">

                <div className="container">
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Image</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            basket.map((el, idx) => (
                                <tr>
                                    <td className="basket-general__item">{idx + 1}</td>
                                    <td className="basket-general__title">{el.title}</td>
                                    <td><img src={el.image} alt="img" height="60px"/></td>
                                    <td>
                                <span>
                                    <button className="btn btn-primary mx-2  basket-general__btn"
                                            onClick={() => dispatch({type: "ADD_TO_BASKET", payload: el})}
                                    >+</button>
                                    {el.quantity}
                                    <button className="btn btn-danger mx-2  basket-general__btn"
                                            onClick={() => dispatch({type: "DECREASE_QUANTITY", payload: idx})}
                                    >-</button>
                                </span>
                                    </td>
                                    <th className="basket-general__title">{el.price * el.quantity}</th>
                                </tr>
                            ))
                        }
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default Basket;