// import { useState } from "react";

// function ControlledForm() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log("Name:", name);
//         console.log("Email:", email);
//     };
//     return (
//     <form onSubmit={handleSubmit}>
//         <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             placeholder="Name"
//         />

//         <br />
//         <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Email"
//         />
//         <br />
//         <button type="submit">Submit</button>
//     </form>
//     );
// }


import { useState } from 'react';
import {useNavigate,Link} from 'react-router-dom'
// import {}

function ControlledForm() {
    const [email, setEmail] = useState("");
    const [validationError, setValidationError] = useState("");
    const navigate =useNavigate()

    const validateEmail = (email) => {
       
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

        if (!email) {
            return `Email required`;
        }
        if (!regex.test(email)) { 
            return `Please enter a valid email address`; 
        }
        return "";
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const error = validateEmail(email); 
        setValidationError(error); 

        if (error) { 
            alert(error); 
        } else {
            alert(`Form submitted with email: ${email}`);
        }
    };

    return (
        <>
          <form onSubmit={handleSubmit}>
            <label>
                Email:
                <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
            </label>
            <button type="submit">Submit</button>
          </form>
          <br/>
          <br/>
          <button><Link to={-1}>Go Back</Link></button>
        </>
    );
}

export default ControlledForm;
