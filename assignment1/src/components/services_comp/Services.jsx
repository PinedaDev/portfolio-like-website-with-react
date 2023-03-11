import React from 'react'

import ServiceCard from './ServiceCard'
// import './styles/_services-section.scss'
const Services = () => {
    const serviceNames = ['Service 1', 'Service 2', 'Service 3']
    const showCards = () => {
        return (
            serviceNames.map(service => (
                <ServiceCard key={service} serviceName={service} />
            ))
        )
    }

    return (
        <section className="services_section" id="services">
            <h1 className="services_section__header"> Services </h1>
            <div className="services_section__wrapper">
                {showCards()}
            </div>
        </section>
    )
}

export default Services