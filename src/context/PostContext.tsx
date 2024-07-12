import React, { createContext, useReducer, ReactNode, Dispatch } from "react";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface State {
  posts: Post[];
}

interface Action{
  type: 'SET_POSTS' | 'ADD_POST';
  payload: Post[] | Post;
}

const initialState: State = {
  posts: [],
};

const redcer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_POSTS':
      return { ...state, posts: action.payload as Post[] };
    case 'ADD_POST':
      return { ...state, posts: [...state.posts, action.payload as Post] };
    default:
      return state;
  }
};

const PostContext = createContext<{ state: State; dispatch: Dispatch<Action> }>({
  state: initialState,
  dispatch: () => null,
});

const PostProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(redcer, initialState);

  return (
    <PostContext.Provider value={{ state, dispatch }}>
      {children}
    </PostContext.Provider>
  );
};

export{PostContext, PostProvider};



