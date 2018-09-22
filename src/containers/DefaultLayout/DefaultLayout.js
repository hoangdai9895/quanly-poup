import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';

import {
  AppAside,
  AppBreadcrumb,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppSidebarNav,
} from '@coreui/react';
// sidebar nav config
import navigation from '../../_nav';
// routes config
import routes from '../../routes';
import DefaultAside from './DefaultAside';
import DefaultFooter from './DefaultFooter';
import DefaultHeader from './DefaultHeader';

import {popupData} from '../../firebaseConnect'


class DefaultLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:null
    };
  }

   componentWillMount() {
     
        popupData.on('value', (event) => {
      var arrData = [];
      event.forEach(el => {
        const key = el.key;
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
    console.log(this.state.data)
    return (
      <div className="app">
        <AppHeader fixed>
          <DefaultHeader />
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed display="lg">
            <AppSidebarHeader />
            <AppSidebarForm />
            <AppSidebarNav navConfig={navigation} {...this.props} data={this.state.data!==null?this.state.data:''}/>
            <AppSidebarFooter />
            <AppSidebarMinimizer />
          </AppSidebar>
          <main className="main">
            <AppBreadcrumb appRoutes={routes}/>
            <Container fluid>
              <Switch>
                {routes.map((route, idx) => {
                    return route.component ? (<Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => (
                        <route.component {...props} />
                      )} />)
                      : (null);
                  },
                )}
                <Redirect from="/" to="/dashboard" />
              </Switch>
            </Container>
          </main>
          <AppAside fixed hidden>
            <DefaultAside />
          </AppAside>
        </div>
        <AppFooter>
          <DefaultFooter />
        </AppFooter>
      </div>
    );
  }
}

export default DefaultLayout;
