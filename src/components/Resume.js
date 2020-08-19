/* eslint-disable jsx-a11y/anchor-has-content */
import React, {
    Component,
    useState
} from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { Collapse } from 'react-collapse';

const Job = ({
    job,
    index
}) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="row item" key={index}>
            <div className="twelve columns">
                <h3> {job.companyName} </h3>
                <p className="info">
                    {job.title}
                    <span> &bull; </span><em className="date">{job.monthOfStarting} {job.yearOfStarting} - {job.monthOfLeaving} {job.yearOfLeaving}</em>
                </p>
                <Button
                    as="a"
                    onClick={() => setOpen(!open)}
                    className="collapse-title"
                >
                    {open ? 'Hide ' : 'View '} contribution details
                </Button>
                <Collapse isOpened={open}>
                    <ListGroup as="ul" className="job-description dashed">
                        {
                            job.description && job.description.map((descText, index) => {
                                return (
                                    <ListGroup.Item as="li" key={index}>
                                        {descText}
                                    </ListGroup.Item>
                                );
                            })
                        }
                    </ListGroup>
                </Collapse>
                {/* <Collapsible trigger='View contribution details' triggerWhenOpen='Hide contribution details'>
                    <ListGroup as="ul" className="job-description dashed">
                        {
                            job.description && job.description.map((descText, index) => {
                                return (
                                    <ListGroup.Item as="li" key={index}>
                                        {descText}
                                    </ListGroup.Item>
                                );
                            })
                        }
                    </ListGroup>
                </Collapsible> */}
            </div>
        </div>
    );
};

export default class Resume extends Component {

    render() {
        let resumeData = this.props.resumeData;
        return (
            <section id="resume">
                <div className="row education">
                    <div className="three columns header-col">
                        <h1><span> Resume </span></h1>
                    </div>
                    <div className="nine columns main-col">
                        <a href={resumeData.link} target="_blank" rel="noopener noreferrer">Resume PDF Link</a>
                    </div>
                </div>
                <div className="row education">
                    <div className="three columns header-col">
                        <h1><span> Education </span></h1>
                    </div>
                    <div className="nine columns main-col">
                        {
                            resumeData.education && resumeData.education.map((education, index) => {
                                return (
                                    <div className="row item" key={index}>
                                        <div className="twelve columns">
                                            <h3> {education.universityName} </h3>
                                            <p className="info">
                                                {education.major}
                                                <span> &bull; </span>
                                                <em className="date">{education.monthOfStarting} {education.yearOfStarting} - {education.monthOfPassing} {education.yearOfPassing}</em>
                                            </p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="row work">
                    <div className="three columns header-col">
                        <h1><span> Work </span></h1>
                    </div>
                    <div className="nine columns main-col">
                        {
                            resumeData.work && resumeData.work.map((job, index) => {
                                return (
                                    <Job job={job} index={index} />
                                )
                            })
                        }
                    </div>
                </div>
                <div className="row skill">
                    <div className="three columns header-col">
                        <h1><span> Skills </span></h1>
                    </div>
                    <div className="nine columns main-col">
                        <p> {resumeData.skillsDescription} </p>
                        <div className="bars">
                            <ul className="skills">
                                {
                                    resumeData.skills && resumeData.skills.map((skill, index) => {
                                        return (
                                            <li key={index}>
                                                <span className={`bar-expand ${skill.toLowerCase()}`}></span><em>{skill}</em>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}