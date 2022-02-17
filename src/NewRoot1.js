import React from "react";
import styled from "styled-components";
export const NewRoot1 = ({}) => {
  return (
    <NewRootRoot>
      <Page1>
        <Background
          src={
            "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/c9dfdd99-357e-4794-8d5b-e9bb1b80f4a2.svg?alt=media&token=52d3723a-c423-451d-a602-1f4602b64895"
          }
        />
        <HomeIndicator />
        <Dots
          src={
            "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/db9e657d-80c4-4bba-b3b4-b3cae2e9c99e.svg?alt=media&token=97be8f39-b878-4f15-b3a9-ca1beb3cb762"
          }
        />
        <StatusBar>
          <TimeStyle>
            <Time>9:41</Time>
          </TimeStyle>
          <CellularConnection
            src={
              "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/4bb7a959-d524-4b6e-a10e-98700b7f40d0.svg?alt=media&token=53651b41-9587-46b0-baf0-50e32427a48a"
            }
            />
            <Wifi
              src={
                "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/0a9aabaa-de0c-4f91-8964-005b83bfdf4f.svg?alt=media&token=63a5afb4-3b87-4af4-a78a-858e0c2554f5"
              }
            />
            <Battery>
              <Border>
                <Capacity />
              </Border>
              <Cap
                src={
                  "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/1c83d9f7-9d85-4f03-ad93-1ab7dd4669e5.svg?alt=media&token=84b4a445-ff13-45c4-a5c0-0705d9c1011a"
                }
              />
            </Battery>
          </StatusBar>
          <Frame41>
            <Frame40>
            Discover 70 millions songs
              <br />
              Ad free
            </Discover70MillionsSongsAdFree>

            <DownloadSongsAndAlbumsToListenOfflineWhereverYouAre>
              Download songs and albums to listen offline wherever you are.{" "}
              <br />
            </DownloadSongsAndAlbumsToListenOfflineWhereverYouAre>
          </Frame40>
        <Frame41/>
        <Saly161 />
      </Page1>
    </NewRootRoot>
  );
};
const NewRootRoot = styled.div`
  width: 390px;
  height: 844px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Page1 = styled.div`
  background-color: #ffffff;
  box-shadow: 24px 24px 48px 0px #9cb1e4;
  width: 390px;
  height: 844px;
  overflow: hidden;
  position: relative;
  border-radius: 30px;
`;
const Background = styled.img`
  width: 1958.99px;
  height: 1182.27px;
  position: absolute;
  top: -346px;
  left: -1013px;
`;
const HomeIndicator = styled.div`
  width: 389px;
  height: 34px;
  position: absolute;
  top: 836px;
  left: 1px;
  `;
const Dots = styled.img`
  width: 34px;
  height: 6px;
  position: absolute;
  top: 797px;
  left: 181px;
`;
const StatusBar = styled.div`
  width: 353.66px;
  position: absolute;
  top: 1px;
  left: 1px;
  display: flex;
  flex-direction: row;
  padding-left: 21px;
  padding-right: 14.34px;
  padding-top: 11px;
  padding-bottom: 13px;
  align-items: flex-end;
`;
const TimeStyle = styled.div`
  height: 21px;
  margin-right: 233px;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: flex-end; gap: 0;
  `;
  const Time = styled.div`
    color: #3b4f7d;
    text-align: center;
    width: 54px;
    font-size: 15px;
    font-family: SF Pro Text;
    font-weight: 600;
    letter-spacing: -0.3px;
  `;
  const CellularConnection = styled.img`
    width: 17px;
    height: 10.67px;
    margin-bottom: 3.66px;
    margin-right: 5px;
  `;
  const Wifi = styled.img`
    width: 15.33px;
    height: 11px;
    margin-bottom: 3.67px;
    margin-right: 5px;
  `;
  const Battery = styled.div`
    width: 24.33px;
    margin-bottom: 3.34px;
    display: flex;
    flex-direction: row; justify-content: space-between;
    align-items: center;
  `;
  const Border = styled.div`
    border-width: 1px;
    border-color: #3b4f7d;
    border-style: solid;
    height: 11.33px;
    align-self: stretch;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 2px;
    padding-right: 2px;
    border-radius: 2.67px;
  `;
  const Capacity = styled.div`
    background-color: #3b4f7d;
    width: 18px;
    height: 7.33px;
    border-radius: 1.33px;
  `;
  const Cap = styled.img`
  width: 1.33px;
  height: 4px;
`;
const Frame41 = styled.div`
  background-color: rgba(227, 236, 255, 0.5);
  box-shadow: -10px -10px 16px 0px #e9efff, 10px 10px 20px 0px #c1cbea;
  height: 280px;
  position: absolute;
  top: 416px;
  left: 37px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 30px;
  padding-right: 30px;
  border-radius: 30px;
`;
const Frame40 = styled.div`
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const Discover70MillionsSongsAdFree = styled.div`
  color: #3b4f7d;
  text-align: center;
  width: 256px;
  font-size: 34px;
  font-family: SF Pro Display;
  font-weight: 700;
  letter-spacing: -0.3px;
  align-self: stretch;
`;
const DownloadSongsAndAlbumsToListenOfflineWhereverYouAre = styled.div`
  color: rgba(59, 79, 125, 0.75);
  text-align: center;
  width: 222px;
  height: 67px;
  font-size: 18px;
  font-family: SF Pro Text;
  font-weight: 400;
  letter-spacing: -0.3px;
`;
const Saly161 = styled.div`
  width: 321px;
  height: 336px;
  position: absolute;
  top: 86px;
  left: 35px;
  display: flex;
  flex-direction: column;
  `;