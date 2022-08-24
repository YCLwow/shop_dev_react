/*
 * @Author: liuyichen
 * @Date: 2022-08-22 15:12:24
 * @LastEditors: liuyichen
 * @LastEditTime: 2022-08-24 09:14:47
 * @FilePath: \代码仓库\shop_dev_react\src\components\tabHeader\index.tsx
 * @Description: 
 * 
 * Copyright (c) 2022 by liuyichen, All Rights Reserved. 
 */
import {NavBar } from 'antd-mobile';
import styles from './index.module.scss'
import { MessageOutline } from 'antd-mobile-icons'
const  UseTabHeader = ()=>{
  return <div className={styles.tabHeader}>
         <NavBar backArrow={<MessageOutline />} >
          首页
        </NavBar>
  </div>
}
export default UseTabHeader