import React, { Component } from 'react';

import MenuItem from '@material-ui/core/MenuItem';
import {AppBar, Card, TextField} from '@material-ui/core';
import Select from '@material-ui/core/Select';
import './Volume.css';
import LengthImg from '../../Assets/length.png';
import TempImg from '../../Assets/Temperature.png';
import VolumeImg from '../../Assets/Volume.png';
import Volume from '../../Services/Volume.js';
import {withRouter} from 'react-router-dom';


let objvol = new Volume();
var output=0;
class VolumeComponent extends Component {
    constructor (){
        super();
        this.state = {
            volume: '',
            setVolFrom:'',
            setVolTo:'',
            setVolFromText:''
        }
    }
     
    handleChangeVolFrom=(event)=>{
        this.setState({
            setVolFrom: event.target.value
        })
        this.state.setVolFrom = event.target.value;
        this.output = objvol.Calculate(this.state.setVolFromText,this.state.setVolFrom,this.state.setVolTo);
    }

    handleChangeVolTo=(event)=>{
        this.setState({
            setVolTo: event.target.value
        })
        this.state.setVolTo = event.target.value;
        this.output = objvol.Calculate(this.state.setVolFromText,this.state.setVolFrom,this.state.setVolTo);
    }

    textChange=(event)=>{
        this.setState({
            setVolFromText: event.target.value
        })
        this.state.setVolFromText = event.target.value;
        this.output = objvol.Calculate(this.state.setVolFromText,this.state.setVolFrom,this.state.setVolTo);
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
                <div><TextField className="TextField" type="number" variant="outlined" size="small" onChange={this.textChange} ></TextField></div>
                  
                <Select className="selectID" value={this.state.setVolFrom} onChange={this.handleChangeVolFrom}>
                            <MenuItem value={1}>Litres</MenuItem>
                            <MenuItem value={1000}>Millilitres</MenuItem>
                            <MenuItem value={0.000264172}>Gallons</MenuItem>
                </Select> 
                </div>
                </div>
                
                <div id="ToText">
                <label id="select-label">TO</label>
                <div id="toContainer">
                <div><TextField className="TextField" type="number" variant="outlined" size="small" value={this.output} ></TextField></div>
                <Select className="selectID" value={this.state.setVolTo} onChange={this.handleChangeVolTo}>
                            <MenuItem value={1}>Litres</MenuItem>
                            <MenuItem value={2}>Millilitres</MenuItem>
                            <MenuItem value={3}>Gallons</MenuItem>
                </Select>
                </div>
                </div>
                </div> 
                <div className="height"></div>                        
                </div>
            );
        }
    
}
export default withRouter(VolumeComponent);