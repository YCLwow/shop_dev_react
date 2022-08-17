/*
 * @Author: 周铁柔 aa3441759088@163.com
 * @Date: 2022-08-17 08:16:03
 * @LastEditors: 周铁柔 aa3441759088@163.com
 * @LastEditTime: 2022-08-17 10:03:20
 * @FilePath: \shop_dev_react\src\pages\shoppingCart\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import styles from './index.module.scss'
import { Checkbox } from 'antd-mobile'
import close from '../../images/shoppingcat/close.jpg'
const ShoppingCat = () => {
  return (
    <div className={styles.shoppingCat}>
      <div className={styles.main}>
        <div className={styles.title}>you can do it</div>
        <div className={styles.contant}>
          <Checkbox className={styles.checkbox}></Checkbox>
          <div className={styles.imgBox} >
            <img src={close} alt="" />
          </div>
          <div className={styles.center} >
            <p>当不啊随便打不撒旦u不撒旦不撒大苏打的步步啊啊您四阿达你打算年少的你撒旦</p>
            <span>￥278.2</span>
          </div>
          <div className={styles.delete} >
            <div> 删除 </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ShoppingCat
