import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Text, Image } from '@chakra-ui/react'
import { ImArrowUp} from "react-icons/im";
import FileUploadForm from './FileUpload';
import BrownNeutral from '../Images/BrownNeutral.png'
import WorldArtDay from '../Images/WorldArtDay.png'
import WorldDay from '../Images/WorldDay.png'

export const Deviation = () => {
    return (
        <div>
            <Tabs isFitted variant='enclosed'>
                <TabList mb='1' style={{ width: "30%"}}>
                    <Tab > <ImArrowUp style={{marginRight: "8px"}} /> New Submission</Tab>
                    <Tab >New</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <div style={{ marginBottom: "10px"}}>
                            
                            <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "8px"}}>
                            <div style={{ marginRight: "8px",  paddingTop: "3px"}}>
                            <ImArrowUp color={'#63B3ED'} />
                            </div>

                            <div style={{}}>
                            <Text fontSize={'xl'} fontWeight={'bolder'} color={'#63B3ED'}> New Submission</Text>
                            </div>
                            </div>

                            <div>
                                <FileUploadForm />
                            </div>
                           
                        </div>

                        <div style={{ display: "flex", width: "90%", margin: "auto"}}>
                            <div style={{width: "18%"}}>
                            <Image src={WorldDay}  alt='world day' />
                            </div>

                            <div style={{width: "60%"}}>
                            <Image src={WorldArtDay}  alt='world art day'/>
                            </div>

                            <div style={{width: "18%"}}>
                            <Image src={BrownNeutral}  alt='Brown Neutral'   />
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    )
}
