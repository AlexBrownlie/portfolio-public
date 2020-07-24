import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import mainAvatar from '../images/myAvatar.png'

class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto', overflow:'auto'}}>
                <Grid scroll className="landing-grid">
                    <Cell col={12} tablet={8} phone={16}>
                        <img style={{width:'25%', height:'auto'}}
                        src={mainAvatar}
                        alt="avatar"
                        className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1 style={{paddingTop:'3%', fontSize:'6vw'}}>Software Engineer</h1>
                            <hr/>
                            <p>C++ | C | Python | HTML/CSS | ReactJS</p>
                            
                            <div className="social-links">
                                {/* LinkedIn */}
                                <a href="https://uk.linkedin.com/in/alex-brownlie-356097178" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                </a>

                                {/* GitHub */}
                                <a href="https://github.com/AlexBrownlie" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true"/>
                                </a>

                                {/* Instagram */}
                                <a href="https://www.instagram.com/alexbrownliee/?hl=en" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-instagram" aria-hidden="true"/>
                                </a>

                                {/* Facebook */}
                                <a href="http://facebook.com/AlexBrownliee" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-facebook-square" aria-hidden="true"/>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;