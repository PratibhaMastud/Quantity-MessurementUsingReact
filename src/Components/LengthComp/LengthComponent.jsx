import React, { Component } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import {AppBar, Card, TextField} from '@material-ui/core';
import Select from '@material-ui/core/Select';
import LengthConvertor from '../../Services/LengthConv';
import './Length.css';
import LengthImg from '../../Assets/length.png';
import TempImg from '../../Assets/Temperature.png';
import VolumeImg from '../../Assets/Volume.png';


let lengthObj = new LengthConvertor();
var output = 0;

class LengthComponent extends Component {
    constructor (){
        super();
        this.state = {
            Length: '',
            setLengthFrom: '',
            setLengthTo: '',
            setLengthFromText:''
        }
    }
     
    handleChangeLenFrom=(event)=>{
        this.setState({
            setLengthFrom: event.target.value
        })
        this.state.setLengthFrom = event.target.value;
        this.output = lengthObj.calculateLength(this.state.setLengthFromText,this.state.setLengthFrom,this.state.setLengthTo);
    };

    handleChangeLenTo=(event)=>{
        this.setState({
            setLengthTo: event.target.value
        })
        this.state.setLengthTo = event.target.value;
        this.output = lengthObj.calculateLength(this.state.setLengthFromText,this.state.setLengthFrom,this.state.setLengthTo);
    };
    
    GetTextByChange=(event)=>{
        this.setState({
            setLengthFromText: event.target.value
        })
        this.state.setLengthFromText = event.target.value;
        this.output = lengthObj.calculateLength(this.state.setLengthFromText,this.state.setLengthFrom,this.state.setLengthTo);
    };

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
                <div><TextField className="TextField" type="text" variant="outlined" size="small" onChange={this.GetTextByChange} ></TextField></div>
                  
                <Select className="selectID" value={this.state.setLengthFrom}  onChange={this.handleChangeLenFrom}>
                            <MenuItem value={39370}>Kilometer</MenuItem>
                            <MenuItem value={39}>Meter</MenuItem>
                            <MenuItem value={0.393701}>Centimeter</MenuItem>
                            <MenuItem value={0.393701}>Millimeter</MenuItem>
                            <MenuItem value={0.0000393701}>Micrometer</MenuItem>
                            <MenuItem value={63360}>Mile</MenuItem>
                            <MenuItem value={12}>Foot</MenuItem>
                            <MenuItem value={1}>Inch</MenuItem>
                </Select> 
                </div>
                </div>
                
                <div id="ToText">
                <label id="select-label">TO</label>
                <div id="toContainer">
                <div><TextField className="TextField" type="text" variant="outlined" size="small" value={this.output} ></TextField></div>
                <Select className="selectID" value={this.state.setLengthTo} onChange={this.handleChangeLenTo}>
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value={1}>Centimeters </MenuItem>
                        <MenuItem value={2}>Kilometres </MenuItem>
                        <MenuItem value={3}>Milimetre </MenuItem>
                        <MenuItem value={4}>Micrometre </MenuItem>
                        <MenuItem value={5}>Mile </MenuItem>
                        <MenuItem value={6}>Foot </MenuItem>
                        <MenuItem value={7}>Inch </MenuItem>
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