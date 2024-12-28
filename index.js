// JavaScript code to fetch data from NASA's APOD API
document.addEventListener("DOMContentLoaded", () => {
    const apiKey = "4JGdzrV1KErp97OfGH25CNaZA88qmmmmkXeWAXdr";
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
    
    // Fetch data from the API
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json(); // Convert response to JSON
        })
        .then(data => {
            console.log(data); // Log the API data to the console
            
            // Update the webpage with the data
            document.getElementById("apod-title").innerText = data.title;
            document.getElementById("apod-date").innerText = data.date;
            document.getElementById("apod-description").innerText = data.explanation;

            const apodImage = document.getElementById("apod-image");
            if (data.media_type === "image") {
                apodImage.src = data.url; // Set the image source
                apodImage.alt = data.title; // Set the image alt text
                apodImage.style.display = "block"; // Show the image
            } else {
                apodImage.style.display = "none"; // Hide the image if it's not an image
                alert("The media type is not an image. It might be a video.");
            }
        })
        .catch(error => {
            console.error("Error fetching data from NASA API:", error);
            alert("Failed to fetch data. Check the console for more details.");
        });
});
