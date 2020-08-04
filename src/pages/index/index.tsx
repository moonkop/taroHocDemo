import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'

import "taro-ui/dist/style/index.scss" // 按需引入
import './index.scss'
import { DialogCtrl, withDialog } from "../../hoc/withDialog";
import { MyfirstDialog } from "../../components/dialogs/myfirstDialog";
import { IndexInner } from './pageInner'

export class Index extends Component<{ dialogCtrl: DialogCtrl }> {
  render () {
    return (
      <View className='index'>
        <IndexInner></IndexInner>
      </View>
    )
  }
}

export default Index;
