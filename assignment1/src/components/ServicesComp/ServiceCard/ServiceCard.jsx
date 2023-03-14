import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../global/Button/Button';

const ServiceCard = ({ serviceName }) => {
    return (
        <div className="services_section__card">
            <h2 className="services_section__card_header" id="service1">
                {serviceName}
            </h2>

            <article>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br />
                Nam architecto tenetur ut hic ad? Numquam harum<br />
                laborum maiores obcaecati assumenda!
            </article>
            <Button text='more' />
        </div>
    )
}

ServiceCard.propTypes = {
    serviceName: PropTypes.string,
}

export default ServiceCard