import React, { useState, useEffect, useContext } from "react";
import "./App.css";
import axios from "axios";
import { Paging } from "./components/Paging";
import { Post } from "./components/Post";

interface IPosts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface IPageContext {
  currentPage: number;
  handlePageChange: (n: number) => void;
}

export const PageContext = React.createContext<IPageContext | {}>({});

const App = () => {
  const [posts, setPosts] = useState<null | IPosts[]>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPageCount, setTotalPageCount] = useState<number>(10);
  const baseUrl = `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=${totalPageCount}`;
  let totalNumberOfPages: unknown;
  const pageNums: number[] = [...new Array(totalPageCount + 1).keys()].slice(1);

  const fetchPosts = async () => {
    const data = await axios.get(baseUrl);
    const pageCount = Number(data?.headers["x-total-count"]);
    totalNumberOfPages = pageCount;
    setTotalPageCount(Math.round(pageCount / 10));
    setPosts(data?.data);
  };

  const handlePageChange = (n: number) => {
    setCurrentPage(n);
  };

  useEffect(() => {
    fetchPosts();
  }, [currentPage]);

  return (
    <div className="container">
      <PageContext.Provider value={{ currentPage, handlePageChange }}>
        {posts &&
          posts.map(({ id, title, body }) => (
            <Post key={id} id={id} title={title} body={body} />
          ))}
        <div className={"pages-container"}>
          <Paging pageNumbers={pageNums} />
        </div>
      </PageContext.Provider>
    </div>
  );
};

export default App;
