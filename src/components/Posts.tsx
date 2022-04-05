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
          <Typography variant="h6">{post.title}</Typography>
          <Typography variant="body1">{post.body}</Typography>
        </Box>
      ))}
    </Card>
  );
}

export default Posts;
