import MaterialTable, { Column } from "@material-table/core";
import { Box, Typography } from "@material-ui/core";
import { useUsersList } from "../hooks/useUsersList";
import { IUser } from "../types";

const cellStyle = {
  padding: "8px 6px",
  width: "120px",
  fontSize: "14px",
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

function TableTitle({ title = "" }) {
  return (
    <Box
      display="flex"
      height={44}
      alignItems="center"
      px={3}
      style={{
        background: "darkgreen",
      }}
    >
      <Typography
        variant="body1"
        style={{
          color: "white",
          letterSpacing: 1,
        }}
      >
        {title}
      </Typography>
    </Box>
  );
}

function UsersTable() {
  const { data, isLoading } = useUsersList();

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent={"center"}
      mt={6}
      width={1}
    >
      <MaterialTable
        isLoading={isLoading}
        components={{
          Toolbar: () => <TableTitle title="Users" />,
        }}
        title={
          <Box bgcolor="darkgreen" width={1}>
            <Typography>Users</Typography>
          </Box>
        }
        columns={columns}
        data={data ?? []}
        actions={[
          {
            icon: () => (
              <Typography
                variant="body2"
                style={{
                  color: "darkgreen",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                View Profile
              </Typography>
            ),
            onClick: (_, data: any) => {
              const postData = JSON.stringify({
                type: "profile",
                userId: data.id,
              });
              window.postMessage(postData, window.parent.origin);
            },
          },
          {
            icon: () => (
              <Typography
                variant="body2"
                style={{
                  color: "darkgreen",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                View Posts
              </Typography>
            ),
            onClick: (_, data: any) => {
              const postData = JSON.stringify({
                type: "posts",
                userId: data.id,
              });

              window.postMessage(postData, window.parent.origin);
            },
          },
        ]}
        options={{
          filtering: false,
          draggable: false,
          sorting: false,
          emptyRowsWhenPaging: false,
          paging: false,
          tableWidth: "full",
          actionsColumnIndex: -1,
          actionsCellStyle: {
            width: "100px",
            padding: "4px",
          },
        }}
      />
    </Box>
  );
}

export default UsersTable;
