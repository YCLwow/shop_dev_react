/*
 * @Author: 周铁柔 aa3441759088@163.com
 * @Date: 2022-08-26 13:29:13
 * @LastEditors: 周铁柔 aa3441759088@163.com
 * @LastEditTime: 2022-08-26 14:38:58
 * @FilePath: \shop_dev_react\src\pages\mine\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import styles from './index.module.scss'
import head from '../../images/mine/head.jpg'
import { Card } from 'antd-mobile'
import { RightOutline, AntOutline } from 'antd-mobile-icons'
const Mine = () => {
  return (
    <div className={styles.mine} >
      <div className={styles.userInfo} >
        <div className={styles.headPortrait} >
          <img src={head} alt="" />
        </div>
        <div className={styles.userText} >
          <p>Molly</p>
          <p>时间带不走真正的朋友岁月留不住虚幻的拥有</p>
        </div>
      </div>
      <Card
        title={
          <div style={{ fontWeight: 'normal' }}>
            我的购物车
          </div>
        }
        extra={<RightOutline />}
      ></Card>
      <div className={styles.bottom} >
        <Card
          title={
            <div style={{ fontWeight: 'normal' }}>
              <AntOutline style={{ marginRight: '4px', color: '#1677ff' }} />
              修改基本信息
            </div>
          }
          extra={<RightOutline />}
        ></Card>
      </div>
    </div>
  )
}
export default Mine