import React from 'react';
import "./ProductList.css";
import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { productRows } from '../../../dummyData';
import { Link } from 'react-router-dom';
import{DeleteOutline} from "@mui/icons-material";

const ProductList = () => {
    const [data, setData] = useState(productRows);

    const handleDelete = (id) => {
        setData(data.filter(item=>item.id !== id));

    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'product', headerName: 'Product', width: 200, renderCell: (params)=>{
            return(
            <div className='ProductListItem'>
                <img src={params.row.img} className="productListImg" alt="" />
                {params.row.name}
            </div>
            )
        }},
        { field: 'stock', headerName: 'Stock', width: 200 },
        { field: 'status', headerName: 'Status', width: 120,},
        { field: 'price', headerName: 'Price', width: 160,},
        { field: 'action', headerName: 'Action', width: 150, renderCell: (params)=>{
            return( 
                <div className='btn'>
                    <Link to={"/product/"+params.row.id}>
                        <button className='productListEdit'>Edit</button>
                    </Link>
                    <DeleteOutline className='productListDelete' onClick={() => handleDelete(params.row.id)}/>
            </div>
            )
        }},
      ];
      


  return (
    <div className='productList'>
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

export default ProductList
