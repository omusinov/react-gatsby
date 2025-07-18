import React, { useState } from 'react';
import { RichTreeView } from '@mui/x-tree-view/RichTreeView';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import RamenDiningOutlinedIcon from '@mui/icons-material/RamenDiningOutlined';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import { styled } from '@mui/material/styles';

const StyledTreeItem = styled(TreeItem)(({ theme }) => ({
  '& .MuiTreeItem-content': {
    // padding: '8px',
    // backgroundColor: 'lightblue',
    '&.Mui-selected': {
      backgroundColor: theme.palette.primary.main,
      // color: 'white',
    },
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
  },
  '& .MuiTreeItem-label': {
    fontWeight: 'bold',
  },
}));


const ITEMS = [
  {
    id: '0',
    label: '/',
    children: [
      {
        id: '1',
        label: 'Documents',
        children: [
          { id: '2', label: 'Company Policies' },
          { id: '3', label: 'Project Plans' },
          { id: '4', label: 'Reports', children: [{ id: '5', label: 'Quarterly Report' }] },
        ],
      },
      {
        id: '6',
        label: 'Images',
        children: [
          { id: '7', label: 'Vacation Photos' },
          { id: '8', label: 'Work Graphics' },
        ],
      }
    ]
  }
];

export const Tree = ({ data }) => {
  const [selected, setSelected] = useState('/')
  return (
    <RichTreeView 
      items={ITEMS}
      slots={{
        item: StyledTreeItem,
        collapseIcon: FolderOutlinedIcon,
        expandIcon: FolderOpenOutlinedIcon,
        endIcon: FolderOutlinedIcon
      }}
      multiSelect={false}
      selectedItems={selected}
    />
  );
}