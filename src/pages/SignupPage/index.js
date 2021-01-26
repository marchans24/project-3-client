import { useState } from 'react';
import { signup } from '../../services/userService';
function SignupPage(props) {
    const [formState, setFormState] = useState(getInitialFormState());
    function getInitialFormState() {
        return {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        }
    }
    function handleChange(event) {
        setFormState(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    }
    async function handleSubmit(event) {
        try {
            event.preventDefault();
            await signup(formState);
            setFormState(getInitialFormState());
            props.handleSignupOrLogin();
            props.history.push('/dashboard');
        } catch (error) {
            alert(error.message);
        }
    }
    return (
        <div className="Signup">
            <form onSubmit={handleSubmit}>
                <label>First Name:</label>
                <input 
                value={formState.firstName} 
                onChange={handleChange} 
                name="firstName" 
                
                type="text" 
                />
                &nbsp;&nbsp;
                <label>Last Name:</label>
                <input 
                value={formState.lastName} 
                onChange={handleChange} 
                name="lastName" 
                type="text" 
                />
                &nbsp;&nbsp;
                <label>Email:</label>
                <input 
                value={formState.email} 
                onChange={handleChange} 
                name="email" 
                type="email" 
                />
                &nbsp;&nbsp;
                <label>Password:</label>
                <input 
                value={formState.password} 
                onChange={handleChange} 
                name="password" 
                type="password" 
                />
                &nbsp;&nbsp;
                <button>Sign Up</button>
            </form>
        </div>
    );
}
export default SignupPage;