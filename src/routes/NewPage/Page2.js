import React from "react";
import { connect } from 'dva';

@connect(
  state=>({newpage:state.newpage})
)
class Page2 extends React.Component{
  componentDidMount(){
    console.log("page2渲染好了",this.props);
    this.props.dispatch({
      type:'newpage/testFetch2',
      data:{
        page:'page2'
      }
    })
  }
  render(){
    console.log("page2 props:",this.props)
    return(
      <h1>测试 - Page 2</h1>
    )
  }
};

export default Page2;
