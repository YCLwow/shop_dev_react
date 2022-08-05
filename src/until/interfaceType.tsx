/*
 * @Author: liuyichen
 * @Date: 2022-08-04 10:04:10
 * @LastEditors: liuyichen
 * @LastEditTime: 2022-08-04 11:09:00
 * @FilePath: \代码仓库\shop_dev_react\src\until\interfaceType.tsx
 * @Description: 
 * 
 * Copyright (c) 2022 by liuyichen, All Rights Reserved. 
 */
import  {  AxiosRequestConfig } from "axios";

export interface ResPonseType extends AxiosRequestConfig  {
  code: number
  data: any
  message: string | Object
  sucess: Boolean
}