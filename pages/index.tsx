import { Row, Col, Typography, Button, List } from "antd";
import type { NextPage } from "next";
import Image from "next/image";
import CardItemBig from "../src/component/home/card-item-big";
import CardItemSmall from "../src/component/home/card-item-small";

import Layout from "../src/component/layout";
import Review from "../src/component/review";

const Home: NextPage = () => {
  return (
    <Layout>
      <Row gutter={[24, 24]} justify="space-between">
        <Row className="mt-8 w-100">
          <Col span={12}>
            <div>
              <Typography.Text className="text-size-48 text-weight-bold text-color-primary-pressed hero-text-1">
                Forget Busy Work, <br />
                Start Next Vacation
              </Typography.Text>
            </div>
            <div className="mt-3">
              <Typography.Text className="text-size-18 text-weight-regular text-color-neutral-50 hero-text-2">
                We provide what you need to enjoy your <br /> holiday with
                family. Time to make another <br /> memorable moments.
              </Typography.Text>
            </div>
            <div className="mt-5">
              <Button
                size="large"
                className="bg-primary-main text-color-white border-radius-6 ph-4"
              >
                Show Me Now
              </Button>
            </div>
            <Row className="mt-8" gutter={40}>
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
            </Row>
          </Col>
          <Col span={12}>
            <div className="position-relative text-right">
              <Image src={"/hero-image.png"} width={560} height={450} />
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Typography.Text className="text-color-primary-pressed text-size-21 text-weight-medium">
              Most Picked
            </Typography.Text>
          </Col>
          <Col span={8}>
            <CardItemBig type={1} img={"/most-picked-1.png"} />
          </Col>
          <Col span={16}>
            <List
              itemLayout="horizontal"
              grid={{ column: 2 }}
              dataSource={[
                { img: "/most-picked-2.png" },
                { img: "/most-picked-2.png" },
                { img: "/most-picked-2.png" },
                { img: "/most-picked-2.png" },
              ]}
              renderItem={(item) => <CardItemBig type={2} img={item.img} />}
            />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Typography.Text className="text-color-primary-pressed text-size-21 text-weight-medium">
              Houses with Beauty Backyard
            </Typography.Text>
          </Col>
          <Col span={24}>
            <List
              itemLayout="horizontal"
              grid={{ column: 4 }}
              className="w-100"
              dataSource={[
                { img: "/most-picked-2.png" },
                { img: "/most-picked-2.png" },
                { img: "/most-picked-2.png" },
                { img: "/most-picked-2.png" },
              ]}
              renderItem={(item) => <CardItemSmall img={item.img} />}
            />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Typography.Text className="text-color-primary-pressed text-size-21 text-weight-medium">
              Hotels with Large Living Room
            </Typography.Text>
          </Col>
          <Col span={24}>
            <List
              itemLayout="horizontal"
              grid={{ column: 4 }}
              className="w-100"
              dataSource={[
                { img: "/most-picked-2.png" },
                { img: "/most-picked-2.png" },
                { img: "/most-picked-2.png" },
                { img: "/most-picked-2.png" },
              ]}
              renderItem={(item) => <CardItemSmall img={item.img} />}
            />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Typography.Text className="text-color-primary-pressed text-size-21 text-weight-medium">
              Apartments with Kitchen Set
            </Typography.Text>
          </Col>
          <Col span={24}>
            <List
              itemLayout="horizontal"
              grid={{ column: 4 }}
              className="w-100"
              dataSource={[
                { img: "/most-picked-2.png" },
                { img: "/most-picked-2.png" },
                { img: "/most-picked-2.png" },
                { img: "/most-picked-2.png" },
              ]}
              renderItem={(item) => <CardItemSmall img={item.img} />}
            />
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
