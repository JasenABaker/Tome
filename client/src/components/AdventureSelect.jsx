import React, { Component } from 'react'
import { Link } from 'react-router-dom' 



class AdventureSelect extends Component {
    render(){
        return(
            this.props.adventures.map((adven, key)=>{
                return(
                <div>
                {adven.title}
                </div>
                )
            })
        )
    }
}

export default AdventureSelect
