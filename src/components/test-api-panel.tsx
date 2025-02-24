import React from 'react'
import * as styles from './test-api-panel.module.css'
import { connect } from '../backend/api'

const TestApiPanel = () => {
  const [ xml, setXml ] = React.useState('')

  const onConnect = async () => {
    const data = await connect('')
    setXml(data.data)
  }

  return (
    <div className='border-2 m-2 flex flex-col'>
      <button 
        className={`${styles.runbutton}`}
        onClick={onConnect}
      >Run</button>
      <textarea 
        className={`${styles.textarea}`}
        value={xml}
      ></textarea>
    </div>
  )
}

export default TestApiPanel