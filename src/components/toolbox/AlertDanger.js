import React from 'react'

const AlertDanger = ({error}) =>{

    function component(error){
        return (
            <div className="alert alert-danger mt-2">
             {error}
            </div>
        )
    }
    
        return (
            
            error ? component() : ""
           
        )
}

export default AlertDanger