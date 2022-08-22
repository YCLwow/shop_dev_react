/*
 * @Author: liuyichen
 * @Date: 2022-07-29 14:46:15
 * @LastEditors: liuyichen
 * @LastEditTime: 2022-08-22 14:41:51
 * @FilePath: \shop_dev_react\src\pages\home\index.tsx
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


import { Button, Space, Swiper, Toast } from 'antd-mobile'
const UseHome = () => {
  const imgs = [
    { id: 1, src: tea },
    { id: 2, src: blueMoon },
    { id: 3, src: jiu },
  ]

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
          <div className={styles.main}>
            <div className={styles.left}>
              <img src={'https://img.alicdn.com/imgextra/i3/1914575403/TB2Y1CoqQ9WBuNjSspeXXaz5VXa_!!1914575403-0-beehive-scenes.jpg_180x180xzq90.jpg_.webp'} alt="" />
            </div>
            <div className={styles.right}>
              <div>可折叠双面床的使用</div>
              <div className={styles.secondP}>可折叠aaaaaa双面床的使用</div>
            </div>
          </div>
          <div className={styles.main}>
            <div className={styles.left}>
              <img src={'https://img.alicdn.com/imgextra/i4/1022433859/O1CN01qkuVDn1eNSuEj5e6u_!!1022433859-0-beehive-scenes.jpg_180x180xzq90.jpg_.webp'} alt="" />
            </div>
            <div className={styles.right}>
              <div>可折叠双面床的使用</div>
              <div className={styles.secondP}>可折叠aaaaaa双面床的使用</div>
            </div>
          </div>
          <div className={styles.main}>
            <div className={styles.left}>
              <img src={'https://img.alicdn.com/imgextra/i1/3158956210/TB2wZ4IepuWBuNjSszbXXcS7FXa_!!3158956210-0-beehive-scenes.jpg_180x180xzq90.jpg_.webp'} alt="" />
            </div>
            <div className={styles.right}>
              <div>可折叠双面床的使用</div>
              <div className={styles.secondP}>可折叠aaaaaa双面床的使用</div>
            </div>
          </div>
          <div className={styles.main}>
            <div className={styles.left}>
              <img src={'https://img.alicdn.com/tfscom/i1/1581756766/TB2TF0ch0zJ8KJjSspkXXbF7VXa_!!1581756766.jpg_180x180xzq90.jpg_.webp'} alt="" />
            </div>
            <div className={styles.right}>
              <div>可折叠双面床的使用</div>
              <div className={styles.secondP}>可折叠aaaaaa双面床的使用</div>
            </div>
          </div>
          <div className={styles.main}>
            <div className={styles.left}>
              <img src={'https://img.alicdn.com/imgextra/i1/2895773580/O1CN01cfU4V01cJgOdPPJlS_!!2895773580-2-beehive-scenes.png_180x180xzq90.jpg_.webp'} alt="" />
            </div>
            <div className={styles.right}>
              <div>可折叠双面床的使用</div>
              <div className={styles.secondP}>可折叠aaaaaa双面床的使用</div>
            </div>
          </div>
          <div className={styles.main}>
            <div className={styles.left}>
              <img src={'https://img.alicdn.com/imgextra/i1/810373898/O1CN01alx0rm1efKNHkAk07_!!810373898-0-beehive-scenes.jpg_180x180xzq90.jpg_.webp'} alt="" />
            </div>
            <div className={styles.right}>
              <div>可折叠双面床的使用</div>
              <div className={styles.secondP}>可折叠aaaaaa双面床的使用</div>
            </div>
          </div>
        </div>

      </div>
      <div className={styles.content}>
        <div className={styles.title}>
          <img src={aiShop} alt="" />
          <span>献给聪明可爱的你</span>
        </div>
        <div className={styles.cardBox}>
          <div className={styles.main}>
            <div className={styles.left}>
              <img src={'https://img.alicdn.com/bao/uploaded/TB28TQ1nrBmpuFjSZFAXXaQ0pXa_!!2996832334.png_180x180xzq90.jpg_.webp'} alt="" />
            </div>
            <div className={styles.right}>
              <div>可折叠双面床的使用</div>
              <div className={styles.secondP}>可折叠aaaaaa双面床的使用</div>
            </div>
          </div>
          <div className={styles.main}>
            <div className={styles.left}>
              <img src={'https://img.alicdn.com/bao/uploaded/TB2jH_uoFXXXXXfXpXXXXXXXXXX_!!0-dgshop.jpg_180x180xzq90.jpg_.webp'} alt="" />
            </div>
            <div className={styles.right}>
              <div>可折叠双面床的使用</div>
              <div className={styles.secondP}>可折叠aaaaaa双面床的使用</div>
            </div>
          </div>
          <div className={styles.main}>
            <div className={styles.left}>
              <img src={'https://img.alicdn.com/bao/uploaded/TB2i9iuoFXXXXbPXpXXXXXXXXXX_!!0-juitemmedia.jpg_180x180xzq90.jpg_.webp'} alt="" />
            </div>
            <div className={styles.right}>
              <div>可折叠双面床的使用</div>
              <div className={styles.secondP}>可折叠aaaaaa双面床的使用</div>
            </div>
          </div>
          <div className={styles.main}>
            <div className={styles.left}>
              <img src={'https://img.alicdn.com/bao/uploaded/i0/TB1s.15NFXXXXbMaXXXXXXXXXXX_!!0-item_pic.jpg_180x180xzq90.jpg_.webp'} alt="" />
            </div>
            <div className={styles.right}>
              <div>可折叠双面床的使用</div>
              <div className={styles.secondP}>可折叠aaaaaa双面床的使用</div>
            </div>
          </div>
          <div className={styles.main}>
            <div className={styles.left}>
              <img src={'https://img.alicdn.com/bao/uploaded/TB2BnymXX95V1Bjy0FdXXc5BVXa_!!664782798-0-goldwindow.jpg_180x180xzq90.jpg_.webp'} alt="" />
            </div>
            <div className={styles.right}>
              <div>可折叠双面床的使用</div>
              <div className={styles.secondP}>可折叠aaaaaa双面床的使用</div>
            </div>
          </div>
          <div className={styles.main}>
            <div className={styles.left}>
              <img src={'https://img.alicdn.com/bao/uploaded/TB2jQl2ml0kpuFjy1zdXXXuUVXa_!!0-juitemmedia.jpg_180x180xzq90.jpg_.webp'} alt="" />
            </div>
            <div className={styles.right}>
              <div>可折叠双面床的使用</div>
              <div className={styles.secondP}>可折叠aaaaaa双面床的使用</div>
            </div>
          </div>
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
            <li>
              <img src={'https://img.alicdn.com/bao/uploaded/i3/446693207/TB283ZslFXXXXX4XXXXXXXXXXXX_!!446693207.jpg_200x200q90.jpg_.webp'}></img>
              <p>2016年春Gillivo嘉里奥新款零钱包正品专柜</p>
              <div className={styles.hotBt}>
                <span>
                  <span className={styles.mark}>￥</span>
                  <span className={styles.price}>12</span>
                </span>
                <span className={styles.volume}>销量：1</span>
              </div>
            </li>
            <li>
              <img src={'https://img.alicdn.com/bao/uploaded/i3/446693207/TB283ZslFXXXXX4XXXXXXXXXXXX_!!446693207.jpg_200x200q90.jpg_.webp'}></img>
              <p>2016年春Gillivo嘉里奥新款零钱包正品专柜</p>
              <div className={styles.hotBt}>
                <span>
                  <span className={styles.mark}>￥</span>
                  <span className={styles.price}>12</span>
                </span>
                <span className={styles.volume}>销量：1</span>
              </div>
            </li>
            <li>
              <img src={'https://img.alicdn.com/bao/uploaded/i3/446693207/TB283ZslFXXXXX4XXXXXXXXXXXX_!!446693207.jpg_200x200q90.jpg_.webp'}></img>
              <p>2016年春Gillivo嘉里奥新款零钱包正品专柜</p>
              <div className={styles.hotBt}>
                <span>
                  <span className={styles.mark}>￥</span>
                  <span className={styles.price}>12</span>
                </span>
                <span className={styles.volume}>销量：1</span>
              </div>
            </li>
            <li>
              <img src={'https://img.alicdn.com/bao/uploaded/i3/446693207/TB283ZslFXXXXX4XXXXXXXXXXXX_!!446693207.jpg_200x200q90.jpg_.webp'}></img>
              <p>2016年春Gillivo嘉里奥新款零钱包正品专柜</p>
              <div className={styles.hotBt}>
                <span>
                  <span className={styles.mark}>￥</span>
                  <span className={styles.price}>12</span>
                </span>
                <span className={styles.volume}>销量：1</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default UseHome
