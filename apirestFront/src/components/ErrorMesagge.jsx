import PropTypes from 'prop-types';

export const ErrorMessage = ({ message }) => {
    return (
        <div>
            <span className='text-red-500 text-xs'>{message}</span>
        </div>
    )
}

ErrorMessage.propTypes = {
    message: PropTypes.string.isRequired
}