/*
 * @Author: liuyichen
 * @Date: 2022-07-28 10:06:52
 * @LastEditors: liuyichen
 * @LastEditTime: 2022-08-01 10:32:35
 * @FilePath: \代码仓库\shop_dev_react\src\App.tsx
 * @Description: 
 * 
 * Copyright (c) 2022 by liuyichen, All Rights Reserved. 
 */

import './App.css';
import Login from '../src/pages/login'
import { Routes, Route,BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
