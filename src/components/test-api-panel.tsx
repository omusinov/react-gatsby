import React from 'react'
import * as styles from './test-api-panel.module.css'
import { connect, getKeywords, getExpandDropDown, disconnect } from '../backend/api'

const TestApiPanel = () => {
  const [ xml, setXml ] = React.useState<any>('')

  const onConnect = async () => {
    const data = await connect('')
    setXml(data)
  }

  const onGetKeywords = async () => {
    const data = await getKeywords('')
    setXml(data)
  }

  const onGetDropDown = async () => {
    const data = await getExpandDropDown('')
    setXml(data)
  }

  return (
    <div className='border-2 m-2 flex flex-col'>
      <div className='flex flex-row'>
        <button 
          className={`${styles.connectbutton}`}
          onClick={onConnect}
        >Connect Object</button>

        <button 
          className={`${styles.keywordbutton}`}
          onClick={onGetKeywords}
        >Get Keywords</button>

        <button 
          className={`${styles.dropdownbutton}`}
          onClick={onGetDropDown}
        >Get Expanded DropDown</button>
      </div>
      <textarea 
        className={`${styles.textarea}`}
        value={JSON.stringify(xml)}
      ></textarea>
    </div>
  )
}

export default TestApiPanel