import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import Head from 'next/head'
import PropTypes, { InferProps } from "prop-types";

import Button from '../src/components/Button'

import HomeStyled from './styled'

export default function Home({ message }: InferProps<typeof Home.propTypes>) {
  return (
    <HomeStyled>
      Hello
      <Button text="Button" onClick={() => alert("clicked")}/>
    </HomeStyled>
  )
}

Home.propTypes = {
  message: PropTypes.string
}

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      message: "hello"
    },
  }
}
