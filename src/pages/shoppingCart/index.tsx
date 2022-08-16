import styles from './index.module.scss'
import { Checkbox } from 'antd-mobile'
const ShoppingCat = () => {
  return (
    <div className={styles.shoppingCat}>
      <div className={styles.main}>
        <div className={styles.title}>you can do it</div>
        <div className={styles.contant}>
          <Checkbox className={styles.checkbox}></Checkbox>
        </div>
      </div>
    </div>
  )
}
export default ShoppingCat
