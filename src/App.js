import React from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main'
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
    <Layout fixedHeader>
        <Header style={{backgroundColor:'pink'}} className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Alex Brownlie</Link>} scroll>
            <Navigation>
                <Link to="/cv">CV</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">Home Page</Link>}>
            <Navigation>
                <Link to="/cv">CV</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content scroll>
            <div className="page-content"/>
            <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;
