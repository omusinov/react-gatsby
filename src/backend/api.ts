import axios from 'axios'
import convert, { ElementCompact } from 'xml-js'
import { getConnectRequest, getKeywordsRequest } from './requests'

const url = 'https://agileinhouse.hylandcloud.com/app/241appserver/service.asmx?wsdl'
const datasource = 'ObAgileInHouse'
const username = 'SECDEVELOPER'
const password = 'Jupiter2'
const sessionId = '8851aecb-7240-4674-b021-254919bdf7e6'
const docTypeId = '289'

const parseScanQueueObjects = (input: Array<any>) => {
	let res = []
	for (let i = 0; i < input.length; i++) {
		let obj = {}
		const item = input[i]
		const entries = Object.entries(item)
		entries.forEach(([key, value]) => {
			if (value && value['_text']) {
				obj = Object.assign(obj, { [key]: value['_text'] })
			} else if (value && typeof(value) === 'object') {
				const entries = Object.entries(value)
				entries.forEach(([subKey, subValue]) => {
					if (subKey === '_attributes') {
						obj = Object.assign(obj, { [key]: subValue })
					}
					if (subKey === 'ScanQueueDocumentType') {
						if (typeof(subValue) === 'object' && subValue['ID']) {
							obj = Object.assign(obj, { [key]: { ...obj['DocTypeList'], [subKey]: [subValue['ID']['_text']] }})
						} else if (typeof(subValue) === 'object' && Array.isArray(subValue)) {
							let dtArray = []
							subValue.forEach((value) => {
								const id = value['ID']['_text']
								dtArray.push(id)
							})
							obj = Object.assign(obj, { [key]: { ...obj['DocTypeList'], [subKey]: dtArray }})
						}
					}
				})
			}
		})
		res.push(obj)
	}
	return res
}

const parseDocTypeObjects = (input: Array<any>) => {
  let res = []
  if (input.length === 0) return []
  for (let i = 0; i < input.length; i++) {
    const items = input[i]
    const entries = Object.entries(items);
    let item = {}
    entries.forEach(([key, value]) => {
      item = Object.assign(item, { [key]: value['_text'] })
    });
    res.push(item)
  }
  return res
}

const parseDocTypeGroupObject = (input: Array<any>) => {
  let res = []
  if (input.length === 0) return []
  for (let i = 0; i < input.length; i++) {
    const items = input[i]
    const entries = Object.entries(items);
    let item = {}
    entries.forEach(([key, value]) => {
      item = Object.assign(item, { [key]: value['_text'] })
    });
    res.push(item)
  }
  return res
}

const parsedConnect = (xml: string) => {
  const json: Element | ElementCompact = convert.xml2js(xml, {compact: true})
  const body = json['soap:Envelope']['soap:Body']['ExecuteResponse']['ExecuteResult']['_text'];
  const jsonBody = convert.xml2js(body, {compact: true});
  const encodedArray = jsonBody['responseList']['response']['parameters']['parameter']

  let res = {}

  for (let i = 0; i < encodedArray.length; i++) {
    const key = decodeURIComponent(encodedArray[i].name['_text']).replaceAll('+', ' ')
    const value = decodeURIComponent(encodedArray[i].value['_text']).replaceAll('+', ' ')
    res = Object.assign(res, { [key]: value })
  }

  const js_doctTypes = convert.xml2js(res['docTypes'], { compact: true })
  const js_docTypeGroups = convert.xml2js(res['docTypeGroups'], { compact: true })
  const js_scanQueues = convert.xml2js(res['scanQueues'], { compact: true })
  const sessionId = res['sessionId']
  const connectionStatus = res['connectionStatus']
  const version = res['version']

  // extract document types and convert to normalized json
  const tmp_doctTypes = js_doctTypes['DocumentTypeCollection']['DocumentType']
  const doctTypes = parseDocTypeObjects(tmp_doctTypes)

  // extract document type groups and convert to normalized json
  const tmp_docTypeGoups = js_docTypeGroups['DocumentTypeGroupCollection']['DocumentTypeGroup']
  const docTypeGroups = parseDocTypeGroupObject(tmp_docTypeGoups)

  // extract scan queues and convert to normalized json
  const tmp_scanQueues = js_scanQueues['ScanQueueCollection']['ScanQueue']
  const scanQueues = parseScanQueueObjects(tmp_scanQueues)

  return {
    doctTypes,
    docTypeGroups,
    scanQueues,
    sessionId,
    connectionStatus,
    version
  }
}

const parsedKeywords = (xml: string) => {
  return xml
}

export const connect = async (request: any): Promise<any> => {
  const xml = getConnectRequest(username, password, datasource)
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
  
  const res = parsedConnect(response.data)

  if (response.status < 300) {
    return res
  } else {
    return { status: response.status, statusText: response.statusText }
  }
}

export const getKeywords = async (request: any) => {
  const xml = getKeywordsRequest(sessionId, docTypeId)
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
  console.log(response.data)
  const res = parsedKeywords(response.data)

  if (response.status < 300) {
    return res
  } else {
    return { status: response.status, statusText: response.statusText }
  }
}