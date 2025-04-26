<!-- 
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

const InfiniteScroll = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const loaderRef = useRef(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`, {
        params: {
          _page: page,
          _limit: 10,
        },
      });

      if (res.data.length > 0) {
        setPosts((prev) => [...prev, ...res.data]);
      } else {
        setHasMore(false);
      }

      setLoading(false);
    };

    fetchPosts();
  }, [page]);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [loaderRef.current, hasMore, loading]);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Infinite Scroll Example</h2>
      {posts.map(post => (
        <div key={post.id} style={{ margin: '15px 0', borderBottom: '1px solid #ccc' }}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}

      {loading && <p>Loading more...</p>}
      {!hasMore && <p>No more posts to load.</p>}
      <div ref={loaderRef} style={{ height: '40px' }} />
    </div>
  );
};

export default InfiniteScroll; 
-->

