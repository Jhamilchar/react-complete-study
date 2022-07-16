import PropTypes from "prop-types";

export const Test = ( { parraf } ) => {
    return(
        <>
            <p> {parraf} </p>
        </>
    );
}

Test.propTypes = {
    parraf: PropTypes.string.isRequired
}

Test.defaultProps = {
    parraf: "Defecto"
}