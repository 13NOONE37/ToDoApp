const Note = require('../../db/models/note');

module.exports = {
        saveNote: (req, res)=>{
            // const newNote = new Note({
            //         title: "Kup mleko",
            //         body: "4.78%"
            // });
            
            // const saveTheNote = async (data) =>{
            //         try{
            //         const res = await data.save();
            //         console.log(res);
            //         } catch(err){
            //             console.log(err);
            //         }
            // }
            // saveTheNote(newNote);
            const title = req.body.title;
            const body = req.body.body;
            res.send("zapisano: "+title+" "+body);
        },
        getAllNotes: (req, res) =>{
            
            res.send('..getAllNotes')
        },
        getNote: (req, res) =>{

            res.send('..getNote');
        },
        updateNote: (req, res) =>{

            res.send('..update');
        },
        deleteNote: (req, res) =>{
            const id = req.params.id;

            res.send('..delete ID: '+id);
        },
    
};