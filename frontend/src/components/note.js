import React from 'react';

export default function note(props) {
    return (
        <div className="task">
            <div>
                <h1>{props.title}</h1>
            </div>
            <div>
                <p>{props.body}</p>
            </div>
            <div>
                <form>
                    <input onClick={()=>{props.handleEdit(props._id)}} type="button" value="Edit"/>
                    <input onClick={()=>{props.handleDelete(props._id)}} type="button" value="Delete"/>
                </form>
            </div>
    </div>
    )
}
