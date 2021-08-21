import React, { Component } from 'react';
import { createPower, getTypes } from './fetch-utils';
import classNames from 'classnames';
class CreatePower extends Component {
    state = { 
        id: 0,
        power_name: '',
        description: '',
        realistic: true,
        power_type: 1,
        types: [],
        message: '',
        error: false,

     };
     
     componentDidMount = async () => {
         const types = await getTypes();
         this.setState({ types })
     }
     async handleUpdatePower(e) {
         e.preventDefault()
         
         const powerType = this.state.power_type
         const descriptionInput = this.state.description
         const realisticInput = this.state.realistic
         const nameInput = this.state.power_name
         const powerObj = { 
             power_name:nameInput, 
             description:descriptionInput, 
             realistic:realisticInput,
             type_id:powerType
            }
            console.log(powerObj)
         createPower(powerObj);
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
                    {this.setState({power_type: e.target.value})}} >
                        {this.state.types.map((power_type)=> {
                            return (
                                <option key={power_type.id} value={power_type.id}>{power_type.type}</option>
                            );
                        } )}
                    </select>
                </div>
                    <button type='submit' >Create Power</button>
            </form>
            </>

);
    }
}
 
export default CreatePower;