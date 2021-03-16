import React, { useState } from 'react';
import axios from '../axios';

export default function AddBar(props) {
    const [clicked, setclicked] = useState(false);
    const [title, settitle] = useState('');
    const [body, setbody] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        
        //add local
        if(title && body){
            
            //send note
            await axios.post('', {"title": title, "body": body});
        
            //download note and add to state
             const fetchNotes = async () => {
                const res = await axios.get();
                props.setnotes(res.data);
            };

            fetchNotes();
            settitle(null);
            setbody(null);

        }
        //add on server
    
    }

    return (
        <div className="addBar">
            <form onSubmit={handleSubmit}>
                {
                    clicked && 
                    <React.Fragment>
                        <input value={title} onChange={(e)=>{settitle(e.target.value)}} type="text" placeholder="What is the title?"/>
                        <input value={body} onChange={(e)=>{setbody(e.target.value)}} type="text" placeholder="What is the body?"/>
                    </React.Fragment>
                }
                <input type="submit" value="Add note" onClick={()=>{setclicked(!clicked)}}/>
            </form>
        </div>
    )
}
