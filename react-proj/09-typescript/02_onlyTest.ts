interface Game {
    title: string;
    price: number;
    desc?: string;
    category: string;
    platform: string;
}

interface heroGame_A extends Game {
    desc: string;
}

interface heroGame_B extends Game {

}

const game_A: heroGame_A = {title: 'DC', price: 5000, desc: 'dc히어로 & 빌런', category: '액션', platform: '모바일'};
console.log(game_A);
const game_B: heroGame_B = {title: 'DC', price: 65000,  category: '롤플레잉', platform: '모바일'};
console.log(game_B);
