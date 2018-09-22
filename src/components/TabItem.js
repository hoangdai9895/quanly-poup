import React, { Component } from 'react';
import classnames from 'classnames';
import {connect} from 'react-redux';
class TabItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if(nextProps.data!==this.props.data){
  //     return true
  //   }
  //   return false
  // }

  render() {
    // console.log(this.props.data)
    return (
        <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col" colSpan={2}>{this.props.data.name}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Link ảnh</th>
                <td>{this.props.data.link_anh}</td>
              </tr>
              <tr>
                <th scope="row">Link landing</th>
                <td>{this.props.data.link_landing}</td>
              </tr>
              <tr>
                <th scope="row">utm campaign</th>
                <td>{this.props.data.utm_campaign}</td>
              </tr>
              <tr>
                <th scope="row">utm content</th>
                <td>{this.props.data.utm_content}</td>
              </tr>
              <tr>
                <th scope="row">utm medium</th>
                <td>{this.props.data.utm_medium}</td>
              </tr>
              <tr>
                <th scope="row">check box</th>
                <td>{this.props.data.check_box==true?'true':'false'}</td>
              </tr>
              <tr>
                <th scope="row">start time</th>
                <td>{this.props.data.start_time}</td>
              </tr>
              <tr>
                <th scope="row">end time</th>
                <td>{this.props.data.end_time}</td>
              </tr>
              <tr>
                <th scope="row">tần suất</th>
                <td>{this.props.data.tan_suat}</td>
              </tr>
      </tbody>
    </table>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    data1: state.data
  }
}

// const mapDispatchToProps = (dispatch) => {
//   addData: () => {
//     dispatch({
//       type: 'ADD_DATA'
//     })
//   }
// }

export default connect(mapStateToProps)(TabItem)
// export default Tabs;
