import React from "react";
import { connect } from 'dva';

@connect(
  state=>({newpage:state.newpage})
)
class Page1 extends React.Component{
  componentDidMount(){
    console.log("page1渲染好了1231231",this.props);
    this.props.dispatch({
      type:'newpage/testFetch'
    })
  }
  render(){
    console.log("page1 props:",this.props);
    return(
      <h1>测试页面1</h1>
    )
  }
}


export default Page1;
