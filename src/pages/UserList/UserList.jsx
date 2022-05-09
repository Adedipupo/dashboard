import "./userList.css";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "username", headerName: "Username", width: 130 },
  { field: "avatar", headerName: "Avatar", width: 130 },
  { field: "email", headerName: "Email", width: 130 },
  { field: "status", headerName: "Status", width: 90 },
  { field: "transaction", headerName: "Transaction", width: 90 },
];

const rows = [
  {
    id: 1,
    username: "Jon Snow",
    avatar:
      "https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png",
    email: "Jon@gmail.com",
    status: "active",
    transaction: "$120.00",
  },
  {
    id: 2,
    username: "Jon Snow",
    avatar:
      "https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png",
    email: "Jon@gmail.com",
    status: "active",
    transaction: "$120.00",
  },
  {
    id: 3,
    username: "Jon Snow",
    avatar:
      "https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png",
    email: "Jon@gmail.com",
    status: "active",
    transaction: "$120.00",
  },
  {
    id: 4,
    username: "Jon Snow",
    avatar:
      "https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png",
    email: "Jon@gmail.com",
    status: "active",
    transaction: "$120.00",
  },
  {
    id: 5,
    username: "Jon Snow",
    avatar:
      "https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png",
    email: "Jon@gmail.com",
    status: "active",
    transaction: "$120.00",
  },
  {
    id: 6,
    username: "Jon Snow",
    avatar:
      "https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png",
    email: "Jon@gmail.com",
    status: "active",
    transaction: "$120.00",
  },
  {
    id: 7,
    username: "Jon Snow",
    avatar:
      "https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png",
    email: "Jon@gmail.com",
    status: "active",
    transaction: "$120.00",
  },
  {
    id: 8,
    username: "Jon Snow",
    avatar:
      "https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png",
    email: "Jon@gmail.com",
    status: "active",
    transaction: "$120.00",
  },
  {
    id: 9,
    username: "Jon Snow",
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
