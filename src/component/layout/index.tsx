import { MenuOutlined } from "@ant-design/icons";
import { Layout, Typography, Row, Col, Space } from "antd";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import Router from "next/router";
import { useState } from "react";
import { SECTION_1, SECTION_2 } from "../../constant/footer";
import MENU from "../../constant/menu";

const { Header, Content, Footer } = Layout;

interface Iprops {
  children: React.ReactNode;
  footer?: boolean;
  onlyLogo?: boolean;
}

const LayoutComponent = (props: Iprops) => {
  const { children, footer = true, onlyLogo } = props;
  const [isVisibleMenu, setIsVisibleMenu] = useState(false);
  const mq = useBreakpoint();
  return (
    <>
      <Layout
        className={`${!isVisibleMenu ? "visible" : "hidden"}`}
        onClick={() => isVisibleMenu && setIsVisibleMenu(false)}
      >
        <Header style={{maxWidth: 1440}} className="w-100 header bg-white position-fixed">
          <Row justify={`${onlyLogo ? "center" : "space-between"}`}>
            <Col className="use-pointer" onClick={() => Router.push("/")}>
              <Typography.Text className="text-color-primary-main text-weight-medium text-size-24">
                Stay<span className="text-color-primary-pressed">cation.</span>
              </Typography.Text>
            </Col>
            {!onlyLogo && (
              <>
                <Col>
                  {!mq.xs ? (
                    <Space size={"large"}>
                      {MENU.map((x, index) => (
                        <Typography.Text
                          key={index}
                          className="text-size-16 text-color-primary-pressed text-weight-medium use-pointer"
                        >
                          {x.label}
                        </Typography.Text>
                      ))}
                    </Space>
                  ) : (
                    <MenuOutlined onClick={() => setIsVisibleMenu(true)} />
                  )}
                </Col>
              </>
            )}
          </Row>
        </Header>
        <Content className="site-layout mt-8">{children}</Content>
        {footer && (
          <Footer className="pv-8">
            <Row
              style={mq.xs ? { flexDirection: "column", gap: 15 } : {}}
              justify="space-between"
            >
              <Col>
                <Typography.Text className="text-color-primary-main text-weight-medium text-size-24">
                  Stay
                  <span className="text-color-primary-pressed">cation.</span>
                </Typography.Text>
                <div>
                  <Typography.Text className="text-color-neutral-50 text-size-16 text-weight-light">
                    We kaboom your beauty holiday <br></br> instantly and
                    memorable.
                  </Typography.Text>
                </div>
              </Col>
              <Col>
                <Typography.Text className="text-color-primary-pressed text-weight-medium text-size-18">
                  For Beginners
                </Typography.Text>
                {SECTION_1.map((x, index) => (
                  <div key={index}>
                    <Typography.Text className="text-color-neutral-50 text-weight-light  text-size-16">
                      {x.label}
                    </Typography.Text>
                  </div>
                ))}
              </Col>
              <Col>
                <Typography.Text className="text-color-primary-pressed text-weight-medium text-size-18">
                  Explore Us
                </Typography.Text>

                {SECTION_2.map((x, index) => (
                  <div key={index}>
                    <Typography.Text className="text-color-neutral-50 text-weight-light text-size-16">
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
                  <Typography.Text className="text-color-neutral-50 text-size-16 text-weight-light">
                    support@staycation.id
                  </Typography.Text>
                </div>
                <div>
                  <Typography.Text className="text-color-neutral-50 text-size-16 text-weight-light">
                    021 - 2208 - 1996
                  </Typography.Text>
                </div>
                <div>
                  <Typography.Text className="text-color-neutral-50 text-size-16 text-weight-light">
                    Staycation, Kemang, Jakarta
                  </Typography.Text>
                </div>
              </Col>
            </Row>
            <Row className="mt-8">
              <Col span={24} className="text-center">
                <Typography.Text className="text-color-neutral-50 text-size-16">
                  Copyright {new Date().getFullYear()} • All rights reserved •
                  Rio Riferro Lim
                </Typography.Text>
              </Col>
            </Row>
          </Footer>
        )}
      </Layout>
      <div className={`${isVisibleMenu ? "menu-visible" : "menu-hidden"}`}>
        <Space direction="vertical" size={"large"}>
          {MENU.map((x, index) => (
            <Typography.Text
              key={index}
              className="text-size-16 text-color-primary-pressed text-weight-medium use-pointer"
            >
              {x.label}
            </Typography.Text>
          ))}
        </Space>
      </div>
    </>
  );
};

export default LayoutComponent;
