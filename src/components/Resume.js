/* eslint-disable jsx-a11y/anchor-has-content */
import React, {
    Component
} from 'react';
export default class Resume extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <section id = "resume">
                <div className = "row education">
                    <div className = "three columns header-col">
                        <h1><span> PDF </span></h1>
                    </div>
                    <div className = "nine columns main-col">
                        <a href = {resumeData.link} target = "_blank" rel="noopener noreferrer">Resume PDF Link</a>
                    </div>
                </div>
                <div className = "row education">
                    <div className = "three columns header-col">
                        <h1><span> Education </span></h1>
                    </div>
                    <div className = "nine columns main-col">
                        {
                            resumeData.education && resumeData.education.map((education, index) => {
                                return (
                                    <div className = "row item" key = {index}>
                                        <div className = "twelve columns">
                                            <h3> {education.UniversityName} </h3>
                                            <p className = "info">
                                                {education.Major}
                                                <span> &bull; </span>
                                                <em className="date">{education.MonthOfStarting} {education.YearOfStarting} - {education.MonthOfPassing} {education.YearOfPassing}</em>
                                            </p>
                                            <p> {education.Achievements} </p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className = "row work">
                    <div className = "three columns header-col">
                        <h1><span> Work </span></h1>
                    </div>
                    <div className = "nine columns main-col">
                        {
                            resumeData.work && resumeData.work.map((job, index) => {
                                return (
                                    <div className = "row item" key = {index}>
                                        <div className = "twelve columns">
                                            <h3> {job.CompanyName} </h3>
                                            <p className = "info">
                                                {job.Title}
                                                <span> &bull; </span><em className="date">{job.MonthOfStarting} {job.YearOfStarting} - {job.MonthOfLeaving} {job.YearOfLeaving}</em>
                                            </p>
                                            <ul className = "job-description dashed">
                                                {
                                                    job.Description && job.Description.map((descText, index) => {
                                                        return (
                                                            <li key = {index}>
                                                                {descText}
                                                            </li>
                                                        );
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className = "row skill">
                    <div className = "three columns header-col">
                        <h1><span> Skills </span></h1>
                    </div>
                    <div className = "nine columns main-col">
                        <p> {resumeData.skillsDescription} </p>
                        <div className = "bars">
                            <ul className = "skills">
                                {
                                    resumeData.skills && resumeData.skills.map((skill, index) => {
                                        return (
                                            <li key = {index}>
                                                <span className = {`bar-expand ${skill.toLowerCase()}`}></span><em>{skill}</em>
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