import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { InputBase, alpha } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("")

  const fetchData = (event) => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) => {
        const result = json.filter((user) => {
            return (
                event &&
                user.name.toLowerCase().includes(event)
                
                )
        })
        
        onSearch(result)
    })
  }

  const handleChange = (event) => {
    setSearchTerm(event.target.value)
    fetchData(event.target.value)
  }

  return (
    <Search>
      <SearchIconWrapper>
          <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
          placeholder="Search..."
          inputProps={{ 'aria-label': 'search' }}
          value={searchTerm}
          onChange={handleChange}
      />
    </Search>
  );
}

export default SearchBar;