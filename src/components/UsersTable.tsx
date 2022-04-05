import MaterialTable, { Column } from "@material-table/core";
import { Box, Typography } from "@material-ui/core";
import { useUsersList } from "../hooks/useUsersList";
import { IUser } from "../types";

const cellStyle = {
  padding: "8px 6px",
  width: "120px",
};

const columns: Column<IUser>[] = [
  {
    title: "Name",
    field: "name",
    cellStyle,
  },
  { title: "User Name", field: "username", cellStyle },
  { title: "Email", field: "email", cellStyle },
  { title: "Phone", field: "phone", cellStyle },
  { title: "Website", field: "website", cellStyle },
];

function UsersTable() {
  const { data, isLoading } = useUsersList();

  return (
    <Box width={0.8}>
      <MaterialTable
        isLoading={isLoading}
        title="Users List"
        columns={columns}
        data={data ?? []}
        actions={[
          {
            icon: () => (
              <Typography
                style={{
                  color: "blue",
                  textDecoration: "underline",
                }}
              >
                View Profile
              </Typography>
            ),
            onClick: () => {},
          },
          {
            icon: () => (
              <Typography
                style={{ color: "blue", textDecoration: "underline" }}
              >
                View Posts
              </Typography>
            ),
            onClick: () => {},
          },
        ]}
        options={{
          filtering: false,
          draggable: false,
          sorting: false,
          emptyRowsWhenPaging: false,
          paging: false,
          tableLayout: "auto",
          actionsColumnIndex: -1,
          actionsCellStyle: { width: "100px", padding: "4px" },
        }}
      />
    </Box>
  );
}

export default UsersTable;
