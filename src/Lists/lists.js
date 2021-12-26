import * as React from "react";
import {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import {
  DataGrid,
  GridToolbarDensitySelector,
  GridToolbarFilterButton
} from "@mui/x-data-grid";
import setRewardsArrObjects from '../Store/actions/setRewardsArrObjects';
import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
import Rewards from "../Data/Data"

function escapeRegExp(value) {
  return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

function QuickSearchToolbar(props) {
  return (
    <Box
      sx={{
        p: 0.5,
        pb: 0,
        justifyContent: "space-between",
        display: "flex",
        alignItems: "flex-start",
        flexWrap: "wrap"
      }}
    >
      <div>
        <GridToolbarFilterButton />
        <GridToolbarDensitySelector />
      </div>
      <TextField
        variant="standard"
        value={props.value}
        onChange={props.onChange}
        placeholder="Search…"
        InputProps={{
          startAdornment: <SearchIcon fontSize="small" />,
          endAdornment: (
            <IconButton
              title="Clear"
              aria-label="Clear"
              size="small"
              style={{ visibility: props.value ? "visible" : "hidden" }}
              onClick={props.clearSearch}
            >
              <ClearIcon fontSize="small" />
            </IconButton>
          )
        }}
        sx={{
          width: {
            xs: 1,
            sm: "auto"
          },
          m: (theme) => theme.spacing(1, 0.5, 1.5),
          "& .MuiSvgIcon-root": {
            mr: 0.5
          },
          "& .MuiInput-underline:before": {
            borderBottom: 1,
            borderColor: "divider"
          }
        }}
      />
    </Box>
  );
}

QuickSearchToolbar.propTypes = {
  clearSearch: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default function QuickFilteringGrid() {


  const columns = [
     {field: 'id', headerName: 'ID', editable: true},
     //{field: 'user', headerName: 'user', width: 200, editable: true},
     {field: 'experience', headerName: 'experience', width: 200, editable: true},
     {field: 'date', headerName: 'date', width: 200, editable: true},
     {field: 'status', headerName: 'status', width: 200, editable: true},

  ]
 
   const [rows, setRows] = useState(Rewards)  //change to useState([]) if You fetching data from a webserver using url

   useEffect(() => {
     fetch('url')    //Use your url here for fetching data.js     demoData: https://jsonplaceholder.typicode.com/posts   
      .then((data) => data.json())
      .then((data) => console.log('fetch data json:', data.json()))
      .then((data) => setRows(data))
   })

  let arrayUniqueByKeyStatus = [...new Map(Rewards
    .map(item => [item['status'], item])).values()]  //we select objects with unique statuses
    ?.map(item => item.status);                      //we select only statuses from these objects
  
  console.log('arrayUniqueByKeyStatus:', arrayUniqueByKeyStatus);

  let arrayUniqueByKeyID = [...new Map(Rewards
    .map(item => [item['status'], item])).values()]  //we select objects with unique statuses
    ?.map(item => item.id);                      //we select only statuses from these objects
  
  console.log('arrayUniqueByKeyID:', arrayUniqueByKeyID);
 
  
  const [value1] = React.useState(0);
  const dispatch = useDispatch([]);
  const handleSelect = (value1) => {
    dispatch(setRewardsArrObjects([value1]));
  };
  handleSelect(arrayUniqueByKeyStatus)

  let unfilteredRows = Rewards;
  const [searchText, setSearchText] = React.useState("");

  const requestSearch = (searchValue) => {
    setSearchText(searchValue);
    const searchRegex = new RegExp(escapeRegExp(searchValue), "i");
    const filteredRows = rows.filter((row) => { 
      return Object.keys(row).some((field) => {
        return searchRegex.test(row[field].toString());
      });
    });
    setRows(filteredRows) == undefined ? setRows(filteredRows) : setRows(unfilteredRows)
    console.log('filteredRows', filteredRows);
    console.log('rows', rows);
  };

  React.useEffect(() => {
    setRows(rows);
  }, [rows]); 

  return (
    <Box sx={{ height: 850, width: 1 }}>
      <DataGrid
        components={{ Toolbar: QuickSearchToolbar }}
        rows={rows}
        columns={columns}
        componentsProps={{
          toolbar: {
            value: searchText,
            onChange: (event) => requestSearch(event.target.value),
            clearSearch: () => requestSearch("")
          }
        }}
      />
    </Box>
  );
}

