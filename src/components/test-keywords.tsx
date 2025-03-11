import React from 'react'
import { Typography, TextField } from '@mui/material'
import { Keyword } from '../interfaces'

interface KeywordProps {
  className?: string
  data: any[]
}
const TestKeywords = (props: KeywordProps) => {
  const { data, className } = props as KeywordProps
  return (
    <div className={`${className} border-2 m-2 flex flex-col`}>
      <Typography className='p-2' > Keywords </Typography>
      {
        data.length > 0 && data.map((item: Keyword, index: number) => {
          return (
            <TextField
              key={item.id}
            >

            </TextField>
          )
        })
      }
    </div>
  )
}

export default TestKeywords