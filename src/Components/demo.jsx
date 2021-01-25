import React from 'react';

class demo extends React.Component{
    constructor(props){
        super(props);
        
    this.state = {
        firstname: ''
    };
    }
    onInputChange(event){
        this.setState({
            firstname:event.target.value
        });
        this.state.firstname = event.targget.value;
    }

    render(){
        
        return( 
            <div>
                <input name="name" type="text" value={this.state.firstname} onChange={this.onInputChange}/>
            </div>  
        );
    }
}
export default demo;