import React, {Component} from 'react';
import { Tabs, Tab, Grid, Cell } from 'react-mdl';
import Work from './Work';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state={ activeTab: 0 };
    }

    toggleCategories() {
        /* C/C++ Tab */
        if(this.state.activeTab === 0){
            return (
                <div className="projects-grid">
                    {/* Project 1 */}
                    <Work
                    language="C/C++"
                    projectNum="1"
                    title="Prime Factorisation"
                    githubLink="https://github.com/AlexBrownlie/prime_factorisation/tree/master"
                    projectDescription="This project was completed as part of my second year Software Engineering module. It is an automated way of prime factorisation."
                    backgroundImg='url(https://i.guim.co.uk/img/media/1f88ae6599ec098c9c0e4556c68a95f01fd314fc/0_187_4287_2572/master/4287.jpg?width=445&quality=85&auto=format&fit=max&s=5d556ed2d656e06963da5094f5fe670e) center / cover'
                    />
                    
                    {/* Project 2 */}
                    <Work
                    language="C/C++"
                    projectNum="2"
                    title="Parse NMEA GPS Data"
                    githubLink="https://github.com/AlexBrownlie/parse_NMEA"
                    projectDescription="This program was part of my second year Software Engineering module. It allows parsing of NMEA GPS data."
                    backgroundImg='url(https://spacenews.com/wp-content/uploads/2017/02/GPS_IIF.jpg) center / cover'
                    />

                    {/* Project 3 */}
                    <Work
                    language="C/C++"
                    projectNum="3"
                    title="Generating GPX Route and Testing"
                    githubLink="https://github.com/AlexBrownlie/unit_testing"
                    projectDescription="As part of my second year software engineering module, I was required to generate a GPX route and test the functionality using unit testing."
                    backgroundImg='url(https://spacenews.com/wp-content/uploads/2017/02/GPS_IIF.jpg) center / cover'
                    />
                </div>
            )
        } 
        /* Python Tab */
        else if(this.state.activeTab === 1 ) {
            return(
                <div className="projects-grid">
                    {/* Project 1 */}
                    <Work
                    language="Python"
                    projectNum="1"
                    title="Data Scraping"
                    githubLink="https://github.com/AlexBrownlie/Box-Theory_Script"
                    projectDescription="This was a project that I started but due to other commitments could not finish. The end goal was for it to automate Darvas' Box Theory and see how accurate it was based on historical data."
                    backgroundImg='url(https://specials-images.forbesimg.com/imageserve/5f1a813c4e927a7f60669886/960x0.jpg?fit=scale) center / cover'
                    />
                </div>
            )
        } 
        /* HTML/CSS Tab */
        else if(this.state.activeTab === 2 ) {
            return(
                <div className="projects-grid">
                    {/* Project 1 */}
                    <Work
                    language="HTML/CSS"
                    projectNum="1"
                    title="Portfolio Website"
                    githubLink="https://github.com/AlexBrownlie/portfolio-public"
                    projectDescription="This website was created utilising HTML and CSS. Although it was mainly developed using JSX, CSS was used for styling."
                    backgroundImg='url(https://divbyte.com/wp-content/uploads/2019/02/html-css.png) center / cover'
                    />
                </div>
            )
        } 
        /* ReactJS Tab */
        else if(this.state.activeTab === 3 ) {
            return(
                <div className="projects-grid" style={{float: 'center'}}>
                    {/* Project 1 */}
                    <Work
                    language="ReactJS"
                    projectNum="1"
                    title="Portfolio Website"
                    githubLink="https://github.com/AlexBrownlie/portfolio-public"
                    projectDescription="This website was mainly developed using ReactJS and NodeJS, the source code is freely available from the GitHub repo."
                    backgroundImg='url(https://reactjs.org/logo-og.png) center / cover'
                    />
                </div>            
                )
        }
    }

    render() {
        return(
            <div className="category-tabs">
                <Tabs style={{width:'100%'}} activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab:tabId })} ripple>
                    <Tab style={{width:'12vw'}}>C/C++</Tab>
                    <Tab style={{width:'12vw'}}>Python</Tab>
                    <Tab style={{width:'12vw'}}>HTML/CSS</Tab>
                    <Tab style={{width:'12vw'}}>ReactJS</Tab>
                </Tabs>

                <Grid >
                    <Cell col={12} tablet={8} phone={4}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Projects;