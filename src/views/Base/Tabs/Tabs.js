import React, { Component } from 'react';
import { Badge, Col, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import classnames from 'classnames';
import {connect} from 'react-redux';
import {popupData} from '../../../firebaseConnect'
import TabItem from '../../../components/TabItem'
class Tabs extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
      //new
      data:null
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  // componentWillReceiveProps(nextProps) {
  //   if(nextProps.data!==this.props.data){
  //     // console.log('da thuc hien')
  //       nextProps.data.on('value', (event) => {
  //     var arrData = [];
  //     event.forEach(el => {
  //       const key = el.key;
  //       const name = el.val().name
  //       const check_box = el.val().check_box;
  //       const end_time = el.val().end_time;
  //       const link_anh = el.val().link_anh;
  //       const link_landing = el.val().link_landing;
  //       const start_time = el.val().start_time;
  //       const tan_suat = el.val().tan_suat;
  //       const utm_campaign = el.val().utm_campaign;
  //       const utm_content = el.val().utm_content;
  //       const utm_medium = el.val().utm_medium
  //       arrData.push({
  //         id:key,
  //         name:name,
  //         check_box: check_box,
  //         end_time: end_time,
  //         link_anh: link_anh,
  //         link_landing: link_landing,
  //         start_time: start_time,
  //         tan_suat: tan_suat,
  //         utm_campaign: utm_campaign,
  //         utm_content: utm_content,
  //         utm_medium: utm_medium
  //       })
  //     });
  //     this.setState({
  //       data:arrData
  //     })
  //   })
  //   } 
  // }
  componentDidMount() {
    // if(this.props.data){
       this.props.data.on('value', (event) => {
      var arrData = [];
      event.forEach(el => {
        const key = el.key;
        const name = el.val().name
        const check_box = el.val().check_box;
        const end_time = el.val().end_time;
        const link_anh = el.val().link_anh;
        const link_landing = el.val().link_landing;
        const start_time = el.val().start_time;
        const tan_suat = el.val().tan_suat;
        const utm_campaign = el.val().utm_campaign;
        const utm_content = el.val().utm_content;
        const utm_medium = el.val().utm_medium
        arrData.push({
          id:key,
          name:name,
          check_box: check_box,
          end_time: end_time,
          link_anh: link_anh,
          link_landing: link_landing,
          start_time: start_time,
          tan_suat: tan_suat,
          utm_campaign: utm_campaign,
          utm_content: utm_content,
          utm_medium: utm_medium
        })
      });
      this.setState({
        data:arrData
      })
    })

          
  }


  render() {
 
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="12" className="mb-4">
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '1' })}
                  onClick={() => { this.toggle('1'); }}
                >
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '2' })}
                  onClick={() => { this.toggle('2'); }}
                >
                  Profile
                </NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '3' })}
                  onClick={() => { this.toggle('3'); }}
                >
                  Messages
                </NavLink>
              </NavItem> */}
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                {
                  this.state.data!==null?
                  this.state.data.map((item,key) => {
                    return <TabItem
                              data={item}
                              key={key}
                            ></TabItem>
                  }):''
                }
              </TabPane>
              <TabPane tabId="2">
                2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum.
              </TabPane>
              {/* <TabPane tabId="3">
                2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum.
              </TabPane> */}
            </TabContent>
          </Col>
         
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.data
  }
}

// const mapDispatchToProps = (dispatch) => {
//   addData: () => {
//     dispatch({
//       type: 'ADD_DATA'
//     })
//   }
// }

export default connect(mapStateToProps)(Tabs)
// export default Tabs;
