import {useState }from 'react';


function Add(props) {
    const [name,setName]=useState('');
    const [surname,setSurname]=useState('');
    const [number,setNumber]=useState('');
    const [userId, setUserId]= useState('');
    const [position, setPosition]= useState('');
    
    const AddEmployeeName = (()=>{
      
        props.add(name, surname, number, userId, position);
       
      
    })  


    const deleteItem = ((id)=>{
      
        props.delete(id);
       
      
    })  


    return (
<div className='border'>
        <h1>Emlpoyee Management App</h1><input type="text" placeholder='Search'/><br/><br/>
    <input type="text" placeholder="Enter Employee Name" onChange ={(event)=>setName(event.target.value)}/><br/><br/>
    <input type="text" placeholder="Enter Employee Surname"onChange ={(event)=>setSurname(event.target.value)}/><br/><br/>
    <input type="text" placeholder="Enter Employee Number"onChange ={(event)=>setNumber(event.target.value)}/><br/><br/>
    <input type="text" placeholder="Enter Employee Id no."onChange ={(event)=>setUserId(event.target.value)}/><br/><br/>
    <input type="text" placeholder="Enter Employee position"onChange ={(event)=>setPosition(event.target.value)}/><br/><br/>
    <button className='button' onClick={AddEmployeeName}>Add</button>
   
</div>
)

}
export default Add;