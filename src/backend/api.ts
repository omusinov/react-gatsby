import axios from 'axios'
import { getConnectRequest } from './requests'

const url = 'https://agileinhouse.hylandcloud.com/app/241appserver/service.asmx?wsdl'
const datasource = 'ObAgileInHouse'
const username = 'SECDEVELOPER'
const password = 'Jupiter2'

export const connect = async (request: any): Promise<any> => {
  const xml = getConnectRequest(username, password, datasource)
  console.log(xml)
  const response = await axios.post(
    url,
    xml,
    {
      headers: {
        'Content-Type': 'text/xml',
        'x-hylandtypesflags': 1,
      }
    }
  )
  if (response.status < 300) {
    return response
  } else {
    return { status: response.status, statusText: response.statusText }
  }
  
}