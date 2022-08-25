import {
  Button,
  Col,
  Divider,
  Form,
  Input,
  Row,
  Steps,
  Typography,
  Upload,
  UploadProps,
} from "antd";
import { useState } from "react";
import LayoutComponent from "../../src/component/layout";
import Image from "next/image";
import Router from "next/router";

const { Step } = Steps;

const CheckoutPage = () => {
  const [current, setCurrent] = useState(0);
  const [form] = Form.useForm();

  const uploadprops: UploadProps = {
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange({ file, fileList }) {
      if (file.status !== "uploading") {
        console.log(file, fileList);
      }
    },
  };
  return (
    <LayoutComponent footer={false} onlyLogo={true}>
      <Row justify="center" className="mt-8">
        <Steps current={current}>
          {[1, 2, 3].map((item) => (
            <Step key={item} />
          ))}
        </Steps>
      </Row>
      {current === 0 && (
        <>
          <Row className="mt-4">
            <Col className="text-center" span={24}>
              <Typography.Text className="text-size-34 text-color-primary-pressed text-weight-medium">
                Booking Information
              </Typography.Text>
            </Col>
            <Col className="text-center" span={24}>
              <Typography.Text className="text-size-16 text-color-neutral-50">
                Please fill up the blank fields below
              </Typography.Text>
            </Col>
          </Row>
          <Row className="mt-4">
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
                        <span className="text-color-primary-pressed">
                          $480 USD
                        </span>{" "}
                        per{" "}
                        <span className="text-color-primary-pressed">
                          2 nights
                        </span>
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
                onFinish={(val) => setCurrent(1)}
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
            <Col span={24} className="text-center mt-4">
              <Button
                size="large"
                className="bg-primary-main border-radius-6 ph-4"
                onClick={() => form.submit()}
              >
                <Typography.Text className="text-color-white">
                  Continue to Book
                </Typography.Text>
              </Button>
            </Col>
            <Col span={24} className="text-center mt-2 mb-4">
              <Button
                size="large"
                disabled={true}
                className="border-radius-6 ph-4"
                onClick={() => setCurrent(0)}
              >
                <Typography.Text className="text-color-neutral-50">
                  Cancel
                </Typography.Text>
              </Button>
            </Col>
          </Row>
        </>
      )}
      {current === 1 && (
        <>
          <Row className="mt-4">
            <Col className="text-center" span={24}>
              <Typography.Text className="text-size-34 text-color-primary-pressed text-weight-medium">
                Payment
              </Typography.Text>
            </Col>
            <Col className="text-center" span={24}>
              <Typography.Text className="text-size-16 text-color-neutral-50">
                Kindly follow the instructions below
              </Typography.Text>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col span={11}>
              <Row className="pl-17" justify="center" gutter={[16, 16]}>
                <Col span={24}>
                  <Typography.Text className="text-color-primary-pressed text-size-16">
                    Transfer Pembayaran:
                  </Typography.Text>
                  <div>
                    <Typography.Text className="text-color-primary-pressed text-size-16">
                      Tax: 10%
                    </Typography.Text>
                  </div>
                  <div>
                    <Typography.Text className="text-color-primary-pressed text-size-16">
                      Sub total: $480 USD
                    </Typography.Text>
                  </div>
                  <div>
                    <Typography.Text className="text-color-primary-pressed text-size-16">
                      Total: $580 USD
                    </Typography.Text>
                  </div>
                </Col>
                <Col span={4}>
                  <Image src={"/bca.png"} width={60} height={30} />
                </Col>
                <Col span={20}>
                  <Typography.Text className="text-color-primary-pressed text-size-16">
                    Bank Central Asia
                  </Typography.Text>
                  <div>
                    <Typography.Text className="text-color-primary-pressed text-size-16">
                      2208 1996
                    </Typography.Text>
                  </div>
                  <div>
                    <Typography.Text className="text-color-primary-pressed text-size-16">
                      BuildWith Angga
                    </Typography.Text>
                  </div>
                </Col>
                <Col span={4}>
                  <Image src={"/mandiri.png"} width={60} height={30} />
                </Col>
                <Col span={20}>
                  <Typography.Text className="text-color-primary-pressed text-size-16">
                    Bank Mandiri
                  </Typography.Text>
                  <div>
                    <Typography.Text className="text-color-primary-pressed text-size-16">
                      2208 1996
                    </Typography.Text>
                  </div>
                  <div>
                    <Typography.Text className="text-color-primary-pressed text-size-16">
                      BuildWith Angga
                    </Typography.Text>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col className="text-center" span={2}>
              <Divider type="vertical" style={{ height: "100%" }} />
            </Col>
            <Col span={11}>
              <Form
                onFinish={(val) => setCurrent(2)}
                form={form}
                layout="vertical"
                wrapperCol={{ span: 12 }}
              >
                <Upload className="w-100" {...uploadprops}>
                  <Button>Upload Transfer Proof</Button>
                </Upload>
                <Form.Item className="mt-2" label="Bank Name" name="bankName">
                  <Input />
                </Form.Item>
                <Form.Item label="Sender Name" name="senderName">
                  <Input />
                </Form.Item>
              </Form>
            </Col>
            <Col span={24} className="text-center mt-4">
              <Button
                size="large"
                className="bg-primary-main border-radius-6 ph-4"
                onClick={() => form.submit()}
              >
                <Typography.Text className="text-color-white">
                  Continue to Book
                </Typography.Text>
              </Button>
            </Col>
            <Col span={24} className="text-center mt-2 mb-4">
              <Button
                size="large"
                className="border-radius-6 ph-4"
                onClick={() => setCurrent(0)}
              >
                <Typography.Text className="text-color-neutral-50">
                  Cancel
                </Typography.Text>
              </Button>
            </Col>
          </Row>
        </>
      )}
      {current === 2 && (
        <Row className="mt-4">
          <Col className="text-center" span={24}>
            <Typography.Text className="text-size-34 text-color-primary-pressed text-weight-medium">
              Yay! Completed
            </Typography.Text>
          </Col>
          <Col className="text-center" span={24}>
            <Image src="/success-order.png" width={360} height={330} />
          </Col>
          <Col className="text-center" span={24}>
            <Typography.Text className="text-size-16 text-color-neutral-50">
              We will inform you via email later{" "}
              <div>once the transaction has been accepted</div>
            </Typography.Text>
          </Col>
          <Col className="text-center" span={24}>
            <Button
              className="bg-primary-main ph-3 border-radius-6 mt-4"
              size="large"
              onClick={() => Router.push("/")}
            >
              <Typography.Text className="text-size-16 text-color-white">
                Back to Home
              </Typography.Text>
            </Button>
          </Col>
        </Row>
      )}
    </LayoutComponent>
  );
};

export default CheckoutPage;
