/*
 * @Author: liuyichen
 * @Date: 2022-08-24 09:16:03
 * @LastEditors: liuyichen
 * @LastEditTime: 2022-08-24 09:42:39
 * @FilePath: \代码仓库\shop_dev_react\src\components\tabFooter\index.tsx
 * @Description: 
 * 
 * Copyright (c) 2022 by liuyichen, All Rights Reserved. 
 */
import { NavBar, TabBar } from 'antd-mobile'
import {
  Route,
  useLocation,
  MemoryRouter as Router,
  useNavigate
} from 'react-router-dom'
import {
  AppOutline,
  MessageOutline,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons'
import styles from './index.module.scss'
const UseTabFooter = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { pathname } = location
  const tabs = [
    {
      key: '/home',
      title: '首页',
      icon: <AppOutline />,
    },
    {
      key: '/shoppingcat',
      title: '购物车',
      icon: <UnorderedListOutline />,
    },
    {
      key: '/classification',
      title: '分类',
      icon: <MessageOutline />,
    },
    {
      key: '/me',
      title: '我的',
      icon: <UserOutline />,
    },
  ]

  const setRouteActive = (value: string) => {
    navigate(value)
  }

  return <div className={styles.tabFooter}>
    <TabBar activeKey={pathname} onChange={value => setRouteActive(value)}>
      {tabs.map(item => (
        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
      ))}
    </TabBar>
  </div>
}
export default UseTabFooter