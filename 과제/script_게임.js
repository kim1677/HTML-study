function startGame(game) {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('game').style.display = 'block';

    switch (game) {
        case 'coinFlip':
            startCoinFlip();
            break;
        case 'rockPaperScissors':
            startRockPaperScissors();
            break;
        case 'bingo':
            startBingo();
            break;
        case 'customGame':
            startCustomGame();
            break;
    }
}

function goBack() {
    document.getElementById('game').style.display = 'none';
    document.getElementById('menu').style.display = 'block';
    document.getElementById('game-content').innerHTML = '';
}

function startCoinFlip() {
    const content = document.getElementById('game-content');
    content.innerHTML = `
        <h2>동전 앞면 뒷면 맞추기</h2>
        <button onclick="flipCoin('앞면')">앞면</button>
        <button onclick="flipCoin('뒷면')">뒷면</button>
        <div id="coin-result"></div>
    `;
}

function flipCoin(choice) {
    const result = Math.random() < 0.5 ? '앞면' : '뒷면';
    const resultDiv = document.getElementById('coin-result');
    if (choice === result) {
        resultDiv.innerHTML = `정답입니다! 결과는 ${result}입니다.`;
    } else {
        resultDiv.innerHTML = `틀렸습니다. 결과는 ${result}입니다.`;
    }
}

function startRockPaperScissors() {
    const content = document.getElementById('game-content');
    content.innerHTML = `
        <h2>가위바위보</h2>
        <button onclick="playRPS('가위')">가위</button>
        <button onclick="playRPS('바위')">바위</button>
        <button onclick="playRPS('보')">보</button>
        <div id="rps-result"></div>
    `;
}

function playRPS(playerChoice) {
    const choices = ['가위', '바위', '보'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    const resultDiv = document.getElementById('rps-result');
    let result;
    if (playerChoice === computerChoice) {
        result = '비겼습니다.';
    } else if (
        (playerChoice === '가위' && computerChoice === '보') ||
        (playerChoice === '바위' && computerChoice === '가위') ||
        (playerChoice === '보' && computerChoice === '바위')
    ) {
        result = `이겼습니다! 컴퓨터는 ${computerChoice}를 냈습니다.`;
    } else {
        result = `졌습니다. 컴퓨터는 ${computerChoice}를 냈습니다.`;
    }
    resultDiv.innerHTML = result;
}

function startBingo() {
    const content = document.getElementById('game-content');
    content.innerHTML = `
        <h2>빙고</h2>
        <p>간단한 빙고 게임 구현</p>
    `;
    // 추가적인 빙고 게임 로직을 여기에 작성하세요.
}

function startCustomGame() {
    const content = document.getElementById('game-content');
    content.innerHTML = `
        <h2>만들고 싶은 게임</h2>
        <p>자신이 만들고 싶은 게임을 구현하세요.</p>
    `;
    // 추가적인 커스텀 게임 로직을 여기에 작성하세요.
}
