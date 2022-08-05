/*
 * @Author: liuyichen
 * @Date: 2022-08-01 08:42:40
 * @LastEditors: liuyichen
 * @LastEditTime: 2022-08-05 09:42:55
 * @FilePath: \代码仓库\shop_dev_react\src\pages\login\index.tsx
 * @Description: 
 * 
 * Copyright (c) 2022 by liuyichen, All Rights Reserved. 
 */
import { Button, Checkbox, Form, Input } from 'antd';
import React, { useContext } from 'react';
import styles from './index.module.scss'
// import http from '../../until/http';
import {useGlobal} from '../../until/GlobalContext'


const UseLogin: React.FC = () => {
  const [form] = Form.useForm();
  let value = useGlobal()
  const onFinish = (values:string ) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const login = async () => {
  
    console.log(value)
    // let param = form.getFieldsValue()
    // console.log(param)
    // let res = await http('get', '/login',
    //   param
    // )
    // // console.log(res.a)
    // if(res.sucess){

    // }
  }

  // useEffect(()=>{
  //   login()
  // },[])

  return (
    <div className={styles.login}>
      <Form
        form={form}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="登录账号"
          name="userName"
          rules={[{ required: true, message: '请输入正确的用户名' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="登录密码"
          name="passWord"
          rules={[{ required: true, message: '请输入正确的密码' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
          <Checkbox>同意测试协议</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button onClick={() => {
            login()
          }} type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>

  );
}
export default UseLogin