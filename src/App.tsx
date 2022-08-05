/*
 * @Author: liuyichen
 * @Date: 2022-07-28 10:06:52
 * @LastEditors: liuyichen
 * @LastEditTime: 2022-08-05 09:52:27
 * @FilePath: \代码仓库\shop_dev_react\src\App.tsx
 * @Description: 
 * 
 * Copyright (c) 2022 by liuyichen, All Rights Reserved. 
 */
import './App.css';
import UseLogin from '../src/pages/login'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
// import React, { useState } from 'react'
import {GlobalProvider} from '../src/until/GlobalContext'
function App() {
  return (
    <GlobalProvider >
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<UseLogin />} />
            <Route path="/login" element={<UseLogin />} />
          </Routes>
        </BrowserRouter>
      </div>
    </GlobalProvider>
  );
}

export default App;
