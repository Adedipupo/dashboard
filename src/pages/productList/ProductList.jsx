import { DeleteOutline } from '@material-ui/icons';
import { DataGrid } from '@mui/x-data-grid';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { productRows } from '../../data';
import "./productlist.css";

export default function ProductList() {
    const [data,setData] = useState(productRows);
    const handleDelete = (id) => {
        setData(data.filter(item=> item.id !== id));
      }
      const columns = [
        { field: "id", headerName: "ID", width: 150 },
        { field: "name", headerName: "Name", width: 200, renderCell: (params)=>{
          return (
            <div className="userandimg">
              <img src={params.row.img} className="userlistimg" alt=""/>
              {params.row.name}
            </div>
          )
        } },
        { field: "stock", headerName: "Email", width: 200 },
        { field: "status", headerName: "Status", width: 150 },
        { field: "price", headerName: "Transaction", width: 200 },
        { field: "actions", headerName: "Actions", width: 200, renderCell: (params)=>{
          return (
            <>
            <Link to={"/user/"+params.row.id}>
             <button className="userlistbuttonedit">Edit</button>
            </Link>
             <DeleteOutline className="userlistbuttondelete" onClick={()=>handleDelete(params.row.id)}/>
            </>
          )
        } },
      ];
  return (
    <div className="productList">
           <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  )
}
