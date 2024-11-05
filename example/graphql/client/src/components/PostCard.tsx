import { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { Heart, MessageCircle, Trash, Edit } from 'lucide-react';
import { Post } from '../types';
import { useAuthStore } from '../store/authStore';

interface PostCardProps {
  post: Post;
  onDelete?: (id: string) => void;
  onEdit?: (post: Post) => void;
}

export function PostCard({ post, onDelete, onEdit }: PostCardProps) {
  const [showComments, setShowComments] = useState(false);
  const { user } = useAuthStore();
  const isAuthor = user?.id === post.authorId;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <div className="flex items-center mb-4">
        <img
          src={post.author?.avatar}
          alt={post.author?.name}
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <h3 className="font-semibold">{post.author?.name}</h3>
          <p className="text-sm text-gray-500">
            {/* {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })} */}
          </p>
        </div>
        {isAuthor && (
          <div className="ml-auto flex gap-2">
            <button
              onClick={() => onEdit?.(post)}
              className="text-gray-500 hover:text-gray-700"
            >
              <Edit size={18} />
            </button>
            <button
              onClick={() => onDelete?.(post.id)}
              className="text-gray-500 hover:text-red-500"
            >
              <Trash size={18} />
            </button>
          </div>
        )}
      </div>

      <p className="mb-4">{post.content}</p>
      {post.imageUrl && (
        <img
          src={post.imageUrl}
          alt="Post content"
          className="rounded-lg mb-4 max-h-96 w-full object-cover"
        />
      )}

      <div className="flex items-center gap-4 text-gray-500">
        <button className="flex items-center gap-1 hover:text-red-500">
          <Heart size={20} />
          <span>0</span>
        </button>
        <button
          onClick={() => setShowComments(!showComments)}
          className="flex items-center gap-1 hover:text-blue-500"
        >
          <MessageCircle size={20} />
          {/* <span>{post.comments.length}</span> */}
        </button>
      </div>

      {showComments && (
        <div className="mt-4 space-y-3">
          {post.comments.map((comment) => (
            <div key={comment.id} className="flex items-start gap-2 p-2 bg-gray-50 rounded">
              <img
                src={comment.author?.avatar}
                alt={comment.author?.name}
                className="w-8 h-8 rounded-full"
              />
              <div>
                <p className="font-semibold text-sm">{comment.author?.name}</p>
                <p className="text-sm">{comment.content}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}