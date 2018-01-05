import React from 'react';
import { connect } from 'dva';

@connect(
  state => ({ newpage: state.newpage })
)
class Page1 extends React.Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'newpage/testFetch',
    });
  }
  render() {
    return (
      <h1>测试页面1</h1>
    );
  }
}


export default Page1;
