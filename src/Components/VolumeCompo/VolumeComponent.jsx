import React, { Component } from 'react';

import MenuItem from '@material-ui/core/MenuItem';
import {AppBar, Card, TextField} from '@material-ui/core';
import Select from '@material-ui/core/Select';
import './Volume.css';
import LengthImg from '../../Assets/length.png';
import TempImg from '../../Assets/Temperature.png';
import VolumeImg from '../../Assets/Volume.png';
import Volume from '../../Services/Volume.js';


let objvol = new Volume();
class VolumeComponent extends Component {
    constructor (){
        super();
        this.state = {volume: ''}
    }
     
    handleChangeVol=(event)=>{
        let vol = event.target.value;
        this.setState({vol: event.target.value})
    }
    handleLength=()=>{
        this.props.history.push("/Length");
    }
    handleTemp=()=>{
        this.props.history.push("/Temperature");
    }
    handleVolume=()=>{
        this.props.history.push("/Volume");
    }
        
        render() {
            return (
                <div className = 'homeContainer'>
                    <AppBar id = "appBar">
                    <h2>Welcome To Quantity Measurement</h2>                        
                    </AppBar>
                    <div>
                        <div class="text"><label>CHOOSE TYPE</label></div>
                    </div>
                    <div className='center'>
                    <Card className="cardContainer" onClick={this.handleLength}>
                            <div>
                                <img src={LengthImg} alt="Length"/>
                            </div>
                            <div>
                                Length
                            </div>
                        </Card>
                        <Card className="cardContainer" onClick={this.handleTemp} >
                            <div>
                                <img src={TempImg} alt="Temp"/>
                            </div>
                            <div>
                                Temperature
                            </div>
                        </Card>
                        <Card className="cardContainer" onClick={this.handleVolume}>
                            <div>
                                <img src={VolumeImg} alt="Vol"/>
                            </div>
                            <div>
                                Volume
                            </div>
                        </Card>
                    </div >
                
                <div className="converter">
                <div>
                <div id="fromText"><label>FROM</label></div>
                <div id="fromContainer">
                <div><TextField className="TextField" type="text" placeholder="input" id="input" variant="outlined" size="small" ></TextField></div>
                <Select className="selectID" value={this.state.vol} onChange={this.handleChangeVol}>
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value={20}>cubic meter </MenuItem>
                        <MenuItem value={20}>barrel </MenuItem>
                        <MenuItem value={10}>cubic foot </MenuItem>
                        <MenuItem value={30}>cubic decimeter </MenuItem>
                        <MenuItem value={30}>liter </MenuItem>
                        <MenuItem value={30}>cubic inch </MenuItem>
                        <MenuItem value={30}>cubic centimeter </MenuItem>

                </Select>
                </div>
                </div>
                
                <div id="ToText">
                <label id="select-label">TO</label>
                <div id="toContainer">
                <div><TextField className="TextField" type="text" placeholder="result" id="result" variant="outlined" size="small" ></TextField></div>
                <Select className="selectID" value={this.state.vol} onChange={this.handleChangeVol}>
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value={20}>cubic meter </MenuItem>
                        <MenuItem value={20}>barrel </MenuItem>
                        <MenuItem value={10}>cubic foot </MenuItem>
                        <MenuItem value={30}>cubic decimeter </MenuItem>
                        <MenuItem value={30}>liter </MenuItem>
                        <MenuItem value={30}>cubic inch </MenuItem>
                        <MenuItem value={30}>cubic centimeter </MenuItem>

                </Select>
                </div>
                </div>
                </div> 
                <div className="height"></div>                        
                </div>
            );
        }
    
}
export default VolumeComponent;