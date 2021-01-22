import React, { Component } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import {AppBar, Card, TextField} from '@material-ui/core';
import Select from '@material-ui/core/Select';
import './Length.css';
import LengthImg from '../../Assets/length.png';
import TempImg from '../../Assets/Temperature.png';
import VolumeImg from '../../Assets/Volume.png';



class LengthComponent extends Component {
    constructor (){
        super();
        this.state = {Length: ''}
    }
     
    handleChangeLen=(event)=>{
        let Length = event.target.value;
        this.setState({Length: event.target.value})
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
                <div><TextField className="TextField" type="number" variant="outlined" size="small" ></TextField></div>
                  
                <Select className="selectID" value={this.state.Length}  onChange={this.handleChangeLen}>
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value={20}>Kilometre</MenuItem>
                        <MenuItem value={20}>Metres</MenuItem>
                        <MenuItem value={10}>Centimetres</MenuItem>
                        <MenuItem value={30}>Milimetre</MenuItem>
                        <MenuItem value={10}>Micrometre</MenuItem>
                        <MenuItem value={40}>Mile</MenuItem>
                        <MenuItem value={50}>Foot</MenuItem>
                        <MenuItem value={60}>Inch</MenuItem>
                </Select> 
                </div>
                </div>
                
                <div id="ToText">
                <label id="select-label">TO</label>
                <div id="toContainer">
                <div><TextField className="TextField" type="number" variant="outlined" size="small" ></TextField></div>
                <Select className="selectID" value={this.state.Length} onChange={this.handleChangeLen}>
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value={20}>Centimeters </MenuItem>
                        <MenuItem value={20}>Kilometres </MenuItem>
                        <MenuItem value={10}>Milimetre </MenuItem>
                        <MenuItem value={30}>Micrometre </MenuItem>
                        <MenuItem value={20}>Mile </MenuItem>
                        <MenuItem value={10}>Foot </MenuItem>
                        <MenuItem value={30}>Inch </MenuItem>
                </Select>
                </div>
                </div>
                </div> 
                <div className="height"></div>                        
                </div>
            );
        }
}
export default LengthComponent;