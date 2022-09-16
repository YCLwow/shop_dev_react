/*
 * @Author: liuyichen
 * @Date: 2022-08-01 08:42:40
 * @LastEditors: liuyichen
 * @LastEditTime: 2022-09-16 08:52:33
 * @FilePath: \代码仓库\shop_dev_react\src\pages\login\index.tsx
 * @Description: 
 * 
 * Copyright (c) 2022 by liuyichen, All Rights Reserved. 
 */
import { Button, Checkbox, Form, Input, Toast } from 'antd-mobile';
import React, { useContext } from 'react';
import styles from './index.module.scss'
import {request} from '../../until/http';
import { useGlobal } from '../../until/GlobalContext'
import { useNavigate } from 'react-router-dom';
import logo from  '../../images/login/logo.jpeg'


const UseLogin: React.FC = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate()
  let value = useGlobal()
  const onFinish = (values: string) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const login = async () => {
    let validate = await form.validateFields()
    let param = form.getFieldsValue()
    if (!param.remember) {
      form.setFieldsValue({
        remember: ''
      })
      form.validateFields(['remember'])
      return false
    }
    // let res = await request.get('/login',param) post 是data get 是params
    let res = await request.get({
      url:'/api/login',
      params:param
    })
    console.log(res)
    if (res.sucess) {
      value.setToken!(res.data)
      localStorage.setItem('token',res.data)
      navigate('/home')
    } else {
      Toast.show({
        content: res.message,
        afterClose: () => {
          console.log('after')
        },
      })
    }
  }

  return (
    <div className={styles.login}>
      <div className={styles.logo}>
        <img src={logo} alt="" />
      </div>

      <Form
        form={form}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        mode='card'
        onFinishFailed={onFinishFailed}
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
          <Input clearable />
        </Form.Item>

        <Form.Item rules={[{ required: true, message: '请同意测试协议后登录' }]} name="remember" valuePropName="checked" >
          <Checkbox>同意测试协议</Checkbox>
        </Form.Item>
        <Form.Item >
          <Button onClick={() => {
            login()
          }} >
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
export default UseLogin