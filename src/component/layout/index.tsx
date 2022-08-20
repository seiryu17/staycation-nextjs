import { Layout, Typography, Row, Col, Space } from "antd";

const { Header, Content, Footer } = Layout;

interface Iprops {
  children: React.ReactNode;
}

const MENU = [
  {
    label: "Home",
  },
  {
    label: "Browse by",
  },
  {
    label: "Stories",
  },
  {
    label: "Agents",
  },
];

const LayoutComponent = (props: Iprops) => {
  const { children } = props;
  return (
    <Layout>
      <Header className="w-100 header bg-white">
        <Row justify="space-between">
          <Col>
            <Typography.Text className="text-color-primary-main text-weight-medium text-size-24">
              Stay<span className="text-color-primary-pressed">cation.</span>
            </Typography.Text>
          </Col>
          <Col>
            <Space size={"large"}>
              {MENU.map((x) => (
                <Typography.Text
                  key={x.label}
                  className="text-size-16 text-color-primary-pressed text-weight-medium use-pointer"
                >
                  {x.label}
                </Typography.Text>
              ))}
            </Space>
          </Col>
        </Row>
      </Header>
      <Content className="site-layout">{children}</Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default LayoutComponent;
