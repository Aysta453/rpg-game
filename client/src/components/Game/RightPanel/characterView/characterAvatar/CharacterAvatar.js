import React from 'react';
import { useSelector } from 'react-redux';


const CharacterAvatar = () => {
    const hero = useSelector(state => state.hero);
    let heroClassPolish;
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
                <div className='infoNick'><h3>{hero.nick}</h3></div>
                <div className='info'><h3>{heroClassPolish}</h3></div>
            <div className='info'><h3>Poziom {hero.level}</h3></div>
            <div className='infoExp'>
                <h3>Exp: {hero.expStart}/{hero.expStop}</h3>
            </div>
            </div>
        </>
    );
};

export default CharacterAvatar;