// Lista de países e suas bandeiras
const countries = [
    { name: 'Afeganistão', flag: 'https://flagcdn.com/w320/af.png' },
    { name: 'África do Sul', flag: 'https://flagcdn.com/w320/za.png' },
    { name: 'Albânia', flag: 'https://flagcdn.com/w320/al.png' },
    { name: 'Alemanha', flag: 'https://flagcdn.com/w320/de.png' },
    { name: 'Andorra', flag: 'https://flagcdn.com/w320/ad.png' },
    { name: 'Angola', flag: 'https://flagcdn.com/w320/ao.png' },
    { name: 'Antígua e Barbuda', flag: 'https://flagcdn.com/w320/ag.png' },
    { name: 'Arábia Saudita', flag: 'https://flagcdn.com/w320/sa.png' },
    { name: 'Argélia', flag: 'https://flagcdn.com/w320/dz.png' },
    { name: 'Argentina', flag: 'https://flagcdn.com/w320/ar.png' },
    { name: 'Armênia', flag: 'https://flagcdn.com/w320/am.png' },
    { name: 'Austrália', flag: 'https://flagcdn.com/w320/au.png' },
    { name: 'Áustria', flag: 'https://flagcdn.com/w320/at.png' },
    { name: 'Azerbaijão', flag: 'https://flagcdn.com/w320/az.png' },
    { name: 'Bahamas', flag: 'https://flagcdn.com/w320/bs.png' },
    { name: 'Bangladesh', flag: 'https://flagcdn.com/w320/bd.png' },
    { name: 'Barbados', flag: 'https://flagcdn.com/w320/bb.png' },
    { name: 'Barém', flag: 'https://flagcdn.com/w320/bh.png' },
    { name: 'Bélgica', flag: 'https://flagcdn.com/w320/be.png' },
    { name: 'Belize', flag: 'https://flagcdn.com/w320/bz.png' },
    { name: 'Benim', flag: 'https://flagcdn.com/w320/bj.png' },
    { name: 'Bielorrússia', flag: 'https://flagcdn.com/w320/by.png' },
    { name: 'Bolívia', flag: 'https://flagcdn.com/w320/bo.png' },
    { name: 'Bósnia e Herzegovina', flag: 'https://flagcdn.com/w320/ba.png' },
    { name: 'Botsuana', flag: 'https://flagcdn.com/w320/bw.png' },
    { name: 'Brasil', flag: 'https://flagcdn.com/w320/br.png' },
    { name: 'Brunei', flag: 'https://flagcdn.com/w320/bn.png' },
    { name: 'Bulgária', flag: 'https://flagcdn.com/w320/bg.png' },
    { name: 'Burkina Faso', flag: 'https://flagcdn.com/w320/bf.png' },
    { name: 'Burundi', flag: 'https://flagcdn.com/w320/bi.png' },
    { name: 'Butão', flag: 'https://flagcdn.com/w320/bt.png' },
    { name: 'Cabo Verde', flag: 'https://flagcdn.com/w320/cv.png' },
    { name: 'Camarões', flag: 'https://flagcdn.com/w320/cm.png' },
    { name: 'Camboja', flag: 'https://flagcdn.com/w320/kh.png' },
    { name: 'Canadá', flag: 'https://flagcdn.com/w320/ca.png' },
    { name: 'Catar', flag: 'https://flagcdn.com/w320/qa.png' },
    { name: 'Cazaquistão', flag: 'https://flagcdn.com/w320/kz.png' },
    { name: 'Chade', flag: 'https://flagcdn.com/w320/td.png' },
    { name: 'Chile', flag: 'https://flagcdn.com/w320/cl.png' },
    { name: 'China', flag: 'https://flagcdn.com/w320/cn.png' },
    { name: 'Chipre', flag: 'https://flagcdn.com/w320/cy.png' },
    { name: 'Colômbia', flag: 'https://flagcdn.com/w320/co.png' },
    { name: 'Comores', flag: 'https://flagcdn.com/w320/km.png' },
    { name: 'Congo', flag: 'https://flagcdn.com/w320/cg.png' },
    { name: 'Coreia do Norte', flag: 'https://flagcdn.com/w320/kp.png' },
    { name: 'Coreia do Sul', flag: 'https://flagcdn.com/w320/kr.png' },
    { name: 'Costa do Marfim', flag: 'https://flagcdn.com/w320/ci.png' },
    { name: 'Costa Rica', flag: 'https://flagcdn.com/w320/cr.png' },
    { name: 'Croácia', flag: 'https://flagcdn.com/w320/hr.png' },
    { name: 'Cuba', flag: 'https://flagcdn.com/w320/cu.png' },
    { name: 'Dinamarca', flag: 'https://flagcdn.com/w320/dk.png' },
    { name: 'Djibuti', flag: 'https://flagcdn.com/w320/dj.png' },
    { name: 'Dominica', flag: 'https://flagcdn.com/w320/dm.png' },
    { name: 'Egito', flag: 'https://flagcdn.com/w320/eg.png' },
    { name: 'El Salvador', flag: 'https://flagcdn.com/w320/sv.png' },
    { name: 'Emirados Árabes Unidos', flag: 'https://flagcdn.com/w320/ae.png' },
    { name: 'Equador', flag: 'https://flagcdn.com/w320/ec.png' },
    { name: 'Eritreia', flag: 'https://flagcdn.com/w320/er.png' },
    { name: 'Eslováquia', flag: 'https://flagcdn.com/w320/sk.png' },
    { name: 'Eslovênia', flag: 'https://flagcdn.com/w320/si.png' },
    { name: 'Espanha', flag: 'https://flagcdn.com/w320/es.png' },
    { name: 'Estados Unidos', flag: 'https://flagcdn.com/w320/us.png' },
    { name: 'Estônia', flag: 'https://flagcdn.com/w320/ee.png' },
    { name: 'Eswatini', flag: 'https://flagcdn.com/w320/sz.png' },
    { name: 'Etiópia', flag: 'https://flagcdn.com/w320/et.png' },
    { name: 'Fiji', flag: 'https://flagcdn.com/w320/fj.png' },
    { name: 'Filipinas', flag: 'https://flagcdn.com/w320/ph.png' },
    { name: 'Finlândia', flag: 'https://flagcdn.com/w320/fi.png' },
    { name: 'França', flag: 'https://flagcdn.com/w320/fr.png' },
    { name: 'Gabão', flag: 'https://flagcdn.com/w320/ga.png' },
    { name: 'Gâmbia', flag: 'https://flagcdn.com/w320/gm.png' },
    { name: 'Gana', flag: 'https://flagcdn.com/w320/gh.png' },
    { name: 'Geórgia', flag: 'https://flagcdn.com/w320/ge.png' },
    { name: 'Granada', flag: 'https://flagcdn.com/w320/gd.png' },
    { name: 'Grécia', flag: 'https://flagcdn.com/w320/gr.png' },
    { name: 'Guatemala', flag: 'https://flagcdn.com/w320/gt.png' },
    { name: 'Guiana', flag: 'https://flagcdn.com/w320/gy.png' },
    { name: 'Guiné', flag: 'https://flagcdn.com/w320/gn.png' },
    { name: 'Guiné Equatorial', flag: 'https://flagcdn.com/w320/gq.png' },
    { name: 'Guiné-Bissau', flag: 'https://flagcdn.com/w320/gw.png' },
    { name: 'Haiti', flag: 'https://flagcdn.com/w320/ht.png' },
    { name: 'Honduras', flag: 'https://flagcdn.com/w320/hn.png' },
    { name: 'Hungria', flag: 'https://flagcdn.com/w320/hu.png' },
    { name: 'Iêmen', flag: 'https://flagcdn.com/w320/ye.png' },
    { name: 'Ilhas Marshall', flag: 'https://flagcdn.com/w320/mh.png' },
    { name: 'Ilhas Salomão', flag: 'https://flagcdn.com/w320/sb.png' },
    { name: 'Índia', flag: 'https://flagcdn.com/w320/in.png' },
    { name: 'Indonésia', flag: 'https://flagcdn.com/w320/id.png' },
    { name: 'Irã', flag: 'https://flagcdn.com/w320/ir.png' },
    { name: 'Iraque', flag: 'https://flagcdn.com/w320/iq.png' },
    { name: 'Irlanda', flag: 'https://flagcdn.com/w320/ie.png' },
    { name: 'Islândia', flag: 'https://flagcdn.com/w320/is.png' },
    { name: 'Israel', flag: 'https://flagcdn.com/w320/il.png' },
    { name: 'Itália', flag: 'https://flagcdn.com/w320/it.png' },
    { name: 'Jamaica', flag: 'https://flagcdn.com/w320/jm.png' },
    { name: 'Japão', flag: 'https://flagcdn.com/w320/jp.png' },
    { name: 'Jordânia', flag: 'https://flagcdn.com/w320/jo.png' },
    { name: 'Kiribati', flag: 'https://flagcdn.com/w320/ki.png' },
    { name: 'Kuwait', flag: 'https://flagcdn.com/w320/kw.png' },
    { name: 'Laos', flag: 'https://flagcdn.com/w320/la.png' },
    { name: 'Lesoto', flag: 'https://flagcdn.com/w320/ls.png' },
    { name: 'Letônia', flag: 'https://flagcdn.com/w320/lv.png' },
    { name: 'Líbano', flag: 'https://flagcdn.com/w320/lb.png' },
    { name: 'Libéria', flag: 'https://flagcdn.com/w320/lr.png' },
    { name: 'Líbia', flag: 'https://flagcdn.com/w320/ly.png' },
    { name: 'Liechtenstein', flag: 'https://flagcdn.com/w320/li.png' },
    { name: 'Lituânia', flag: 'https://flagcdn.com/w320/lt.png' },
    { name: 'Luxemburgo', flag: 'https://flagcdn.com/w320/lu.png' },
    { name: 'Macedônia do Norte', flag: 'https://flagcdn.com/w320/mk.png' },
    { name: 'Madagascar', flag: 'https://flagcdn.com/w320/mg.png' },
    { name: 'Malásia', flag: 'https://flagcdn.com/w320/my.png' },
    { name: 'Malaui', flag: 'https://flagcdn.com/w320/mw.png' },
    { name: 'Maldivas', flag: 'https://flagcdn.com/w320/mv.png' },
    { name: 'Mali', flag: 'https://flagcdn.com/w320/ml.png' },
    { name: 'Malta', flag: 'https://flagcdn.com/w320/mt.png' },
    { name: 'Marrocos', flag: 'https://flagcdn.com/w320/ma.png' },
    { name: 'Maurício', flag: 'https://flagcdn.com/w320/mu.png' },
    { name: 'Mauritânia', flag: 'https://flagcdn.com/w320/mr.png' },
    { name: 'México', flag: 'https://flagcdn.com/w320/mx.png' },
    { name: 'Micronésia', flag: 'https://flagcdn.com/w320/fm.png' },
    { name: 'Moçambique', flag: 'https://flagcdn.com/w320/mz.png' },
    { name: 'Moldávia', flag: 'https://flagcdn.com/w320/md.png' },
    { name: 'Mônaco', flag: 'https://flagcdn.com/w320/mc.png' },
    { name: 'Mongólia', flag: 'https://flagcdn.com/w320/mn.png' },
    { name: 'Montenegro', flag: 'https://flagcdn.com/w320/me.png' },
    { name: 'Myanmar', flag: 'https://flagcdn.com/w320/mm.png' },
    { name: 'Namíbia', flag: 'https://flagcdn.com/w320/na.png' },
    { name: 'Nauru', flag: 'https://flagcdn.com/w320/nr.png' },
    { name: 'Nepal', flag: 'https://flagcdn.com/w320/np.png' },
    { name: 'Nicarágua', flag: 'https://flagcdn.com/w320/ni.png' },
    { name: 'Níger', flag: 'https://flagcdn.com/w320/ne.png' },
    { name: 'Nigéria', flag: 'https://flagcdn.com/w320/ng.png' },
    { name: 'Noruega', flag: 'https://flagcdn.com/w320/no.png' },
    { name: 'Nova Zelândia', flag: 'https://flagcdn.com/w320/nz.png' },
    { name: 'Omã', flag: 'https://flagcdn.com/w320/om.png' },
    { name: 'Países Baixos', flag: 'https://flagcdn.com/w320/nl.png' },
    { name: 'Palau', flag: 'https://flagcdn.com/w320/pw.png' },
    { name: 'Panamá', flag: 'https://flagcdn.com/w320/pa.png' },
    { name: 'Papua Nova Guiné', flag: 'https://flagcdn.com/w320/pg.png' },
    { name: 'Paquistão', flag: 'https://flagcdn.com/w320/pk.png' },
    { name: 'Paraguai', flag: 'https://flagcdn.com/w320/py.png' },
    { name: 'Peru', flag: 'https://flagcdn.com/w320/pe.png' },
    { name: 'Polônia', flag: 'https://flagcdn.com/w320/pl.png' },
    { name: 'Portugal', flag: 'https://flagcdn.com/w320/pt.png' },
    { name: 'Quênia', flag: 'https://flagcdn.com/w320/ke.png' },
    { name: 'Quirguistão', flag: 'https://flagcdn.com/w320/kg.png' },
    { name: 'Reino Unido', flag: 'https://flagcdn.com/w320/gb.png' },
    { name: 'República Centro-Africana', flag: 'https://flagcdn.com/w320/cf.png' },
    { name: 'República Democrática do Congo', flag: 'https://flagcdn.com/w320/cd.png' },
    { name: 'República Dominicana', flag: 'https://flagcdn.com/w320/do.png' },
    { name: 'República Tcheca', flag: 'https://flagcdn.com/w320/cz.png' },
    { name: 'Romênia', flag: 'https://flagcdn.com/w320/ro.png' },
    { name: 'Ruanda', flag: 'https://flagcdn.com/w320/rw.png' },
    { name: 'Rússia', flag: 'https://flagcdn.com/w320/ru.png' },
    { name: 'Samoa', flag: 'https://flagcdn.com/w320/ws.png' },
    { name: 'San Marino', flag: 'https://flagcdn.com/w320/sm.png' },
    { name: 'Santa Lúcia', flag: 'https://flagcdn.com/w320/lc.png' },
    { name: 'São Cristóvão e Névis', flag: 'https://flagcdn.com/w320/kn.png' },
    { name: 'São Tomé e Príncipe', flag: 'https://flagcdn.com/w320/st.png' },
    { name: 'São Vicente e Granadinas', flag: 'https://flagcdn.com/w320/vc.png' },
    { name: 'Seicheles', flag: 'https://flagcdn.com/w320/sc.png' },
    { name: 'Senegal', flag: 'https://flagcdn.com/w320/sn.png' },
    { name: 'Serra Leoa', flag: 'https://flagcdn.com/w320/sl.png' },
    { name: 'Sérvia', flag: 'https://flagcdn.com/w320/rs.png' },
    { name: 'Singapura', flag: 'https://flagcdn.com/w320/sg.png' },
    { name: 'Síria', flag: 'https://flagcdn.com/w320/sy.png' },
    { name: 'Somália', flag: 'https://flagcdn.com/w320/so.png' },
    { name: 'Sri Lanka', flag: 'https://flagcdn.com/w320/lk.png' },
    { name: 'Sudão', flag: 'https://flagcdn.com/w320/sd.png' },
    { name: 'Sudão do Sul', flag: 'https://flagcdn.com/w320/ss.png' },
    { name: 'Suécia', flag: 'https://flagcdn.com/w320/se.png' },
    { name: 'Suíça', flag: 'https://flagcdn.com/w320/ch.png' },
    { name: 'Suriname', flag: 'https://flagcdn.com/w320/sr.png' },
    { name: 'Tailândia', flag: 'https://flagcdn.com/w320/th.png' },
    { name: 'Taiwan', flag: 'https://flagcdn.com/w320/tw.png' },
    { name: 'Tajiquistão', flag: 'https://flagcdn.com/w320/tj.png' },
    { name: 'Tanzânia', flag: 'https://flagcdn.com/w320/tz.png' },
    { name: 'Timor-Leste', flag: 'https://flagcdn.com/w320/tl.png' },
    { name: 'Togo', flag: 'https://flagcdn.com/w320/tg.png' },
    { name: 'Tonga', flag: 'https://flagcdn.com/w320/to.png' },
    { name: 'Trinidad e Tobago', flag: 'https://flagcdn.com/w320/tt.png' },
    { name: 'Tunísia', flag: 'https://flagcdn.com/w320/tn.png' },
    { name: 'Turcomenistão', flag: 'https://flagcdn.com/w320/tm.png' },
    { name: 'Turquia', flag: 'https://flagcdn.com/w320/tr.png' },
    { name: 'Tuvalu', flag: 'https://flagcdn.com/w320/tv.png' },
    { name: 'Ucrânia', flag: 'https://flagcdn.com/w320/ua.png' },
    { name: 'Uganda', flag: 'https://flagcdn.com/w320/ug.png' },
    { name: 'Uruguai', flag: 'https://flagcdn.com/w320/uy.png' },
    { name: 'Uzbequistão', flag: 'https://flagcdn.com/w320/uz.png' },
    { name: 'Vanuatu', flag: 'https://flagcdn.com/w320/vu.png' },
    { name: 'Vaticano', flag: 'https://flagcdn.com/w320/va.png' },
    { name: 'Venezuela', flag: 'https://flagcdn.com/w320/ve.png' },
    { name: 'Vietnã', flag: 'https://flagcdn.com/w320/vn.png' },
    { name: 'Zâmbia', flag: 'https://flagcdn.com/w320/zm.png' },
    { name: 'Zimbábue', flag: 'https://flagcdn.com/w320/zw.png' }
];

// --- Variáveis Globais de Estado do Jogo ---
let currentCountry;
let score = 0;
let errors = 0;
let lives = 0;
let gameMode = null; // 'classic', 'hardcore', 'gnosis'
let maxCountries = 0; // Para modo clássico
let countriesPlayed = 0;
let countriesToPlay = [];
let currentOptions = [];
let timer;
let timeLeft = 5;
let streak = 0; // Contador de acertos consecutivos
let timerPaused = false;
let startTime = 0; // Tempo em que o timer iniciou
let pauseStartTime = 0; // Momento em que a pausa começou
let totalPausedTime = 0; // Tempo total acumulado em pausa
let animationFrameId = null; // ID para requestAnimationFrame
const CIRCLE_CIRCUMFERENCE = 283; // 2 * Math.PI * 45;
let currentGameDuration = 5; // Duração padrão, será ajustada

// --- Elementos do DOM ---
// Telas
const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');

// Tela de Início
const modeButtons = document.querySelectorAll('.mode-button');
const classicOptionsDiv = document.getElementById('classic-options');
const countryCountSelect = document.getElementById('country-count');
const startGameButton = document.getElementById('start-game');

// Tela do Jogo
const flagElement = document.getElementById('flag');
const optionButtons = document.querySelectorAll('.option');
const scoreElement = document.getElementById('score');
const scoreContainerP = scoreElement.parentElement; // Obtém o <p> pai
const remainingElement = document.getElementById('remaining');
const livesContainer = document.getElementById('lives-container');
const livesElement = document.getElementById('lives');
const errorsDisplay = document.getElementById('errors-display'); // Opcional
const errorsCountElement = document.getElementById('errors-count'); // Opcional
const timerContainer = document.querySelector('.timer-container');
const timerElement = document.getElementById('timer');
const feedbackElement = document.getElementById('feedback'); // Agora usado para fim de jogo
const playAgainButton = document.getElementById('play-again');
const returnToStartButton = document.getElementById('return-to-start'); // Novo botão
const donationLink = document.getElementById('donation-link');

// --- Lógica da Tela de Início ---
modeButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove seleção anterior
        modeButtons.forEach(btn => btn.classList.remove('selected'));
        // Seleciona o atual
        button.classList.add('selected');
        gameMode = button.dataset.mode;

        // Mostra/oculta opções do modo clássico
        if (gameMode === 'classic') {
            classicOptionsDiv.style.display = 'block';
        } else {
            classicOptionsDiv.style.display = 'none';
        }
        // Habilita botão iniciar
        startGameButton.disabled = false;
    });
});

startGameButton.addEventListener('click', () => {
    initializeGame();
    startScreen.style.display = 'none';
    gameScreen.style.display = 'block';
});

playAgainButton.addEventListener('click', () => {
    gameScreen.style.display = 'none';
    startScreen.style.display = 'block';
    feedbackElement.textContent = ''; // Limpa mensagem de fim de jogo
    playAgainButton.style.display = 'none'; // Oculta botão
    // Reseta seleção de modo na tela inicial
    modeButtons.forEach(btn => btn.classList.remove('selected'));
    classicOptionsDiv.style.display = 'none';
    startGameButton.disabled = true;
});

// Listener para o botão Voltar ao Início
returnToStartButton.addEventListener('click', () => {
    cancelAnimationFrame(animationFrameId); // Para o timer do jogo atual
    gameScreen.style.display = 'none';
    startScreen.style.display = 'block';
    // Reseta seleção de modo na tela inicial
    modeButtons.forEach(btn => btn.classList.remove('selected'));
    classicOptionsDiv.style.display = 'none';
    startGameButton.disabled = true;
});

// --- Inicialização e Reset do Jogo ---
function initializeGame() {
    score = 0;
    errors = 0;
    countriesPlayed = 0;
    streak = 0;
    cancelAnimationFrame(animationFrameId); 
    animationFrameId = null;
    timerPaused = false;
    totalPausedTime = 0;

    scoreElement.textContent = score;
    scoreContainerP.classList.remove('score-on-fire-parent');
    errorsCountElement.textContent = errors; 

    // Configurações baseadas no modo
    if (gameMode === 'classic') {
        maxCountries = parseInt(countryCountSelect.value);
        lives = Infinity; 
        timerContainer.style.display = 'none'; 
        livesContainer.style.display = 'none';
        errorsDisplay.style.display = 'block'; 
        currentGameDuration = Infinity; // Timer desabilitado
    } else {
        maxCountries = countries.length; 
        timerContainer.style.display = 'flex'; 
        livesContainer.style.display = 'block'; 
        errorsDisplay.style.display = 'none'; 
        if (gameMode === 'hardcore') {
            lives = 5;
            currentGameDuration = 5;
        } else { // gnosis
            lives = 3;
            currentGameDuration = 3; // Definir 3 segundos para Gnose
        }
        livesElement.textContent = lives;
    }

    // Prepara a lista de países para jogar
    countriesToPlay = [...countries]; // Copia a lista original
    shuffleArray(countriesToPlay); // Embaralha
    if (gameMode === 'classic' && maxCountries < countries.length) {
        countriesToPlay = countriesToPlay.slice(0, maxCountries); // Limita ao número escolhido
    }
    
    remainingElement.textContent = countriesToPlay.length;

    // Garante que elementos de jogo estejam visíveis (exceto os específicos de modo)
    flagElement.style.display = 'block';
    optionButtons.forEach(b => b.style.display = 'block');
    feedbackElement.textContent = '';
    playAgainButton.style.display = 'none';

    // Começa a primeira rodada
    selectRandomCountry(); 
}

// Função para embaralhar array (Fisher-Yates - Modifica no local)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Troca direta
    }
    // Não precisa retornar nada
}

// --- Lógica Principal do Jogo ---

// Função para selecionar 3 países aleatórios diferentes do país atual
function getRandomOptions(correctCountry) {
    const options = [correctCountry];
    const availableCountries = countries.filter(country => country.name !== correctCountry.name);
    
    while (options.length < 4) {
        const randomIndex = Math.floor(Math.random() * availableCountries.length);
        const randomCountry = availableCountries[randomIndex];
        if (!options.some(opt => opt.name === randomCountry.name)) {
            options.push(randomCountry);
        }
    }
    
    shuffleArray(options); // Embaralha a array 'options' diretamente
    return options; // Retorna a array já embaralhada
}

// Função para atualizar as opções na tela
function updateOptions(options) {
    optionButtons.forEach((button, index) => {
        button.textContent = options[index].name;
        // Habilita botões (caso tenham sido desabilitados)
        button.classList.remove('disabled', 'correct', 'incorrect'); 
    });
}

// Função para iniciar o timer (Apenas Hardcore/Gnosis)
function startTimer() {
    if (gameMode === 'classic') return; 

    cancelAnimationFrame(animationFrameId);
    timeLeft = currentGameDuration; // Usar a duração do modo atual
    timerElement.textContent = timeLeft;
    timerPaused = false;
    startTime = Date.now();
    totalPausedTime = 0;
    
    const progressCircle = document.querySelector('.timer-progress');
    progressCircle.style.strokeDashoffset = CIRCLE_CIRCUMFERENCE;
    
    animationFrameId = requestAnimationFrame(animateTimer);
}

// Loop de animação e lógica do timer (Apenas Hardcore/Gnosis)
function animateTimer(timestamp) {
    if (gameMode === 'classic') return;

    if (timerPaused) {
        animationFrameId = requestAnimationFrame(animateTimer);
        return;
    }

    const currentTime = Date.now();
    const elapsedTime = (currentTime - startTime - totalPausedTime) / 1000; 
    
    if (elapsedTime >= currentGameDuration) { // Usar a duração do modo atual
        timeLeft = 0;
        timerElement.textContent = timeLeft;
        const progressCircle = document.querySelector('.timer-progress');
        progressCircle.style.strokeDashoffset = 0; 
        
        handleIncorrectAnswer(null); 
        return; 
    }
    
    // Usar a duração do modo atual para calcular timeLeft e a fração
    timeLeft = Math.max(0, currentGameDuration - Math.floor(elapsedTime));
    timerElement.textContent = timeLeft;

    const timeFraction = elapsedTime / currentGameDuration; 
    const currentOffset = CIRCLE_CIRCUMFERENCE * (1 - timeFraction);
    const progressCircle = document.querySelector('.timer-progress');
    progressCircle.style.strokeDashoffset = Math.max(0, currentOffset);
    
    animationFrameId = requestAnimationFrame(animateTimer);
}

// Função para pausar o timer
function pauseTimer() {
    if (gameMode === 'classic') return;
    if (!timerPaused) {
        timerPaused = true;
        pauseStartTime = Date.now(); 
        console.log("Timer paused");
    }
}

// Função para retomar o timer
function resumeTimer() {
    if (gameMode === 'classic') return;
    if (timerPaused) {
        const pauseDuration = Date.now() - pauseStartTime; 
        totalPausedTime += pauseDuration; 
        timerPaused = false;
        // O loop animateTimer vai continuar no próximo frame
        console.log("Timer resumed");
    }
}

// Lida com resposta CORRETA
function handleCorrectAnswer(selectedButton) {
     score++;
     streak++;
     scoreElement.textContent = score;
     selectedButton.classList.add('correct');
     
     if (streak >= 3) {
         scoreContainerP.classList.add('score-on-fire-parent');
     }
     
     optionButtons.forEach(button => button.classList.add('disabled'));

     // Prepara próxima rodada ou fim de jogo
     setTimeout(() => {
        nextRoundOrEndGame();
     }, 1000); // Tempo menor para resposta correta
}

// Lida com resposta INCORRETA (ou tempo esgotado)
function handleIncorrectAnswer(selectedButton) {
    errors++;
    streak = 0;
    scoreContainerP.classList.remove('score-on-fire-parent');
    errorsCountElement.textContent = errors; 

    if (gameMode !== 'classic') {
        lives--;
        livesElement.textContent = lives;
    }

    // Mostra feedback visual
    const correctButton = Array.from(optionButtons).find(button => 
        currentOptions[parseInt(button.dataset.option) - 1].name === currentCountry.name
    );
    if (selectedButton) { // Se não foi tempo esgotado
        selectedButton.classList.add('incorrect');
    }
    if (correctButton) { 
       correctButton.classList.add('correct');
    }
    optionButtons.forEach(button => button.classList.add('disabled'));

    // Verifica se o jogo acabou (sem vidas)
    if (gameMode !== 'classic' && lives <= 0) {
        cancelAnimationFrame(animationFrameId); 
        setTimeout(() => showGameOver(true), 2000); // Adiciona delay antes de mostrar fim de jogo por vidas
    } else {
        // Prepara próxima rodada
        setTimeout(() => {
            nextRoundOrEndGame();
        }, 2000); // Tempo maior para resposta incorreta
    }
}

// Função para verificar a resposta
function checkAnswer(selectedOption) {
    cancelAnimationFrame(animationFrameId); // Para o timer assim que responder
    timerPaused = false; // Garante que não está pausado

    const selectedButton = optionButtons[selectedOption - 1];
    const selectedCountry = currentOptions[selectedOption - 1];
    const isCorrect = selectedCountry.name === currentCountry.name;
    
    if (isCorrect) {
        handleCorrectAnswer(selectedButton);
    } else {
        handleIncorrectAnswer(selectedButton);
    }
}

// Função que decide se vai para próxima rodada ou termina
function nextRoundOrEndGame() {
     countriesPlayed++;
     if (countriesToPlay.length > 0) {
         selectRandomCountry(); // Próxima rodada
     } else {
         showGameOver(false); // Fim de jogo (completou ou zerou vidas)
     }
}

// Função para selecionar o próximo país
function selectRandomCountry() {
    if (countriesToPlay.length === 0) {
        showGameOver(false); // Não deveria acontecer aqui, mas por segurança
        return;
    }

    currentCountry = countriesToPlay.shift(); // Pega e remove o próximo país da lista
        
    flagElement.src = currentCountry.flag;
    currentOptions = getRandomOptions(currentCountry);
    updateOptions(currentOptions); // Reseta botões visualmente
    
    remainingElement.textContent = countriesToPlay.length;
    
    // Reinicia o timer (se aplicável)
    startTimer(); 
}

// --- Efeitos Visuais ---
function launchFireworks(particleCount = 30) {
    const colors = ['#ff4500', '#ffa500', '#ffd700', '#ffeb3b', '#ffc107']; // Cores quentes
    const container = document.body; // Adiciona ao body para cobrir a tela

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('firework-particle');

        // Posição inicial e cor aleatórias
        const startX = 40 + Math.random() * 20; // Lança de uma área central (40% a 60%)
        const color = colors[Math.floor(Math.random() * colors.length)];
        particle.style.left = `${startX}%`;
        particle.style.backgroundColor = color;

        // Trajetória e duração aleatórias
        const translateX = (Math.random() - 0.5) * 800; // Movimento horizontal (-400px a +400px)
        const translateY = -(window.innerHeight * 0.6 + Math.random() * window.innerHeight * 0.3); // Sobe 60-90% da tela
        const duration = 1.5 + Math.random() * 1.5; // Duração entre 1.5s e 3s
        const delay = Math.random() * 0.5; // Pequeno delay aleatório para não lançar tudo junto

        particle.style.setProperty('--tx', `${translateX}px`);
        particle.style.setProperty('--ty', `${translateY}px`);

        particle.style.animation = `firework-burst ${duration}s cubic-bezier(0.1, 0.8, 0.2, 1) ${delay}s forwards`;

        // Remove a partícula do DOM após a animação
        particle.addEventListener('animationend', () => {
            particle.remove();
        });

        container.appendChild(particle);
    }
}

// Função para mostrar o fim do jogo
function showGameOver(lostByLives) {
    cancelAnimationFrame(animationFrameId); 
    flagElement.style.display = 'none';
    optionButtons.forEach(button => button.style.display = 'none');
    timerContainer.style.display = 'none'; 

    let message = "";
    let perfectScore = false; // Flag para vitória perfeita

    if (lostByLives) {
        message = `Fim de jogo! Você ficou sem vidas. Pontuação final: ${score}.`;
    } else if (gameMode === 'classic') {
        const percentage = maxCountries > 0 ? (score / maxCountries) * 100 : 0;
        if (errors === 0 && score === maxCountries) { // Vitória perfeita no clássico
            message = `PERFEITO! Você acertou todas as ${maxCountries} bandeiras sem erros! Incrível!`;
            perfectScore = true;
        } else if (score === 0) {
            message = `Fim de jogo! Você não acertou nenhuma das ${maxCountries} bandeiras. Que tal tentar de novo?`;
        } else if (score < maxCountries / 2) {
            message = `Fim de jogo! Você acertou ${score} de ${maxCountries} bandeiras (${percentage.toFixed(0)}%). Continue praticando!`;
        } else {
            message = `Parabéns! Você completou o modo Clássico (${maxCountries} países) com ${score} acertos (${percentage.toFixed(0)}%) e ${errors} erros.`;
        }
    } else { // Hardcore ou Gnosis
         if (errors === 0) { // Sobreviveu sem erros
             message = `IMPECÁVEL! Você zerou o modo ${gameMode === 'hardcore' ? 'Hardcore' : 'Gnose-Suprema'} sem erros! Pontuação final: ${score}.`;
             perfectScore = true;
         } else {
             message = `Parabéns! Você sobreviveu ao modo ${gameMode === 'hardcore' ? 'Hardcore' : 'Gnose-Suprema'}! Pontuação final: ${score}.`;
         }
    }
    
    feedbackElement.textContent = message;
    feedbackElement.style.display = 'block'; 
    playAgainButton.style.display = 'block'; 

    // Lança os fogos se for vitória perfeita
    if (perfectScore) {
        launchFireworks(50); // Lança 50 partículas
    }
}

// Configurar o link de doação
donationLink.href = 'https://www.paypal.com/donate/?hosted_button_id=N75XKVAV7GZAY'; 

// Event listener para visibilidade da página
document.addEventListener('visibilitychange', () => {
    if (gameScreen.style.display !== 'none') { // Só pausa/retoma se o jogo estiver ativo
        if (document.hidden) {
            pauseTimer();
        } else {
            resumeTimer();
        }
    }
});

// Adicionar event listeners para os botões de opção
optionButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Só processa clique se o botão não estiver desabilitado
        if (!button.classList.contains('disabled')) {
             const selectedOption = parseInt(button.dataset.option);
             checkAnswer(selectedOption);
        }
    });
}); 

// Não iniciar o jogo automaticamente, esperar seleção do usuário
// selectRandomCountry(); 