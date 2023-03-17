import React from 'react'

const FooterMedia = ({ link, faReference }) => {
    return (
        <>
            <li>
                <a className="footer_section__link" href={link} target="_blank">
                    <i className={faReference}></i>
                </a>
            </li>
        </>
    )
}

export default FooterMedia