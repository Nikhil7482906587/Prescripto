import { createContext } from "react";
import PropTypes from 'prop-types';

export const DoctorContext = createContext()

const DoctorContextProvider = (props) => {
    const value = {

    }
    return (
        <DoctorContext.Provider value={value}>
            {props.children}
        </DoctorContext.Provider>
    );
}
DoctorContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DoctorContextProvider;