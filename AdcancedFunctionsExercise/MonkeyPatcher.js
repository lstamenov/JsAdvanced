function solution(command, post) {
    function getObfuscateNumber(upVotes, downVotes) {
        return Math.round(Math.max(upVotes, downVotes) * 0.25);
    }

    function getRating(upVotes, downVotes) {
        let balance = upVotes - downVotes;
        if (upVotes >= 0.66 * (upVotes + downVotes)){
            return 'hot';
        }else {
            if (balance >= 0 && upVotes > 100 && downVotes > 100){
                return 'controversial';
            }else if (balance < 0){
                return 'unpopular';
            }else {
                return 'new';
            }
        }
    }

    switch (command){
       case 'upvote':
       case 'downvote':
           this[command+'s'] += 1;
           break;
       case 'score':
           let upVotes = this['upvotes'];
           let downVotes = this['downvotes'];

           let totalVotes = upVotes + downVotes;

           let obfuscateNumber = 0;
           if (totalVotes > 50){
               obfuscateNumber = getObfuscateNumber(upVotes, downVotes);
           }
           let obfuscatedUpVotes = upVotes + obfuscateNumber;
           let obfuscatedDownVotes = downVotes + obfuscateNumber;

           let rating = getRating(upVotes, downVotes);
           let data = [];
           data.push(obfuscatedUpVotes);
           data.push(obfuscatedDownVotes);
           data.push(obfuscatedUpVotes - obfuscatedDownVotes);
           data.push(rating);

           return data;
    }
}

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};

let solution1 = solution.bind(post);

solution1.call(post, 'upvote');
solution1.call(post, 'downvote');
let score = solution1.call(post, 'score'); // [127, 127, 0, 'controversial']
console.log(score);
for (let i = 0; i < 50; i++) {
    solution1.call(post, 'downvote');
}      // (executed 50 times)
score = solution1.call(post, 'score');
console.log(score);
