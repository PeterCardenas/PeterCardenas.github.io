import React, {
    Component
} from 'react';
export default class Contact extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <section id = "contact">
                <div className = "row section-head">
                    <div className = "ten columns">
                        <p className = "lead">
                            Feel free to contact me for any work or suggestions below
                        </p>
                    </div>
                </div>
                <div className = "row">
                    <aside className = "eigth columns footer-widgets">
                        <div className = "widget">
                            <h4> Email: <a href = {`mailto:${resumeData.email}`} target = "_blank" rel="noopener noreferrer"> peter.cardenas@utexas.edu </a></h4>
                            <h4> LinkedIn: <a href = {resumeData.linkedIn} target = "_blank" rel="noopener noreferrer"> {resumeData.linkedInId} </a></h4>
                        </div>
                    </aside>
                </div>
            </section>
        );
    }
}