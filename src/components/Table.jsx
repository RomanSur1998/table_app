import React, { useEffect, useState } from "react";
import styles from "../styles/Table.module.css";
import search from "../assets/search-svgrepo-com 1.svg";
import arrow from "../assets/arrow.svg";
import { useDispatch, useSelector } from "react-redux";
import { hanleGetPosts } from "../function/HanleGetPost";

const Table = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searching, setSearching] = useState("");
  console.log("searching", searching);
  const { posts } = useSelector((state) => state);
  console.log(" totalPosts", posts.totalPosts);

  const dispatch = useDispatch();
  useEffect(() => {
    hanleGetPosts(dispatch, currentPage);
  }, [currentPage]);

  useEffect(() => {
    hanleGetPosts(dispatch, currentPage, searching);
  }, [searching]);

  const handleNextPage = () => {
    if (currentPage < Math.ceil(posts.totalPosts / 10)) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePrevPage = () => {
    if ((currentPage) => 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(posts.totalPosts / 10); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className={styles.container}>
    
      <div className={styles.search_container}>
        <input
          type="text"
          placeholder="Поиск "
          onChange={(e) => {
            setSearching(e.target.value);
          }}
        />
        <img src={search} alt="serarch" />
      </div>
      <table className={styles.table_container}>
        <thead>
          <tr>
            <th>
              ID <img src={arrow} alt="" />
            </th>
            <th>
              Заголовок <img src={arrow} alt="" />
            </th>
            <th>
              Описание <img src={arrow} alt="" />
            </th>
          </tr>
        </thead>
        <tbody>
          {posts.posts?.map((item) => (
            <tr key={item.id}>
              <td className={styles.id_block}>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.button_block}>
        <button
          onClick={() => {
            handlePrevPage();
          }}
        >
          Назад
        </button>
        <div>
          {pageNumbers.map((pageNumber) => (
            <span
              key={pageNumber}
              onClick={() => setCurrentPage(pageNumber)}
              className={currentPage === pageNumber ? styles.active : ""}
            >
              {pageNumber}
            </span>
          ))}
        </div>
        <button
          onClick={() => {
            handleNextPage();
          }}
        >
          Далее
        </button>
      </div>
      </div>
  
  );
};

export default Table;
