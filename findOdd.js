
export function findOdd(nombres) {
    const counts = {};
    for (const num of nombres) {
        counts[num] = (counts[num] || 0) + 1;
    }
    for (const num in counts) {
        if (counts[num] % 2 !== 0) {
            return Number(num);
        }
    }    
}


