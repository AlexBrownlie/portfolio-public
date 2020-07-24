import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

class Skills extends Component {
    render() {
        return ( 
            <Grid>
                <Cell col={12}>
                    <div>
                        <p>{this.props.skill}</p>
                        <ProgressBar 
                        style={{margin: 'auto', width: '75%'}}
                        progress={this.props.progress} >
                            <p style={{display:'inline', fontSize:'10px'}}>Beginner</p><p style={{display:'inline', float:'right', fontSize:'10px'}}>Advanced</p>
                        </ProgressBar>
                    </div>
                </Cell>
            </Grid>
        )
    }
}

export default Skills;