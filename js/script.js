document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('searchButton');
    const searchInput = document.getElementById('searchInput');
    let mockData = [];

    // Fetch the mock data
    fetch('../data/mock_data.json')
    .then(response => response.json())
    .then(data => {
        mockData = data;
        displayData(mockData); // Display all data initially
    })
    .catch(error => console.error('Error loading mock data:', error));

    // Function to display data
    function displayData(data) {
        const searchResultsBody = document.querySelector('#searchResults tbody');
        searchResultsBody.innerHTML = ''; // Clear previous results
        data.forEach(item => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${item.title}</td>
                <td><a href="${item.url}" target="_blank">${item.url}</a></td>
                <td>${item.description}</td>
            `;
            searchResultsBody.appendChild(tr);
        });
    }

    // Add event listener for the search button
    searchButton.addEventListener('click', () => {
        const searchText = searchInput.value.toLowerCase();
        const filteredData = mockData.filter(item => 
            item.title.toLowerCase().includes(searchText) || 
            item.description.toLowerCase().includes(searchText)
        );
        displayData(filteredData);
    });

    // Optional: Trigger search on enter key in the search input
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchButton.click();
        }
    });
});
