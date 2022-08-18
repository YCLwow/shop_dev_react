/*
 * @Author: 周铁柔 aa3441759088@163.com
 * @Date: 2022-08-18 08:57:39
 * @LastEditors: 周铁柔 aa3441759088@163.com
 * @LastEditTime: 2022-08-18 09:49:30
 * @FilePath: \shop_dev_react\src\pages\classification\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Tabs } from 'antd-mobile'
import styles from './index.module.scss'
import TabMain from '../../components/tabMain/index.'
const Classification = () => {
  return (
    <div className={styles.classification}>
      <Tabs defaultActiveKey='1'>
        <Tabs.Tab title='女装' key='1'>
          <TabMain />
        </Tabs.Tab>
        <Tabs.Tab title='男装' key='2'>
          2
        </Tabs.Tab>
        <Tabs.Tab title='鞋靴' key='3'>
          3
        </Tabs.Tab>
        <Tabs.Tab title='箱包' key='4'>
          4
        </Tabs.Tab>
        <Tabs.Tab title='童装玩具' key='5'>
          5
        </Tabs.Tab>
        <Tabs.Tab title='家电' key='6'>
          6
        </Tabs.Tab>
        <Tabs.Tab title='数码' key='7'>
          7
        </Tabs.Tab>
        <Tabs.Tab title='眼睛' key='8'>
          8
        </Tabs.Tab>
      </Tabs>
    </div>
  )
}
export default Classification