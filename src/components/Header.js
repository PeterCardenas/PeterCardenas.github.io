/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {
    Component
} from 'react';
export default class Header extends Component {

    render() {
        let resumeData = this.props.resumeData;
        return (
            <React.Fragment>
                <header id = "home" >
                    <nav id = "nav-wrap">
                        <a className = "mobile-btn" href = "#nav-wrap" title = "Show navigation"> Show navigation </a>
                        <a className = "mobile-btn" href = "#nowhere" title = "Hide navigation"> Hide navigation </a>
                        <ul id = "nav" className = "nav">
                            <li className = "current">
                                <a id = "homeLink" className = "smoothscroll" href = "#home"> Home </a>
                            </li>
                            <li>
                                <a id = "aboutLink" className = "smoothscroll" href = "#about"> About </a>
                            </li>
                            <li>
                                <a id = "resumeLink" className = "smoothscroll" href = "#resume"> Resume </a>
                            </li>
                            <li>
                                <a id = "portfolioLink" className = "smoothscroll" href = "#portfolio"> Works </a>
                            </li>
                            <li>
                                <a id = "contactLink" className = "smoothscroll" href = "#contact"> Contact </a>
                            </li>
                        </ul>
                    </nav>

                    <div className = "row banner">
                        <div className = "banner-text">
                            <h1 className = "responsive-headline" > {resumeData.name} </h1>
                            <h3
                                style = {
                                    {
                                        color: '#fff',
                                        fontFamily: 'sans-serif'
                                    }
                                }
                            >
                                {resumeData.roleDescription}
                            </h3>
                            <hr/>
                            <ul className = "social">
                                {
                                    resumeData.socialLinks && resumeData.socialLinks.map(link => {
                                        return (
                                            <li key = {link.name}>
                                                <a href = {link.url} target = "_blank" rel="noopener noreferrer">
                                                    <i className = {link.className} > </i>
                                                </a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>

                    <p className = "scrolldown">
                        <a className = "smoothscroll" href = "#about">
                            <i className = "icon-down-circle"> </i>
                        </a>
                    </p>

                </header>
            </React.Fragment>
        );
    }
}