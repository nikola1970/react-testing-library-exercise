import React from "react";
import PropTypes from "prop-types";

const LoadPhotos = ({ handleLoad, loading }) => {
    return (
        <button disabled={loading} onClick={handleLoad} data-testid="load-photos">
            Load photos
        </button>
    );
};

LoadPhotos.propTypes = {
    handleLoad: PropTypes.func.isRequired
};

export default LoadPhotos;
