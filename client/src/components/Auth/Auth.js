import React,{useEffect, useState} from 'react';

import { useDispatch ,useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import {signin,signup } from '../../actions/auth.js';
import {clearErrors } from '../../actions/error.js';

import Input from './Input.js';
import './auth.css';
import AuthPopup from './AuthPopup.js';

const initialState = {
    nick: '',
    heroClass: 'Warrior',
    email: '',
    password: '',
    confirmPassword: '',
};
const Auth = () => {
    const [isSingnup, setIsSingnup] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const [popupValue, setPopupValue] = useState(false);

    const error = useSelector(state => state.error);

    const showPopup = () => {
        setPopupValue(!popupValue);
    }
    const [authFormHeight, setAuthFormHeight] = useState(330);
    const [authLeftPosition, setAuthLeftPosition] = useState(585);
    const [infoNumber, setInfoNumber] = useState(1);

    const heroClassTable = ["Mage", "Warrior", "Hunter", "Priest", "Berserk"];
    const heroDescriptionTable = ["Dzięki odbytej nauce w wieży Magów, posiada wiedze na temat żywiołów, potrafi nimi władać oraz zadawać ogromne obrażenia magiczne.",
        "Za sprawą wysoką obroną oraz wytrzymałości jest ciężkim przeciwnikiem do pokonania.",
        "Profesja specializująca się w atakach dystansowych oraz wysokim unikiem za sprawą lekkiego panceraza.",
        "Kapłan potrafi zadawać obrażenia przy pomocy magii światła i mroku oraz potrafi leczyć rany otrzymane w boju.",
        "Zadaniem każdego berserkera jest przebijanie ścian nie zależnie od sytuacji, jest brutalny i za wszelką cene dąży do pokonania każdego przeciwnika."];
    const heroImageTable = ['1', '2', '3', '4', '5'];
 

    
    const [mode, setMode] = useState(2);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleInfoAboutHeroes = (direction) => {
        if (direction === 0) {
            if (infoNumber === 0) {
                setInfoNumber(infoNumber=> infoNumber= 4);
            } else {
                setInfoNumber(infoNumber=> infoNumber= infoNumber- 1);
            }
        } else if(direction===1) {
             if (infoNumber === 4) {
                 setInfoNumber(infoNumber=>infoNumber=0);
            } else {
                 setInfoNumber(infoNumber=> infoNumber= infoNumber+ 1);

            }
        }
    }

    const setPosition = (type) => {
        if (type === 1) {
            setAuthFormHeight(330);
            setAuthLeftPosition(585);
            setMode(2);
        } else if (type === 2) {
            setAuthFormHeight(450);
            setAuthLeftPosition(350);
            setMode(1);
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSingnup) {
            dispatch(signup(formData, history));
        } else {
       dispatch(signin(formData, history));
      }
    };

    const handleError = () => {
        showPopup();
        dispatch(clearErrors());
        setFormData(initialState);
        setInfoNumber(1);
    }

    const handleChange = (e) => {
        const value = e.target.value;
        const regNick = /^([a-zA-Z0-9 !@#_-]){1,10}$/;
        
        if ((e.target.value === '' || regNick.test(e.target.value)) && e.target.name === 'nick') {
            setFormData({ ...formData, [e.target.name]: value });
        } else if ((e.target.value === '' || regNick.test(e.target.value)) && e.target.name === 'confirmPassword') {
            setFormData({ ...formData, [e.target.name]: value });
        } else if ((e.target.value === '' || regNick.test(e.target.value)) && e.target.name === 'password') {
                        setFormData({ ...formData, [e.target.name]: value });
        }else if (e.target.name === 'email') {
            setFormData({ ...formData, [e.target.name]: value });
        }
      
    };

    const nameOfHeroClass = (name) => {
        switch (name) {
            case "Mage":
                return 'Mag';
            case "Warrior":
                return 'Wojownik';
            case 'Hunter':
                return 'Łucznik';
            case 'Priest':
                return 'Kapłan';
            case 'Berserk':
                return 'Berserker';
            default:
                break;
        }
    }
    const switchMode = () => {
        setIsSingnup((prevIsSignup) => !prevIsSignup);
    };
    useEffect(() => {
        if (error !== null) {
            showPopup();
        }
        // eslint-disable-next-line
    }, [error])
    
    useEffect(() => {
        setFormData({ ...formData, heroClass: heroClassTable[infoNumber] });
        // eslint-disable-next-line
    }, [infoNumber])
    return (
        <div className="main">
            {popupValue ? (<AuthPopup valueOfPopup={popupValue} handleError={handleError} error={error}/>):('')}
                <div className="auth">

                    <div className="authTitle">
                        Gra Przęglądarkowa RPG Aysta       
                </div>
                
                <div className="authForm">
                 
                     <form onSubmit={handleSubmit}>
                         {
                    isSingnup && (
                    <div className="authClassContent">
                        <div className="title">Wybór Postaci</div>
                                    <div className="avatar"><img className="imageAvatar" alt="" src={`/images/charactersAvatars/${heroImageTable[infoNumber]}.png`}/></div>
                        <div className="right">
                            <div  className="heroClass">{nameOfHeroClass(heroClassTable[infoNumber])}</div>
                            <div className="heroDescription">{heroDescriptionTable[infoNumber]}</div>
                        </div>
                        <div className="buttons">
                                    <button className="previousButton" onClick={() => {  handleInfoAboutHeroes(0) }}>Poprzednia</button>
                                    <button className="nextButton" onClick={() => {   handleInfoAboutHeroes(1) }}>Następna</button>
                            </div>
                        </div>
                             )
                    }    
                    <div style={{ left: `${authLeftPosition}px`,height: `${authFormHeight}px`}} className="authContent">
                            <div className="authContentTitle">
                                 {!isSingnup ? 'Logowanie':'Rejestracja'}
                            </div>
                            <div className="logItems">

                                    {
                                        isSingnup && (
                                            <>
                                                <Input name="nick" value={formData.nick} label="nazwa postaci" handleChange={handleChange}   />  
                                            </>
                                        )
                                    } 
                                        <Input name="email" value={formData.email}  label="adres email" handleChange={handleChange} type="email" />
                                                    
                                        <Input name="password" value={formData.password}  label="hasło" handleChange={handleChange} type="password"/>
                                                
                                        {isSingnup && <Input name="confirmPassword"  value={formData.confirmPassword}  label="powtórz hasło" handleChange={handleChange} type="password" />}
                                                                               
                                        <button className='buttonAuth' type="submit" >
                                            {isSingnup ? 'Zarejestruj się': 'Zaloguj się'}
                                        </button>

                                <button className='buttonAuth' onClick={() => {
                                    switchMode();
                                    setPosition(mode);
                                }}>
                                            {isSingnup ? 'Masz już konto? Zaloguj się' : 'Nie masz konta? Zarejestruj się'}
                                        </button>   
                                
                            </div>  
                        </div> 
                    </form>	
                </div>
                </div>

            </div>
        
    )
}

export default Auth;
