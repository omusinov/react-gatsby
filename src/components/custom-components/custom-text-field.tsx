import React from 'react'
import { Tooltip, IconButton, TextField } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import PostAddIcon from '@mui/icons-material/PostAdd';
import { Keyword } from '../../interfaces'

interface TextFieldProps {
  className?: string
  item: Keyword
  index: string
  onAddDuplicate: (item: Keyword) => void
  onChangeText: (event: React.ChangeEvent<HTMLInputElement>, item: Keyword) => void
  onAutofill: () => void
}

const CutomTextField = (props: TextFieldProps) => {
  const { item, className, index, onAddDuplicate, onChangeText, onAutofill } = props
  return (
    <div key={item.id + index} className='flex flex-row ml-16'>
      <TextField
        className={`${className}`}
        value={item.value || ''}
        required={item.required === 'True'}
        id={'keyword' + item.id + index}
        size='small'
        variant='outlined'
        label={item.name /* + '\u00A0' + '\u00A0'*/}
        type={'text'}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChangeText(event, item)}
      />

      <Tooltip title={'Add'} placement='bottom'>
        <IconButton onClick={() => onAddDuplicate(item)} color="primary" style={{ marginTop: '0px', marginLeft: '4px' }}>
          <AddIcon />
        </IconButton>
      </Tooltip>
      {
        (item.id === '2' || item.id === '5') && item.index === '' ?
          (
            <Tooltip title={'Auto Fill'} placement='bottom'>
              <IconButton onClick={onAutofill} color="primary" style={{ marginTop: '0px' }}>
                <PostAddIcon />
              </IconButton>
            </Tooltip>
          )
          : <div></div>
      }
    </div>
  )
}

export default CutomTextField