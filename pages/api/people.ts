import type { NextApiRequest, NextApiResponse } from 'next'
import faker from 'faker'

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

function handleGet(req: NextApiRequest, res: NextApiResponse){
  const listPeople = createMockData()
  res.json(listPeople)
}

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req
  switch (method) {
    case 'GET':
      return handleGet(req, res)
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
