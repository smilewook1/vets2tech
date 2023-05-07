import React, {useState, useEffect, useCallback} from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import { Snackbar, IconButton, Checkbox, Button, Box, TablePagination, Tooltip, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar } from '@mui/material';
import axios from 'axios';
import MuiAlert from '@mui/material/Alert';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import SearchBar from '../components/SearchBar';

    const headCells = [
        {
          id: 'id',
          numeric: false,
          disablePadding: true,
          label: 'ID',
        },
        {
          id: 'fname',
          numeric: true,
          disablePadding: false,
          label: 'FIRST NAME',
        },
        {
          id: 'lname',
          numeric: true,
          disablePadding: false,
          label: 'LAST NAME',
        },
        {
          id: 'email',
          numeric: true,
          disablePadding: false,
          label: 'EMAIL',
        },
        {
          id: 'pwd',
          numeric: true,
          disablePadding: false,
          label: 'PASSWORD',
        },
    ]
    
    const DEFAULT_ROWS_PER_PAGE = 5
    
    function EnhancedTableHead(props) {
    const { onSelectAllClick, numSelected, rowCount } =
        props
    
    return (
        <TableHead>
        <TableRow>
            <TableCell padding="checkbox">
            <Checkbox
                color="primary"
                indeterminate={numSelected > 0 && numSelected < rowCount}
                checked={rowCount > 0 && numSelected === rowCount}
                onChange={onSelectAllClick}
                inputProps={{
                'aria-label': 'select all desserts',
                }}
            />
            </TableCell>
            {headCells.map((headCell) => (
            <TableCell
                key={headCell.id}
                align={headCell.numeric ? 'right' : 'left'}
                padding={headCell.disablePadding ? 'none' : 'normal'}
            >
                {headCell.label}
            </TableCell>
            ))}
        </TableRow>
        </TableHead>
    )
    }
    
    EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    rowCount: PropTypes.number.isRequired,
    }
    
    function EnhancedTableToolbar(props) {
    const { selected, numSelected, setSearchResults, deleteData, addData } = props
    
    return (
        <Toolbar
        sx={{justifyContent: "space-between", bgcolor: 'text.secondary',
            pl: { sm: 2 },
            pr: { xs: 1, sm: 1 },
            ...(numSelected > 0 && {
            bgcolor: (theme) =>
                alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
            }),
        }}
        >
        {numSelected > 0 ? (
            <Typography
            sx={{ flex: '1 1 100%' }}
            color="inherit"
            variant="subtitle1"
            component="div"
            >
            {numSelected} SELECTED
            </Typography>
        ) : (
            <>
            <Button href='/dash'>
                <KeyboardBackspaceIcon sx={{ color: 'white' }}/>
            </Button>
            <SearchBar onSearch={setSearchResults}/>
            </>
        )}
        
        {numSelected === 1 ? (
        <>
            <Tooltip title="Approve">
                <IconButton onClick={() => addData(selected)}>
                <CheckIcon />
                </IconButton>
            </Tooltip>
        </>
        ) : (
            null
        )}
 
        {numSelected > 0 ? (
        <>
            <Tooltip title="Delete">
            <IconButton onClick={() => deleteData(selected)}>
                <DeleteIcon />
            </IconButton>
            </Tooltip>
        </>
        ) : (
            null
        )}
        </Toolbar>
    )
    }
    
    EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
    }
  
const StdApprove = () => {
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });
    
    const [data, setData] = useState([]);
    const [mod, setMod] = useState('');
    const [barOpen, setBarOpen] = useState(false);
    const handleBarClose = () => setBarOpen(false);
   
    const[lastname, setLastname] = useState('')
    const[firstname, setFirstname] = useState('')
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')

    const [searchResults, setSearchResults] = React.useState([])
    const [selected, setSelected] = React.useState([])
    const [page, setPage] = React.useState(0)
    const [rowsPerPage, setRowsPerPage] = React.useState(DEFAULT_ROWS_PER_PAGE)
    const [paddingHeight, setPaddingHeight] = React.useState(0)
    
    const setBar = (mod) => {
        return (
          <Snackbar open={barOpen} autoHideDuration={6000} onClose={handleBarClose}>
            <Alert onClose={handleBarClose} severity="success" sx={{ width: '100%' }}>
              Successfully {mod}!
            </Alert>
          </Snackbar>
        );
    };
    
    useEffect(()=>{
          getData()
    },[])
      
    const getData = () =>{
          axios.get("https://localhost:44439/api/studentapproval")
          .then((result)=>{
            setData(result.data)
          })
          .catch((error)=>{
            console.log(error)
          })    
    }
  
    const handleDelete = (selected) => {
          if (window.confirm("Are you sure?") === true) {
              axios.delete(`https://localhost:44439/api/studentapproval?id=${selected.join('&id=')}`)
                  .then((result) => {
                      if (result.status === 200) {
                          console.log(`Deleted`)
                          getData()
                          setBarOpen(true)
                          setMod('Deleted')
                          setSelected([])
                      }
                  })
                  .catch((error) => {
                      console.log(error)
                  })
          }
    };
    
    const handleAdd = (selected) => {
        const url = `https://localhost:44439/api/student`
        const data = {
            "firstName": firstname,
            "lastName": lastname,
            "email": email,
            "passwordHash": password
        }
        
        axios.post(url, data)
          .then((result)=>{
            

            axios.delete(`https://localhost:44439/api/studentapproval/${selected}`)
                  .then((result) => {
                      if (result.status === 200) {
                        console.log('Added')
                        setBarOpen(true)
                        setMod('Added')
                          getData()
                      }
                  })
                  .catch((error) => {
                      console.log(error)
                  })
          })
          .catch((error) => {
            console.log(error)
          })
      }

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
        const newSelected = data.map((n) => n.internalId)
        setSelected(newSelected)
        return
        }
        setSelected([])
    }

    const handleClick = (event, id) => {
        const selectedIndex = selected.indexOf(id)
        let newSelected = []

        if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, id)
        } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selected.slice(1))
        } else if (selectedIndex === selected.length - 1) {
        newSelected = newSelected.concat(selected.slice(0, -1))
        } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(
            selected.slice(0, selectedIndex),
            selected.slice(selectedIndex + 1),
        )
        }
        console.log(newSelected)
        setSelected(newSelected)

        axios.get(`https://localhost:44439/api/studentapproval/${id}`)
            .then((result)=>{
                setFirstname(result.data.studentFirstname)
                setLastname(result.data.studentLastname)
                setEmail(result.data.studentEmail)
                setPassword(result.data.studentPassword)
            })
            .catch((error)=>{
                console.log(error)
            })
    }

    const handleChangePage = useCallback(
        (event, newPage) => {
        setPage(newPage)

        const numEmptyRows =
            newPage > 0 ? Math.max(0, (1 + newPage) * rowsPerPage - data.length) : 0

        setPaddingHeight(numEmptyRows)
        }, [data.length, rowsPerPage]
    )

    const handleChangeRowsPerPage = useCallback(
        (event) => {
        const updatedRowsPerPage = parseInt(event.target.value, 10);
        setRowsPerPage(updatedRowsPerPage)

        setPage(0)

        const numEmptyRows =
        0 > 0
          ? Math.max(0, (1 + 0) * updatedRowsPerPage - data.length)
          : 0;

        setPaddingHeight(numEmptyRows)
        }, [data.length]
    )
    useEffect(() => {
        const numEmptyRows =
          page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;
      
        setPaddingHeight(numEmptyRows);
      }, [data.length, page, rowsPerPage]);
    const isSelected = (id) => selected.indexOf(id) !== -1

    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2 }}>
                <EnhancedTableToolbar selected={selected} numSelected={selected.length} setSearchResults={setSearchResults}  deleteData={handleDelete} addData={handleAdd}/>

                <TableContainer>
                    <Table
                        sx={{ minWidth: 750 }}
                        aria-labelledby="tableTitle"
                    >
                        <EnhancedTableHead
                        numSelected={selected.length}
                        onSelectAllClick={handleSelectAllClick}
                        rowCount={data.length}
                        />

                        <TableBody>
                        {(rowsPerPage > 0 && data.length > 0 
                        ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        : rowsPerPage === 0 ? null : data
                        )
                        .filter((index) => {
                            return (searchResults === '' 
                            ? index
                            : index.firstName.toLowerCase().includes(searchResults)
                            || index.lastName.toLowerCase().includes(searchResults)
                            )} 
                        )
                        .map((row, index) => {
                                const isItemSelected = isSelected(row.internalId)
                                const labelId = `enhanced-table-checkbox-${index}`

                                return (
                                <TableRow
                                    hover
                                    onClick={(event) => handleClick(event, row.internalId)}
                                    role="checkbox"
                                    aria-checked={isItemSelected}
                                    tabIndex={-1}
                                    key={row.internalId}
                                    selected={isItemSelected}
                                    sx={{ cursor: 'pointer' }}
                                >
                                    <TableCell padding="checkbox">
                                    <Checkbox
                                        color="primary"
                                        checked={isItemSelected}
                                        inputProps={{
                                        'aria-labelledby': labelId,
                                        }}
                                    />
                                    </TableCell>

                                    <TableCell
                                    component="th"
                                    id={labelId}
                                    scope="row"
                                    padding="none"
                                    >
                                    {row.internalId}
                                    </TableCell>

                                    <TableCell align="right">{row.studentFirstname}</TableCell>
                                    <TableCell align="right">{row.studentLastname}</TableCell>
                                    <TableCell align="right">{row.studentEmail}</TableCell>
                                    <TableCell align="right">{row.studentPassword}</TableCell>
                                </TableRow>
                                )
                            })}

                        {paddingHeight > 0 && (
                            <TableRow
                            style={{
                                height: paddingHeight,
                            }}
                            >
                            <TableCell colSpan={6} />
                            </TableRow>
                        )}
                        </TableBody>
                    </Table>
                </TableContainer>
                        
                <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        {setBar(mod)}
        </Box>
    
    );
};
  
  export default StdApprove;
