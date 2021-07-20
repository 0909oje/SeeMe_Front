import React from 'react'
import styled from 'styled-components'
import dust from '../../assets/Group 336.svg'
import standard from '../../assets/Dust_standard.svg'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 58%;
  margin-top: 15px;
`
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 12px;
  width: 100%;
  @media (min-width: 430px) and (max-width: 1440px) {
    //between
    justify-content: space-evenly;
  }
`
const CenterRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin-bottom: 20px;
`
const Styled = styled.div`
  background: ${props => props.color || 'black'};
  height: ${props => props.height || 50}px;
  width: 20px;
  margin-bottom: 5px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 16px;
`
const Text = styled.div`
  background: 'rgba( 255, 255, 255, 0 )';
  color: ${props => props.color || 'black'};
  font-size: ${props => props.size || 18}px;
  font-family: 'NotoSans';
  margin-right: 5px;
  text-align: center;
  @media (min-width: 430px) and (max-width: 1440px) {
    //between
    font-size: ${props => props.size - 10 || 18}px;
  }
`
const DustImage = styled.img`
  width: 206px;
  height: 35px;
  @media (min-width: 430px) and (max-width: 1440px) {
    //between
    width: 156px;
    height: 35px;
  }
`

function Dustinfo({ color, height, num, time }) {
  return (
    <Wrapper>
      <Row>
        <Text size="25"> 미세먼지 </Text>
        <Text size="25">초미세먼지 </Text>
      </Row>
      <Row>
        <Text size="60" color="#42A0F0">
          23
        </Text>
        <Text size="60" color="#42A0F0">
          15
        </Text>
      </Row>
      <Row>
        <DustImage src={standard} />
      </Row>
      <Row>
        <Text size="22" color="#222222">
          야외 활동을 즐겨보세요 !{' '}
        </Text>
      </Row>
    </Wrapper>
  )
}
export default Dustinfo
