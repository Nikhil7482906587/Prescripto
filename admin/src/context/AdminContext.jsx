import { createContext, useState } from "react";
import PropTypes from 'prop-types';

export const AdminContext = createContext()

const AdminContextProvider = (props) => {

    const [aToken,setAToken] = useState(localStorage.getItem('aToken')?localStorage.getItem('aToken'):'')

    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const value = {
        aToken,setAToken,
        backendUrl
    }
    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    );
}
AdminContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AdminContextProvider;