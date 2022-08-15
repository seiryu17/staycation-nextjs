import { Row, Col, Typography, Button } from "antd";
import type { NextPage } from "next";
import Image from "next/image";

import Layout from "../src/component/layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Row className="mt-8">
        <Col span={12}>
          <div>
            <Typography.Text className="text-size-48 text-weight-bold text-color-primary-pressed hero-text-1">
              Forget Busy Work, <br />
              Start Next Vacation
            </Typography.Text>
          </div>
          <div className="mt-3">
            <Typography.Text className="text-size-18 text-weight-regular text-color-neutral-50 hero-text-2">
              We provide what you need to enjoy your <br /> holiday with family.
              Time to make another <br /> memorable moments.
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
    </Layout>
  );
};

export default Home;
