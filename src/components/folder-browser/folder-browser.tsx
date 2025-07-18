import React from 'react'
import { Tree } from './tree'
export const FolderBrowser = ({data}) => {
  return (
    <div className='m-4'>
      <Tree data={data} />
    </div>
  )
}