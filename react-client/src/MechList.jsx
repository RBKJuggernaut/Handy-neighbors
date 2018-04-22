import React from'react';
import Mechanic from './Mechanic.jsx'

class MechList extends React.Component{
    constructor(props){
        super(props);
    }
        render(){

            return(
                <div style={{border:'solid', 'borderRadius': '15px'}}>
                <ul style={{backgrondColor: '#E44F4F'}} className="list-group">
                {this.props.mechs.map((mech)=><Mechanic mech={mech} key={'d'+mech.username}/>)}
                </ul>
                </div>
                )
            }
        
    }

export default MechList