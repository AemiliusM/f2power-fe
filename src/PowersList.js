import React, { Component } from 'react';
import { getPowers } from './fetch-utils.js';
import { Link } from 'react-router-dom';

class PowersList extends Component {
    state = { powers: [] }
    componentDidMount = async () => {
        const data = await getPowers();
        this.setState({powers: data});
        console.log(this.state);
    }
    render() { 
        return ( 
            <ul className='power-list'>
            {this.state.powers.map((p) =>(
                <li className='power-tile' key={p.power_name}>
                    <h2>
                        <Link to={`/powers/${p.id}`}>{p.power_name}</Link>
                    </h2>

                </li>
            ))}
        </ul> );
    }
}

export default PowersList;