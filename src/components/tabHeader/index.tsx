/*
 * @Author: liuyichen
 * @Date: 2022-08-22 15:12:24
 * @LastEditors: liuyichen
 * @LastEditTime: 2022-08-24 10:49:54
 * @FilePath: \代码仓库\shop_dev_react\src\components\tabHeader\index.tsx
 * @Description: 
 * 
 * Copyright (c) 2022 by liuyichen, All Rights Reserved. 
 */
import { NavBar } from 'antd-mobile';
import styles from './index.module.scss'
import { MessageOutline } from 'antd-mobile-icons'
import {
  Route,
  useLocation,
  MemoryRouter as Router,
  useNavigate
} from 'react-router-dom'
import { useEffect, useState } from 'react';
const UseTabHeader = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { pathname } = location
  const [navName, setNavName] = useState('首页')

  useEffect(() => {
    console.log(pathname)
    switch (pathname) {
      case '/home':
        setNavName('首页')
        break;
      case '/shoppingcat':
        setNavName('购物车')
        break;
      case '/classification':
        setNavName('分类')
        break;
      case '/me':
        setNavName('我的')
        break;
    }
  }, [pathname])
  return <div className={styles.tabHeader}>
    <NavBar backArrow={<MessageOutline />} >
      {navName}
    </NavBar>
  </div>
}
export default UseTabHeader