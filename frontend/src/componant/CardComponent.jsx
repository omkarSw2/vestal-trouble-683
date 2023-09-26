import { Image } from '@chakra-ui/react'
import React from 'react'
import styled from "styled-components"

export const CardComponent = ({ image, user, userImage }) => {
    return (
        // <div style={{border: "2px solid red", height: "200px"}}>

        //     <div style={{width: "100%"}}>
        //     {/* <Image src={image} width={'100%'} /> */}
        //     <img src={image} alt='im' style={{border: "2px solid yellow"}} />
        //     </div>

        // </div>
        <DIV>
            <section id="photos">
                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9c0af2af-d632-4b13-aece-e1778fd46435/dg4ig5t-c4963a30-3b0d-4287-8fc8-a2927bc25ff6.jpg/v1/fill/w_622,h_350,q_70,strp/cherry_blossom_in_forest_by_guava081298_dg4ig5t-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvOWMwYWYyYWYtZDYzMi00YjEzLWFlY2UtZTE3NzhmZDQ2NDM1XC9kZzRpZzV0LWM0OTYzYTMwLTNiMGQtNDI4Ny04ZmM4LWEyOTI3YmMyNWZmNi5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.WbMRLXPD82vLRNsbIqQuE5WAROv7bpUdnpQXghqx7EQ" alt="Cute cat" />
                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9c0af2af-d632-4b13-aece-e1778fd46435/dg4ig5t-c4963a30-3b0d-4287-8fc8-a2927bc25ff6.jpg/v1/fill/w_622,h_350,q_70,strp/cherry_blossom_in_forest_by_guava081298_dg4ig5t-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvOWMwYWYyYWYtZDYzMi00YjEzLWFlY2UtZTE3NzhmZDQ2NDM1XC9kZzRpZzV0LWM0OTYzYTMwLTNiMGQtNDI4Ny04ZmM4LWEyOTI3YmMyNWZmNi5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.WbMRLXPD82vLRNsbIqQuE5WAROv7bpUdnpQXghqx7EQ" alt="Cute cat" />
                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9c0af2af-d632-4b13-aece-e1778fd46435/dg4ig5t-c4963a30-3b0d-4287-8fc8-a2927bc25ff6.jpg/v1/fill/w_622,h_350,q_70,strp/cherry_blossom_in_forest_by_guava081298_dg4ig5t-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvOWMwYWYyYWYtZDYzMi00YjEzLWFlY2UtZTE3NzhmZDQ2NDM1XC9kZzRpZzV0LWM0OTYzYTMwLTNiMGQtNDI4Ny04ZmM4LWEyOTI3YmMyNWZmNi5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.WbMRLXPD82vLRNsbIqQuE5WAROv7bpUdnpQXghqx7EQ" alt="Cute cat" />
                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e9acb2be-f6f4-48bc-a8bf-869b3e09d5aa/dg7jnx3-e98c97a5-3e20-4e38-91aa-70ae16f53f0f.jpg/v1/fill/w_233,h_350,q_70,strp/stock___faun_stand_portrait_pose_gothic_fantasy_by_s_t_a_r_gazer_dg7jnx3-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTkyMSIsInBhdGgiOiJcL2ZcL2U5YWNiMmJlLWY2ZjQtNDhiYy1hOGJmLTg2OWIzZTA5ZDVhYVwvZGc3am54My1lOThjOTdhNS0zZTIwLTRlMzgtOTFhYS03MGFlMTZmNTNmMGYuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.OxQKW65iHqbXTj_PYuME5nPkisIsvortt06PzkRbDvU" alt="Serious cat" />
                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e9acb2be-f6f4-48bc-a8bf-869b3e09d5aa/dg7jnx3-e98c97a5-3e20-4e38-91aa-70ae16f53f0f.jpg/v1/fill/w_233,h_350,q_70,strp/stock___faun_stand_portrait_pose_gothic_fantasy_by_s_t_a_r_gazer_dg7jnx3-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTkyMSIsInBhdGgiOiJcL2ZcL2U5YWNiMmJlLWY2ZjQtNDhiYy1hOGJmLTg2OWIzZTA5ZDVhYVwvZGc3am54My1lOThjOTdhNS0zZTIwLTRlMzgtOTFhYS03MGFlMTZmNTNmMGYuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.OxQKW65iHqbXTj_PYuME5nPkisIsvortt06PzkRbDvU" alt="Serious cat" />
                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e9acb2be-f6f4-48bc-a8bf-869b3e09d5aa/dg7jnx3-e98c97a5-3e20-4e38-91aa-70ae16f53f0f.jpg/v1/fill/w_233,h_350,q_70,strp/stock___faun_stand_portrait_pose_gothic_fantasy_by_s_t_a_r_gazer_dg7jnx3-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTkyMSIsInBhdGgiOiJcL2ZcL2U5YWNiMmJlLWY2ZjQtNDhiYy1hOGJmLTg2OWIzZTA5ZDVhYVwvZGc3am54My1lOThjOTdhNS0zZTIwLTRlMzgtOTFhYS03MGFlMTZmNTNmMGYuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.OxQKW65iHqbXTj_PYuME5nPkisIsvortt06PzkRbDvU" alt="Serious cat" />
                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9167f62d-3009-4057-bae0-bfb96ae5353f/dg62cu9-b4956c36-2444-48a1-b362-97943d37a1f6.jpg/v1/fit/w_375,h_265,q_70,strp/ancient_warden_concept_art_by_agathalark_dg62cu9-375w.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTEzMiIsInBhdGgiOiJcL2ZcLzkxNjdmNjJkLTMwMDktNDA1Ny1iYWUwLWJmYjk2YWU1MzUzZlwvZGc2MmN1OS1iNDk1NmMzNi0yNDQ0LTQ4YTEtYjM2Mi05Nzk0M2QzN2ExZjYuanBnIiwid2lkdGgiOiI8PTE2MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.8hKfBHPxTHmR3m-2Nb8jIGRfh1VLF90t8X9ko7dBw1Y" alt="Serious cat" />
                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8c42fdc2-a3b7-40ee-8402-d124b1f29ec3/dg5ipy3-5a21504b-9818-45b7-ba7a-35322ccbce00.png/v1/fit/w_300,h_900,q_70,strp/redraw_of_thistle_by_seeingstarsyt_dg5ipy3-300w.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzhjNDJmZGMyLWEzYjctNDBlZS04NDAyLWQxMjRiMWYyOWVjM1wvZGc1aXB5My01YTIxNTA0Yi05ODE4LTQ1YjctYmE3YS0zNTMyMmNjYmNlMDAucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Ddc8Yu2emF1YOwcNEWwH_Wns3n6UAktyzf9cegBlLhM" alt="Serious cat" />
                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8c42fdc2-a3b7-40ee-8402-d124b1f29ec3/dg5ipy3-5a21504b-9818-45b7-ba7a-35322ccbce00.png/v1/fit/w_300,h_900,q_70,strp/redraw_of_thistle_by_seeingstarsyt_dg5ipy3-300w.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzhjNDJmZGMyLWEzYjctNDBlZS04NDAyLWQxMjRiMWYyOWVjM1wvZGc1aXB5My01YTIxNTA0Yi05ODE4LTQ1YjctYmE3YS0zNTMyMmNjYmNlMDAucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Ddc8Yu2emF1YOwcNEWwH_Wns3n6UAktyzf9cegBlLhM" alt="Serious cat" />
                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8c42fdc2-a3b7-40ee-8402-d124b1f29ec3/dg5ipy3-5a21504b-9818-45b7-ba7a-35322ccbce00.png/v1/fit/w_300,h_900,q_70,strp/redraw_of_thistle_by_seeingstarsyt_dg5ipy3-300w.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzhjNDJmZGMyLWEzYjctNDBlZS04NDAyLWQxMjRiMWYyOWVjM1wvZGc1aXB5My01YTIxNTA0Yi05ODE4LTQ1YjctYmE3YS0zNTMyMmNjYmNlMDAucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Ddc8Yu2emF1YOwcNEWwH_Wns3n6UAktyzf9cegBlLhM" alt="Serious cat" />
                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9101649d-5fcb-4acc-bd80-e3305f976d98/dfvceuc-65fa367f-769b-403c-a57a-834cfd3e72dc.jpg/v1/crop/w_263,h_350,x_0,y_0,scl_0.35066666666667,q_70,strp/ariel_by_shurakrgt_dfvceuc-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAwMCIsInBhdGgiOiJcL2ZcLzkxMDE2NDlkLTVmY2ItNGFjYy1iZDgwLWUzMzA1Zjk3NmQ5OFwvZGZ2Y2V1Yy02NWZhMzY3Zi03NjliLTQwM2MtYTU3YS04MzRjZmQzZTcyZGMuanBnIiwid2lkdGgiOiI8PTc1MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.n8VzcPPkhZWjo6vqUby1-7WWjioRnN0mpONlvqvBCtQ" alt="Serious cat" />
                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8607233a-09d3-4384-a312-e6f0723bc353/dg93ae4-c3a82401-ca2d-43aa-ba75-a1016d166541.jpg/v1/fit/w_375,h_282,q_70,strp/mushroom_mountain_trinket_dish_by_nymla_dg93ae4-375w.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAxIiwicGF0aCI6IlwvZlwvODYwNzIzM2EtMDlkMy00Mzg0LWEzMTItZTZmMDcyM2JjMzUzXC9kZzkzYWU0LWMzYTgyNDAxLWNhMmQtNDNhYS1iYTc1LWExMDE2ZDE2NjU0MS5qcGciLCJ3aWR0aCI6Ijw9MTIwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.tWx4yusYt2_epWLDUKCeY7xwXVQogTDkLOZmdsu8uUk" alt="Serious cat" />
                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8607233a-09d3-4384-a312-e6f0723bc353/dg93ae4-c3a82401-ca2d-43aa-ba75-a1016d166541.jpg/v1/fit/w_375,h_282,q_70,strp/mushroom_mountain_trinket_dish_by_nymla_dg93ae4-375w.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAxIiwicGF0aCI6IlwvZlwvODYwNzIzM2EtMDlkMy00Mzg0LWEzMTItZTZmMDcyM2JjMzUzXC9kZzkzYWU0LWMzYTgyNDAxLWNhMmQtNDNhYS1iYTc1LWExMDE2ZDE2NjU0MS5qcGciLCJ3aWR0aCI6Ijw9MTIwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.tWx4yusYt2_epWLDUKCeY7xwXVQogTDkLOZmdsu8uUk" alt="Serious cat" />
                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8607233a-09d3-4384-a312-e6f0723bc353/dg93ae4-c3a82401-ca2d-43aa-ba75-a1016d166541.jpg/v1/fit/w_375,h_282,q_70,strp/mushroom_mountain_trinket_dish_by_nymla_dg93ae4-375w.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAxIiwicGF0aCI6IlwvZlwvODYwNzIzM2EtMDlkMy00Mzg0LWEzMTItZTZmMDcyM2JjMzUzXC9kZzkzYWU0LWMzYTgyNDAxLWNhMmQtNDNhYS1iYTc1LWExMDE2ZDE2NjU0MS5qcGciLCJ3aWR0aCI6Ijw9MTIwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.tWx4yusYt2_epWLDUKCeY7xwXVQogTDkLOZmdsu8uUk" alt="Serious cat" />
                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f0d310b6-4d9a-46b4-bad7-404cb20a03e5/dfq0ufa-894978a7-abd5-4cf6-9750-32aa2825de6f.jpg/v1/fill/w_286,h_350,q_70,strp/the_fellowship_by_shiantu_dfq0ufa-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI1MyIsInBhdGgiOiJcL2ZcL2YwZDMxMGI2LTRkOWEtNDZiNC1iYWQ3LTQwNGNiMjBhMDNlNVwvZGZxMHVmYS04OTQ5NzhhNy1hYmQ1LTRjZjYtOTc1MC0zMmFhMjgyNWRlNmYuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.v09m6zLYI9_n1okUlEIhG5Qcr4Pl8EtCQYz7WrKrA2I" alt="Serious cat" />
                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f0d310b6-4d9a-46b4-bad7-404cb20a03e5/dfq0ufa-894978a7-abd5-4cf6-9750-32aa2825de6f.jpg/v1/fill/w_286,h_350,q_70,strp/the_fellowship_by_shiantu_dfq0ufa-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI1MyIsInBhdGgiOiJcL2ZcL2YwZDMxMGI2LTRkOWEtNDZiNC1iYWQ3LTQwNGNiMjBhMDNlNVwvZGZxMHVmYS04OTQ5NzhhNy1hYmQ1LTRjZjYtOTc1MC0zMmFhMjgyNWRlNmYuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.v09m6zLYI9_n1okUlEIhG5Qcr4Pl8EtCQYz7WrKrA2I" alt="Serious cat" />
                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f0d310b6-4d9a-46b4-bad7-404cb20a03e5/dfq0ufa-894978a7-abd5-4cf6-9750-32aa2825de6f.jpg/v1/fill/w_286,h_350,q_70,strp/the_fellowship_by_shiantu_dfq0ufa-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI1MyIsInBhdGgiOiJcL2ZcL2YwZDMxMGI2LTRkOWEtNDZiNC1iYWQ3LTQwNGNiMjBhMDNlNVwvZGZxMHVmYS04OTQ5NzhhNy1hYmQ1LTRjZjYtOTc1MC0zMmFhMjgyNWRlNmYuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.v09m6zLYI9_n1okUlEIhG5Qcr4Pl8EtCQYz7WrKrA2I" alt="Serious cat" />
            </section>
        </DIV>
    )
}

const DIV = styled.div`
    

    #photos {
  /* Prevent vertical gaps */
  line-height: 0;
   
  -webkit-column-count: 5;
  -webkit-column-gap:   0px;
  -moz-column-count:    5;
  -moz-column-gap:      0px;
  column-count:         5;
  column-gap:           0px;  
}

#photos img {
  /* Just in case there are inline attributes */
  width: 100% !important;
  height: auto !important;
}

@media (max-width: 1200px) {
  #photos {
  -moz-column-count:    4;
  -webkit-column-count: 4;
  column-count:         4;
  }
}
@media (max-width: 1000px) {
  #photos {
  -moz-column-count:    3;
  -webkit-column-count: 3;
  column-count:         3;
  }
}
@media (max-width: 800px) {
  #photos {
  -moz-column-count:    2;
  -webkit-column-count: 2;
  column-count:         2;
  }
}
@media (max-width: 400px) {
  #photos {
  -moz-column-count:    1;
  -webkit-column-count: 1;
  column-count:         1;
  }
}


`
