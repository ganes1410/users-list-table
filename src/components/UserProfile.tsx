import { Box, Typography } from "@material-ui/core";
import { useUser } from "../hooks/useUser";
import Card from "./Card";

function Detail({ label = "", detail = "" }) {
  return (
    <Box display="flex" flexDirection="column" alignItems="flex-start" mb={1}>
      <Typography variant="body1" style={{ fontWeight: "bold" }}>
        {label}
      </Typography>
      <Typography variant="body2">{detail}</Typography>
    </Box>
  );
}

function UserProfile({ userId }: { userId: number }) {
  const { data: user, isLoading } = useUser(userId);

  if (!userId) return null;

  return (
    <Card title="My Profile" isLoading={isLoading}>
      <>
        <Detail label="Name" detail={user?.name} />
        <Detail label="Email" detail={user?.email} />
        <Detail label="Phone" detail={user?.phone} />
        <Detail label="Address" detail={user?.address?.street} />
        <Detail label="Website" detail={user?.website} />
        <Detail label="Company Name" detail={user?.company?.name} />
      </>
    </Card>
  );
}

export default UserProfile;
