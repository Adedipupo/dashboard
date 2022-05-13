import "./userList.css";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "user", headerName: "User", width: 200, renderCell: (params)=>{
    return (
      <div className="userandimg">
        <img src={params.row.avatar} className="userlistimg" alt=""/>
        {params.row.user}
      </div>
    )
  } },
  { field: "email", headerName: "Email", width: 130 },
  { field: "status", headerName: "Status", width: 120 },
  { field: "transaction", headerName: "Transaction", width: 160 }
];

const rows = [
  {
    id: 1,
    user: "Jon Snow",
    avatar:
      "https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png",
    email: "Jon@gmail.com",
    status: "active",
    transaction: "$120.00",
  },
  {
    id: 2,
    user: "Jon Snow",
    avatar:
      "https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png",
    email: "Jon@gmail.com",
    status: "active",
    transaction: "$120.00",
  },
  {
    id: 3,
    user: "Jon Snow",
    avatar:
      "https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png",
    email: "Jon@gmail.com",
    status: "active",
    transaction: "$120.00",
  },
  {
    id: 4,
    user: "Jon Snow",
    avatar:
      "https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png",
    email: "Jon@gmail.com",
    status: "active",
    transaction: "$120.00",
  },
  {
    id: 5,
    user: "Jon Snow",
    avatar:
      "https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png",
    email: "Jon@gmail.com",
    status: "active",
    transaction: "$120.00",
  },
  {
    id: 6,
    user: "Jon Snow",
    avatar:
      "https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png",
    email: "Jon@gmail.com",
    status: "active",
    transaction: "$120.00",
  },
  {
    id: 7,
    user: "Jon Snow",
    avatar:
      "https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png",
    email: "Jon@gmail.com",
    status: "active",
    transaction: "$120.00",
  },
  {
    id: 8,
    user: "Jon Snow",
    avatar:
      "https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png",
    email: "Jon@gmail.com",
    status: "active",
    transaction: "$120.00",
  },
  {
    id: 9,
    user: "Jon Snow",
    avatar:
      "https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png",
    email: "Jon@gmail.com",
    status: "active",
    transaction: "$120.00",
  },
];

export default function UserList() {
  return (
    <div className="userList">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
