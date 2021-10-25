import React from 'react';

import './DungeonsView.css';
import DungeonView from './DungeonView';
const DungeonsView=()=>{
    return(<>
        <div className='dungeonsView'>
            <div className='dungeonsViewTopic'><h1>Tablica Wypraw</h1></div>
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