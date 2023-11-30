import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
 
        <Routes>
            {AppRoutes.map((route, index) => {
                const Layout = route.layout;
                const Page = route.element;
                return <Route key={index}
                    element={<Layout>
                        <Page/>
                    </Layout>}
                    path={route.path} />;
          })}
        </Routes>
  
    );
  }
}
