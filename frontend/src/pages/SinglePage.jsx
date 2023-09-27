import React, { useState } from 'react'
import styled from "styled-components"
import { AiOutlineStar } from "react-icons/ai";
import { FaRegCommentAlt, RiVipDiamondLine } from "react-icons/fa";
import { SlDiamond } from "react-icons/sl";
import { BsThreeDots } from "react-icons/bs";
import { Image, Stack } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react'

export const SinglePage = () => {

  const [isHeightGreater, setIsHeightGreater] = useState(false);

  const [fullScreen, setFullScreen] = useState(false);

  const toggleFullScreen = () => {
    setFullScreen(!fullScreen);
  };


  const handleImageLoad = (e) => {
    const image = e.target;
    if (image.naturalHeight > image.naturalWidth) {
      setIsHeightGreater(true);
    }
  };

  const data = {
    image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ff8ef9fb-5c46-4bed-afce-d22225018708/dfphtdz-2e78f782-a6ec-4ec8-b3f9-1c4807422673.png/v1/fit/w_828,h_474,q_70,strp/paysage_bucolique_sublime_envoutant_petit_voilier_by_naltear_dfphtdz-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODk2IiwicGF0aCI6IlwvZlwvZmY4ZWY5ZmItNWM0Ni00YmVkLWFmY2UtZDIyMjI1MDE4NzA4XC9kZnBodGR6LTJlNzhmNzgyLWE2ZWMtNGVjOC1iM2Y5LTFjNDgwNzQyMjY3My5wbmciLCJ3aWR0aCI6Ijw9MTU2OCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.N8uwHDqKpADMo7AyK9bOFDOH9ZB1PfgU0efts5Ws2ow",
    // image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ff8ef9fb-5c46-4bed-afce-d22225018708/dfpk2no-aef7607c-8120-41a0-ad29-1ca7791b06a2.png/v1/fit/w_828,h_1436,q_70,strp/montagne_majestueuse_by_naltear_dfpk2no-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTY2NCIsInBhdGgiOiJcL2ZcL2ZmOGVmOWZiLTVjNDYtNGJlZC1hZmNlLWQyMjIyNTAxODcwOFwvZGZwazJuby1hZWY3NjA3Yy04MTIwLTQxYTAtYWQyOS0xY2E3NzkxYjA2YTIucG5nIiwid2lkdGgiOiI8PTk2MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.CeAxlVvaqjFYCXd3cBCS1GTApuI64e6VD5XlwlbVfSM"
  }
  return (
    <DIV isHeightGreater={isHeightGreater} toggleFullScreen={toggleFullScreen}>

      {/* <div id='photos' > */}
      {/* <img onLoad={handleImageLoad}  src={data.image} alt='im' style={{width: "100%"}} /> */}
      <div className='imageDiv'>
        <div id='photos' className={`image-viewer ${fullScreen ? 'full-screen' : ''}`}>
          <img src={data.image} alt="Full Screen" onClick={toggleFullScreen} onLoad={handleImageLoad} />
        </div>
      </div>

      <div>

        <div style={{ display: "flex", paddingTop: "20px",marginBottom: "20px", justifyContent: "space-between" }}>

          <div className='media' >
            <div style={{  paddingTop: "4px", marginRight: "5px" }}>
              <AiOutlineStar color='white' style={{ fontSize: "20px", fontWeight: "bolder" }} />
            </div>

            <div  className='media' style={{ marginRight: "20px" }}>
            <Text fontWeight={'bolder'} color={'white'}>Favourite</Text>
            </div>

            <div style={{paddingTop: "6px", marginRight: "5px" }}>
              <FaRegCommentAlt color='white' style={{ fontWeight: "bolder", fontSize: "18px" }} />
            </div>

            <div  className='media' style={{ }}>
            <Text fontWeight={'bolder'} color={'white'}>Comments</Text>
            </div>
          </div>

          <div  className='media diamonds' >

            <div className='diamondAnd3dots' >
              <SlDiamond color='white' fontSize={'25px'} />
            </div>

            <div className='diamondAnd3dots' >
              <BsThreeDots  color='white'  fontSize={'25px'}/>
            </div>

          </div>


        </div>


      </div>


      {/* User Info */}
      <div>

        {/* user div */}
        <div style={{ display: "flex" }}>

          <div>
            <Stack direction='row'>
              <Image
                borderRadius={'10px'}
                boxSize='70px'
                objectFit='cover'
                src='https://bit.ly/dan-abramov'
                alt='Dan Abramov'
              />

            </Stack>
          </div>


          {/* user nanes and tites */}

          <div style={{  marginLeft: "10px" }}>
            <div>
              <Stack spacing={3}>
                <Text fontSize='2xl' color={'white'} fontWeight={'bolder'}>Danghost: Bus Stop</Text>
              </Stack>
            </div>

            <div className='media'>
              <Text fontSize='xl' color={'white'}>by <span style={{ fontWeight: "bolder" }}>Bus Stop</span> </Text>
            </div>

          </div>
        </div>


      </div>


      {/* Viewa and comment */}
      <div className='media' style={{ marginTop: "20px"}}>

        <div className='media'>

          <div>
            <AiOutlineStar color='white' style={{ fontSize: "20px", fontWeight: "bolder" }} />
          </div>

          <div style={{ display: "flex" }}>

            <Text fontWeight={'bolder'} color={'white'}>151 Favourite</Text>

          </div>

          {/* comments */}

        </div>



        <div className='media'>

          <div>
            <FaRegCommentAlt color='white' style={{ fontWeight: "bolder", fontSize: "18px" }} />
          </div>

          <div>
            <div className='media'>
              <Text fontWeight={'bolder'} color={'white'}>14 Comments</Text>
            </div>
          </div>
        </div>


      </div>


      {/* </div> */}

    </DIV>
  )
}

const DIV = styled.div`
width: 70%;
margin: auto;



.imageDiv{
  display: flex;
justify-content: center;
background-color: #161a1f;
}



#photos {
 
  width:  ${props => (props.isHeightGreater === true ? "30%" : "100%")};
}

#photos img {
  /* Just in case there are inline attributes */
  width: 100% !important;
  height: auto !important;
 
}


.image-viewer {
  max-width: 100%;
  cursor: pointer;
}


.image-viewer.full-screen {
  position: fixed;
  top: 0;
  left: 0%;
  /* left: 35%; */
  width: 100%;
  height: 100%;
  z-index: 1000;
  background: rgba(30, 29, 29, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-viewer.full-screen img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.media{
  display: flex;
}


.diamondAnd3dots{
  display: flex;
  justify-content: center;
  align-items: center;
}

.diamonds{
  width: 8%;
  /* border: 2px solid white; */
  justify-content: space-between;
}

    
`
