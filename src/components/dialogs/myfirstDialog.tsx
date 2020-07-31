import React from 'react';
import { AtModal, AtModalAction, AtModalContent, AtModalHeader } from "taro-ui";
import { Button } from '@tarojs/components';

export interface DialogPublicProps {
  isOpened: boolean;
  onClose: () => void;
}

interface MyfirstDialogProps extends DialogPublicProps{
  text:string
}
export class MyfirstDialog extends React.Component<MyfirstDialogProps, any> {
  static _name = 'MyfirstDialog';
  render () {

    return <AtModal isOpened={this.props.isOpened}>
      <AtModalHeader>
        這是頭
      </AtModalHeader>
      <AtModalContent>
        你好啊你這個小雞吧
        {this.props.text}
      </AtModalContent>
      <AtModalAction>
        <Button onClick={() => {
          this.props.onClose()
        }}
        >
          你確定嗎？
        </Button>

      </AtModalAction>
    </AtModal>;
  }
}
