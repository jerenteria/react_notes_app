import { forwardRef } from 'react'; // forwarding ref from NewNote.js
import "./Input.css";

// Input() renders an input box where users can input info 
// it takes in a label prop, textarea prop, and any other prop that the user gives
// dynamically renders the label and a textarea or regular input box

const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
    return(
        <p>
            {/* dynamically render label */}
            <label>{label}</label>
{/* if textarea is set to true render a texarea box and any other prop that the user set otherwise render a regular input box */}
{/* after using forwardRef in the function we can now use a ref here in the built in input field and 
forward it to the custom Input component in NewNote.js */}
            {textarea ? <textarea ref={ref} {...props} /> : <input ref={ref} {...props} />}
        </p>
    );
});

export default Input;