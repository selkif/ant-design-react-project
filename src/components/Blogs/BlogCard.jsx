import React from "react";
import { Card, Row, Col } from "antd";
import { FaArrowRight } from "react-icons/fa6";

const BlogCard = ({ image, title, description }) => {
  return (
    <Card
      hoverable
      cover={
        <img
          alt="example"
          src={image}
          className="h-[420px] w-full object-cover"
        />
      }
      className="group"
    >
      <Card.Meta
        title={<h1 className="line-clamp-1 text-2xl font-semibold">{title}</h1>}
        description={
          <p className="line-clamp-4 text-gray-500 text-sm">{description}</p>
        }
      />
      <div className="flex justify-end pr-4 text-gray-500">
        <FaArrowRight className="group-hover:text-primary group-hover:translate-x-2 duration-300" />
      </div>
    </Card>
  );
};

export default BlogCard;
