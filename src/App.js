import logo from './logo.svg';
import './App.css';
import Add from './components/add';
import{useState} from 'react'
import Display from './components/display';
import {v4 as uuidv4} from 'uuid';



function App() {
  const[list,setlist] = useState ([])


  const addName = (name, surname, number,userId,position) => {

    if(name ==""&& surname =="" && number =="" && userId =="" && position ==""){
      alert("please fill in employee details")
    }else{
     

      setlist((list)=> [...list,{name:name, surname:surname, number:number, userId:userId, position:position, id:uuidv4()}]);
    console.log(list)
    }

};

const deleteItem = ((i)=>{
  let id = list.filter(list=>list.id !==i);

  setlist(id)

})





  return (
    <div className="App">
      <Add add ={addName}/>
      <Display data={list}  delete={deleteItem} />
      
  
    </div>
  );


}
  


export default App;
