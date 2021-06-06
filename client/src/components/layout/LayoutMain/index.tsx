import AdminRouter from '../../../AdminRouter'
import { Link } from 'react-router-dom';
import { Button, Layout, Menu, Modal } from "antd";
import { useState, useEffect } from 'react';
import Login from '../../loginForm/Login'
import service from '../../../utils';
import "./style.css";
import "antd/dist/antd.css";
const { login } = service
const { Header, Content, Footer } = Layout;

function LayoutMain() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [token, setToken] = useState(login.getToken())
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const showModal = () => { setIsModalVisible(true) }
  const handleCancel = () => { setIsModalVisible(false) }
  const logOutHandler = ()=> { login.removeToken(); window.location.reload();}
  const tokenHandler = async () => {
    if (token) {
      const resFromToken = await login.getUserUseToken(token)
      if (resFromToken.success) { setIsLoggedIn(true) }
    }
  }
  useEffect(() => {
    tokenHandler()
  }, [isLoggedIn])

  return (
    <Layout>
      <Header className="header" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          {(isLoggedIn) ?
            <Button size="large" type="primary" onClick={logOutHandler}>Logout </Button>
            :
            <Button size="large" type="primary" onClick={showModal}>Login </Button>
          }
          <Modal title="התחברות" visible={isModalVisible} onCancel={handleCancel} footer={null}>
            <Login />
          </Modal>
        </div>

        <div>
          <Menu theme="light" mode="horizontal" style={{ textAlign: "center" }} >
            <Menu.Item key="4"><Link to="/">דף הבית</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/student">סטודנטים</Link></Menu.Item>
            <Menu.Item key="2"><Link to="hr">מגייסים</Link></Menu.Item>
            <Menu.Item key="1"><Link to="/admin">הנהלה</Link></Menu.Item>
          </Menu>
        </div>

        <div className="imgdiv">
          <img src="/img/Logo.png" alt="" className="logo" />
        </div>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Layout
          className="site-layout-background"
          style={{ padding: "24px 0" }}>

          <Content style={{ padding: "0 24px", minHeight: 280 }}>
            <AdminRouter />
          </Content>
        </Layout>
      </Content>
      {/* <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer> */}
    </Layout>
  );
}

export default LayoutMain;
