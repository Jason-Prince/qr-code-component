'use client'
import styled from 'styled-components'
import qr from '/public/image-qr-code.png'
import Image from 'next/image'

const Main = styled.main`
  box-sizing: border-box;
  display: grid;
  justify-content: center;
  align-content: center;
  min-height: 100vh;
  background-color: #d5e1ef;
  gap: 3rem;
`
const Card = styled.div`
  display: grid;
  width: 320px;
  height: 497px;
  background-color: #ffffff;
  border-radius: 1.25rem;
  box-shadow: 0px 25px 25px rgba(0, 0, 0, 0.0476518);
`
const CardImage = styled.div`
  display: grid;
  place-items: center;
`
const CardText = styled.div`
  width: 18rem;
  height: 8.0625rem;
  display: grid;
  justify-self: center;
  text-align: center;
  gap: 20px;
`
const CardHeader = styled.h2`
  color: #1f314f;
  font-size: 1.375rem;
  font-weight: 700;
  line-height: 1.7325rem;
`
const CardSubheader = styled.p`
  color: #7d889e;
  font-size: 0.9375rem;
  font-weight: 400;
  line-height: 1.1812rem;
  letter-spacing: 0.0119rem;
`
const Footer = styled.footer`
  text-align: center;
`

export default function Home() {
  return (
    <Main>
      <Card>
        <CardImage>
          <Image
            src={qr}
            alt="QR Code"
            width="288"
            height="288"
            className="rounded-corners"
          />
        </CardImage>
        <CardText>
          <CardHeader>
            Improve your front-end skills by building projects
          </CardHeader>
          <CardSubheader>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </CardSubheader>
        </CardText>
      </Card>
      <Footer>
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . <br />
        Coded by{' '}
        <a href="https://jason-prince.com/" target="_blank">
          Jason Prince
        </a>
        .
      </Footer>
    </Main>
  )
}
