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
                    projectDescription="This is a link to one of my Python projects... this is the description."
                    backgroundImg='url(https://www.dataoptimal.com/wp-content/uploads/python-programming-for-beginners-2019-1024x574.jpg) center / cover'
                    />
                    
                    {/* Project 2 */}
                    <Work
                    language="Python"
                    projectNum="2"
                    projectDescription="This is a link to one of my Python projects... this is the description."
                    backgroundImg='url(https://www.dataoptimal.com/wp-content/uploads/python-programming-for-beginners-2019-1024x574.jpg) center / cover'
                    />

                    {/* Project 3 */}
                    <Work
                    language="Python"
                    projectNum="3"
                    projectDescription="This is a link to one of my Python projects... this is the description."
                    backgroundImg='url(https://www.dataoptimal.com/wp-content/uploads/python-programming-for-beginners-2019-1024x574.jpg) center / cover'
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
                    projectDescription="This is a link to one of my HTML/CSS projects... this is the description."
                    backgroundImg='url(https://miro.medium.com/max/675/1*dqLV7KjUtg57JPBCilqxSQ.jpeg) center / cover'
                    />
                    
                    {/* Project 2 */}
                    <Work
                    language="HTML/CSS"
                    projectNum="2"
                    projectDescription="This is a link to one of my HTML/CSS projects... this is the description."
                    backgroundImg='url(https://miro.medium.com/max/675/1*dqLV7KjUtg57JPBCilqxSQ.jpeg) center / cover'
                    />

                    {/* Project 3 */}
                    <Work
                    language="HTML/CSS"
                    projectNum="3"
                    projectDescription="This is a link to one of my HTML/CSS projects... this is the description."
                    backgroundImg='url(https://miro.medium.com/max/675/1*dqLV7KjUtg57JPBCilqxSQ.jpeg) center / cover'
                    />
                </div>
            )
        } 
        /* JavaScript Tab */
        else if(this.state.activeTab === 3 ) {
            return(
                <div className="projects-grid">
                    {/* Project 1 */}
                    <Work
                    language="JavaScript"
                    projectNum="1"
                    projectDescription="This is a link to one of my JavaScript projects... this is the description."
                    backgroundImg='url(https://www.tutorialrepublic.com/lib/images/javascript-illustration.png) center / cover'
                    />
                    
                    {/* Project 2 */}
                    <Work
                    language="JavaScript"
                    projectNum="2"
                    projectDescription="This is a link to one of my JavaScript projects... this is the description."
                    backgroundImg='url(https://www.tutorialrepublic.com/lib/images/javascript-illustration.png) center / cover'
                    />

                    {/* Project 3 */}
                    <Work
                    language="JavaScript"
                    projectNum="3"
                    projectDescription="This is a link to one of my JavaScript projects... this is the description."
                    backgroundImg='url(https://www.tutorialrepublic.com/lib/images/javascript-illustration.png) center / cover'
                    />
                </div>
            )
        } 
        /* ReactJS Tab */
        else if(this.state.activeTab === 4 ) {
            return(
                <div className="projects-grid">
                    {/* Project 1 */}
                    <Work
                    language="ReactJS"
                    projectNum="1"
                    projectDescription="This is a link to one of my ReactJS projects... this is the description."
                    backgroundImg='url(https://curatti.com/wp-content/uploads/2017/11/ReactJS-1000x500.jpg) center / cover'
                    />
                    
                    {/* Project 2 */}
                    <Work
                    language="ReactJS"
                    projectNum="2"
                    projectDescription="This is a link to one of my ReactJS projects... this is the description."
                    backgroundImg='url(https://curatti.com/wp-content/uploads/2017/11/ReactJS-1000x500.jpg) center / cover'
                    />

                    {/* Project 3 */}
                    <Work
                    language="ReactJS"
                    projectNum="3"
                    projectDescription="This is a link to one of my ReactJS projects... this is the description."
                    backgroundImg='url(https://curatti.com/wp-content/uploads/2017/11/ReactJS-1000x500.jpg) center / cover'
                    />
                </div>            )
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