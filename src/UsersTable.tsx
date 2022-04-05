import MaterialTable, { Column } from "@material-table/core";

interface IPerson {
  Name: string;
  userName: string;
  Email: string;
  Phone: string;
}

const columns: Array<Column<IPerson>> = [
  { title: "Name", field: "Name" },
  { title: "User Name", field: "userName" },
  { title: "Email", field: "Email" },
  { title: "Phone", field: "Phone" },
];

const data: Array<IPerson> = [
  {
    Name: "Tod",
    userName: "Miles",
    Email: "test@test.com",
    Phone: "9999999999",
  },
  {
    Name: "Tod1",
    userName: "Miles Morales",
    Email: "test@test.com",
    Phone: "9999999999",
  },
];

function UsersTable() {
  return (
    <MaterialTable
      title="Users List"
      columns={columns}
      data={data}
      options={{
        filtering: false,
        draggable: false,
        sorting: false,
        emptyRowsWhenPaging: false,
        pageSizeOptions: [],
        pageSize: 10,
      }}
    />
  );
}

export default UsersTable;
