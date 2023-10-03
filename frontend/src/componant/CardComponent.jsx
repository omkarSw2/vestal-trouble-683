import { Avatar, Wrap, WrapItem } from "@chakra-ui/react";
import React from "react";

import { AiOutlineStar } from "react-icons/ai";
import { FaRegCommentAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export const CardComponent = ({
  image,
  user,
  userImage,
  comments,
  favourite,
  id,
}) => {
  return (
    <Link to={`/singleProduct/${id}`}>
      <div className="container">
        <img className="contImage" src={image} alt="im" />

        <div className="bottom-left-user">{user}</div>

        <div className="bottom-left">
          <Wrap>
            <WrapItem>
              <Avatar size="xs" name="Kola Tioluwani" src={userImage} />{" "}
            </WrapItem>
          </Wrap>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginLeft: "5px",
            }}>
            <div>user nane</div>
          </div>
        </div>

        <div className="bottom-comment">
          <div
            style={{
              fontSize: "15px",
              paddingBottom: "5px",
              marginRight: "5px",
            }}>
            {comments}
          </div>
          <FaRegCommentAlt style={{ fontWeight: "bolder" }} />
        </div>

        <div className="star">
          <div
            style={{
              fontSize: "15px",
              paddingBottom: "0px",
              marginRight: "5px",
            }}>
            {favourite}
          </div>
          <AiOutlineStar style={{ fontSize: "20px", fontWeight: "bolder" }} />
        </div>
      </div>
    </Link>
  );
};
