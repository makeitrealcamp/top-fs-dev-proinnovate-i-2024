import { useState, useRef, useEffect } from 'react';
import { ImagePlus, X } from 'lucide-react';
import { usePostStore } from '../store/postStore';
import { useAuthStore } from '../store/authStore';
import { gql, useMutation } from '@apollo/client';
import { client } from '../graphql/client';
import { CREATE_NEW_POST, CREATE_POST } from '../graphql/mutations';

export function CreatePost() {
  const [content, setContent] = useState('');
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // const [createPost, { data, loading, error }] = useMutation(CREATE_POST);
  // const { addPost } = usePostStore();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim() && !imagePreview) return;

    const newPost = {
      id: Date.now().toString(),
      title: 'New Post',
      content,
      imageUrl: imagePreview || undefined,
      authorId: 'user!.id',
      author: 'user!',
      comments: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    // createPost({ variables: { title: 'New Post', content } });
    // addPost(newPost);
    // const post = await client.mutate({
    //   mutation: CREATE_POST,
    //   variables: newPost,
    // });
    try {
      const response = await fetch('http://localhost:3000/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: CREATE_NEW_POST, variables: newPost }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log({ data });
      }
    } catch (error) {
      console.log({ error });
    }

    setContent('');
    setImagePreview(null);
    // console.log({ post });
  };

  // useEffect(() => {
  //   console.log({
  //     data,
  //   });
  //   if (data?.createPost) {
  //     addPost(data.createPost);
  //   }
  // }, [data, error]);

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-lg shadow-md p-6 mb-6"
    >
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What's on your mind?"
        className="w-full p-4 mb-4 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows={3}
      />

      {imagePreview && (
        <div className="relative mb-4">
          <img
            src={imagePreview}
            alt="Preview"
            className="max-h-64 rounded-lg"
          />
          <button
            type="button"
            onClick={() => setImagePreview(null)}
            className="absolute top-2 right-2 p-1 bg-gray-800 bg-opacity-50 rounded-full text-white hover:bg-opacity-70"
          >
            <X size={20} />
          </button>
        </div>
      )}

      <div className="flex justify-between items-center">
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="flex items-center gap-2 text-gray-600 hover:text-blue-500"
        >
          <ImagePlus size={20} />
          <span>Add Image</span>
        </button>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleImageChange}
          accept="image/*"
          className="hidden"
        />

        <button
          type="submit"
          disabled={!content.trim() && !imagePreview}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Post
        </button>
      </div>
    </form>
  );
}
