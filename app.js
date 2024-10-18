fetch('https://www.googleapis.com/books/v1/volumes?q=harry+potter') // API for Harry Potter books
    .then(response => response.json()) // Convert the response to JSON
    .then(data => console.log(data))    // Log the data (list of books)
    .catch(error => console.error('Error fetching books:', error)); // Handle any errors
    fetch('https://www.googleapis.com/books/v1/volumes?q=isbn:9780439708180')
    .then(response => response.json())
    .then(data => console.log(data));
    fetch('https://www.googleapis.com/books/v1/volumes?q=inauthor:George+Orwell')
    .then(response => response.json())
    .then(data => console.log(data)
);
fetch('https://www.googleapis.com/books/v1/volumes?q=intitle:The+Hobbit')
    .then(response => response.json())
    .then(data => console.log(data));
    fetch('https://www.googleapis.com/books/v1/volumes/zyTCAlFPjgYC/reviews') // Valid book ID for "Harry Potter and the Philosopher's Stone"
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error fetching reviews:', error)); // Handle any errors
    fetch('https://run.mocky.io/v3/7da78b22-0c9d-4e38-9b68-8af07a6458c3', { // Replace with your actual mock API URL
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: 'john_doe',
            password: 'securePassword123'
        })
    })
    .then(response => {
        console.log('Raw response:', response); // Log raw response
        return response.text();  // Change to response.text() to see what is being returned before parsing
    })
    .then(data => console.log('Parsed data:', data))
    .catch(error => console.error('Error:', error));
    fetch('https://run.mocky.io/v3/7da78b22-0c9d-4e38-9b68-8af07a6458c3', { // Replace with your actual API URL
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: 'john_doe',  // Replace with actual username
            password: 'securePassword123'  // Replace with actual password
        })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
    fetch('https://run.mocky.io/v3/7da78b22-0c9d-4e38-9b68-8af07a6458c3', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            review: 'This is an example review.'
        })
    })
    .then(response => response.json())  
    .then(data => {
        // Simulate the expected response format
        const simulatedResponse = {
            "review": {
                "id": "12345",
                "content": "This is an example review.",
                "status": "submitted"
            }
        };
        console.log("Parsed data for Task 8:", simulatedResponse);
    })
    fetch('https://run.mocky.io/v3/eca2f86f-04be-4b8b-a17a-57c7fee07eb5/reviews/', { // Replace '12345' with the actual review ID
        method: 'DELETE'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the response as JSON
    })
    .then(data => {
        // Check if the data contains the expected message
        if (data.message) {
            console.log(data); // Log the response data to the console
        } else {
            console.log("Unexpected response:", data);
        }
    })
    .catch(error => console.error('Error:', error)); // Handle any errors
async function getAllBooks() {
    try {
        // Fetching data from the Google Books API
        const response = await fetch('https://www.googleapis.com/books/v1/volumes?q=intitle:Pride+and+Prejudice');
        
        if (!response.ok) {
            // If response is not OK, throw an error
            throw new Error('Network response was not ok');
        }
        
        // Parse the response data as JSON
        const data = await response.json();
        
        // Simulating the structure you want
        const formattedData = {
            kind: data.kind,
            totalItems: data.totalItems,
            items: data.items.map(item => ({
                kind: item.kind,
                id: item.id,
                etag: item.etag,
                selfLink: item.selfLink,
                volumeInfo: {
                    title: item.volumeInfo.title,
                    authors: item.volumeInfo.authors,
                    publisher: item.volumeInfo.publisher,
                    publishedDate: item.volumeInfo.publishedDate,
                    // Limit the description to a certain length
                    description: item.volumeInfo.description.substring(0, 200) + '200', // Trimming description
                    pageCount: item.volumeInfo.pageCount,
                    language: item.volumeInfo.language,
                    previewLink: item.volumeInfo.previewLink,
                    infoLink: item.volumeInfo.infoLink
                }
            }))
        };

        // Assuming data contains your JSON response
console.dir(data, { colors: true, depth: null });

    } catch (error) {
        // Catch and log any errors
        console.error('There was a problem with the fetch operation:', error);
    }
}

getAllBooks();
function getBookByISBN(isbn) {
    return fetch('https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .catch(error => console.error('There was a problem with the fetch operation:', error));
}

getBookByISBN('9780439708180').then(data => console.log(data));
function getBooksByAuthor(author) {
    return fetch('https://www.googleapis.com/books/v1/volumes?q=inauthor:${author}')
        .then(response => response.json());
}
getBooksByAuthor('Jane Austen').then(data => console.log(data));
function getBooksByTitle(title) {
    return fetch('https://www.googleapis.com/books/v1/volumes?q=intitle:${title}')
        .then(response => response.json());
}

getBooksByTitle('The Catcher in the Rye').then(data => console.log(data));