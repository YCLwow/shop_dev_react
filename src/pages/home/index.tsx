/*
 * @Author: liuyichen
 * @Date: 2022-07-29 14:46:15
 * @LastEditors: liuyichen
 * @LastEditTime: 2022-09-16 15:05:15
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
import haopro from '../../images/home/haopro.png'
import aiShop from '../../images/home/aiShop.png'
import recommend from '../../images/home/recommend.jpg'
import { request } from '../../until/http';

import { Button, Space, Swiper, Toast } from 'antd-mobile'
import { useState, useEffect } from 'react';
const UseHome = () => {

  // 商品接口
  interface ProductFace {
    name: string,
    desc:string,
    picUrl:string,
    productType:string,
    price:number,
    id:string
  }

  // 广告栏
  const imgs = [
    { id: 1, src: tea },
    { id: 2, src: blueMoon },
    { id: 3, src: jiu },
  ]
  // 有好货
  const [ownProductImg, setOwnProductImg] = useState<ProductFace[]>([])
  const [LoveProductImg, setLoveProductImg] = useState<ProductFace[]>([])
  const [hotProductImg, setHotProductImg] = useState<ProductFace[]>([])

  const getProduct = async () => {
    let res = await request.post({
      url: '/api/productList',
      data: {
        productType: [1,2,3]
      }
    })
    console.log(res)
    if (res.sucess) {
      // debugger
      let ownArr = res.data.filter((item:ProductFace)=>{
        return item.productType=='1'
      })
      setOwnProductImg(ownArr)
      let loveArr = res.data.filter((item:ProductFace)=>{
        return item.productType=='2'
      })
      setLoveProductImg(loveArr)
      let hotArr = res.data.filter((item:ProductFace)=>{
        return item.productType=='3'
      })
      setHotProductImg(hotArr)
    } else {
      Toast.show({
        content: res.message,
        afterClose: () => {
          console.log('after')
        },
      })
    }
  }

  useEffect(() => {
    getProduct()
    console.log(ownProductImg)
  },[])

  return (
    <div className={styles.home}>
      <div className={styles.swiper}>
        <Swiper>
          {imgs.map((item) => (
            <Swiper.Item key={item.id}>
              <div
                className={styles.swiperView}
                onClick={() => {
                  Toast.show(`你点击了卡片 ${item.id}`)
                }}>
                {/* <img src={item.src} alt="" /> */}
                <div
                  className={styles.swiperMain}
                  style={{ backgroundImage: `url(${item.src})` }}></div>
              </div>
            </Swiper.Item>
          ))}
        </Swiper>
      </div>
      <div className={styles.navgtion}>
        <div>
          <img src={close} alt="" />
          <p>衣服</p>
        </div>
        <div>
          <img src={shoes} alt="" />
          <p>鞋子</p>
        </div>
        <div>
          <img src={home} alt="" />
          <p>家具</p>
        </div>
        <div>
          <img src={life} alt="" />
          <p>生活用品</p>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.title}>
          <img src={haopro} alt="" />
          <span>与品质生活不期而遇</span>
        </div>
        <div className={styles.cardBox}>
          {ownProductImg.map(item => {
            return <div key={item.id} className={styles.main}>
              <div className={styles.left}>
                <img src={item.picUrl} alt="" />
              </div>
              <div className={styles.right}>
                <div className={styles.name}>{item.name}</div>
                <div className={styles.desc}>{item.desc}</div>
              </div>
            </div>
          })}
        </div>

      </div>
      <div className={styles.content}>
        <div className={styles.title}>
          <img src={aiShop} alt="" />
          <span>献给聪明可爱的你</span>
        </div>
        <div className={styles.cardBox}>
          

          {LoveProductImg.map(item=>{
            return <div key={item.id} className={styles.main}>
            <div className={styles.left}>
              <img src={item.picUrl} alt="" />
            </div>
            <div className={styles.right}>
              <div className={styles.name}>{item.name}</div>
              <div className={styles.desc}>{item.desc}</div>
            </div>
          </div>
          })}
        </div>

      </div>

      <div className={styles.recommend}>
        <img src={recommend} alt="" />
      </div>
      <div className={styles.hotSale}>
        <div className={styles.title}>
          <span>热卖单品</span>
        </div>
        <div className={styles.saleBodyblock}>
          <ul>
            {hotProductImg.map(item=>{
              return  <li key={item.id}>
              <img src={item.picUrl}></img>
              <p>2016年春Gillivo嘉里奥新款零钱包正品专柜</p>
              <div className={styles.hotBt}>
                <span>
                  <span className={styles.mark}>￥</span>
                  <span className={styles.price}>{item.price}</span>
                </span>
                <span className={styles.volume}>销量：0</span>
              </div>
            </li>
              
            })}
           
           
          </ul>
        </div>
      </div>
    </div>
  )
}
export default UseHome
