import { Avatar, Wrap, WrapItem } from "@chakra-ui/react";
import React from "react";

import { AiOutlineStar } from "react-icons/ai";
import { FaRegCommentAlt } from "react-icons/fa";
import { Link } from "react-router-dom";


export const CardComponent = ({ postimage, userId, comments, _id, title }) => {
  return (
    <Link to={`/singleProduct/${_id}`}>
    <div className='container'>
     
      <img className='contImage' src={postimage} alt={`${userId.first_Name}`} />
      

      <div className='bottom-left-user'>
      {/* {title} */}
      </div>

      <div className='bottom-left'>
        <Wrap>
          <WrapItem>
            <Avatar
              size='xs'
              name='Kola Tioluwani'
              src={""}
            />


          </WrapItem>
        </Wrap>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginLeft: "5px" }}>
          <div>
          {`${userId.first_Name}`}
          </div>
        </div>

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

            {/* {comments} */}
          </div>
          {/* <FaRegCommentAlt style={{ fontWeight: "bolder" }} /> */}
        </div>

        <div className="star">
          <div
            style={{
              fontSize: "15px",
              paddingBottom: "0px",
              marginRight: "5px",
            }}>
            {/* {"gab"} */}
          </div>
          {/* <AiOutlineStar style={{ fontSize: "20px", fontWeight: "bolder" }} /> */}

          
        </div>
      </div>
      </div>
    </Link>
  );
};
