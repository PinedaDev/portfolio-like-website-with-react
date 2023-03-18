import React from 'react';

import PropTypes from 'prop-types';

type TechLogoProps = {
  faReference: string;
}

const TechLogo = ({ faReference }: TechLogoProps) => {
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