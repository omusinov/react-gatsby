import React, { useState, useRef } from 'react'
import { TextField, Tooltip, IconButton, InputAdornment, Popper, ClickAwayListener } from '@mui/material'
import EventIcon from '@mui/icons-material/Event'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Keyword } from '../../interfaces'

interface DatePickerProps {
  className?: string
  item: Keyword
  index: string
  onDateSelection: (date: Date, item: Keyword) => void
  onDateInputChange: (e: any, item: Keyword) => void
}

const CustomDatePicker = (props: DatePickerProps) => {
  const { className, item, index, onDateSelection, onDateInputChange } = props
  const [calendarStates, setCalendarStates] = useState<{ isOpen: boolean; anchorEl: HTMLElement | null }>({isOpen: false, anchorEl: null})
  const datePickerRef = useRef<HTMLDivElement>(null);

  const openCalendar = (event: React.MouseEvent<HTMLElement>) => {
    setCalendarStates({ isOpen: true, anchorEl: event.currentTarget })
};

  const closeCalendar = () => {
    setCalendarStates({ isOpen: true, anchorEl: null })
  }

  const isValidDate = (value: string) => {
    const date = new Date(value)
    return !isNaN(date.getTime())
  }

  return (
    <div className={`flex flex-row ml-16`}>
      <TextField
        variant="outlined"
        className={`${className}`}
        size="small"
        margin="dense"
        label={item.name}
        value={item.value || ''}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onDateInputChange(e, item)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={(e) => openCalendar(e)}
                size="small"
              >
                <EventIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Popper
        open={calendarStates.isOpen || false}
        anchorEl={calendarStates.anchorEl || null}
        placement="bottom-start"
      >
        <ClickAwayListener onClickAway={(e) => {
          if (datePickerRef.current && datePickerRef.current.contains(e.target as Node)) {
            return;
          }
          closeCalendar();
        }}>
          <div ref={datePickerRef}>
            <DatePicker
              selected={ isValidDate(item.value || '') ? new Date(item.value) : null }
              onChange={(date: Date) => onDateSelection(date, item)}
              inline
              showMonthDropdown
              showYearDropdown
              peekNextMonth
              popperPlacement="left"
              dropdownMode="select"
            />
          </div>
        </ClickAwayListener>
      </Popper>
    </div>
  )
}

export default CustomDatePicker