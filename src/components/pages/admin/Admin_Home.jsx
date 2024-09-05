import MenuBar from '../../MenuBar';
import Error401 from '../error/Error401';
import '../../../css/Admin_Home.css';
import AWS_Authenticator from '../../AWS_Authenticator';
import AuthStatusEnum from '../../../types/AuthStatusEnum';
import Admin_AddFaculty from "./Admin_AddFaculty";
import React, { useState, useEffect } from 'react';
import axios from "axios";



function Admin_Home() {
const [Data, setData] = useState([]);
useEffect(() => {
  axios
  .get(
    "https://tsqijk5fz2.execute-api.us-east-2.amazonaws.com/default/getAdmin",
      {
        params: {
          ftn: "getDept",
          params: "3"
        },
      }
    )
  .then((res) =>  console.log(JSON.parse(res.data.body)))
  .catch((err) => console.log(err));
}, []);


  return (
    <div className="admin-home-body-frame">
      <div className="admin-home-menu-bar-container">
        <MenuBar />
      </div>
      <div className="admin-home-content-container">
        <Admin_AddFaculty />
      </div>
    </div>
  );
}

export default AWS_Authenticator(Admin_Home, AuthStatusEnum.ADMIN);