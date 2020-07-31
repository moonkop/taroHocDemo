import React from 'react';

export function withDialog (Clazz) {
  return <WrappedWithDialog Clazz={Clazz} />;
}
export interface DialogCtrl {
  hideDialog: WrappedWithDialog['hideDialog'];
  showDialog: WrappedWithDialog['showDialog'];
}
class WrappedWithDialog extends React.Component<any, any> {
  dialogMap:Map<typeof React.Component,any>
  constructor (props) {
    super(props);
    this.dialogMap=new Map();
    this.showDialog=this.showDialog.bind(this);
    this.hideDialog = this.hideDialog.bind(this);
  }
  showDialog(clazz:typeof React.Component,props:any){
    this.dialogMap.set(clazz,{_isShow:true,props})
    this.forceUpdate();
  }
  hideDialog(clazz:typeof React.Component){
    this.dialogMap.delete(clazz);
    this.forceUpdate();
  }

  render () {

    let Dialogs=[...this.dialogMap];
    let Clazz = this.props.Clazz;
    debugger

    return <React.Fragment>
      {Dialogs.map((Dialog,index)=>{
        let [DialogClass,state] = Dialog;
        debugger
        return <DialogClass key={index} onClose={()=>{this.hideDialog(DialogClass)}} isOpened={state._isShow} {...state.props} > </DialogClass>
      })}

      <Clazz dialogCtrl={{showDialog:this.showDialog, hideDialog: this.hideDialog}}></Clazz>
    </React.Fragment>
  }
}
