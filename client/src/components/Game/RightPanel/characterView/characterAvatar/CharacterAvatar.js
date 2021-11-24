import React from 'react';
import { useSelector } from 'react-redux';


const CharacterAvatar = () => {
    const hero = useSelector(state => state.hero);
    let widthBarExp = 300;
    let heroClassPolish;
    let progress = (hero.expStart / hero.expStop) * widthBarExp;
    let image;
    switch (hero.heroClass) {
        case 'Mage':
            heroClassPolish = 'Mag';
            image = '/images/charactersAvatars/1.png';
            break;
        case 'Priest':
            heroClassPolish = 'Kapłan';
            image = '/images/charactersAvatars/4.png';
            break;
        case 'Warrior':
            heroClassPolish = 'Wojownik';
            image = '/images/charactersAvatars/2.png';
            break;
        case 'Berserk':
            heroClassPolish = 'Berserker';
            image = '/images/charactersAvatars/5.png';
            break;
        case 'Hunter':
            heroClassPolish = 'Łucznik';
            image = '../images/charactersAvatars/3.png';
            break;
        default:
            break;
    }
    return(<>
        <div className='avatar' >
            <img src={`${image}`} alt="" className="imageSkill"/>
            <div className={'background'}>
                <div className='infoNick'>{hero.nick}</div>
                <div className='klasa'>{heroClassPolish}</div>
            <div className='info'>Poziom {hero.level}</div>
            
                <div className="progressExp-div" style={{ width: widthBarExp }}>
                      
                    <div style={{ width: `${progress}px` }} className="progressExp"></div>
                 
                  
            </div>
            <div className="expInfo">
                {hero.expStart} / {hero.expStop}
            </div>
            </div>
            </div>
        </>
    );
};

export default CharacterAvatar;