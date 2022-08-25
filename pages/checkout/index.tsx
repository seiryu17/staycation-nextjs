import {
  Button,
  Col,
  Divider,
  Form,
  Input,
  Row,
  Steps,
  Typography,
} from "antd";
import { useState } from "react";
import LayoutComponent from "../../src/component/layout";
import Image from "next/image";

const { Step } = Steps;

const CheckoutPage = () => {
  const [current, setCurrent] = useState(0);
  const [form] = Form.useForm();
  return (
    <LayoutComponent footer={false} onlyLogo={true}>
      <Row justify="center" className="mt-8">
        <Steps current={current}>
          {[1, 2, 3].map((item) => (
            <Step key={item} />
          ))}
        </Steps>
      </Row>
      <Row className="mt-8">
        <Col className="text-center" span={24}>
          <Typography.Text className="text-size-34 text-color-primary-pressed">
            Booking Information
          </Typography.Text>
        </Col>
        <Col className="text-center" span={24}>
          <Typography.Text className="text-size-16 text-color-neutral-50">
            Please fill up the blank fields below
          </Typography.Text>
        </Col>
      </Row>
      <Row className="mt-8">
        <Col span={11}>
          <Row justify="end" gutter={[0, 16]}>
            <Col
              className="position-relative"
              style={{ width: 420, height: 270 }}
            >
              <Image src="/item-1.png" layout="fill" objectFit="cover" />
            </Col>
            <Col style={{ width: 420 }}>
              <Row justify="space-between" align="middle">
                <Col style={{ lineHeight: 1.2 }}>
                  <Typography.Text className="text-size-21 text-weight-light text-color-primary-pressed">
                    Podo Wae
                  </Typography.Text>
                  <div>
                    <Typography.Text className="text-size-16 text-color-neutral-50">
                      Madiun, Indonesia
                    </Typography.Text>
                  </div>
                </Col>
                <Col>
                  <Typography.Text className="text-size-16 text-color-neutral-50">
                    <span className="text-color-primary-pressed">$480 USD</span>{" "}
                    per{" "}
                    <span className="text-color-primary-pressed">2 nights</span>
                  </Typography.Text>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col className="text-center" span={2}>
          <Divider type="vertical" style={{ height: "100%" }} />
        </Col>
        <Col span={11}>
          <Form
            onFinish={(val) => console.log(val)}
            form={form}
            layout="vertical"
            wrapperCol={{ span: 12 }}
          >
            <Form.Item label="First Name" name="firstName">
              <Input />
            </Form.Item>
            <Form.Item label="Last Name" name="lastName">
              <Input />
            </Form.Item>
            <Form.Item label="Email Address" name="email">
              <Input />
            </Form.Item>
            <Form.Item label="Phone Number" name="phoneNumber">
              <Input />
            </Form.Item>
          </Form>
        </Col>
        <Col>
          <Button onClick={() => form.submit()}>Submit</Button>
        </Col>
      </Row>
    </LayoutComponent>
  );
};

export default CheckoutPage;
