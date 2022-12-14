import { Row, Col, Typography, Button, List, Space, Carousel } from "antd";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import type { NextPage } from "next";
import Image from "next/image";
import CardItemBig from "../src/component/home/card-item-big";
import CardItemSmall from "../src/component/home/card-item-small";

import Layout from "../src/component/layout";
import Review from "../src/component/review";
import {
  BEAUTY_BACKYARD,
  KITCHEN,
  LARGE_LIVING,
  MOST_PICKED,
} from "../src/constant/dummy/home";

const Home: NextPage = () => {
  const mq = useBreakpoint();
  return (
    <Layout>
      <Row justify="space-between">
        <Row
          justify="center"
          align="middle"
          className={`${!mq.xs ? "mt-8" : "mt-3"} w-100`}
        >
          <Col span={!mq.xs ? 12 : 24}>
            <div>
              <Typography.Text
                className={`text-size-${
                  !mq.xs ? "48" : "40"
                } text-weight-bold text-color-primary-pressed hero-text-1`}
              >
                Forget Busy Work, <br />
                Start Next Vacation
              </Typography.Text>
            </div>
            <div className="mt-3">
              {!mq.xs ? (
                <Typography.Text className="text-size-18 text-weight-light text-color-neutral-50 hero-text-2">
                  We provide what you need to enjoy your <br /> holiday with
                  family. Time to make another <br /> memorable moments.
                </Typography.Text>
              ) : (
                <Typography.Text className="text-size-16 text-weight-light text-color-neutral-50 hero-text-2">
                  We provide what you need to enjoy your holiday with family.{" "}
                  <br /> Time to make another memorable moments.
                </Typography.Text>
              )}
            </div>
            <div className="mt-5">
              <Button
                size="large"
                className="bg-primary-main text-color-white border-radius-6 ph-4"
              >
                Show Me Now
              </Button>
            </div>
            <Row className={`${mq.xs ? "mt-4" : "mt-8"}`}>
              <Space size={40}>
                <Col>
                  <Image src={"/icon-traveler.png"} width={24} height={24} />
                  <div>
                    <Typography.Text className="text-color-primary-pressed text-weight-medium">
                      80.409
                    </Typography.Text>
                    <Typography.Text className="text-color-neutral-50">
                      {" "}
                      travelers
                    </Typography.Text>
                  </div>
                </Col>
                <Col>
                  <Image src={"/icon-camera.png"} width={24} height={24} />
                  <div>
                    <Typography.Text className="text-color-primary-pressed text-weight-medium">
                      862
                    </Typography.Text>
                    <Typography.Text className="text-color-neutral-50">
                      {" "}
                      treasure
                    </Typography.Text>
                  </div>
                </Col>
                <Col>
                  <Image src={"/icon-location.png"} width={24} height={24} />
                  <div>
                    <Typography.Text className="text-color-primary-pressed text-weight-medium">
                      1492
                    </Typography.Text>
                    <Typography.Text className="text-color-neutral-50">
                      {" "}
                      cities
                    </Typography.Text>
                  </div>
                </Col>
              </Space>
            </Row>
          </Col>
          <Col className={`${mq.xs ? "mt-4" : ""}`} span={!mq.xs ? 12 : 24}>
            <div className="position-relative text-right">
              <Image src={"/hero-image.png"} width={560} height={450} />
            </div>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col span={24}>
            <Typography.Text className="text-color-primary-pressed text-size-21 text-weight-medium">
              Most Picked
            </Typography.Text>
          </Col>
          <Col className={`${!mq.xs ? "" : "mt-1"}`} span={!mq.xs ? 8 : 24}>
            <CardItemBig
              type={1}
              data={MOST_PICKED.filter((x, index) => index === 0)[0]}
            />
          </Col>
          <Col span={!mq.xs ? 16 : 24}>
            <List
              itemLayout="horizontal"
              grid={!mq.xs ? { column: 2 } : { column: 1 }}
              dataSource={MOST_PICKED.filter((x, index) => index > 0)}
              renderItem={(item, index) => {
                return <CardItemBig key={index} type={2} data={item} />;
              }}
            />
          </Col>
        </Row>
        <Row className="mt-2">
          <Col span={24}>
            <Typography.Text className="text-color-primary-pressed text-size-21 text-weight-medium">
              Houses with Beauty Backyard
            </Typography.Text>
          </Col>
          <Col span={24}>
            {!mq.xs ? (
              <List
                itemLayout="horizontal"
                grid={{ column: 4 }}
                className="w-100"
                dataSource={BEAUTY_BACKYARD}
                renderItem={(item, index) => (
                  <CardItemSmall key={index} data={item} />
                )}
              />
            ) : (
              <Carousel autoplay>
                {BEAUTY_BACKYARD.map((item, index) => (
                  <CardItemSmall key={index} data={item} />
                ))}
              </Carousel>
            )}
          </Col>
        </Row>
        <Row className="mt-2">
          <Col span={24}>
            <Typography.Text className="text-color-primary-pressed text-size-21 text-weight-medium">
              Hotels with Large Living Room
            </Typography.Text>
          </Col>
          <Col span={24}>
            {!mq.xs ? (
              <List
                itemLayout="horizontal"
                grid={{ column: 4 }}
                className="w-100"
                dataSource={LARGE_LIVING}
                renderItem={(item, index) => (
                  <CardItemSmall key={index} data={item} />
                )}
              />
            ) : (
              <Carousel autoplay>
                {LARGE_LIVING.map((item, index) => (
                  <CardItemSmall key={index} data={item} />
                ))}
              </Carousel>
            )}
          </Col>
        </Row>
        <Row className="mt-2">
          <Col span={24}>
            <Typography.Text className="text-color-primary-pressed text-size-21 text-weight-medium">
              Apartments with Kitchen Set
            </Typography.Text>
          </Col>
          <Col span={24}>
            {!mq.xs ? (
              <List
                itemLayout="horizontal"
                grid={{ column: 4 }}
                className="w-100"
                dataSource={KITCHEN}
                renderItem={(item, index) => (
                  <CardItemSmall key={index} data={item} />
                )}
              />
            ) : (
              <Carousel autoplay>
                {KITCHEN.map((item, index) => (
                  <CardItemSmall key={index} data={item} />
                ))}
              </Carousel>
            )}
          </Col>
        </Row>
        <Row className="mv-8">
          <Col>
            <Review />
          </Col>
        </Row>
      </Row>
    </Layout>
  );
};

export default Home;
