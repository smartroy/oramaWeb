import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFacebook,
    faGithub,
    faTwitter,
    faWeibo,
    faBitbucket
} from '@fortawesome/free-brands-svg-icons'
function OramaFooter() {
    return (
        <div>
            <div className="orama-bottom-box">
                <div className="social-box">
                    <a className="social" href="#">
                        <FontAwesomeIcon icon={faGithub} size="lg"></FontAwesomeIcon>
                    </a>
                    <a className="social" href="https://www.twitter.com">
                        <FontAwesomeIcon icon={faTwitter} size="lg"></FontAwesomeIcon>
                    </a>
                    <a className="social" href="#">
                        <FontAwesomeIcon icon={faFacebook} size="lg"></FontAwesomeIcon>
                    </a>
                    <a className="social" href="#">
                        <FontAwesomeIcon icon={faWeibo} size="lg"></FontAwesomeIcon>
                    </a>
                </div>

            </div>
        </div>
    )
}

export default OramaFooter
