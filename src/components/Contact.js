import React, {Component} from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import mainAvatar from '../images/myAvatar.png'

class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6} tablet={8} phone={12}>
                        <h2>Alex Brownlie</h2>
                        <img 
                            src={mainAvatar}
                            alt="avatar"
                            style={{height: '250px'}}
                        />
                        <p style={{width: '80%', margin: 'auto', paddingTop: '1em'}}> I will be returning to Nottingham Trent University in September to finish my Bachelor's degree in Computer Science. I aim to graduate in 2021 with first class honours. I plan to continue my website development whilst studying. Please feel free to contact me on any of the following channels.</p>
                    </Cell>
                    <Cell col={6} tablet={8} phone={12}>
                        <h2 style={{textAlign:'left'}}>Contact Me</h2>
                        <hr style={{float:'left'}}/>
                        <div className="contact-list">
                            <List>
                                <ListItem >
                                    <ListItemContent style={{fontFamily: 'Anton'}}>
                                        <i style={{fontSize:'5vw'}} className="fa fa-phone-square" aria-hidden="true"/>
                                        <p style={{fontSize:'3vw'}}>07443404803</p>
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontFamily: 'Anton'}}>
                                        <i style={{fontSize:'5vw'}} className="fa fa-envelope" aria-hidden="true"/>
                                        <p style={{fontSize:'3vw'}}>brownlie98@gmail.com</p>
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontFamily: 'Anton'}}>
                                        <i style={{fontSize:'5vw'}} className="fa fa-linkedin" aria-hidden="true"/>
                                        <p style={{fontSize:'3vw'}}><a rel="noopener noreferrer" target="_blank" href="https://uk.linkedin.com/in/alex-brownlie-356097178" style={{color:'blue'}}>Alex Brownlie</a></p>
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;