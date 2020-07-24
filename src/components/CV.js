import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl'; 
import mainAvatar from '../images/myAvatar.png'
import Education from './Education'
import Experience from './Experience'
import Skills from './Skills'

class CV extends Component {
    render() {
        return(
            <div>
                <Grid>
                    <Cell col={4} tablet={8} phone={16}>
                        <div style={{textAlign: 'center'}}>
                            <img
                            src={mainAvatar}
                            alt="avatar"
                            style={{height:'200px'}}
                            />
                        </div>
                        <h2 style={{paddingTop: '2em'}}>Alex Brownlie</h2>
                        <h4 style={{color: 'grey'}}>Software Engineer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p style={{width:'100%'}}>Having completed my first year in industry with Consult Red, I am confident in my abilities to program at an intermediate level in C, C++ and Python. I am also adept at creating web pages with HTML, CSS and JSX as well as having a fundamental understanding of many other languages. I have recently started developing my own websites using ReactJS - such as this portfolio website. I enjoy meeting new people and relish the chance to interact with a wide range of personalities, which has allowed me to understand the importance of effective communication both socially and professionally. I have learnt this about myself from my time volunteering at Flamstead Cricket Club at many of the club events that have taken place over the last few years. I work well as part of a team and have good leadership qualities developed through my years playing Rugby, as I am required to communicate clearly and succinctly with others around me - working together for a common goal.</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    </Cell>
                    <Cell className="cv-right-col" col={8} tablet={8} phone={16}>
                        <h6>Please contact me through any of the channels on my Contact page for a full CV.</h6>
                        <hr/>
                        <h2>Experience</h2>
                        <Experience 
                        startYear={2019}
                        endYear={2020}
                        company="Consult Red"
                        jobName="Student Software Engineer"
                        jobDescription="During my first year of software engineering in a  professional environment I was involved in all stages of the software development lifecycle. Utilising multiple programming languages I grew my knowledge of software engineering exponentially and learned many industry practices which I look forward to applying in future."
                        />
                        <Experience
                        startYear={2016}
                        endYear={2017}
                        company="Bupa Care Homes"
                        jobName="Administrative Assistant"
                        jobDescription="During my time at Bupa care homes I was responsible for many different administrative tasks - such as answering calls from residents families and analysing response times of staff. My proficiency in Computer Science allowed me to complete tasks using Microsoft Office quickly and efficiently and my communicational skills allowed me to excel at personal tasks I undertook."
                        />
                        <Experience 
                        startYear={2015}
                        endYear={2016}
                        company="Boots the Chemist"
                        jobName="Customer Service Assistant"
                        jobDescription="The time I spent in my first job at Boots gave me a solid understanding of sales and marketing, whilst also allowing me to improve my communicational and team working skills."
                        />
                        <hr style={{borderTop: '3px solid #e229947'}} />
                        <h2>Technical Skills</h2>
                        <Skills 
                        skill="  C/C++"
                        progress={80}
                        />
                        <Skills 
                        skill="Python"
                        progress={70}
                        />
                        <Skills
                        skill="ReactJS"
                        progress={60} />
                        <Skills 
                        skill="HTML/CSS"
                        progress={60}
                        />
                        <Skills 
                        skill="JavaScript"
                        progress={50}
                        />
                        <Skills 
                        skill="Java"
                        progress={20}
                        />
                        <hr style={{borderTop: '3px solid #e229947'}} />
                        <h2>Education</h2>
                        <Education
                        startYear={2017}
                        endYear={2021}
                        qualifications="BSc Computer Science"
                        schoolName="Nottingham Trent University"
                        schoolDescription="'Nottingham Trent University (NTU) is a public research university in Nottingham, England. It was founded as a new university in 1992, although its roots go back to 1843 with the establishment of the Nottingham Government School of Design which still exists within the university today. It is the 13th largest university in the UK (out of 169) with 33,255 students split over four different campuses.'"
                        />
                        <Education
                        startYear={2010}
                        endYear={2017}
                        qualifications="3 A Levels in Maths, Computer Science and Economics. 10 GCSEs Grade A* - B."
                        schoolName="Roundwood Park School"
                        schoolDescription="'Roundwood Park is a school with a strong reputation as an innovative and exciting place in which to learn and to teach. It is a place where traditional values of smart appearance, excellent behaviour and acting with integrity mingle with modern learning and high academic standards.'"
                        />
                        <hr style={{borderTop: '3px solid #e229947'}} />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default CV;