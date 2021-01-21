import React, { Component } from 'react';
import {Card} from '@material-ui/core';
import LengthImg from '../../Assets/length.png';

class Length extends Component {
    render() {
        return (
            <div className = 'homeContainer'>
                <div className='center'>
                        <Card className="cardContainer">
                            <div>
                                <img src={LengthImg} alt="Length"/>
                            </div>
                            <div>
                                Length
                            </div>
                        </Card>
                        </div>
            </div>
        );
    }
}