/**
 * Genre Filtering Logic for My Games Portal
 * This script makes the genre dropdown filter the game cards displayed.
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Get the main elements by their IDs and Classes
    const genreSelect = document.getElementById('genre-select');
    // Selects ALL elements with the class 'game-card' (these are the items to be filtered)
    const gameCards = document.querySelectorAll('.game-card'); 

    // 2. Attach an event listener to the dropdown menu (fires when the selection changes)
    genreSelect.addEventListener('change', () => {
        // Get the selected value (e.g., 'platformer', 'rpg', or 'all')
        const selectedGenre = genreSelect.value;
        
        // 3. Loop through every game card
        gameCards.forEach(card => {
            // Get the genre data attribute from the card (e.g., the 'data-genre' attribute)
            const cardGenre = card.getAttribute('data-genre');
            
            // Check if the card should be visible: 
            // Condition 1: If 'all' is selected.
            // Condition 2: If the selected value EXACTLY matches the card's data-genre.
            const shouldShow = (selectedGenre === 'all' || selectedGenre === cardGenre);

            // 4. Apply the display change
            if (shouldShow) {
                // Show the card. Setting display to '' (empty string) resets it to its default CSS display 
                // property (which is usually block or grid-item based on your styles.css).
                card.style.display = ''; 
            } else {
                // Hide the card
                card.style.display = 'none';
            }
        });
    });

    // Optional: Immediately run the filter once the page loads. 
    // This ensures that if the browser remembers a previous selection (like "RPG") 
    // the filter is correctly applied on page load.
    genreSelect.dispatchEvent(new Event('change'));
});