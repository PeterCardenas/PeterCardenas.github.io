import React, {
    Component
} from 'react';
export default class Footer extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <footer>
                <div className = "row">
                    <div className = "twelve columns">
                        <ul className = "social-links">
                            {
                                resumeData.socialLinks && resumeData.socialLinks.map((link, index) => {
                                    return (
                                        <li key = {index}>
                                            <a href = {link.url} target = "_blank" rel="noopener noreferrer">
                                                <i className = {link.className}/>
                                            </a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div id = "go-top">
                        <a className = "smoothscroll" title = "Back to Top" href = "#home">
                            <i className = "icon-up-open"/>
                        </a>
                    </div>
                    <div className = "copyright">
                        <p> Copyright © 2020 by Peter Cardenas</p>
                    </div>
                </div>
            </footer>
        );
    }
}