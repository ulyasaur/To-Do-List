import './App.css';
import { Layout } from 'antd';
import NavBar from './NavBar';
import { Content } from 'antd/es/layout/layout';
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
