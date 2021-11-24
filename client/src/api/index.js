import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:7215' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    
    return req;
});


export const signIn = (formData) => API.post('/user/signin',formData);
export const signUp = (formData) => API.post('/user/signup', formData);

export const createNewHero = (formData) => API.post('/hero/createNewHero', formData);

export const getInfoAboutHero = (formData) => API.post(`/hero`, formData);

export const decreaseGold = (formData) => API.post(`/hero/decgold`, formData);
export const increaseGold = (formData) => API.post(`/hero/incgold`, formData);
export const decreaseDiamond = (formData) => API.post(`/hero/decdiamond`, formData);
export const increaseDiamond = (formData) => API.post(`/hero/incdiamond`, formData);

export const addRewardsAfterMission = (formData) => API.post(`/hero/addRewardsAfterMission`, formData);


export const createNewStats = (formData) => API.post('/stats/createNewStats', formData);
export const getInfoAboutStats = (formData) => API.post(`/stats`, formData);

export const increaseStatStrength = (formData) => API.post(`/stats/incstastr`,formData);
export const increaseStatDexterity = (formData) => API.post(`/stats/incstadex`,formData);
export const increaseStatIntellect = (formData) => API.post(`/stats/incstaint`,formData);
export const increaseStatStamina = (formData) => API.post(`/stats/incstasta`,formData);
export const increaseStatSpirit = (formData) => API.post(`/stats/incstaspi`, formData);


export const getItemInUse = (formData) => API.post(`/itemInUse/getItemInUse`, formData);
export const changeItemInUse = (formData) => API.post(`/itemInUse/changeItemInUse`, formData);
export const createNewItemInUse = (formData) => API.post(`/itemInUse/createNewItemInUse`, formData);



export const getAllItems = (formData) => API.post(`/item/getallItems`, formData);
export const deleteThisItem = (formData) => API.post(`/item/deleteThisItem`, formData);
export const createNewItem = (formData) => API.post(`/item/createNewItem`, formData);
export const assignItemToInventory1 = (formData) => API.post(`/item/assignItemToInventory`, formData);
export const deleteAndAssignItem = (formData) => API.post(`/item/deleteAndAssignItem`, formData);



export const getHeroSkills = (formData) => API.post(`/skills/getHeroSkills`, formData);
export const createNewSkillsToAccount = (formData) => API.post(`/skills/createNewSkillsToAccount`, formData);
export const unlockedSkill = (formData) => API.post(`/skills/unlockedSkill`, formData);
export const assignSkill = (formData) => API.post(`/skills/assignSkill`, formData);
export const addNewAvailablePoint = (formData) => API.post(`/skills/addNewAvailablePoint`, formData);

export const createMissions = (formData) => API.post(`/missions/createMissions`, formData);
export const showMissions = (formData) => API.post(`/missions/showMissions`, formData);
export const newMissions = (formData) => API.post(`/missions/newMissions`, formData);

export const createAllTradeItems = (formData) => API.post(`/trade/createalltradeitems`, formData);
export const getAllTradeItems = (formData) => API.post(`/trade/getalltradeitems`, formData);
export const updateAllTradeItems = (formData) => API.post(`/trade/updatealltradeitems`, formData);
export const updateOneTradeItems = (formData) => API.post(`/trade/updateonetradeitems`, formData);


export const createSkillsToBattle = (formData) => API.post(`/skillsInBattle/createSkillsToBattle`, formData);
export const getHeroSkillsToBattle = (formData) => API.post(`/skillsInBattle/getHeroSkillsToBattle`, formData);
export const updateSkillsInBattle = (formData) => API.post(`/skillsInBattle/updateSkillsInBattle`, formData);
export const updateSkillsInBattle2 = (formData) => API.post(`/skillsInBattle/updateSkillsInBattle2`, formData);



export const createNewInventory = (formData) => API.post(`/inventory/createNewInventory`, formData);
export const assignItemToInventory = (formData) => API.post(`/inventory/assignItemToInventory`, formData);
export const getInventory = (formData) => API.post(`/inventory/getInventory`, formData);
export const deleteItemFromInventory = (formData) => API.post(`/inventory/deleteItemFromInventory`, formData);
export const changeItemInInventory = (formData) => API.post(`/inventory/changeItemInInventory`, formData);








