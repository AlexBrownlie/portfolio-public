import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, CardMenu, Button, IconButton} from 'react-mdl';

/* this function is needed to keep the styling of the card title. */
function getTitle(props){
    if (props.title==null) { return ("Project") }
    else {
        return (props.title);
    }
}

class Work extends Component {
    render(){
        return(
            <Card shadow={5} style={{minWidth: '340px', margin: '2%'}}>
                <CardTitle expand style={{color: '#fff', height: '176px', background: 
                this.props.backgroundImg, textAlign:'left'}}>
                {getTitle(this.props)}
                </CardTitle>
                <CardText>
                    {this.props.projectDescription}
                </CardText>
                <CardActions border style={{textAlign:'center'}}>
                    <Button href={this.props.githubLink} target="_blank" colored>GitHub</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    {/* <IconButton name="share" href={this.props.githubLink}/> */}
                </CardMenu>
            </Card>
        )
    }
}

export default Work;