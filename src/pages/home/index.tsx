/*
 * @Author: liuyichen
 * @Date: 2022-07-29 14:46:15
 * @LastEditors: 周铁柔 aa3441759088@163.com
 * @LastEditTime: 2022-08-09 09:24:54
 * @FilePath: \代码仓库\shop_dev_react\src\pages\home\index.tsx
 * @Description: 
 * 
 * Copyright (c) 2022 by liuyichen, All Rights Reserved. 
 */
import styles from './index.module.scss'
import blueMoon from '../../images/home/blueMoon.jpg'
import tea from '../../images/home/tea.png'
import jiu from '../../images/home/jiu.jpg'
import close from '../../images/home/close.jpg'
import shoes from '../../images/home/shoes.jpg'
import home from '../../images/home/home.jpg'
import life from '../../images/home/life.jpg'

import { Button, Space, Swiper, Toast } from 'antd-mobile'
const UseHome = () => {
  const imgs = [{ id: 1, src: tea }, { id: 2, src: blueMoon }, { id: 3, src: jiu }]

  return (
    <div className={styles.home}>
      <div className={styles.swiper} >
        <Swiper>{
          imgs.map(item => (
            <Swiper.Item key={item.id}>
              <div
                className={styles.swiper}
                onClick={() => {
                  Toast.show(`你点击了卡片 ${item.id}`)
                }}
              >
                {/* <img src={item.src} alt="" /> */}
                <div className={styles.swiperMain} style={{ backgroundImage: `url(${item.src})` }} ></div>
              </div>
            </Swiper.Item>
          ))
        }</Swiper>
      </div>
      <div className={styles.navgtion}>
        <div>
          <img src={close} alt="" />
          <p>
            衣服
          </p>
        </div>
        <div>
          <img src={shoes} alt="" />
          <p>
            鞋子
          </p>
        </div>
        <div>
          <img src={home} alt="" />
          <p>
            家具
          </p>
        </div>
        <div>
          <img src={life} alt="" />
          <p>
            生活用品
          </p>
        </div>
      </div>
    </div>
  )
}
export default UseHome