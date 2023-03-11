import React from 'react'

import TechLogo from './TechLogo'

import './styles/_tech-stack.scss'

const TechStack = () => {

    const faReferences = ['fab fa-js', 'fab fa-html5', 'fab fa-react', 'fab fa-sass', 'fab fa-css3']

    const showTechStack = () => {
        return (
            faReferences.map(reference => (
                <TechLogo key={reference} faReference={reference} />
            ))
        )
    }

    return (
        <section className="tech_stack_section" id="tech-stack">
            <h2 className="tech_stack_section__header">
                Tech-Stack
            </h2>
            <ul className="tech_stack_section__icons" aria-label="tech-stack">
                {showTechStack()}
            </ul>
        </section>
    )
}

export default TechStack