import React, { ComponentClass, FunctionComponent } from 'react';
import { DialogPublicProps } from "../components/dialogs/myfirstDialog";

export function withDialog (Clazz) {
  return (props)=> <WrappedWithDialog props={props} Clazz={Clazz} />;
}
export interface DialogCtrl {
  hideDialog: WrappedWithDialog['hideDialog'];
  showDialog: WrappedWithDialog['showDialog'];
}
class WrappedWithDialog extends React.Component<any, any> {
  dialogMap:Map<FunctionComponent | ComponentClass,any>
  constructor (props) {
    super(props);
    this.dialogMap=new Map();
    this.showDialog=this.showDialog.bind(this);
    this.hideDialog = this.hideDialog.bind(this);
  }
  showDialog<P>(clazz:FunctionComponent<P> | ComponentClass<P>,props:Omit<P,keyof DialogPublicProps>){
    this.dialogMap.set(clazz,{_isShow:true,props})
    this.forceUpdate();
  }
  hideDialog<P>(clazz:FunctionComponent<P> | ComponentClass<P>){
    this.dialogMap.delete(clazz);
    this.forceUpdate();
  }

  render () {
    let Dialogs=[...this.dialogMap];
    let {Clazz,...restProps} = this.props;
    console.log(Clazz);

    return <React.Fragment>
      {Dialogs.map((Dialog,index)=>{
        let [DialogClass,state] = Dialog;
        return <DialogClass key={index} onClose={()=>{this.hideDialog(DialogClass)}} isOpened={state._isShow} {...state.props} > </DialogClass>
      })}

      <Clazz {...restProps} dialogCtrl={{showDialog:this.showDialog, hideDialog: this.hideDialog}}></Clazz>
    </React.Fragment>
  }
}
