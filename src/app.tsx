import React,{ Component } from 'react'
import './app.scss'
import { View,Text } from "@tarojs/components";

class App extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return <View>
      {this.props.children}

    </View>
  }
}

export default App
