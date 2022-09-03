import { Button, Col, Rate, Row, Typography } from "antd";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import Image from "next/image";

const Review = () => {
  const mq = useBreakpoint();
  return (
    <Row gutter={32}>
      <Col span={!mq.xs ? 8 : 24}>
        <Image src={"/review-1.png"} width={400} height={540} />
      </Col>
      <Col
        span={!mq.xs ? 8 : 24}
        className={`display-flex ${!mq.xs ? "" : "mt-3"}`}
        style={{ alignItems: "center" }}
      >
        <Row>
          <Col span={24}>
            <Typography.Text className="text-size-24 text-weight-medium text-color-primary-pressed">
              Happy Family
            </Typography.Text>
          </Col>
          <Col>
            <Rate value={5} disabled />
          </Col>
          <Col>
            <Typography.Text className="text-size-34 text-color-primary-pressed">
              What a great trip with my family and I should try again next time
              soon ...
            </Typography.Text>
          </Col>
          <Col span={24} className={`${!mq.xs ? "mb-8" : "mb-5"}`}>
            <Typography.Text className="text-size-18 text-color-neutral-50">
              Angga, Product Designer
            </Typography.Text>
          </Col>
          <Col>
            <Button
              size="large"
              className="bg-primary-main border-radius-4 ph-3"
            >
              <Typography.Text className="text-color-white">
                Read Their Story
              </Typography.Text>
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Review;
