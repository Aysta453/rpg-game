import React from 'react';
import GroupView from './GroupView';
import './groupView.css';
const GroupsView = () => {
    return (
        <div className='groupsView'>
            <div className='title'>
                <button className='optionRefresh' onClick={() => { console.log('tak'); }}>Odśwież</button>
                <button  className='optionBack' onClick={() => {console.log('nie');}}>Wróć</button>
                    Grupy
            </div>
            <div className='groups'>
                <GroupView />
                <GroupView />

                <GroupView />
                <GroupView />
                <GroupView />
                <GroupView />
                <GroupView />
                <GroupView />
                <GroupView />
                <GroupView />
                <GroupView />
                <GroupView />


            </div>
        </div>
    )
}

export default GroupsView;
