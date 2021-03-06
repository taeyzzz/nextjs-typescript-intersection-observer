import { useState, useCallback, useEffect, useRef } from 'react'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import Head from 'next/head'
import PropTypes, { InferProps } from "prop-types";
import faker from 'faker'
import { useSelector, useDispatch } from 'react-redux'

import type { ReducerState } from '../src/store/reducers'
import { People } from '../src/store/slices/application/types'

import { loadPeople } from '../src/store/thunk-actions/application'

import Button from '../src/components/Button/dynamic'
import ListCardWrapper from '../src/components/ListCardWrapper'
import Card from '../src/components/Card'

import HomeStyled from './styled'

export default function Home({ message }: InferProps<typeof Home.propTypes>) {
  const dispatch = useDispatch()
  const listPeople = useSelector((state: ReducerState) => state.application.listPeople)

  const handleFetchLoadPeople = useCallback(() => {
    dispatch(loadPeople())
  }, [dispatch])

  useEffect(() => {
    handleFetchLoadPeople()
  }, [])

  const handleAddMoreData = useCallback(() => {
    handleFetchLoadPeople()
  }, [handleFetchLoadPeople])

  return (
    <HomeStyled>
      {message}
      <Button text="Button" onClick={() => alert("clicked")}/>
      <ListCardWrapper onLoadMore={handleAddMoreData}>
        {
          listPeople.map((data: People) => {
            return (
              <Card
                key={data.id}
                img={data.img}
                name={data.name}
                description={data.description}
              />
            )
          })
        }
      </ListCardWrapper>
    </HomeStyled>
  )
}

Home.propTypes = {
  message: PropTypes.string
}

const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      message: "hello"
    },
  }
}
