import React, { Component } from 'react';
import { getOnePower } from './fetch-utils';

class PowerDetail extends Component {
    state = { 
        id: 0,
        power_name: '',
        description: '',
        realistic: '',
        // type: []
     };

     componentDidMount = async () => {
         const powerId = this.props.match.params.id;
         const powerData = await getOnePower(powerId);
         console.log(powerData);
         this.setState( {
            id: powerId,
             power_name: powerData.power_name,
           description: powerData.description,
           realistic: powerData.realistic,
            //  powerData.type
         })
         console.log(this.state);
     }
    render() { 
        return ( 
            <>
            <h1>{this.state.power_name}</h1>
            <form id='update-power'>
                <div className='form-stuff'>
                    <label>Power Name:</label>
                    <input onChange={(e) => {
                        this.setState({power_name: e.target.value});
                    }}
                    type='text'
                    value={this.state.power_name}></input>

                </div>

                <div className='form-stuff'>
                    <label>Description:</label>
                    <input onChange={(e) => {
                        this.setState({description: e.target.value});
                    }}
                    type='text'
                    value={this.state.description}></input>

                </div>    

                <div className='form-stuff'>
                    <label>Realistic:</label>
                    <input onChange={(e) => {
                        this.setState({realistic: e.target.value});
                    }}
                    type='text'
                    value={this.state.realistic}></input>

                </div>

                <div className='form-stuff'>
                    <label>Type:</label>
                    <input onChange={(e) => {
                        this.setState({type: e.target.value});
                    }}
                    type='text'
                    value={this.state.type}></input>

                </div>

            </form>
            </>

         );
    }
}
 
export default PowerDetail;<h1>PowerDeatil</h1>