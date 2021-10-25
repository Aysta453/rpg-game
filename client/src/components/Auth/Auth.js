import React,{useState} from 'react';

import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {signin,signup } from '../../actions/auth.js';
import Input from './Input.js';
import './auth.css';
import Select from './Select.js';

const initialState = {
    nick: '',
    heroClass: 'Mage',
    email: '',
    password: '',
    confirmPassword: '',
};

const Auth = () => {
    
    const [isSingnup, setIsSingnup] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();
    const history = useHistory();


    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSingnup) {
            dispatch(signup(formData, history));
        } else {
        dispatch(signin(formData, history));
      }
    };

 
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
        
    };
    const switchMode = () => {
        setIsSingnup((prevIsSignup) => !prevIsSignup);
        
    };

    return (
        <>
            <div className="main">
                <div className="auth">
                    <div className="authTitle">
                        <h1>Gra Przęglądarkowa RPG <b>Aysta</b></h1>        
                    </div>
                    <div className="authForm">
                        <div className="authContent">
                            <div className="authContentTitle">
                                <h1> {!isSingnup ? 'Logowanie':'Rejestracja'}</h1>
                            </div>
                            <div className="s">
                                <form onSubmit={handleSubmit}>
                                    {
                                        isSingnup && (
                                            <>
                                                <Input name="nick" label="Nick Postaci" handleChange={handleChange}   />
                                                <Select name="heroClass" label="Klasa Postaci" handleChange={handleChange} />
                                               
                                            </>
                                        )
                                    }
                                        <Input name="email" label="Adres Email" handleChange={handleChange} type="email" />
                                                    
                                        <Input name="password" label="Hasło" handleChange={handleChange} type="password"/>
                                                
                                        {isSingnup && <Input name="confirmPassword" label="Powtórz Hasło" handleChange={handleChange} type="password" />}
                                                                               
                                        <button className='buttonAuth' type="submit" >
                                            {isSingnup ? 'Zarejestruj się': 'Zaloguj się'}
                                        </button>

                                        <button className='buttonAuth' onClick={switchMode}>
                                            {isSingnup ? 'Masz już konto? Zaloguj się' : 'Nie masz konta? Zarejestruj się'}
                                        </button>   
                                </form>	
                            </div>  
                        </div> 
                    </div>
                </div>
            </div>
        </>
    )
}

export default Auth;
