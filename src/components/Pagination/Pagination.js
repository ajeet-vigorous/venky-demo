import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Pagination.css';

function Pagination(props) {
  const [currentPage, setCurrentPage] = useState(props.currentPage);

  const isInFirstPage = () => {
    return currentPage === 1;
  };

  const isInLastPage = () => {
    if (props.totalPages === 0) {
      return true;
    }
    return currentPage === props.totalPages;
  };

  const startPage = () => {
    if (currentPage === 1) {
      return 1;
    }
    if (props.totalPages < props.maxVisibleButtons) {
      return 1;
    }
    if (currentPage === props.totalPages) {
      return props.totalPages - props.maxVisibleButtons + 1;
    }
    return currentPage; // if you use the multile number then you return the curent page - 1  currentPage - 1
  };

  const endPage = () => {
    if (props.totalPages === 0) {
      return 1;
    }
    if (props.totalPages < props.maxVisibleButtons) {
      return props.totalPages;
    }
    return Math.min(startPage() + props.maxVisibleButtons - 1, props.totalPages);
  };

  const onClickFirstPage = () => {
    if (isInFirstPage()) {
      return false;
    }
    props.onPageChanged(1);
    setCurrentPage(1);
  };

  const onClickPreviousPage = () => {
    if (isInFirstPage()) {
      return false;
    }
    const newPage = currentPage - 1;
    props.onPageChanged(newPage);
    setCurrentPage(newPage);
  };

  const onClickPage = (page) => {
    props.onPageChanged(page);
    setCurrentPage(page);
  };

  const onClickNextPage = () => {
    if (isInLastPage()) {
      return false;
    }
    const newPage = currentPage + 1;
    props.onPageChanged(newPage);
    setCurrentPage(newPage);
  };

  const onClickLastPage = () => {
    if (isInLastPage()) {
      return false;
    }
    props.onPageChanged(props.totalPages);
    setCurrentPage(props.totalPages);
  };

  const isPageActive = (page) => {
    return currentPage === page;
  };

  useEffect(() => {
    setCurrentPage(props.currentPage);
  }, [props.currentPage]);

  const pages = [];
  for (let i = startPage(); i <= endPage(); i++) {
    pages.push(
      <li key={i} className="pagination-item">
        <button onClick={() => onClickPage(i)} className={isPageActive(i) ? 'active' : ''}>
          {i}
        </button>
      </li>
    );
  }

  return (
    <ul className="pagination gap-2">
      <li className="pagination-item border-2 border-current">
        <button onClick={() => onClickFirstPage()} className={isInFirstPage() ? 'disabled' : ''} disabled={isInFirstPage()}>
        ««
        </button>
      </li>
      <li className="pagination-item">
        <button onClick={() => onClickPreviousPage()} className={isInFirstPage() ? 'disabled' : ''} disabled={isInFirstPage()}>
          «
        </button>
      </li>
      {pages}
      
      <li className="pagination-item">
        <button onClick={() => onClickNextPage()} className={isInLastPage() ? 'disabled' : ''} disabled={isInLastPage()}>
          »
        </button>
      </li>
      <li className="pagination-item border-2 border-current">
        <button onClick={() => onClickLastPage()} className={isInLastPage() ? 'disabled' : ''} disabled={isInLastPage()}>
        »»
        </button>
      </li>
    </ul>
  );
}

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  maxVisibleButtons: PropTypes.number,
  onPageChanged: PropTypes.func,
};

export default Pagination;
