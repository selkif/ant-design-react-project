import React from "react";

import { Collapse, Button } from "antd";

const { Panel } = Collapse;

export default function AppFaq() {
  return (
    <div id="faq" className="block faqBlock mt-10 mb-16">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center titleHolder mb-10">
          <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
        </div>
        <Collapse defaultActiveKey={["1"]}>
          <Panel header="How to setup the theme?" key="1">
            <p>
              Get your website up and running in no time with our user-friendly
              setup theme. Experience seamless customization options and enjoy a
              stress-free launch with our step-by-step guide. Upgrade your
              online presence with a professional look that's tailored to your
              brand.
            </p>
          </Panel>
          <Panel header="Can I change plan or cancel at any time?" key="2">
            <p>
              We understand that plans can change, and that's why we offer a
              flexible cancelation policy for our customers. If you need to
              cancel your plan, please contact our support team for assistance.
              We'll do our best to make the process as smooth and hassle-free as
              possible.
            </p>
          </Panel>
          <Panel header="How to access through cloud?" key="3">
            <p>
              Access your data anytime, anywhere with our cloud-based solution.
              No more limitations, enjoy seamless access to your information
              from any device with internet connection. Say goodbye to
              traditional setup, embrace the future of tech with us.
            </p>
          </Panel>
          <Panel header="Can I manage multiple task?" key="4">
            <p>
              Maximize your productivity and efficiency with our app's ability
              to handle multiple tasks seamlessly. Say goodbye to juggling
              between multiple windows and programs and hello to effortless
              multitasking.
            </p>
          </Panel>
          <Panel header="How can I change my password?" key="5">
            <p>
              Simplify your life with our easy-to-use password change feature.
              Securely update your password in just a few clicks, ensuring
              maximum protection for your data and peace of mind for you. Try it
              now!
            </p>
          </Panel>
          <Panel header="How to manage my account?" key="6">
            <p>
              Manage all your accounts in one place with our streamlined and
              secure account management system. Easily update personal
              information, change passwords, and track account activity.
              Simplify your life and stay in control with our user-friendly
              platform.
            </p>
          </Panel>
        </Collapse>
      </div>
    </div>
  );
}
