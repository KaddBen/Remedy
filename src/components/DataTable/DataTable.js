import { useEffect, useState } from "react";
import React from "react";
//import DataTables from "./DataPluginReact";
import "./DataPluginReact/DataTable.css";
import { useSelector } from 'react-redux';
import DataTables from "datatables-plugin-react";
//import { useState } from "react";
const DataTable = () => {

let state = useSelector(state =>state.reducer);
// const [data, setData] = useState([{
//   name: "hello",
//   lastname: "hello",
//   startdate: "hello",
//   birthdate: "hello",
//   street: "hello",
//   city: "hello",
//   state: "hello",
//   department: "hello"
//   }])
//let getData = async () => {return state}
// let data = [];
// useEffect(() => {
 
//   data= state
// //getData().then(data => console.log(data))
// //console.log(data);
// }, [data])
  const columns = [
    {
      name: "First Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Last Name",
      selector: (row) => row.lastname,
      sortable: true,
    },
    {
      name: "Start Date",
      selector: (row) => row.startdate,
      sortable: true,
    },
    {
      name: "Date of Birth",
      selector: (row) => row.birthdate,
      sortable: true,
    },
    {
      name: "Street",
      selector: (row) => row.street,
      sortable: true,
    },
    {
      name: "City",
      selector: (row) => row.city,
      sortable: true,
    },
    {
      name: "State",
      selector: (row) => row.state,
      sortable: true,
    },
    {
      name: "Zip Code",
      selector: (row) => row.zipcode,
      sortable: true,
    },
    {
      name: "Department",
      selector: (row) => row.department,
      sortable: true,
    },
  ];
  const user = [
    {
      firstNameValue: "text1",
      lastNameValue: "text2",
      startValue: "text3",
    },
    {
      firstNameValue: "text1",
      lastNameValue: "text2",
      startValue: "text3",
    },
  ];
  const label = [
  {text: "Frst Name", value:"columnName1"},
  {text: "Last Name", value: "lastNameValue"},
  {text:"Start Date", value:"startValue"},
  {text:"Birth Date", value: "birthValue"},
  {text:"Street", value:"streetValue"},
  {text: "City", value: "cityValue"},
  {text:"State", value: "state"},
  {text: "Sale", value: "sale"}
  ];
  //const [userInfos, setUserInfos] = useState(data)
  const handleFilter = (e) => {
    //const newData = userInfos.filter(row => row.name.toLowerCase().includes(e.target.value.toLowerCase()))
    // eslint-disable-next-line no-use-before-define
    //setUserInfos(newData)
    //if(e.target.value.length === 0) setUserInfos(data)
  };

  return <DataTables data={state} labels={label} />;
};

export default DataTable;
