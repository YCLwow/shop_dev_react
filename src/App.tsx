/*
 * @Author: liuyichen
 * @Date: 2022-07-28 10:06:52
 * @LastEditors: 周铁柔 aa3441759088@163.com
 * @LastEditTime: 2022-08-18 08:59:42
 * @FilePath: \代码仓库\shop_dev_react\src\App.tsx
 * @Description:
 *
 * Copyright (c) 2022 by liuyichen, All Rights Reserved.
 */
import './App.css'
// 登录
import UseLogin from '../src/pages/login'
// 首页
import UseHome from '../src/pages/home'
import ShoppingCat from '../src/pages/shoppingCart'
import Classification from '../src/pages/classification'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { GlobalProvider } from '../src/until/GlobalContext'
function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UseLogin />} />
          <Route path="/login" element={<UseLogin />} />
          <Route path="/home" element={<UseHome />} />
          <Route path="/shoppingcat" element={<ShoppingCat />} />
          <Route path="/classification" element={<Classification />} />
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App
