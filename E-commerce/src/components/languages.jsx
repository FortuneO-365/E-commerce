import React from 'react'
import "./components.css"

function Languages() {
    return (
        <div className='language-container'>
            <ul>
                <li>
                    <div className="language-box">
                        <img src="/Images/flags/us-flag.gif" alt="" />
                        <span>USD</span>
                    </div>
                </li>
                <li>
                    <div className="language-box">
                        <img src="/Images/flags/uk-flag.gif" alt="" />
                        <span>GBP</span>
                    </div>
                </li>
                <li>
                    <div className="language-box">
                        <img src="/Images/flags/ng-flag.gif" alt="" />
                        <span>NGN</span>
                    </div>
                </li>
                <li>
                    <div className="language-box">
                        <img src="/Images/flags/gh-flag.gif" alt="" />
                        <span>GHA</span>
                    </div>
                </li>
                <li>
                    <div className="language-box">
                        <img src="/Images/flags/egy-flag.gif" alt="" />
                        <span>EGY</span>
                    </div>
                </li>
                <li>
                    <div className="language-box">
                        <img src="/Images/flags/sa-flag.gif" alt="" />
                        <span>RSA</span>
                    </div>
                </li>
                <li>
                    <div className="language-box">
                        <img src="/Images/flags/sn-flag.gif" alt="" />
                        <span>SNG</span>
                    </div>
                </li>
                <li>
                    <div className="language-box">
                        <img src="/Images/flags/ky-flag.gif" alt="" />
                        <span>KNY</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Languages
