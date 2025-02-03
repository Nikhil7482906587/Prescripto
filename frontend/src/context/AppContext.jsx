import { createContext } from "react";
import PropTypes from 'prop-types';
import { doctors } from "../assets/assets";

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const currencySymbol = '$';
    const value = {
        doctors,
        currencySymbol
    }


    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}
AppContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppContextProvider