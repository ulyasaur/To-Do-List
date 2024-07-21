import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Card, Col, Divider, Flex, Grid, Layout, Menu, Row } from 'antd';
import NavBar from './NavBar';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import DroppableArea from '../common/dnd/DroppableArea';
import DraggableItem from '../common/dnd/DraggableItem';
import MainPage from '../../features/MainPage';

function App() {
  return (
    <Layout>
      <NavBar />
      <Content style={{ minHeight: "90vh" }}>
        <MainPage/>
      </Content>
    </Layout>
  );
}

export default App;
