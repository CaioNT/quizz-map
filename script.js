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

let currentCountry;
let score = 0;
let errors = 0;
let remainingCountries = [...countries];

// Elementos do DOM
const flagElement = document.getElementById('flag');
const answerInput = document.getElementById('answer');
const submitButton = document.getElementById('submit');
const scoreElement = document.getElementById('score');
const remainingElement = document.getElementById('remaining');
const feedbackElement = document.getElementById('feedback');
const donationLink = document.getElementById('donation-link');
const errorsElement = document.createElement('p');
errorsElement.id = 'errors';
document.querySelector('.score-container').appendChild(errorsElement);

// Função para normalizar strings (remover acentos e converter para minúsculas)
function normalizeString(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

// Função para verificar se a resposta está correta
function checkAnswer(userAnswer, correctAnswer) {
    const normalizedUserAnswer = normalizeString(userAnswer);
    const normalizedCorrectAnswer = normalizeString(correctAnswer);
    
    // Verifica se a resposta do usuário contém pelo menos 60% dos caracteres da resposta correta
    const similarity = calculateSimilarity(normalizedUserAnswer, normalizedCorrectAnswer);
    return similarity >= 0.6;
}

// Função para calcular a similaridade entre duas strings
function calculateSimilarity(str1, str2) {
    const longer = str1.length > str2.length ? str1 : str2;
    const shorter = str1.length > str2.length ? str2 : str1;
    const longerLength = longer.length;
    
    if (longerLength === 0) return 1.0;
    
    return (longerLength - editDistance(longer, shorter)) / longerLength;
}

// Função para calcular a distância de edição entre duas strings
function editDistance(s1, s2) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();

    const costs = [];
    for (let i = 0; i <= s1.length; i++) {
        let lastValue = i;
        for (let j = 0; j <= s2.length; j++) {
            if (i === 0) {
                costs[j] = j;
            } else {
                if (j > 0) {
                    let newValue = costs[j - 1];
                    if (s1.charAt(i - 1) !== s2.charAt(j - 1)) {
                        newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
                    }
                    costs[j - 1] = lastValue;
                    lastValue = newValue;
                }
            }
        }
        if (i > 0) costs[s2.length] = lastValue;
    }
    return costs[s2.length];
}

// Função para selecionar um país aleatório
function selectRandomCountry() {
    if (remainingCountries.length === 0) {
        showGameOver();
        return;
    }
    
    const randomIndex = Math.floor(Math.random() * remainingCountries.length);
    currentCountry = remainingCountries[randomIndex];
    flagElement.src = currentCountry.flag;
    answerInput.value = '';
    feedbackElement.textContent = '';
    remainingElement.textContent = remainingCountries.length;
}

// Função para mostrar o fim do jogo
function showGameOver() {
    flagElement.style.display = 'none';
    answerInput.style.display = 'none';
    submitButton.style.display = 'none';
    feedbackElement.textContent = `Parabéns! Você completou o jogo com ${score} pontos!`;
}

// Função para verificar a resposta do usuário
function checkUserAnswer() {
    const userAnswer = answerInput.value.trim();
    
    if (!userAnswer) {
        feedbackElement.textContent = 'Por favor, digite um país';
        return;
    }
    
    if (checkAnswer(userAnswer, currentCountry.name)) {
        score++;
        scoreElement.textContent = score;
        feedbackElement.textContent = 'Correto!';
        feedbackElement.style.color = 'green';
        
        // Remove o país atual da lista de países restantes
        remainingCountries = remainingCountries.filter(country => country !== currentCountry);
        
        // Aguarda 1 segundo antes de mostrar o próximo país
        setTimeout(selectRandomCountry, 1000);
    } else {
        errors++;
        errorsElement.textContent = `Erros: ${errors}`;
        feedbackElement.textContent = `Incorreto! O país era: ${currentCountry.name}`;
        feedbackElement.style.color = 'red';
        
        // Aguarda 2 segundos antes de mostrar o próximo país
        setTimeout(() => {
            remainingCountries = remainingCountries.filter(country => country !== currentCountry);
            selectRandomCountry();
        }, 2000);
    }
}

// Event listeners
submitButton.addEventListener('click', checkUserAnswer);
answerInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        checkUserAnswer();
    }
});

// Configurar o link de doação
donationLink.href = 'https://www.paypal.com/donate/?hosted_button_id=N75XKVAV7GZAY'; // Substitua pelo seu link de doação

// Iniciar o jogo
selectRandomCountry(); 