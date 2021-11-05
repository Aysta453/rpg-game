import React from 'react'
import './MultiPlayerView.css';

const MultiPlayerView = () => {
    return (
        <div className="multiContener">
            <div className="playersView">
                <div className="mainPlayer">
                    <div className="avatarBox">
                        <div className="avatar">

                        </div>
                    </div>
                    <div className="nick">Aysta</div>
                    <div className="healtPoints">
                                                <div className="healtPoints-div"  style={{ width: `${250}px` }} >
                            <div style={{ width: `${40}px` }} className="progressPlayerHealthPoints" />
                        </div>
                    </div>
                    <div className="manaPoints">
                                                <div className="manaPoints-div"  style={{ width: `${220}px` }} >
                           <div style={{ width: `${40}px` }} className="progressPlayerManaPoints" />
                     </div>
                    </div>
                </div>
                 <div className="player">
                    <div className="avatarBox">
                        <div className="avatar">

                        </div>
                    </div>
                    <div className="nick">Aysta</div>
                    <div className="healtPoints">
                                                <div className="healtPoints-div"  style={{ width: `${130}px` }} >
                            <div style={{ width: `${40}px` }} className="progressPlayerHealthPoints" />
                        </div>
                    </div>
                    <div className="manaPoints">
                                                <div className="manaPoints-div"  style={{ width: `${100}px` }} >
                           <div style={{ width: `${40}px` }} className="progressPlayerManaPoints" />
                     </div>
                    </div>
                </div>
                  <div className="player">
                    <div className="avatarBox">
                        <div className="avatar">

                        </div>
                    </div>
                    <div className="nick">Aysta</div>
                    <div className="healtPoints">
                                                <div className="healtPoints-div"  style={{ width: `${130}px` }} >
                            <div style={{ width: `${40}px` }} className="progressPlayerHealthPoints" />
                        </div>
                    </div>
                    <div className="manaPoints">
                                                <div className="manaPoints-div"  style={{ width: `${100}px` }} >
                           <div style={{ width: `${40}px` }} className="progressPlayerManaPoints" />
                     </div>
                    </div>
                </div>
                <div className="player">
                    <div className="avatarBox">
                        <div className="avatar">

                        </div>
                    </div>
                    <div className="nick">Aysta</div>
                    <div className="healtPoints">
                                                <div className="healtPoints-div"  style={{ width: `${130}px` }} >
                            <div style={{ width: `${40}px` }} className="progressPlayerHealthPoints" />
                        </div>
                    </div>
                    <div className="manaPoints">
                                                <div className="manaPoints-div"  style={{ width: `${100}px` }} >
                           <div style={{ width: `${40}px` }} className="progressPlayerManaPoints" />
                     </div>
                    </div>
                </div>
                 <div className="player">
                    <div className="avatarBox">
                        <div className="avatar">

                        </div>
                    </div>
                    <div className="nick">Aysta</div>
                    <div className="healtPoints">
                                                <div className="healtPoints-div"  style={{ width: `${130}px` }} >
                            <div style={{ width: `${40}px` }} className="progressPlayerHealthPoints" />
                        </div>
                    </div>
                    <div className="manaPoints">
                                                <div className="manaPoints-div"  style={{ width: `${100}px` }} >
                           <div style={{ width: `${40}px` }} className="progressPlayerManaPoints" />
                     </div>
                    </div>
                </div>
            </div>
            <div className="enemy">
                <div className="avatar">
                    <div className="nick">
                        name
                    </div>
                    <div className="level">
                        Level
                    </div>                    
                </div>
                <div className="healthPoints">
                    <div className="progressMonsterHealthPoints-div" style={{ width: `${298}px` }}>
                        <div style={{ width: `${150}px` }} className="progressMonsterHealthPoints" />
                    </div>
                    <div className="progress-div-monsterHealthPointsText">
                        60/700
                    </div>
        
            </div>
            </div>
            <div className="playerViewBattleController">
                <div className="playerValues">
                    <div className="healtPoints-div"  style={{ width: `${200}px` }} >
                        <div style={{ width: `${150}px` }} className="progressPlayerHealthPoints" />

                    <div className="progress-div-playerHealthPointsText">
                        60/700
                    </div>
                    </div>
                   <div className="manaPoints-div"  style={{ width: `${200}px` }} >
                        <div style={{ width: `${150}px` }} className="progressPlayerManaPoints" />

                    <div className="progress-div-playerManaPointsText">
                        60/700
                    </div>
                    </div>

                </div>
                <div className="actions">
                    <div className="attackModes">
                        <div className="mode atk1">
                            1
                        </div>
                          <div className="mode atk2">
                                2
                        </div>
                          <div className="mode atk3">
                                3
                        </div>
                    </div>
                    <div className="skills">
                        <div className="skill skill1">
                                                     
                            <div className="skillTooltip">
                                <p className={"nametool"}>nazwa skilla</p>
                                <p className={"costtool"}>koszt many: <span className={"pcosttool"}>(wartosc)</span></p>
                                <p className={"worftool"}>wartość umiejetnosci: <span className={"pworftool"}>(dmg)</span></p>
                            </div>

                        </div>
                         <div className="skill skill2">
                                                        
                            <div className="skillTooltip">
                                <p className={"nametool"}>nazwa skilla</p>
                                <p className={"costtool"}>koszt many: <span className={"pcosttool"}>(wartosc)</span></p>
                                <p className={"worftool"}>wartość umiejetnosci: <span className={"pworftool"}>(dmg)</span></p>
                            </div>

                        </div>
                         <div className="skill skill3">
                                                        
                            <div className="skillTooltip">
                                <p className={"nametool"}>nazwa skilla</p>
                                <p className={"costtool"}>koszt many: <span className={"pcosttool"}>(wartosc)</span></p>
                                <p className={"worftool"}>wartość umiejetnosci: <span className={"pworftool"}>(dmg)</span></p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default MultiPlayerView;
