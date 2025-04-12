import React, { useState, useEffect } from 'react';

const Autocomplete = ({ query, setQuery, suggestions, setSuggestions, type }) => {
    const [selected, setSelected] = useState(false);

    const fetchSuggestions = async () => {
        const endpoint = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&addressdetails=1&limit=5`;
        try {
            const response = await fetch(endpoint);
            const data = await response.json();
            setSuggestions(data);
        } catch (error) {
            console.error('Error fetching suggestions:', error);
        }
    };

    const handleInputChange = (e) => {
        const queryValue = e.target.value;
        setQuery(queryValue);
        setSelected(false); 
        if (queryValue.length > 2) {
            fetchSuggestions();
        } else {
            setSuggestions([]);
        }
    };

    const selectSuggestion = (item) => {
        setQuery(item.display_name);
        setSuggestions([]);
        setSelected(true);
        document.activeElement.blur(); 
    };

    useEffect(() => {
        if (!query || selected) {
            setSuggestions([]);
        }
    }, [query, selected]);

    return (
        <div className="autocomplete-container">
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder={`Enter ${type} location`}
                className="autocomplete-input"
            />
            {query.length > 2 && !selected && (
                <ul className="autocomplete-results">
                    {suggestions.length > 0 ? (
                        suggestions.map((item) => (
                            <li
                                key={item.place_id}
                                onClick={() => selectSuggestion(item)}
                                className="autocomplete-item"
                            >
                                {item.display_name}
                            </li>
                        ))
                    ) : (
                        <li className="autocomplete-item">No suggestions found</li>
                    )}
                </ul>
            )}
        </div>
    );
};

export default Autocomplete;
