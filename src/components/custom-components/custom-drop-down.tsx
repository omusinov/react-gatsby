import React, { useState } from 'react'
import { Autocomplete, TextField, Tooltip, IconButton } from '@mui/material'
import { Keyword, autofillData } from '../../interfaces'
import AddIcon from '@mui/icons-material/Add'
import PostAddIcon from '@mui/icons-material/PostAdd';

interface DropDownProps {
  className?: string
  item: Keyword
  index: string
  onValueChange: (event: React.ChangeEvent<HTMLInputElement>, value: any, item: Keyword) => void
  onAddDuplicate: (item: Keyword) => void
}

const CustomDropDown = (props: DropDownProps) => {
  const { className, item, index, onValueChange, onAddDuplicate } = props
  const [list, setList] = useState([])

  const handleOpen = (item: Keyword) => {
    setList(autofillData)
  }

  return (
    <div className={`flex flex-row ml-16`}>
      <Autocomplete 
        className={`${className}`}
        disablePortal
        options={list}
        value={item.value || ''}
        renderInput={(params) => <TextField {...params} label={item.name} size='small' value={item.value} />}
        onChange={(event: React.ChangeEvent<HTMLInputElement>, value) => onValueChange(event, value, item)}
        onOpen={() => handleOpen(item)}
      />

      <Tooltip title={'Add'} placement='bottom'>
        <IconButton onClick={() => onAddDuplicate(item)} color="primary" style={{ marginTop: '0px', marginLeft: '4px' }}>
          <AddIcon />
        </IconButton>
      </Tooltip>
    </div>
  )
}

export default CustomDropDown