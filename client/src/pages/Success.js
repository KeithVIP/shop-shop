import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import Jumbotron from "../components/Jumbotron";
import { ADD_ORDER } from '../utils/mutations.js';
import { idbPromise } from '../utils/helpers.js';

const Success = () => {
    /* When the Success component loads, you'll need to read everything that's saved in the IndexedDB cart store. Remember, the items in IndexedDB will be the same items that the user just purchased through Stripe, so that represents their order. We can then take those items and pass them to the addOrder() mutation to record the order in the database.
    */
    const [addOrder] = useMutation(ADD_ORDER);

    useEffect(() => {
        async function saveOrder() {
            const cart = await idbPromise('cart', 'get');
            const products = cart.map(item => item._id);

            if (products.length) {
                const { data } = await addOrder({ variables: { products } });
                const productData = data.addOrder.products;

                productData.forEach((item) => {
                    idbPromise('cart', 'delete', item);
                });
            }
            setTimeout(() => {
                window.location.assign('/');
            }, 3000);
        };

        saveOrder();
    }, [addOrder]);

    return (
        <div>
            <Jumbotron>
                <h1>Success!</h1>
                <h2>
                    Thank you for your purchase!
                </h2>
                <h2>
                    You will new be redirected to the homepage
                </h2>
            </Jumbotron>
        </div>
    );
};

export default Success;