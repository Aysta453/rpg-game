import { AUTH,ERROR_HANDLE } from '../constants/actionTypes';

import * as api from '../api/index.js';



export const signin = (formData,history) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData);
        dispatch({ type: AUTH, data });
        history.push('/home');
    } catch (error) {
        dispatch({ type: ERROR_HANDLE, payload:error.response.data  });
        console.log(error);
    }
}

export const signup = (formData,history) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData);

        const owner = data.result._id;
        const nick = formData.nick;
        const heroClass = formData.heroClass;
        
        await api.createNewHero({owner,nick,heroClass});
        await api.createNewStats({ owner });
        await api.createNewItemInUse({ owner,heroClass });
        await api.createNewSkillsToAccount({ owner,heroClass });
        await api.createAllTradeItems({ owner, heroClass, level: 1 });
        await api.createNewInventory({owner:owner})
        await api.createMissions({ owner });
        await api.createDungeons({ owner });
        await api.createSkillsToBattle({ owner });

        dispatch({ type: AUTH, data });

        history.push('/home');

    } catch (error) {
         dispatch({ type: ERROR_HANDLE, payload:error.response.data  });
        console.log(error);
    }
}