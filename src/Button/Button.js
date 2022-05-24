import React, { useState } from "react";
import { Button } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import { Typography, Switch } from "antd";
const { Text, Paragraph } = Typography;
import { Divider } from "antd";
import { Row, Col } from "antd";
const ButtonComponent = () => {
  const [state, setState] = useState(true);
  const DemoBox = (props) => (
    <p className={`height-${props.value}`}>{props.children}</p>
  );
  return (
    <div>
      <Button type="primary">Primary</Button>
      <br />
      <br />
      <Button loading>Loading</Button>
      <br />
      <CloseCircleOutlined />
      <CloseCircleOutlined spin style={{ fontSize: "20px" }} />
      <Text type="warning">Ant Design warning</Text>
      <Text underline>Ant Design underline</Text>
      <Paragraph>This is an pargaraph</Paragraph>
      <Switch
        onClick={() => {
          setState(!state);
        }}
        checked={state}
      />
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          nisi perspiciatis, asperiores nostrum sunt nobis consequatur vitae
          blanditiis quam voluptatem quo earum eveniet sint eos, eum dolorum,
          quas neque nam!
        </p>
        <Divider orientation="left" plain>
          Left Text
        </Divider>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          nisi perspiciatis, asperiores nostrum sunt nobis consequatur vitae
          blanditiis quam voluptatem quo earum eveniet sint eos, eum dolorum,
          quas neque nam!
        </p>
        <Divider type="vertical">Vertical </Divider>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          nisi perspiciatis, asperiores nostrum sunt nobis consequatur vitae
          blanditiis quam voluptatem quo earum eveniet sint eos, eum dolorum,
          quas neque nam!
        </p>
      </div>
      <div>
        <Row>
          <Col span={24} style={{ background: "lightblue" }}>
            col-24
          </Col>
        </Row>
        <br />
        <Row>
          <Col span={12} style={{ background: "lightblue" }}>
            col-12
          </Col>
        </Row>
      </div>
      <div>
        <Divider orientation="left">Left Top</Divider>
        <Row justify="center" align="top">
          <Col span={4}>col-4</Col>
          <DemoBox value={100}>col-4</DemoBox>
        </Row>
      </div>
    </div>
  );
};

export default ButtonComponent;
