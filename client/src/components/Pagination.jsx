import React from 'react';
import '../css/pagination.css';

export default function Pagination({ currentPage, totalPages, onPageChange }) {
    const maxVisiblePages = 5;
    const halfVisiblePages = Math.floor(maxVisiblePages / 2);
    let startPage = Math.max(1, currentPage - halfVisiblePages);
    let endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

    if (endPage - startPage < maxVisiblePages - 1) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    const pages = Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);

    return (
        <div className="pagination-container">
            <ul className="pagination-list">
                {currentPage > 1 && (
                    <li onClick={() => onPageChange(currentPage - 1)}>«</li>
                )}

                {pages.map((page) => (
                    <li
                        key={page}
                        className={currentPage === page ? 'active' : ''}
                        onClick={() => onPageChange(page)}
                    >
                        {page}
                    </li>
                ))}

                {currentPage < totalPages && (
                    <li onClick={() => onPageChange(currentPage + 1)}>»</li>
                )}
            </ul>
        </div>
    );
}
