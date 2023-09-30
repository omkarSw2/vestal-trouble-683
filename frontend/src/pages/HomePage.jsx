import React, { useEffect } from 'react'
import { CardComponent } from '../componant/CardComponent'
import styled from "styled-components"



export const HomePage = () => {

    const data = [
        {
            comments: 71,
            id: 1,
            favourite: 34,
            image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9c0af2af-d632-4b13-aece-e1778fd46435/dg4ig5t-c4963a30-3b0d-4287-8fc8-a2927bc25ff6.jpg/v1/fill/w_622,h_350,q_70,strp/cherry_blossom_in_forest_by_guava081298_dg4ig5t-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvOWMwYWYyYWYtZDYzMi00YjEzLWFlY2UtZTE3NzhmZDQ2NDM1XC9kZzRpZzV0LWM0OTYzYTMwLTNiMGQtNDI4Ny04ZmM4LWEyOTI3YmMyNWZmNi5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.WbMRLXPD82vLRNsbIqQuE5WAROv7bpUdnpQXghqx7EQ",
            user: "Raj",
            userImage: "https://a.deviantart.net/avatars-big/n/n/nnway0.jpg?8"
        },
        {
            comments: 723,
            favourite: 312,
            id: 2,
            image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fbafa7b1-ae43-4c59-a808-9cd9d446e29e/dg5in5n-74b8a295-f094-4d34-ac39-eef777e0131b.jpg/v1/fit/w_414,h_276,q_70,strp/by_the_moon_by_thinloth_dg5in5n-414w.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjY3IiwicGF0aCI6IlwvZlwvZmJhZmE3YjEtYWU0My00YzU5LWE4MDgtOWNkOWQ0NDZlMjllXC9kZzVpbjVuLTc0YjhhMjk1LWYwOTQtNGQzNC1hYzM5LWVlZjc3N2UwMTMxYi5qcGciLCJ3aWR0aCI6Ijw9MTAwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.ReYCcl5yQvWfCv4UzYol_xS1l9owrekAhn55Ljyi1gw",
            user: "Raj",
            userImage: "https://a.deviantart.net/avatars-big/n/n/nnway0.jpg?8"
        },
        {
            comments:12,
             id: 1,
            favourite: 890,
            image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/35612870-f267-4158-a48b-af55e0fd869d/dg0eu58-26cc32e4-fa82-48c9-8f14-ccccb3661879.jpg/v1/fill/w_538,h_350,q_70,strp/green_witch_v1_2_by_syllie_dg0eu58-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzAzIiwicGF0aCI6IlwvZlwvMzU2MTI4NzAtZjI2Ny00MTU4LWE0OGItYWY1NWUwZmQ4NjlkXC9kZzBldTU4LTI2Y2MzMmU0LWZhODItNDhjOS04ZjE0LWNjY2NiMzY2MTg3OS5qcGciLCJ3aWR0aCI6Ijw9MTA4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.0OlOzLgKVdGkUaMd8YRH1MnWMaandj_Oyv7dfCZx1Bw",
            user: "Raj",
            userImage: "https://a.deviantart.net/avatars-big/n/n/nnway0.jpg?8"
        },
        {
            comments: 89,
            favourite: 34,
             id: 1,
            image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9167f62d-3009-4057-bae0-bfb96ae5353f/dg62cu9-b4956c36-2444-48a1-b362-97943d37a1f6.jpg/v1/fit/w_375,h_265,q_70,strp/ancient_warden_concept_art_by_agathalark_dg62cu9-375w.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTEzMiIsInBhdGgiOiJcL2ZcLzkxNjdmNjJkLTMwMDktNDA1Ny1iYWUwLWJmYjk2YWU1MzUzZlwvZGc2MmN1OS1iNDk1NmMzNi0yNDQ0LTQ4YTEtYjM2Mi05Nzk0M2QzN2ExZjYuanBnIiwid2lkdGgiOiI8PTE2MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.8hKfBHPxTHmR3m-2Nb8jIGRfh1VLF90t8X9ko7dBw1Y",
            user: "Raj",
            userImage: "https://a.deviantart.net/avatars-big/n/n/nnway0.jpg?8"
        },
        {
            comments: 30,
            favourite: 34,
             id: 1,
            image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e9acb2be-f6f4-48bc-a8bf-869b3e09d5aa/dg7jnx3-e98c97a5-3e20-4e38-91aa-70ae16f53f0f.jpg/v1/fill/w_233,h_350,q_70,strp/stock___faun_stand_portrait_pose_gothic_fantasy_by_s_t_a_r_gazer_dg7jnx3-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTkyMSIsInBhdGgiOiJcL2ZcL2U5YWNiMmJlLWY2ZjQtNDhiYy1hOGJmLTg2OWIzZTA5ZDVhYVwvZGc3am54My1lOThjOTdhNS0zZTIwLTRlMzgtOTFhYS03MGFlMTZmNTNmMGYuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.OxQKW65iHqbXTj_PYuME5nPkisIsvortt06PzkRbDvU",
            user: "Raj",
            userImage: "https://a.deviantart.net/avatars-big/n/n/nnway0.jpg?8"
        },
        {
            comments: 780,
             id: 1,
            favourite: 34,
            image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d04973d1-482e-402f-8e70-e6aa6b81a4bd/dg8qnoo-e4cc4a9d-bc5f-4828-8633-4c86341e1752.jpg/v1/fill/w_233,h_350,q_70,strp/2b_by_tamillart__by_tamillaart_dg8qnoo-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTkyMCIsInBhdGgiOiJcL2ZcL2QwNDk3M2QxLTQ4MmUtNDAyZi04ZTcwLWU2YWE2YjgxYTRiZFwvZGc4cW5vby1lNGNjNGE5ZC1iYzVmLTQ4MjgtODYzMy00Yzg2MzQxZTE3NTIuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.47o7yxwNuWQVyuOexG5BijNfKic6ZWNApR4soqwoMGE",
            user: "Raj",
            userImage: "https://a.deviantart.net/avatars-big/n/n/nnway0.jpg?8"
        },
        {
            comments: 29,
             id: 1,
            favourite: 34,
            image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fe067caf-ab4f-44f2-9622-e7abe8ff6c12/dg5tj2b-dbc9db91-fccc-40af-8d90-662cfe14db5a.png/v1/fill/w_622,h_350,q_70,strp/seeing_the_future_through_art_by_aprisun_dg5tj2b-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvZmUwNjdjYWYtYWI0Zi00NGYyLTk2MjItZTdhYmU4ZmY2YzEyXC9kZzV0ajJiLWRiYzlkYjkxLWZjY2MtNDBhZi04ZDkwLTY2MmNmZTE0ZGI1YS5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.Xn_xOlQhl4RlNe9NmPME2BV9N00UrSPJF6d4as8Tv3g",
            user: "Raj",
            userImage: "https://a.deviantart.net/avatars-big/n/n/nnway0.jpg?8"
        },
        {
            comments: 71,
             id: 1,
            favourite: 34,
            image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/69b6bcd5-ecec-40bf-bafb-a455bd34f510/dg6veu3-7e6c15fa-935e-4def-a718-ac8909756e39.png/v1/crop/w_234,h_350,x_0,y_0,scl_0.17117776152158,q_70,strp/yona_hime_by_nathairart_dg6veu3-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTkxOCIsInBhdGgiOiJcL2ZcLzY5YjZiY2Q1LWVjZWMtNDBiZi1iYWZiLWE0NTViZDM0ZjUxMFwvZGc2dmV1My03ZTZjMTVmYS05MzVlLTRkZWYtYTcxOC1hYzg5MDk3NTZlMzkucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Ckr4oaGJxqLTX1e8mbgiBloc2XmvtdhkKWtR0AKhWtY",
            user: "Raj",
            userImage: "https://a.deviantart.net/avatars-big/n/n/nnway0.jpg?8"
        },
        {
            comments: 71,
             id: 1,
            favourite: 34,
            image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8c42fdc2-a3b7-40ee-8402-d124b1f29ec3/dg5ipy3-5a21504b-9818-45b7-ba7a-35322ccbce00.png/v1/fit/w_300,h_900,q_70,strp/redraw_of_thistle_by_seeingstarsyt_dg5ipy3-300w.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzhjNDJmZGMyLWEzYjctNDBlZS04NDAyLWQxMjRiMWYyOWVjM1wvZGc1aXB5My01YTIxNTA0Yi05ODE4LTQ1YjctYmE3YS0zNTMyMmNjYmNlMDAucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Ddc8Yu2emF1YOwcNEWwH_Wns3n6UAktyzf9cegBlLhM",
            user: "Raj",
            userImage: "https://a.deviantart.net/avatars-big/n/n/nnway0.jpg?8"
        },
        {
            comments: 71,
             id: 1,
            favourite: 34,
            image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/238c7738-0808-4602-ab35-b4efc7ebded4/dg79064-cbb1a15c-b889-415f-8621-2c1f1807722b.jpg/v1/fill/w_251,h_350,q_70,strp/temporal_disturbance_by_royzilya_dg79064-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTMwMCIsInBhdGgiOiJcL2ZcLzIzOGM3NzM4LTA4MDgtNDYwMi1hYjM1LWI0ZWZjN2ViZGVkNFwvZGc3OTA2NC1jYmIxYTE1Yy1iODg5LTQxNWYtODYyMS0yYzFmMTgwNzcyMmIuanBnIiwid2lkdGgiOiI8PTkzMSJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.gIraI70YWeyeiwmlvAJBxWoc_sJDSYtNtQGSKhTUwNI",
            user: "Raj",
            userImage: "https://a.deviantart.net/avatars-big/n/n/nnway0.jpg?8"
        },
        {
            comments: 71,
             id: 1,
            favourite: 34,
            image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9101649d-5fcb-4acc-bd80-e3305f976d98/dfvceuc-65fa367f-769b-403c-a57a-834cfd3e72dc.jpg/v1/crop/w_263,h_350,x_0,y_0,scl_0.35066666666667,q_70,strp/ariel_by_shurakrgt_dfvceuc-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAwMCIsInBhdGgiOiJcL2ZcLzkxMDE2NDlkLTVmY2ItNGFjYy1iZDgwLWUzMzA1Zjk3NmQ5OFwvZGZ2Y2V1Yy02NWZhMzY3Zi03NjliLTQwM2MtYTU3YS04MzRjZmQzZTcyZGMuanBnIiwid2lkdGgiOiI8PTc1MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.n8VzcPPkhZWjo6vqUby1-7WWjioRnN0mpONlvqvBCtQ",
            user: "Raj",
            userImage: "https://a.deviantart.net/avatars-big/n/n/nnway0.jpg?8"
        },
        {
            comments: 71,
             id: 1,
            favourite: 34,
            image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4d436f5f-6c6c-4c46-b10f-c4db755aa089/df0quwv-830ec40c-96df-4dc0-ac31-ddf8e30c7d86.png/v1/fill/w_280,h_350,q_70,strp/himalayan_tahr_and_cecropia_moths_by_gray_ghost_creations_df0quwv-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAwMCIsInBhdGgiOiJcL2ZcLzRkNDM2ZjVmLTZjNmMtNGM0Ni1iMTBmLWM0ZGI3NTVhYTA4OVwvZGYwcXV3di04MzBlYzQwYy05NmRmLTRkYzAtYWMzMS1kZGY4ZTMwYzdkODYucG5nIiwid2lkdGgiOiI8PTgwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.mXsPKY-dDSptG12mtmPbd7NMbc17MMJ8MksBTkosyPw",
            user: "Raj",
            userImage: "https://a.deviantart.net/avatars-big/n/n/nnway0.jpg?8"
        },
        {
            comments: 71,
            favourite: 34,
             id: 1,
            image: " https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bb5ba0cb-0fb5-4a48-aed3-7d515c04f4e9/dfi1wsh-98586088-e76f-4db4-af33-958e48336584.jpg/v1/fit/w_414,h_276,q_70,strp/stay_in_the_light_way_by_zardo_dfi1wsh-414w.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjAwIiwicGF0aCI6IlwvZlwvYmI1YmEwY2ItMGZiNS00YTQ4LWFlZDMtN2Q1MTVjMDRmNGU5XC9kZmkxd3NoLTk4NTg2MDg4LWU3NmYtNGRiNC1hZjMzLTk1OGU0ODMzNjU4NC5qcGciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.a8kfpSCHk9Zyfr9bS3V52BL7vPbWVSbVufhoZJh5CKE",
            user: "Raj",
            userImage: "https://a.deviantart.net/avatars-big/n/n/nnway0.jpg?8"
        }
    ]




    return (
        <DIV className="grid-container">
            <section id="photos">
                {
                    data.map((el, index) => (
                        // <div className='container'>
                        //     <img className='contImage'  src={el.image} alt='im' />

                        //     <div className='bottom-left-user'>
                        //         {el.user}
                        //     </div>

                        //     <div className='bottom-left'>
                        //         <Wrap>
                        //             <WrapItem>
                        //                 <Avatar
                        //                     size='xs'
                        //                     name='Kola Tioluwani'
                        //                     src={el.userImage}
                        //                 />{' '}

                                        
                        //             </WrapItem>
                        //         </Wrap>
                        //         <div style={{display: "flex",justifyContent: "space-between", alignItems: "center", border: "2px solid white", marginLeft: "5px"}}>
                        //                     <div>
                        //                     user nane
                        //                     </div>
                        //                 </div>
                        //     </div>


                        //     <div className='bottom-comment'>
                        //         <div style={{fontSize: "15px", paddingBottom: "5px", marginRight: "5px"}}>
                        //             {el.comments}
                        //         </div>
                        //         <FaRegCommentAlt style={{fontWeight: "bolder"}} />
                               
                        //     </div>

                        //     <div className='star'>

                        //     <div style={{fontSize: "15px", paddingBottom: "0px", marginRight: "5px"}}>
                        //             {el.favourite}
                        //         </div>
                        //         <AiOutlineStar style={{fontSize: "20px",  fontWeight: "bolder"}} />
                              
                        //     </div>

                        // </div>
                        <CardComponent key={index} {...el} />
                    ))
                }
            </section>
        </DIV>
    )
}



const DIV = styled.div`


#photos {
  /* Prevent vertical gaps */
  line-height: 0;
   
  -webkit-column-count: 7;
  -webkit-column-gap:   5px;
  -moz-column-count:    7;
  -moz-column-gap:      5px;
  column-count:         7;
  column-gap:           5px;  
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


.bottom-left {
  position: absolute;
  bottom: 8px;
  left: 16px;
  opacity: 0; /* Initially not visible */
  transition: opacity 0.3s ease; /* Add transition for smooth effect */
  display: flex;
}

.container {
  position: relative;
  text-align: center;
  color: white;
}

img:hover {
    filter: blur(2px); /* Blur the image on hover */
    cursor: pointer;
  }

  .container:hover .bottom-left-user,
  .container:hover .bottom-left, .container:hover .star,  .container:hover .bottom-comment{
    opacity: 1; /* Increase opacity on hover */
  }


.bottom-left-user{
  position: absolute;
  bottom: 80px;
  left: 16px;
  opacity: 0; /* Initially not visible */
  transition: opacity 0.3s ease; /* Add transition for smooth effect */
}

.bottom-comment{
    position: absolute;
  bottom: 68px;
  right: 16px;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bolder;

}

.star{
    position: absolute;
  bottom: 8px;
  right: 16px;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bolder;
}

.star:hover{
    color: #6def6d;
    cursor: pointer;
}

.bottom-comment:hover{
    color: #6def6d;
    cursor: pointer;

}




`




