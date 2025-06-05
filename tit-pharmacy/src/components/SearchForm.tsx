import React from 'react';

const SearchForm: React.FC<{ onSearch: (searchTerm: string) => void }> = ({ onSearch }) => {
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        onSearch(e.target.value);
    };

    return (
        <input type="text" placeholder="Tìm kiếm sản phẩm" onChange={handleSearch} />
    );
};

export default SearchForm;