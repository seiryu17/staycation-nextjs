import { Layout, Typography, Row, Col, Space } from "antd";
import { SECTION_1, SECTION_2 } from "../../constant/footer";
import MENU from "../../constant/menu";

const { Header, Content, Footer } = Layout;

interface Iprops {
  children: React.ReactNode;
}

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
      <Footer className="pv-8">
        <Row justify="space-between">
          <Col>
            <Typography.Text className="text-color-primary-main text-weight-medium text-size-24">
              Stay<span className="text-color-primary-pressed">cation.</span>
            </Typography.Text>
            <div>
              <Typography.Text className="text-color-neutral-50 text-size-16">
                We kaboom your beauty holiday <br></br> instantly and memorable.
              </Typography.Text>
            </div>
          </Col>
          <Col>
            <Typography.Text className="text-color-primary-pressed text-weight-medium text-size-18">
              For Beginners
            </Typography.Text>
            {SECTION_1.map((x) => (
              <div>
                <Typography.Text className="text-color-neutral-50 text-size-16">
                  {x.label}
                </Typography.Text>
              </div>
            ))}
          </Col>
          <Col>
            <Typography.Text className="text-color-primary-pressed text-weight-medium text-size-18">
              Explore Us
            </Typography.Text>

            {SECTION_2.map((x) => (
              <div>
                <Typography.Text className="text-color-neutral-50 text-size-16">
                  {x.label}
                </Typography.Text>
              </div>
            ))}
          </Col>
          <Col>
            <Typography.Text className="text-color-primary-pressed text-weight-medium text-size-18">
              Connect Us
            </Typography.Text>
            <div>
              <Typography.Text className="text-color-neutral-50 text-size-16">
                support@staycation.id
              </Typography.Text>
            </div>
            <div>
              <Typography.Text className="text-color-neutral-50 text-size-16">
                021 - 2208 - 1996
              </Typography.Text>
            </div>
            <div>
              <Typography.Text className="text-color-neutral-50 text-size-16">
                Staycation, Kemang, Jakarta
              </Typography.Text>
            </div>
          </Col>
        </Row>
        <Row className="mt-8">
          <Col span={24} className="text-center">
            <Typography.Text className="text-color-neutral-50 text-size-16">
              Copyright {new Date().getFullYear()} • All rights reserved • Rio
              Riferro Lim
            </Typography.Text>
          </Col>
        </Row>
      </Footer>
    </Layout>
  );
};

export default LayoutComponent;
