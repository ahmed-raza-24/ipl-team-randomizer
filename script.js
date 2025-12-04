let team = document.getElementById('team');
let fullname = document.getElementById('fullname');
let btn = document.querySelector('.random');
let tp = document.getElementById('tropies');
let ws = document.getElementById('wins');
let lt = document.getElementById('lost');




let teams = [
    {
    name: `MI`,
    fname: 'Mumbai Indians',
    tropie: 5,
    win: 180,
    losts: 76,
    color: "#004283",
},{
    name: 'CSK',
    fname: 'Chennai Super Kings',
    tropie: 5,
    win: 172,
    losts: 89,
    color: "#F36F21",
},{
    name: 'RCB',
    fname: 'Royal Challengers Banglore',
    tropie: 1,
    win: 156,
    losts: 105,
    color: "#C8102E",
},{
    name: 'KKR',
    fname: 'Kolkata Knight Riders',
    tropie: 3,
    win: 171,
    losts: 98,
    color: "#280137",
},{
    name: 'SRH',
    fname: 'Sunrises Hydrabad',
    tropie: 1,
    win: 163,
    losts: 109,
    color: "#E61935",
},{
    name: 'RR',
    fname: 'Rajastan Royals',
    tropie: 1,
    win: 165,
    losts: 121,
    color: "#E60693",
},{
    name: 'PBKS',
    fname: 'Punjab Kings',
    tropie: 1,
    win: 163,
    losts: 109,
    color: "#D71A2E",
},{
    name: 'GT',
    fname: 'Gujrta Taitans',
    tropie: 1,
    win: 38,
    losts: 19,
    color: "#212730",
},{
    name: 'LSG',
    fname: 'Lucknow Supergaints',
    tropie: 0,
    win: 29,
    losts: 26,
    color: "#005053",
},{
    name: 'DC',
    fname: 'Dehli Capitals',
    tropie: 0,
    win: 149,
    losts: 129,
    color: "#2561AE",
}]

btn.addEventListener("click", function(){
    let randomIndex = Math.floor(Math.random()*teams.length);
    let randomTeam = teams[randomIndex];

    team.innerText = randomTeam.name;
    fullname.innerText = randomTeam.fname;
    tp.innerText = "Tropies: "+ randomTeam.tropie;
    ws.innerText = "Wins: "+ randomTeam.win;
    lt.innerText = "Lost: "+ randomTeam.losts;

    team.style.backgroundColor = randomTeam.color;
})

