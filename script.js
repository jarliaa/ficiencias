let votes = [0, 0, 0, 0];

function vote(index) {
    votes[index]++;
    document.getElementById(`votes-${index}`).innerText = `Votos: ${votes[index]}`;
}