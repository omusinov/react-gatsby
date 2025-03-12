export interface Keyword {
  id: string
  name: string
  required: string
  value?: any
  index?: string
  dropdown: string
  datatype: string
}

// export const keywordsData: Keyword[] = [
//   {id: '1', name: 'one', required: 'True', value: '', index: '',},
//   {id: '2', name: 'two', required: 'True', value: '', index: '',},
//   {id: '3', name: 'three', required: 'False', value: '', index: '',},
//   {id: '4', name: 'four', required: 'False', value: '', index: '',},
//   {id: '5', name: 'five', required: 'False', value: '', index: '',},
//   {id: '6', name: 'six', required: 'False', value: '', index: '',},
//   {id: '7', name: 'seven', required: 'False', value: '', index: '',},
//   {id: '8', name: 'eight', required: 'False', value: '', index: '',},
//   {id: '9', name: 'nine', required: 'False', value: '', index: '',},
// ]

export const keywordsData: Keyword[] = [
  {id: '1', name: 'one', required: 'True', dropdown: 'False', datatype: '1' },
  {id: '2', name: 'two', required: 'True', dropdown: 'False', datatype: '2' },
  {id: '3', name: 'three', required: 'False', dropdown: 'False', datatype: '1' },
  {id: '4', name: 'four', required: 'False', dropdown: 'False', datatype: '1' },
  {id: '5', name: 'five', required: 'False', dropdown: 'False', datatype: '1' },
  {id: '6', name: 'six', required: 'False', dropdown: 'True', datatype: '1' },
  {id: '7', name: 'seven', required: 'False', dropdown: 'True', datatype: '4' },
  {id: '8', name: 'eight', required: 'False', dropdown: 'False', datatype: '1' },
  {id: '9', name: 'nine', required: 'False', dropdown: 'False', datatype: '1' },
]