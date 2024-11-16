import { PostsType } from "@/types/api/posts";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Props {
  posts: PostsType[];
}

const initialState: Props = {
  posts: [],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    updatePosts: (state, action: PayloadAction<PostsType[]>) => {
      state.posts = action.payload;
    },
  },
});

export const { updatePosts } = postsSlice.actions;

export default postsSlice.reducer;
