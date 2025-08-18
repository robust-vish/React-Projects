import React, {useState} from 'react';
import useTodo from '../context/Context.js';

const Form = () => {
    const{addTodo}=useTodo();

    //ye cheez bas text box ki values ko ui par lane ke liye hain
    const[text, setText] = useState('');

    //main task yaha hai, jaise hi form submit kare
    //to addTodo se, ek naya to do add ho jaye
    // apni todos ki array me, jiska id App.js me
    //already overwrite kar diya, yaha uska title overwrite kar rahe hain
    const handleChange = (e) => {
         e.preventDefault();
         if(!text)return;
         addTodo({title:text});
         setText('');
    }

    
    return (
        <div>
            <form action="" onSubmit={handleChange}>
                <label htmlFor="">Add todo:-</label>
                <input type="text" onChange={(e)=>setText(e.target.value)} value={text} />
                <button type="submit">Add item</button>
            </form>
           
        </div>
    );
};

export default Form;