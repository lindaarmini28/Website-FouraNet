import React, { useState } from 'react';
import {
  AppstoreOutlined,
  UsergroupAddOutlined,
  FormOutlined,
} from '@ant-design/icons';
import { Divider, Menu, Switch } from 'antd';
import { NavLink } from 'react-router-dom';
const items = [
  {
    key: '1',
    icon: <AppstoreOutlined />,
    label: (
      <NavLink to="/dashboard">
        <span className="label">Dashboard</span>
      </NavLink>
    ),
  },
  {
    key: '2',
    icon: <FormOutlined />,
    label: "Registrasi",
    children: [
      {
        key: '3',
        label: (
         <NavLink to="/regis-tempat">Registrasi Tempat</NavLink> 
        ),
      },
      {
        key: '4',
        label: 'Registrasi Server',
      },
      {
        key: '5',
        label: 'Registrasi Panel',
      },
      {
        key: '6',
        label: 'Registrasi Router',
      },
      {
        key: '7',
        label: 'Registrasi Switch',
      },
      {
        key: '8',
        label: 'Registrasi Alat Perangkat',
      },
    ],
  },
  {
    key: '9',
    label: 'Management User',
    icon: <UsergroupAddOutlined />,
  },
];
const App = () => {
  const [mode, setMode] = useState('inline');
  const [theme, setTheme] = useState('light');
  const changeMode = (value) => {
    setMode(value ? 'vertical' : 'inline');
  };
  const changeTheme = (value) => {
    setTheme(value ? 'dark' : 'light');
  };
  return (
    <>
      <div className="brand">
        <span>WebfmSI.com</span>
      </div>
      <hr />
      <br />
      <Switch onChange={changeMode} /> Mode
      <Divider type="vertical" />
      <Switch onChange={changeTheme} /> Style
      <br />
      <br />
      <Menu
        style={{
          width: 256,
        }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode={mode}
        theme={theme}
        items={items}
      />
    </>
  );
};
export default App;