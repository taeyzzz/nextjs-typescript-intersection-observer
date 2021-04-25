import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import Head from 'next/head'
import PropTypes, { InferProps } from "prop-types";

import Button from '../src/components/Button'

import styles from '../styles/Home.module.css'

export default function Home({ message }: InferProps<typeof Home.propTypes>) {
  return (
    <div className={styles.container}>
      Hello
      <Button text="Button" onClick={() => alert("clicked")}/>
    </div>
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
