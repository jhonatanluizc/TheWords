const words = [
  {word: 'A few', translate: ['Alguns', 'Poucos']},
  {word: 'A little', translate: ['Um pouco']},
  {word: 'Although', translate: ['Embora']},
  {word: 'Apart from', translate: ['Além de', 'Exceto']},
  {word: 'Appear', translate: ['Aparecer']},
  {word: 'Appearance', translate: ['Aparência']},
  {word: 'Approach', translate: ['Abordar', 'Aproximar']},
  {word: 'Arrest', translate: ['Prender', 'Detenção']},
  {word: 'Arrive', translate: ['Chegar']},
  {word: 'As soon as possible', translate: ['O mais rápido possível']},
  {word: 'As well', translate: ['Também']},
  {word: 'As well as', translate: ['Assim como', 'Bem como']},
  {word: 'At least', translate: ['Pelo menos']},
  {word: 'At once', translate: ['Imediatamente', 'De uma vez']},
  {word: 'Aware of', translate: ['Ciente de']},
  {word: 'Baker’s', translate: ['Padaria']},
  {word: 'Baltic', translate: ['Báltico']},
  {word: 'Be against', translate: ['Ser contra']},
  {word: 'Be asleep', translate: ['Estar dormindo']},
  {word: 'Be awake', translate: ['Estar acordado']},
  {word: 'Be for', translate: ['Ser a favor']},
  {word: 'Be in a hurry', translate: ['Estar com pressa']},
  {word: 'Behave', translate: ['Comportar-se']},
  {word: 'Behaviour', translate: ['Comportamento']},
  {word: 'Belong to', translate: ['Pertencer a']},
  {word: 'Belt', translate: ['Cinto']},
  {word: 'Boil', translate: ['Ferver']},
  {word: 'Break down', translate: ['Quebrar', 'Avaria']},
  {word: 'Briefcase', translate: ['Pasta', 'Maleta']},
  {word: 'Busy', translate: ['Ocupado']},
  {word: 'By accident', translate: ['Por acidente']},
  {word: 'Cap', translate: ['Boné']},
  {word: 'Care', translate: ['Cuidar', 'Cuidado']},
  {word: 'Care about', translate: ['Preocupar-se com']},
  {word: 'Care for', translate: ['Cuidar de', 'Gostar de']},
  {word: 'Carefully', translate: ['Cuidadosamente']},
  {word: 'Careless', translate: ['Descuidado']},
  {word: 'Carelessly', translate: ['De forma descuidada']},
  {word: 'Catch', translate: ['Pegar', 'Capturar']},
  {word: 'Chalk', translate: ['Giz']},
  {word: 'Character', translate: ['Personagem', 'Caráter']},
  {word: 'Chemist’s', translate: ['Farmácia']},
  {word: 'Christian', translate: ['Cristão']},
  {word: 'Clever', translate: ['Esperto', 'Inteligente']},
  {word: 'Coast', translate: ['Costa', 'Litoral']},
  {word: 'Comment', translate: ['Comentário']},
  {word: 'Commit', translate: ['Cometer', 'Comprometer-se']},
  {word: 'Consist of', translate: ['Consistir em']},
  {word: 'Couple', translate: ['Casal', 'Par']},
  {word: 'Crowd', translate: ['Multidão']},
  {word: 'Crowded', translate: ['Lotado']},
  {word: 'Dairy', translate: ['Laticínios']},
  {word: 'Degree', translate: ['Grau', 'Diploma']},
  {word: 'Despite', translate: ['Apesar de']},
  {word: 'Diary', translate: ['Diário']},
  {word: 'Dig', translate: ['Cavar']},
  {word: 'Do the shopping', translate: ['Fazer as compras']},
  {word: 'Dry', translate: ['Seco', 'Secar']},
  {word: 'Each other', translate: ['Um ao outro']},
  {word: 'Either', translate: ['Qualquer um', 'Ou']},
  {word: 'Else', translate: ['Outro', 'Mais']},
  {word: 'Even', translate: ['Mesmo', 'Até']},
  {word: 'Even though', translate: ['Embora', 'Mesmo que']},
  {word: 'Every now and again', translate: ['De vez em quando']},
  {word: 'Fail', translate: ['Falhar']},
  {word: 'Fashionable', translate: ['Elegante', 'Na moda']},
  {word: 'Fault', translate: ['Falha', 'Defeito']},
  {word: 'Faultless', translate: ['Irrepreensível', 'Sem falhas']},
  {word: 'Faulty', translate: ['Defeituoso']},
  {word: 'Feel sorry for', translate: ['Sentir pena de']},
  {word: 'Finally', translate: ['Finalmente']},
  {word: 'Flat tyre', translate: ['Pneu furado']},
  {word: 'For life', translate: ['Para a vida toda']},
  {word: 'Get on well', translate: ['Dar-se bem']},
  {word: 'Give back', translate: ['Devolver']},
  {word: 'Give up', translate: ['Desistir']},
  {word: 'Greet', translate: ['Cumprimentar']},
  {word: 'Greeting', translate: ['Cumprimento']},
  {word: 'Grow', translate: ['Crescer', 'Cultivar']},
  {word: 'Guest', translate: ['Hóspede', 'Convidado']},
  {word: 'Guilty', translate: ['Culpado']},
  {word: 'Hairdryer', translate: ['Secador de cabelo']},
  {word: 'Hall', translate: ['Salão', 'Corredor']},
  {word: 'Happiness', translate: ['Felicidade']},
  {word: 'Headline', translate: ['Manchete']},
  {word: 'However', translate: ['No entanto', 'Contudo']},
  {word: 'Hurry', translate: ['Pressa']},
  {word: 'Illness', translate: ['Doença']},
  {word: 'In spite of', translate: ['Apesar de']},
  {word: 'It takes', translate: ['Leva', 'Demora']},
  {word: 'Judge', translate: ['Juiz', 'Julgar']},
  {word: 'Kick', translate: ['Chutar']},
  {word: 'Knock', translate: ['Bater', 'Golpear']},
  {word: 'Lack', translate: ['Falta']},
  {word: 'Let', translate: ['Deixar', 'Permitir']},
  {word: 'Let down', translate: ['Decepcionar', 'Desapontar']},
  {word: 'Liar', translate: ['Mentiroso']},
  {word: 'Lie', translate: ['Mentir', 'Mentira']},
  {word: 'Look as if', translate: ['Parecer que']},
  {word: 'Look for', translate: ['Procurar por']},
  {word: 'Look forward to', translate: ['Aguardar ansiosamente']},
  {word: 'Look like', translate: ['Parecer com']},
  {word: 'Look up', translate: ['Procurar (informação)', 'Melhorar']},
  {word: 'Loud', translate: ['Alto (som)']},
  {word: 'Mad', translate: ['Louco']},
  {word: 'Make up for', translate: ['Compensar']},
  {word: 'May', translate: ['Poder', 'Maio']},
  {word: 'Might', translate: ['Poderia']},
  {word: 'Neighbour', translate: ['Vizinho']},
  {word: 'Nowadays', translate: ['Hoje em dia']},
  {word: 'Ought to', translate: ['Deveria']},
  {word: 'Owe', translate: ['Dever']},
  {word: 'Own', translate: ['Próprio', 'Possuir']},
  {word: 'Partly', translate: ['Parcialmente']},
  {word: 'Pill', translate: ['Pílula']},
  {word: 'Pilot', translate: ['Piloto', 'Pilotar']},
  {word: 'Plenty of', translate: ['Bastante', 'Muito']},
  {word: 'Probably', translate: ['Provavelmente']},
  {word: 'Quickly', translate: ['Rapidamente']},
  {word: 'Railway', translate: ['Ferrovia']},
  {word: 'Razor', translate: ['Navalha', 'Aparelho de barbear']},
  {word: 'Reach', translate: ['Alcançar']},
  {word: 'React', translate: ['Reagir']},
  {word: 'Reason', translate: ['Razão', 'Motivo']},
  {word: 'Recognize', translate: ['Reconhecer']},
  {word: 'Refund', translate: ['Reembolso', 'Reembolsar']},
  {word: 'Remain', translate: ['Permanecer']},
  {word: 'Remind', translate: ['Lembrar', 'Recordar']},
  {word: 'Ride', translate: ['Andar', 'Passeio']},
  {word: 'Rise', translate: ['Subir', 'Aumentar']},
  {word: 'Sauce', translate: ['Molho']},
  {word: 'Seat belt', translate: ['Cinto de segurança']},
  {word: 'Several', translate: ['Vários']},
  {word: 'Shake', translate: ['Agitar', 'Sacudir']},
  {word: 'Shake hands', translate: ['Cumprimentar com um aperto de mãos']},
  {word: 'Shave', translate: ['Barbear-se']},
  {word: 'Shaving cream', translate: ['Creme de barbear']},
  {word: 'Shaving foam', translate: ['Espuma de barbear']},
  {word: 'Shy', translate: ['Tímido']},
  {word: 'Single', translate: ['Solteiro', 'Único']},
  {word: 'So (that)', translate: ['Então (que)', 'De modo que']},
  {word: 'So', translate: ['Então', 'Portanto']},
  {word: 'Soon', translate: ['Em breve', 'Logo']},
  {word: 'Sore throat', translate: ['Dor de garganta']},
  {word: 'Staff', translate: ['Equipe', 'Funcionários']},
  {word: 'Statement', translate: ['Declaração']},
  {word: 'Stocking', translate: ['Meia-calça']},
  {word: 'Subject', translate: ['Assunto', 'Sujeito', 'Matéria']},
  {word: 'Suburb', translate: ['Subúrbio']},
  {word: 'Subway', translate: ['Metrô']},
  {word: 'Suitcase', translate: ['Mala']},
  {word: 'Swimming pool', translate: ['Piscina']},
  {word: 'Swimsuit', translate: ['Roupa de banho']},
  {word: 'Take the trouble', translate: ['Tomar a iniciativa', 'Se dar ao trabalho']},
  {word: 'Take to court', translate: ['Levar ao tribunal']},
  {word: 'The tube', translate: ['O metrô (em Londres)']},
  {word: 'Thin', translate: ['Magro', 'Fino']},
  {word: 'Throat', translate: ['Garganta']},
  {word: 'Through', translate: ['Através de']},
  {word: 'Throw', translate: ['Jogar', 'Lançar']},
  {word: 'Thrown', translate: ['Jogou', 'Lançou']},
  {word: 'Tick', translate: ['Marcar (com um tique)']},
  {word: 'Tidy', translate: ['Arrumar', 'Organizar']},
  {word: 'Till', translate: ['Até']},
  {word: 'Tiny', translate: ['Minúsculo']},
  {word: 'Towards', translate: ['Em direção a']},
  {word: 'Towel', translate: ['Toalha']},
  {word: 'Tune', translate: ['Melodia', 'Sintonizar']},
  {word: 'Tyre', translate: ['Pneu']},
  {word: 'Unless', translate: ['A menos que']},
  {word: 'Useful', translate: ['Útil']},
  {word: 'Useless', translate: ['Inútil']},
  {word: 'Wake up', translate: ['Acordar']},
  {word: 'Waste', translate: ['Desperdiçar', 'Desperdício']},
  {word: 'Wedding', translate: ['Casamento']},
  {word: 'Wedding ring', translate: ['Aliança de casamento']},
  {word: 'Wet', translate: ['Molhado']},
  {word: 'Whether', translate: ['Se']},
  {word: 'Whole', translate: ['Todo', 'Inteiro']},
  {word: 'Wisdom', translate: ['Sabedoria']},
  {word: 'Wise', translate: ['Sábio']},
  {word: 'Within', translate: ['Dentro de']},
  {word: 'Woken up', translate: ['Acordado']},
  {word: 'Wool', translate: ['Lã']},
  {word: 'Worry', translate: ['Preocupar', 'Preocupação']}
];

// Função para escolher uma palavra aleatória do array
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

// Função para gerar as alternativas de tradução
function generateOptions(wordObj) {
  let options = [];
  // Adiciona a tradução correta
  let correctTranslation = wordObj.translate[0];
  options.push(correctTranslation);
  
  // Adiciona três traduções aleatórias de outras palavras
  while (options.length < 4) {
    let randomWord = getRandomWord();
    if (!options.includes(randomWord.translate[0]) && randomWord.translate[0] !== correctTranslation) {
      options.push(randomWord.translate[0]);
    }
  }
  
  // Embaralha as opções para que a correta não seja sempre a primeira
  options.sort(() => Math.random() - 0.5);
  
  return options;
}

// Função principal para executar o quiz
function startQuiz() {
  // Escolhe uma palavra aleatória
  let wordObj = getRandomWord();
  let word = wordObj.word;
  let options = generateOptions(wordObj);
  
  console.log(`Qual é a tradução de "${word}"?`);
  console.log('Opções:');
  options.forEach((option, index) => {
    console.log(`${index + 1}. ${option}`);
  });
  
  // Simulação da escolha do usuário (aqui pode ser interativo numa aplicação real)
  let userChoice = options[0]; // Escolhe a primeira opção por simplicidade
  
  // Verifica se a escolha do usuário está correta
  if (userChoice === wordObj.translate[0]) {
    console.log('Correto! Parabéns!');
  } else {
    console.log(`Incorreto. A tradução correta é "${wordObj.translate[0]}".`);
  }
}

// Executa o quiz ao chamar a função startQuiz()
startQuiz();

