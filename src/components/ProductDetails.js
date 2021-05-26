import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import {useDispatch, useSelector} from 'react-redux';
import {selectedProducts} from './../redux/actions/productActions';

const ProductDetails = () => {
    const product = useSelector((state) => state.product)
    const { id } = useParams();
    const dispatch = useDispatch();

    const fetchProductDetails = async () => {
        const response = await axios
            .get(`https://fakestoreapi.com/products/${id}`)
            .catch((err)=>{
                console.log("Err ", err);
            });
            console.log(response);
        dispatch(selectedProducts(response.data));
    };
    useEffect(()=>{
        if(id && id !== "") fetchProductDetails();
    }, [id]);
    return (
        <div>
            <h1>product</h1>
        </div>
    );
};

export default ProductDetails;
