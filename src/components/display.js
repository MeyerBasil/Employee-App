import React from 'react';


function  Display(props){

    const deleteItem = ((id)=>{
        props.delete(id)
    })  
    
    return (
        <div>
            {props.data.map((AddEmployeeName)=>(
                <div>
                    <h1>
                    {AddEmployeeName.name},{AddEmployeeName.surname},{AddEmployeeName.number},{AddEmployeeName.userId},{AddEmployeeName.position}
                    </h1>
                </div>
          
            
            ))}

        </div>
        
    )


            

}
   
    

export default Display;
