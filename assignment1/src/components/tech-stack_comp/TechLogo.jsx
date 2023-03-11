import React from 'react';

import PropTypes from 'prop-types';

const TechLogo = ({ faReference }) => {
    return (
        <li className="tech_stack_section__icon" role="none">
            <i className={faReference}></i>
        </li>
    )
}

TechLogo.propTypes = {
    faReference: PropTypes.string
}

export default TechLogo