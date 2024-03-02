import { createContext } from "react";
import PropTypes from 'prop-types';

export const GeneralContext = createContext();

export const GeneralContextProvider = ({ children }) => {
    return (
        <GeneralContext.Provider>
            {children}
        </GeneralContext.Provider>
    )
}

GeneralContextProvider.propTypes = {
    children: PropTypes.node.isRequired
}