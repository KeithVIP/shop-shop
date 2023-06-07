import React, { createContext, useContext } from "react";
import { useProductReducer } from "./reducers";

/* Provider is a special type of React component that we wrap our application in so it can make the state data that's passed into it as a prop available to all other components. */

/* Consumer is our means of grabbing and using the data that the Provider holds for us. */
const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useProductReducer({
        products: [],
        cart: [],
        cartOpen: false,
        categories: [],
        currentCategory: '',
    });

    // use this to confirm it works!
    console.log(state);
    return <Provider value={[state, dispatch]} {...props} />
};

const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };