import React from 'react';

import './DungeonsView.css';
import DungeonView from './DungeonView';
const DungeonsView=()=>{
    return(<>
        <div className='dungeonsView'>
            <div className='title'>Tablica Wypraw</div>
            <div className='dungeons'>
                <DungeonView />
                <DungeonView />
                <DungeonView/>
            </div>
            </div>
        </>
    );
};

export default DungeonsView;