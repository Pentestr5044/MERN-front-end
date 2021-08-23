import React, {useState} from 'react'
import '../pages/Register.css';
import axios from 'axios';
import {Redirect} from 'react-router';
import Header from '../components/Header';



const RegisterComponent = () => {
    const [fName, setfName] = useState('');
    const [lName, setlName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cPassword, setCpassword] = useState('');
    const [redirect, setRedirect]= useState(false);
    //**above is the data being taken in and destructured with set values from the input.  */
    //**next is the submit function that will turn the input into reflectable or sendable data. */
    const submit = event => {
        event.preventDefault();

        axios.post('http://localhost:8001/api/register',{
            fName,
            lName,
            email,
            password,
            cPassword
        }).then(response => {
            console.log(response.data)
        });
        
    setRedirect(true);
    }
    if(redirect) {
        return <Redirect to='/Login'/>;
    }
        

    return (
        <div>
            <Header/>
            <form onSubmit={submit} className="container-register">
            <h1>This is the register page</h1>
            <label htmlFor="fName">First Name:</label><br></br>
            <input type="text" name='fName' id="fName" onChange={e => setfName(e.target.value)}/><br/>
            <label htmlFor="lName">Last Name:</label><br></br>
            <input type="text" name='lName' id='lName' onChange={e => setlName(e.target.value)}/><br/>
            <label htmlFor="e-mail">E-mail Please:</label><br></br>
            <input type="email" name="email" id="e-mail" onChange={e => setEmail(e.target.value)}/><br/>
            <label htmlFor="pass">Password Please</label><br></br>
            <input type="password" name="password" id="pass" onChange={e => setPassword(e.target.value)}/><br/>
            <label htmlFor="passT">Confirm Password Please:</label><br/>
            <input type="password" name="cPassword" id="passT" onChange={e => setCpassword(e.target.value)}/><br/>
            <button type="submit" className="button">Reigster Button</button>
            </form>            
        </div>
    )
}

export default RegisterComponent
