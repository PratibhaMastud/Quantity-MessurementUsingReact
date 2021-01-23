import React, { Component } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import {AppBar, Card, TextField} from '@material-ui/core';
import Select from '@material-ui/core/Select';
import './Temperature.css';
import LengthImg from '../../Assets/length.png';
import TempImg from '../../Assets/Temperature.png';
import VolumeImg from '../../Assets/Volume.png';
import {withRouter} from 'react-router-dom';
import Temp from '../../Services/Temperature';

let objTemp = new Temp();
var output = 0;
class TempComponent extends Component {
    constructor (props){
        super(props);
        this.state = {
            temperature: '',
            setTempFrom: '',
            setTempTo: '',
            setTempFromText:''
        }     
    }
  
    handleChangeTempFrom=(event)=>{
        this.setState({
            setTempFrom: event.target.value
        })
        this.state.setTempFrom = event.target.value;
        this.output = objTemp.CalculateTemp(this.state.setTempFromText,this.state.setTempFrom,this.state.setTempTo);
    };

    handleChangeTempTo=(event)=>{
        this.setState({
            setTempTo: event.target.value
        })
        this.state.setTempTo = event.target.value;
        this.output = objTemp.CalculateTemp(this.state.setTempFromText,this.state.setTempFrom,this.state.setTempTo);
    };
    
    GetTextByChange=(event)=>{
        this.setState({
            setTempFromText: event.target.value
        })
        this.state.setTempFromText = event.target.value;
        this.output = objTemp.CalculateTemp(this.state.setTempFromText,this.state.setTempFrom,this.state.setTempTo);
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
            console.log(this.props);
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
                  
                <Select className="selectID" value={this.state.setTempFrom} onChange={this.handleChangeTempFrom}>
                            <MenuItem value={1}>Celsius</MenuItem>
                            <MenuItem value={33.8}>Fahrenheit</MenuItem>
                            <MenuItem value={273.15}>kelvin</MenuItem>
                </Select> 
                </div>
                </div>
                
                <div id="ToText">
                <label id="select-label">TO</label>
                <div id="toContainer">
                <div><TextField className="TextField" type="number" variant="outlined" size="small" value={this.output} ></TextField></div>
                <Select className="selectID" value={this.state.setTempTo} onChange={this.handleChangeTempTo}>
                            <MenuItem value={1}>Celsius</MenuItem>
                            <MenuItem value={2}>Fahrenheit</MenuItem>
                            <MenuItem value={3}>kelvin</MenuItem>
                </Select>
                </div>
                </div>
                </div> 
                <div className="height"></div>                        
                </div>
            );
        }
    
}
export default withRouter(TempComponent);
