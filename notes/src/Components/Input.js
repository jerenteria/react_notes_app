import "./Input.css";

// Input() renders an input box where users can input info 
// it takes in a label prop, textarea prop, and any other prop that the user gives
// dynamically renders the label and a textarea or regular input box

const Input = ({ label, textarea, ...props }) => {
    return(
        <p>
            {/* dynamically render label */}
            <label>{label}</label>
{/* if textarea is set to true render a texarea box and any other prop that the user set otherwise render a regular input box */}
            {textarea ? <textarea {...props} /> : <input {...props} />}
        </p>
    );
};

export default Input;