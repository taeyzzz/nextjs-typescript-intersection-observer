import { useState, useCallback, useEffect, useRef } from 'react'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import Head from 'next/head'
import PropTypes, { InferProps } from "prop-types";
import faker from 'faker'

import Button from '../src/components/Button/dynamic'
import ListCardWrapper from '../src/components/ListCardWrapper'
import Card from '../src/components/Card'

import HomeStyled from './styled'

const createMockData = () => {
  return [...new Array(50)].map(_ => {
    return {
      id: faker.datatype.uuid(),
      name: faker.name.findName(),
      img: faker.internet.avatar(),
      description: faker.name.jobDescriptor()
    }
  })
}

export default function Home({ message }: InferProps<typeof Home.propTypes>) {
  const [listData, setListData] = useState(createMockData())

  const handleAddMoreData = useCallback(() => {
    setListData(prev => {
      return [...prev, ...createMockData()]
    })
  }, [setListData])

  return (
    <HomeStyled>
      {message}
      <Button text="Button" onClick={() => alert("clicked")}/>
      <ListCardWrapper onLoadMore={handleAddMoreData}>
        {
          listData.map((data) => {
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

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      message: "hello"
    },
  }
}
