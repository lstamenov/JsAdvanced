function squareOfStars(n) {
    for(let row = 0; row < n; row++) {
        console.log('*'.repeat(n));
        console.log('\n');
    }
}

squareOfStars(5);