/*
 * @Author: 周铁柔 aa3441759088@163.com
 * @Date: 2022-08-17 08:16:03
 * @LastEditors: liuyichen
 * @LastEditTime: 2022-08-22 14:55:38
 * @FilePath: \shop_dev_react\src\pages\shoppingCart\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import styles from './index.module.scss'
import { Checkbox, Stepper, Button } from 'antd-mobile'
import close from '../../images/shoppingcat/close.jpg'
const ShoppingCat = () => {
  return (
    <div className={styles.shoppingCat}>
      <div className={styles.main}>
        <div className={styles.title}>购物车</div>
        <div className={styles.contant}>
          <Checkbox className={styles.checkbox}></Checkbox>
          <div className={styles.imgBox} >
            <img src={close} alt="" />
          </div>
          <div className={styles.center} >
            <p>当不啊随便打不撒旦u不撒旦不撒大苏打的步步啊啊您四阿达你打算年少的你撒旦</p>
            <span>￥278.2</span>
            <span>
              <Stepper
                className={styles.stepper}
                defaultValue={1}
                onChange={value => {
                  console.log(value)
                }}
              />
            </span>

          </div>
          <div className={styles.delete} >
            <div> 删除 </div>

          </div>
        </div>
        <div className={styles.contant}>
          <Checkbox className={styles.checkbox}></Checkbox>
          <div className={styles.imgBox} >
            <img src={close} alt="" />
          </div>
          <div className={styles.center} >
            <p>当不啊随便打不撒旦u不撒旦不撒大苏打的步步啊啊您四阿达你打算年少的你撒旦</p>
            <span>￥278.2</span>
            <span>
              <Stepper
                className={styles.stepper}
                defaultValue={1}
                onChange={value => {
                  console.log(value)
                }}
              />
            </span>

          </div>
          <div className={styles.delete} >
            <div> 删除 </div>

          </div>
        </div>
        <div className={styles.contant}>
          <Checkbox className={styles.checkbox}></Checkbox>
          <div className={styles.imgBox} >
            <img src={close} alt="" />
          </div>
          <div className={styles.center} >
            <p>当不啊随便打不撒旦u不撒旦不撒大苏打的步步啊啊您四阿达你打算年少的你撒旦</p>
            <span>￥278.2</span>
            <span>
              <Stepper
                className={styles.stepper}
                defaultValue={1}
                onChange={value => {
                  console.log(value)
                }}
              />
            </span>

          </div>
          <div className={styles.delete} >
            <div> 删除 </div>

          </div>
        </div>
      </div>
      <div className={styles.settlement} >
        <div className={styles.settlementLeft} >
          <Checkbox className={styles.checkbox}></Checkbox>
          <br />
          <span>全选</span>
        </div>
        <div className={styles.settlementCenter} >
          <span>总计：</span>
          <span className={styles.money} >￥0</span>
        </div>
        <div className={styles.settlementRight} >
          <Button color='danger'>去结算(0)</Button>
        </div>
      </div>

    </div>
  )
}
export default ShoppingCat
