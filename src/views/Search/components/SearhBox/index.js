import { useState } from "react";
import "./styles.css"

export function SearchBox({ onSearch, onClose, isSearching }) {
    const [searchText, setSearchText] = useState("");

    const handleSearchClick = () => {
        setSearchText("");
        onClose();

    }

    return (
        <div className="serch-box">
            <h2 className="serach-box-title">Buscador de Personal</h2>
            <div className="search-box-buttons">
                <label>
                    <input
                        value={searchText}
                        onChange={({ target: { value } }) => setSearchText(value)}
                        className="search-box-input"
                    />
                </label>
                <button onClick={() => onSearch(searchText)} disabled={!searchText.length} >
                    Buscar
                </button>
                {isSearching && <button onClick={handleSearchClick} disabled={!searchText.length} >
                    Cerrar
                </button>}
            </div>
        </div>
    );
}