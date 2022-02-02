import React, { useEffect } from "react";

import MenuItem from "./MenuItem";
import MenuItemLogout from "./MenuItemLogout";
import Cash from "./Cash/Cash";

import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

const LeftPanel = ({ setWindowOfElements, setUser, user, buttonsControl }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/");
    setUser(null);
  };
  useEffect(() => {
    //const token = user?.token;
    setUser(JSON.parse(localStorage.getItem("profile")));
    // eslint-disable-next-line
  }, [location]);
  return (
    <>
      <div className="leftPanel">
        <Cash />
        <MenuItem buttonsControl={buttonsControl} setWindowOfElements={setWindowOfElements} page={1} text={"Postać"} />
        <MenuItem buttonsControl={buttonsControl} setWindowOfElements={setWindowOfElements} page={2} text={"Umiejętności"} />
        <MenuItem buttonsControl={buttonsControl} setWindowOfElements={setWindowOfElements} page={3} text={"Handlarz"} />
        <MenuItem buttonsControl={buttonsControl} setWindowOfElements={setWindowOfElements} page={4} text={"Tablica ogłoszeń"} />
        <MenuItem buttonsControl={buttonsControl} setWindowOfElements={setWindowOfElements} page={5} text={"Tablica wypraw"} />
        <MenuItemLogout buttonsControl={buttonsControl} logout={logout} text={"Wyloguj"} />
      </div>
    </>
  );
};

export default LeftPanel;
