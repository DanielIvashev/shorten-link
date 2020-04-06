import React from "react";

export const Loader = () => {
    return (
        <div className="d-flex justify-content-center vh-100">
            <div className="spinner-border align-self-center" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
};