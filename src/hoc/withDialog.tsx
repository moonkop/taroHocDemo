import React from 'react';
import { DialogPublicProps } from '../components/dialogs/myfirstDialog';

export function withDialog (Clazz) {

  return class WrappedWithDialog extends React.Component<any, any> {
    dialogMap:Map<Function,any>
    constructor (props) {
      super(props);
      this.dialogMap=new Map();
    }
    dialogCtrl={
      showDialog:(clazz,props)=>{
        this.dialogMap.set(clazz,{_isShow:true,props})
        this.forceUpdate();
      },
      hideDialog:(clazz)=>{
        this.dialogMap.delete(clazz);
        this.forceUpdate();

      }
    }
    render () {

      let Dialogs=[...this.dialogMap];

      return <React.Fragment>
        {Dialogs.map((Dialog,index)=>{
          let [DialogClass,state] = Dialog;
          return <DialogClass key={index} onClose={()=>{this.dialogCtrl.hideDialog(DialogClass)}} isOpened={state._isShow} {...state.props} > </DialogClass>
        })}

        <Clazz dialogCtrl={this.dialogCtrl}></Clazz>
      </React.Fragment>
    }
  }

}
