import React, { useEffect, useState } from 'react'
import Note from './note';
import axios from '../axios';

export default function Tasks(props) {

    const handleDelete = async (id) => {
        console.log(id);
         const temp = [...props.notes].filter(note => note._id !== id); // "note" to tylko przykladowa nazwa reprezentujaca jeden obiekt tablicy
         props.setnotes(temp);
         await axios.delete(id);
    };
    
    const handleEdit = async (id) => {
        const title = prompt('Type new titile');
        const body = prompt('Type new body');
        //TODO replace those promt by some html input

        await axios.put(id, {"title": title, "body": body});

        fetchNotes();
    };

    const fetchNotes = async () => {
        const res = await axios.get();
        props.setnotes(res.data);
       };
    

    useEffect(() => {
        fetchNotes();    
    }, []);


   
    
    return(
        <div className="Tasks">
           {
                    props.notes.map(note=>{
                        return(
                         <Note handleEdit={()=>{handleEdit(note._id)}} handleDelete={()=>{handleDelete(note._id)}} title={note.title} body={note.body}/>
                        )
                    })
                }     
        </div>
    );
  
}
