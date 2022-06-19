var guessNumber = function(n) {
    let start = 1;
    let end = n;
    
    while(start < end ){
        const pick = start + Math.floor((end - start)/2);
        const current = guess(pick);
        if(current === 0) return pick;
        else if (current === 1){
            start = pick + 1;
        }else end = pick;
    }return start;
};
