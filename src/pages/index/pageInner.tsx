import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'

import "taro-ui/dist/style/index.scss" // 按需引入
import './index.scss'
import { DialogCtrl, withDialog } from "../../hoc/withDialog";
import { MyfirstDialog } from "../../components/dialogs/myfirstDialog";

export class IndexInner extends Component<{ dialogCtrl:DialogCtrl }> {
  render () {
    let that=this;
    console.log(this)
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <AtButton type='primary'>I need Taro UI</AtButton>
        <Text>Taro UI 支持 Vue 了吗？</Text>
        <AtButton type='primary' circle>支持</AtButton>
        <Text>共建？</Text>
        <AtButton type='secondary' circle onClick={()=>{
          that.props.dialogCtrl.showDialog(MyfirstDialog,{text:'123'})
          setTimeout(()=>{
            that.props.dialogCtrl.hideDialog(MyfirstDialog)
          },2000)
        }}>来</AtButton>
      </View>
    )
  }
}

export default withDialog(IndexInner);
