import PropTypes from 'prop-types';

export const Modal = ({ children }) => {
    return (
        <section className="fixed inset-0 flex justify-center items-center bg-gray-950 bg-opacity-50">
            <div className="rounded-lg p-6 w-full h-full flex justify-center items-center">
                {children}
            </div>
        </section>
    )
}

Modal.propTypes = {
    children: PropTypes.node.isRequired
};