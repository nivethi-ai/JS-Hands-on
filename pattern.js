function printStars(rows) {
    for (let i = 1; i <= rows; i++) { // Outer loop for each row
        let stars = '';
        for (let j = 1; j <= i; j++) { // Inner loop for printing stars
            stars += '*'; // Append one star per iteration
        }
        console.log(stars); // Print the stars for the current row
    }
}

printStars(7);


