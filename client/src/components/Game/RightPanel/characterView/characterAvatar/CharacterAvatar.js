import React from 'react';
import { useSelector } from 'react-redux';


const CharacterAvatar = () => {
    const hero = useSelector(state => state.hero);
    let widthBarExp = 300;
    let heroClassPolish;
    let progress = (hero.expStart / hero.expStop) * widthBarExp;
    switch (hero.heroClass) {
        case 'Mage':
            heroClassPolish = 'Mag';
            break;
        case 'Priest':
            heroClassPolish = 'Kapłan';
            break;
        case 'Warrior':
            heroClassPolish = 'Wojownik';
            break;
        case 'Berserk':
            heroClassPolish = 'Berserker';
            break;
        case 'Hunter':
            heroClassPolish = 'Łucznik';
            break;
    }
    return(<>
            <div className='avatar'>
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
        </>
    );
};

export default CharacterAvatar;