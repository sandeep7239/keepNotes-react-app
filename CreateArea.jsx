import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from "@mui/material/Fab";
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
    const [note,addNote]=useState({
        title:"",
        content:""
    });
    const [isExpanded,setExpended] =useState(false);
   
    function handleChange(event){
      const {name,value}=event.target;
        addNote((prevValue)=>{
            return {...prevValue,[name]:value}
        })
    }
    function submitNote(event){
        props.onAdd(note);
        addNote({
            title:"",
            content:""
        })
        event.preventDefault(); 
    }   
    function expand(){
      return setExpended(true);
    }
  return (
    <div>
       <form className="create-note">
        {isExpanded && (<input
         
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />)}
        <textarea 
        onChange={handleChange}
         onClick={expand}
         value={note.content} 
         name="content" 
         placeholder="Take a note..." 
         rows={isExpanded ? 3 : 1 } />
       <Zoom in={isExpanded}><Fab onClick={submitNote}><AddIcon/></Fab></Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
