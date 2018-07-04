import React, {Component} from 'react';

class MyComp extends Component
{
  render()
  {
    console.log("hello "+this.props.b);
    return (<div>{this.props.a}{this.props.b}</div>)
  }
}

export default MyComp;
