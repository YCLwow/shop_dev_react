/*
 * @Author: liuyichen
 * @Date: 2022-07-28 10:06:52
 * @LastEditors: liuyichen
 * @LastEditTime: 2022-08-24 09:38:44
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
import UseTabHeader from '../src/components/tabHeader'
import UseTabFooter from '../src/components/tabFooter'
function App() {
  return (
    <GlobalProvider>
      <div style={{ padding: '50px 0' }}>
        <BrowserRouter>
          <UseTabHeader />
          <Routes>
            <Route path="/" element={<UseLogin />} />
            <Route path="/login" element={<UseLogin />} />
            <Route path="/home" element={<UseHome />} />
            <Route path="/shoppingcat" element={<ShoppingCat />} />
            <Route path="/classification" element={<Classification />} />
          </Routes>
          <UseTabFooter />
        </BrowserRouter>
      </div>

    </GlobalProvider>
  )
}

export default App
