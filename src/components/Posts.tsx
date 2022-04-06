import { Box, Typography } from "@material-ui/core";
import { usePosts } from "../hooks/usePosts";
import { useUser } from "../hooks/useUser";
import Card from "./Card";

function Posts({ userId }: { userId: number }) {
  const [
    { data: posts, isLoading },
    { data: user, isLoading: isFetchingUser },
  ] = [usePosts(userId), useUser(userId)];

  if (!userId) return null;
  return (
    <Card
      title={`Posts of ${user?.name}`}
      isLoading={isLoading || isFetchingUser}
    >
      {posts?.map((post) => (
        <Box my={3} key={post.id}>
          <Typography
            variant="h6"
            style={{ lineHeight: 1.1, fontWeight: "bold" }}
          >
            {post.title}
          </Typography>
          <Box mt={1} />
          <Typography variant="body1" style={{ lineHeight: 1.4 }}>
            {post.body}
          </Typography>
        </Box>
      ))}
    </Card>
  );
}

export default Posts;
