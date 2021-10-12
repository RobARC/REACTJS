import SearchResultsItem from "./SearchResultsItems";

export default function SearchResults({ results, isSearching }) {
    return (
        <div style={{ width: "100%", padding: "0rem, 2rem, 0rem, 2rem" }} >
            {!results.lenght && isSearching && <p>There is no results</p>}
            {results?.map((value) =>
                < SearchResultsItem key={value.id} {...value} />)}

        </div>
    );
}