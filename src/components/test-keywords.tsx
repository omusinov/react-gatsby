import React, { useEffect, useState } from 'react'
import { Tooltip, IconButton, TextField, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { Keyword } from '../interfaces'
import CutomTextField from './custom-components/custom-text-field'
import CustomDropDown from './custom-components/custom-drop-down'
import CustomDatePicker from './custom-components/custom-date-picker'

interface KeywordProps {
  className?: string
  data: Keyword[]
}
const TestKeywords = (props: KeywordProps) => {
  const { data, className } = props as KeywordProps
  const [keywords, setKeywords] = useState(data || [])

  const handleResetKeywords = () => {
    let newKeywords = [...keywords]
    newKeywords = newKeywords.filter((k) => {
      if (!k.index || k.index === '') {
        k.value = ''
        return k
      }
    })
    console.log('reset:', newKeywords)
    setKeywords(newKeywords)
  }

  const addDuplicate = (item: Keyword) => {
    const newKeywords = [...keywords]
    let newIndex = 0
    let newItem: any = {}

    newKeywords.forEach((element, index) => {
      if (element.id === item.id) {
        newIndex = index + 1
      }
    })

    newItem = { ...item, value: '', index: newIndex.toString() }
    console.log('newKeywords:', [...newKeywords.slice(0, newIndex), newItem, ...newKeywords.slice(newIndex)])
    setKeywords(
      [...newKeywords.slice(0, newIndex), newItem, ...newKeywords.slice(newIndex)]
    )
  }

  const handleChangeText = (event: React.ChangeEvent<HTMLInputElement>, item: Keyword) => {
    const value = event.target.value
    const newKeywords = keywords.map((keyword: Keyword) => {
      if (keyword.id === item.id && (keyword.index === item.index || (!keyword.index && !item.index))) {
        keyword.value = value
        return keyword
      } else {
        return keyword
      }
    })
    console.log(newKeywords)
    setKeywords(newKeywords)
  }

  const handleAutofill = () => {

  }

  const handleDropDownChange = (event: React.ChangeEvent<HTMLInputElement>, value: any, item: Keyword) => {
    const newKeywords = keywords.map((keyword: Keyword) => {
      if (keyword.id === item.id && (keyword.index === item.index || (!keyword.index && !item.index))) {
        keyword.value = value && value.label ? value.label : ''
        return keyword
      } else {
        return keyword
      }
    })
    console.log(newKeywords)
    setKeywords(newKeywords)
  }

  const handleDateSelection = (date: Date, item: Keyword) => {
    // const newKeywords = keywords.map((keyword: Keyword) => {
    //   if (keyword.id === item.id && (keyword.index === item.index || (!keyword.index && !item.index))) {
    //     keyword.value = date ? date.toISOString() : ''
    //     return keyword
    //   } else {
    //     return keyword
    //   }
    // })
    // console.log(newKeywords)
    // setKeywords(newKeywords)
  }

  const handleDateInputChange = (event: React.ChangeEvent<HTMLInputElement>, item: Keyword) => {
    const value = event.target.value
    const newKeywords = keywords.map((keyword: Keyword) => {
      if (keyword.id === item.id && (keyword.index === item.index || (!keyword.index && !item.index))) {
        keyword.value = value ? value : ''
        return keyword
      } else {
        return keyword
      }
    })
    console.log(newKeywords)
    setKeywords(newKeywords)
  }

  return (
    <div className={`${className} border-2 rounded-2 m-2 flex flex-col`}>
      <div className='flex flex-row ml-16 mt-4 mb-2'>
        <Button
          className='w-48'
          variant='contained'
          color={'primary'}
          onClick={handleResetKeywords}
        >Reset Keywords</Button>
      </div>
      
      {
        keywords.length > 0 && keywords.map((item: Keyword, index: number) => {
          if (item.dropdown === 'False' && item.datatype === '1') {
            return (
              <CutomTextField 
                key={item.id + index}
                className='w-72 my-2'
                item={item}
                index={index.toString()}
                onAddDuplicate={addDuplicate}
                onChangeText={handleChangeText}
                onAutofill={handleAutofill}
              />
            )
          } 
          if (item.dropdown === 'False' && item.datatype === '4') {
            return (
              <CustomDatePicker
                key={item.id + index}
                className='w-72 my-2'
                item={item}
                index={index.toString()}
                onDateSelection={(date: Date) => handleDateSelection(date, item)}
                onDateInputChange={(e) => handleDateInputChange(e, item)}
              />
            )
          }
          if (item.dropdown === 'True') {
            return (
              <CustomDropDown 
                key={item.id + index}
                className='w-72 my-2'
                item={item}
                index={index.toString()}
                onValueChange={(event: React.ChangeEvent<HTMLInputElement>, value, item) => handleDropDownChange(event, value, item)}
                onAddDuplicate={() => addDuplicate(item)}
              />
            )
          }

        })
      }
    </div>
  )
}

export default TestKeywords