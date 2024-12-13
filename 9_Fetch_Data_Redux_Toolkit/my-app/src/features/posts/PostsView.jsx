// import React from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./postsSlice";

const PostsView = () => {
  const { isLoading, posts, error } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  return (
    <div>
      {isLoading && <h3>Loading ...</h3>}
      {error && <h3>{error}</h3>}
      <section>
        {posts &&
          posts.map((post) => {
            const { id, title, body } = post;
            return (
              <article key={id}>
                <h4>
                  {id} - {title}
                </h4>
                <p>{body}</p>
              </article>
            );
          })}
      </section>
    </div>
  );
};

export default PostsView;
