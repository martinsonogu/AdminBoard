import React from 'react';
import "./UserList.css";
import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { userRows } from '../../../dummyData';
import { Link } from 'react-router-dom';
import{DeleteOutline} from "@mui/icons-material";



const UserList = () => {
    const[data, setData] = useState(userRows);

    const handleDelete = (id) => {
        setData(data.filter(item=>item.id !== id));

    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'user', headerName: 'User', width: 200, renderCell: (params)=>{
            return(
            <div className='userListUser'>
                <img src={params.row.avatar} className="userListImg" alt="" />
                {params.row.username}
            </div>
            )
        }},
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'status', headerName: 'Status', width: 120,},
        { field: 'transaction', headerName: 'Transaction Volume', width: 160,},
        { field: 'action', headerName: 'Action', width: 150, renderCell: (params)=>{
            return( 
                <div className='btn'>
                    <Link to={"/users/"+params.row.id}>
                        <button className='userListEdit'>Edit</button>
                    </Link>
                    <DeleteOutline className='userListDelete' onClick={() => handleDelete(params.row.id)}/>
            </div>
            )
        }},
      ];
      

  return (
    <div className='userList'>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}  
        disableSelectionOnClick
        checkboxSelection
      />
    </div>
  )
}

export default UserList
