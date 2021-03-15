const Note = require('../../db/models/note');

module.exports = {
    saveNote: (req, res)=>{
        const newNote = new Note({
                title: "Kup mleko",
                body: "4.78%"
        });
        
        const saveNote = async (data) =>{
                try{
                   const res = await data.save();
                   console.log(res);
                } catch(err){
                    console.log(err);
                }
        }
        saveNote(newNote);
        res.send("strona dziala");
    },
};