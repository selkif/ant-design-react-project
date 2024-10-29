import React from "react";
import { Card, Col, Row } from "antd";

import c1 from "../../assets/c1.png";
import c2 from "../../assets/c2.png";
import c3 from "../../assets/c3.png";
import c4 from "../../assets/c4.png";
import c5 from "../../assets/c5.png";
import c6 from "../../assets/c6.png";

export default function Client() {
  return (
    <section className="py-8 mt-[nav-height]">
      <div
        className="relative mt-16
      flex flex-col justify-center items-center h-[560px]"
      >
        <h2 className="text-2xl font-bold  mb-8">Our Valuable Clients</h2>
        <div className="mt-8 w-full px-4">
          <Row gutter={[16, 16]}>
            <Col span={8}>
              <Card hoverable className="flex flex-col items-center">
                <img src={c1} alt="" className="w-full object-cover" />
                <h4 className="mt-2">chvron</h4>
              </Card>
            </Col>
            <Col span={8}>
              <Card hoverable className="flex flex-col items-center">
                <img src={c2} alt="" className="w-full object-cover" />
                <h4 className="mt-2">UN</h4>
              </Card>
            </Col>
            <Col span={8}>
              <Card hoverable className="flex flex-col items-center">
                <img src={c3} alt="" className="w-full object-cover" />
                <h4 className="mt-2">Linkedin</h4>
              </Card>
            </Col>
            <Col span={8}>
              <Card hoverable className="flex flex-col items-center">
                <img src={c4} alt="" className="w-full object-cover" />
                <h4 className="mt-2">chvron</h4>
              </Card>
            </Col>
            <Col span={8}>
              <Card hoverable className="flex flex-col items-center">
                <img src={c5} alt="" className="w-full object-cover" />
                <h4 className="mt-2">chvron</h4>
              </Card>
            </Col>
            <Col span={8}>
              <Card hoverable className="flex flex-col items-center">
                <img src={c6} alt="" className="w-full object-cover" />
                <h4 className="mt-2">chvron</h4>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
}
