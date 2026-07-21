import "../styles/PostComposer.css";

interface Props {
  post: string;
  setPost: (value: string) => void;
}

const PostComposer = ({ post, setPost }: Props) => {
  return (
    <div className="post-composer">
      <h2>Compose Your Post</h2>

      <textarea
        placeholder="Write your social media post here..."
        value={post}
        onChange={(e) => setPost(e.target.value)}
      />
    </div>
  );
};

export default PostComposer;
