import React, { Component } from 'react';
import { findByType, getOnePower, updatePower, getTypes } from './fetch-utils';
import classNames from 'classnames';
class PowerDetail extends Component {
    state = { 
        id: 0,
        power_name: '',
        description: '',
        realistic: '',
        power_type: '',
        types: [],
        message: '',
        error: false,

     };
     
     componentDidMount = async () => {
         const powerId = this.props.match.params.id;
         const types = await getTypes();
         const powerData = await getOnePower(powerId);
         console.log(powerData);
         this.setState( {
            id: powerId,
             power_name: powerData.power_name,
           description: powerData.description,
           realistic: powerData.realistic,
             power_type: powerData.power_type, types
         })
         console.log(this.state);
     }
     async handleUpdatePower(e) {
         e.preventDefault()
         
         const powerId = this.state.id;
         const powerType = this.state.power_type
         const descriptionInput = this.state.description
         const realisticInput = this.state.realistic
         const nameInput = this.state.power_name
         const typeFind = findByType(this.state.types, powerType)
         const powerObj = { 
             power_name:nameInput, 
             description:descriptionInput, 
             realistic:realisticInput,
             type_id:typeFind
            }
         updatePower(powerId, powerObj);
     }

    render()
    
    { 
        return ( 
            <>

            {this.state.message && (
                <div 
                    className={classNames({
                        message: true,
                        error: this.state.error,
                        success: !this.state.error
                    })}
                    >
                        {this.state.message}
                    </div>
            )}

            <h1>{this.state.power_name}</h1>
            <form onSubmit={(e) => this.handleUpdatePower(e)} id='update-power'>
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
                    <select value={this.state.realistic} 
                    onChange={(e) => 
                    {this.setState({realistic: e.target.value});}} >
                        <option key={true} value={true}>True</option>
                        <option key={false} value={false}>False</option>
                    </select>
                </div>
                <div className='form-stuff'>
                    <label>Type:</label>
                    <select value={this.state.power_type} 
                    onChange={(e) => 
                    {this.setState({power_type: e.target.value});}} >
                        {this.state.types.map((power_type)=> {
                            console.log(power_type)
                            return (
                                <option key={power_type.id} value={power_type.type}>{power_type.type}</option>
                            );
                        } )}
                    </select>
                </div>
                    <button type='submit' >Update Info</button>
            </form>
            </>

);
    }
}
 
export default PowerDetail;<h1>PowerDeatil</h1>