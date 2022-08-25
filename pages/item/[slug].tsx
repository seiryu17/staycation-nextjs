import { Breadcrumb, Button, Col, List, Row, Typography } from "antd";
import Image from "next/image";
import Router from "next/router";
import CardItemSmall from "../../src/component/home/card-item-small";
import {
  IconBathtub,
  IconBedroom,
  IconDiningroom,
  IconLivingroom,
} from "../../src/component/icons";
import LayoutComponent from "../../src/component/layout";
import Review from "../../src/component/review";

const ItemDetail = () => {
  return (
    <LayoutComponent>
      <Row className="mt-5">
        <Col>
          <Breadcrumb>
            <Breadcrumb.Item>
              <Typography.Text>Home</Typography.Text>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Typography.Text className="text-color-primary-pressed text-weight-medium">
                House Detail
              </Typography.Text>
            </Breadcrumb.Item>
          </Breadcrumb>
        </Col>
        <Col span={24} className="text-center">
          <Typography.Text className="text-size-34 text-color-primary-pressed text-weight-medium">
            Village Angga
          </Typography.Text>
        </Col>
        <Col span={24} className="text-center">
          <Typography.Text className="text-size-18 text-color-neutral-50">
            Bogor, Indonesia
          </Typography.Text>
        </Col>
      </Row>
      <Row className="mt-4" gutter={16}>
        <Col
          style={{ height: 510 }}
          className="w-100 position-relative border-radius-22"
          span={14}
        >
          <Image src={"/item-detail-1.png"} layout="fill" objectFit="cover" />
        </Col>
        <Col className="w-100 position-relative" span={10}>
          <Row style={{ gap: 10 }}>
            <Col
              style={{ height: 250 }}
              className="w-100 position-relative border-radius-22"
              span={24}
            >
              <Image
                src={"/item-detail-1.png"}
                layout="fill"
                objectFit="cover"
              />
            </Col>
            <Col
              style={{ height: 250 }}
              className="w-100 position-relative border-radius-22"
              span={24}
            >
              <Image
                src={"/item-detail-1.png"}
                layout="fill"
                objectFit="cover"
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="mt-6" gutter={[16, 16]}>
        <Col span={12}>
          <Row gutter={[16, 16]}>
            <Col>
              <Typography.Text className="text-color-primary-pressed text-size-24 text-weight-medium">
                About the place
              </Typography.Text>
            </Col>
            <Col>
              <Typography.Text className="text-color-neutral-50">
                Minimal techno is a minimalist subgenre of techno music. It is
                characterized by a stripped-down aesthetic that exploits the use
                of repetition and understated development. Minimal techno is
                thought to have been originally developed in the early 1990s by
                Detroit-based producers Robert Hood and Daniel Bell.
              </Typography.Text>
            </Col>
            <Col>
              <Typography.Text className="text-color-neutral-50">
                Such trends saw the demise of the soul-infused techno that
                typified the original Detroit sound. Robert Hood has noted that
                he and Daniel Bell both realized something was missing from
                techno in the post-rave era.
              </Typography.Text>
            </Col>
            <Col>
              <Typography.Text className="text-color-neutral-50">
                Design is a plan or specification for the construction of an
                object or system or for the implementation of an activity or
                process, or the result of that plan or specification in the form
                of a prototype, product or process. The national agency for
                design: enabling Singapore to use design for economic growth and
                to make lives better.
              </Typography.Text>
            </Col>
            <Col
              span={24}
              className="display-flex"
              style={{ flexDirection: "column", gap: 16 }}
            >
              <Row gutter={[16, 16]}>
                <Col span={6}>
                  <Image src={"/icon-bedroom.png"} width={38} height={38} />
                  <div>
                    <Typography.Text className="text-color-primary-pressed text-weight-medium">
                      5{" "}
                    </Typography.Text>
                    <Typography.Text className="text-color-neutral-50">
                      bedroom
                    </Typography.Text>
                  </div>
                </Col>
                <Col span={6}>
                  <Image src={"/icon-livingroom.png"} width={38} height={38} />
                  <div>
                    <Typography.Text className="text-color-primary-pressed text-weight-medium">
                      1{" "}
                    </Typography.Text>
                    <Typography.Text className="text-color-neutral-50">
                      living room
                    </Typography.Text>
                  </div>
                </Col>
                <Col span={6}>
                  <Image src={"/icon-bathtub.png"} width={38} height={38} />
                  <div>
                    <Typography.Text className="text-color-primary-pressed text-weight-medium">
                      3{" "}
                    </Typography.Text>
                    <Typography.Text className="text-color-neutral-50">
                      bathroom
                    </Typography.Text>
                  </div>
                </Col>
                <Col span={6}>
                  <Image src={"/icon-diningroom.png"} width={38} height={38} />
                  <div>
                    <Typography.Text className="text-color-primary-pressed text-weight-medium">
                      1{" "}
                    </Typography.Text>
                    <Typography.Text className="text-color-neutral-50">
                      dining room
                    </Typography.Text>
                  </div>
                </Col>
              </Row>
              <Row gutter={[16, 16]}>
                <Col span={6}>
                  <Image src={"/icon-wifi.png"} width={38} height={38} />
                  <div>
                    <Typography.Text className="text-color-primary-pressed text-weight-medium">
                      10{" "}
                    </Typography.Text>
                    <Typography.Text className="text-color-neutral-50">
                      mbp/s
                    </Typography.Text>
                  </div>
                </Col>
                <Col span={6}>
                  <Image src={"/icon-ac.png"} width={38} height={38} />
                  <div>
                    <Typography.Text className="text-color-primary-pressed text-weight-medium">
                      7{" "}
                    </Typography.Text>
                    <Typography.Text className="text-color-neutral-50">
                      unit ready
                    </Typography.Text>
                  </div>
                </Col>
                <Col span={6}>
                  <Image src={"/icon-refrigrator.png"} width={38} height={38} />
                  <div>
                    <Typography.Text className="text-color-primary-pressed text-weight-medium">
                      2{" "}
                    </Typography.Text>
                    <Typography.Text className="text-color-neutral-50">
                      refrigrator
                    </Typography.Text>
                  </div>
                </Col>
                <Col span={6}>
                  <Image src={"/icon-tv.png"} width={38} height={38} />
                  <div>
                    <Typography.Text className="text-color-primary-pressed text-weight-medium">
                      4{" "}
                    </Typography.Text>
                    <Typography.Text className="text-color-neutral-50">
                      television
                    </Typography.Text>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col
          className="booking-section border-radius-10 border-neutral-40 ph-17 pv-8"
          span={12}
        >
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Typography.Text className="text-size-21 text-weight-medium text-color-primary-pressed">
                Start Booking
              </Typography.Text>
            </Col>
            <Col span={24}>
              <Typography.Text className="text-size-34 text-weight-medium text-color-success-main">
                $280{" "}
              </Typography.Text>
              <Typography.Text className="text-size-34 text-weight-light text-color-neutral-50">
                per night
              </Typography.Text>
            </Col>
            <Col span={24}>
              <Typography.Text className="text-size-16 text-color-primary-pressed">
                How long you will stay?
              </Typography.Text>
            </Col>
            <Col span={24}>
              <Row>
                <Col>
                  <div className="bg-danger-main ph-2 border-radius-4 use-pointer">
                    <Typography.Text className="text-size-28 text-weight-medium text-color-white">
                      -
                    </Typography.Text>
                  </div>
                </Col>
                <Col
                  className="display-flex"
                  style={{ alignItems: "stretch" }}
                  flex={"1 1"}
                >
                  <div
                    style={{
                      flex: "1 1",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    className="display-flex bg-neutral-30 ph-2 border-radius-4"
                  >
                    <Typography.Text className="text-size-16 text-color-primary-pressed">
                      2 nights
                    </Typography.Text>
                  </div>
                </Col>
                <Col>
                  <div className="bg-success-main ph-2 border-radius-4 use-pointer">
                    <Typography.Text className="text-size-28 text-weight-medium text-color-white">
                      +
                    </Typography.Text>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col span={24}>
              <Typography.Text className="text-size-16 text-color-primary-pressed">
                Pick a Date
              </Typography.Text>
            </Col>
            <Col span={24}>
              <Row>
                <Col>
                  <div className="display-flex bg-primary-pressed ph-1 pv-1 border-radius-4 use-pointer">
                    <Image src={"/icon-calender.png"} width={34} height={30} />
                  </div>
                </Col>
                <Col className="display-flex" style={{ flex: "1 1" }}>
                  <div
                    style={{
                      alignItems: "center",
                      flex: "1 1",
                      justifyContent: "center",
                    }}
                    className="display-flex bg-neutral-30 ph-2 border-radius-4"
                  >
                    <Typography.Text className="text-size-16 text-color-primary-pressed">
                      20 Jan - 22 Jan
                    </Typography.Text>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col span={24}>
              You will pay{" "}
              <span className="text-color-primary-pressed text-weight-medium">
                $480 USD
              </span>{" "}
              per{" "}
              <span className="text-color-primary-pressed text-weight-medium">
                2 nights
              </span>
            </Col>
            <Col span={24}>
              <Button
                size="large"
                className="bg-primary-main border-radius-6 w-100"
                onClick={() => Router.push("/checkout")}
              >
                <Typography.Text className="text-size-16 text-color-white">
                  Continue to Book
                </Typography.Text>
              </Button>
            </Col>
          </Row>
        </Col>
        <Col className="mt-5" span={24}>
          <Typography.Text className="text-size-21 text-weight-medium text-color-primary-pressed">
            Treasure to Choose
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
            renderItem={(item, index) => (
              <CardItemSmall key={index} img={item.img} />
            )}
          />
        </Col>
        <Col className="mv-8">
          <Review />
        </Col>
      </Row>
    </LayoutComponent>
  );
};

export default ItemDetail;
