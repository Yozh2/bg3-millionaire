import React, { useState, useEffect } from 'react';

const TrophyIcon = () => (
  <svg viewBox="0 0 64 64" className="w-24 h-24 mx-auto">
    <path d="M16 8h32v4H16z" fill="#c9a227"/>
    <path d="M18 12h28v20c0 8-6 14-14 14s-14-6-14-14V12z" fill="#f4d03f"/>
    <path d="M22 16h20v16c0 6-4 10-10 10s-10-4-10-10V16z" fill="#c9a227"/>
    <path d="M8 12h10v8c0 4-2 6-5 6s-5-2-5-6v-8z" fill="#f4d03f"/>
    <path d="M46 12h10v8c0 4-2 6-5 6s-5-2-5-6v-8z" fill="#f4d03f"/>
    <path d="M26 46h12v4H26z" fill="#c9a227"/>
    <path d="M22 50h20v6H22z" fill="#8b7355"/>
    <path d="M18 56h28v4H18z" fill="#a08060"/>
  </svg>
);

const MoneyIcon = () => (
  <svg viewBox="0 0 64 64" className="w-24 h-24 mx-auto">
    <circle cx="32" cy="32" r="28" fill="#2d5016" stroke="#4a7c23" strokeWidth="4"/>
    <circle cx="32" cy="32" r="22" fill="#3d6b1c"/>
    <text x="32" y="42" textAnchor="middle" fontSize="28" fontWeight="bold" fill="#8bc34a">$</text>
  </svg>
);

const SkullIcon = () => (
  <svg viewBox="0 0 64 64" className="w-24 h-24 mx-auto">
    <ellipse cx="32" cy="28" rx="20" ry="22" fill="#e8e8e8"/>
    <ellipse cx="24" cy="26" rx="6" ry="8" fill="#1a1a1a"/>
    <ellipse cx="40" cy="26" rx="6" ry="8" fill="#1a1a1a"/>
    <path d="M26 42h12v4H26z" fill="#1a1a1a"/>
    <path d="M24 50h4v8h-4zM28 50h4v6h-4zM32 50h4v6h-4zM36 50h4v8h-4z" fill="#e8e8e8"/>
  </svg>
);

const MindFlayerIcon = () => (
  <svg viewBox="0 0 64 64" className="w-16 h-16 mx-auto">
    <ellipse cx="32" cy="26" rx="16" ry="20" fill="#7c3aed"/>
    <ellipse cx="26" cy="22" rx="4" ry="6" fill="#000"/>
    <ellipse cx="38" cy="22" rx="4" ry="6" fill="#000"/>
    <path d="M24 42c0 2 2 4 4 6M32 42c0 3 0 6 0 8M40 42c0 2-2 4-4 6M28 42c0 2 0 5 0 7" stroke="#5b21b6" strokeWidth="3" fill="none" strokeLinecap="round"/>
  </svg>
);

const DarkUrgeIcon = () => (
  <svg viewBox="0 0 64 64" className="w-16 h-16 mx-auto">
    <ellipse cx="32" cy="30" rx="18" ry="22" fill="#450a0a"/>
    <ellipse cx="32" cy="28" rx="14" ry="18" fill="#7f1d1d"/>
    <circle cx="26" cy="26" r="4" fill="#dc2626"/>
    <circle cx="38" cy="26" r="4" fill="#dc2626"/>
    <circle cx="26" cy="26" r="2" fill="#000"/>
    <circle cx="38" cy="26" r="2" fill="#000"/>
    <path d="M26 36c2 3 4 4 6 4s4-1 6-4" stroke="#450a0a" strokeWidth="2" fill="none"/>
    <path d="M20 20c-2-4-4-6-6-6M44 20c2-4 4-6 6-6M32 10c0-4 0-6 0-8" stroke="#7f1d1d" strokeWidth="3" strokeLinecap="round"/>
    <path d="M28 44l-4 8M36 44l4 8" stroke="#450a0a" strokeWidth="2" fill="none"/>
  </svg>
);

const SwordIcon = () => (
  <svg viewBox="0 0 64 64" className="w-16 h-16 mx-auto">
    <rect x="28" y="4" width="8" height="40" fill="#94a3b8" rx="2"/>
    <rect x="26" y="42" width="12" height="6" fill="#475569"/>
    <rect x="20" y="48" width="24" height="4" fill="#334155"/>
    <path d="M30 6h4v36h-4z" fill="#cbd5e1"/>
  </svg>
);

const CoinIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 inline-block mr-1">
    <circle cx="12" cy="12" r="10" fill="#fbbf24" stroke="#d97706" strokeWidth="1.5"/>
    <circle cx="12" cy="12" r="7" fill="#fcd34d" stroke="#f59e0b" strokeWidth="1"/>
    <text x="12" y="16" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#92400e">G</text>
  </svg>
);

const ScrollIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 inline-block mr-1">
    <path d="M6 2h12c1 0 2 1 2 2v16c0 1-1 2-2 2H6c-1 0-2-1-2-2V4c0-1 1-2 2-2z" fill="#f5deb3" stroke="#8b7355" strokeWidth="1.5"/>
    <path d="M8 6h8M8 10h8M8 14h6" stroke="#6b5d4f" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M18 2c.5 0 1 .3 1 .8v2.4c0 .5-.5.8-1 .8M6 2c-.5 0-1 .3-1 .8v2.4c0 .5.5.8 1 .8" fill="#d4a574"/>
  </svg>
);

const TavernIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 inline-block mr-1">
    <path d="M8 8c0-2 1-3 2-3h4c1 0 2 1 2 3v8h-8V8z" fill="#8b4513" stroke="#654321" strokeWidth="1"/>
    <ellipse cx="12" cy="8" rx="4" ry="2" fill="#d4a574"/>
    <path d="M10 11h4v5h-4z" fill="#c19a6b"/>
    <circle cx="12" cy="13" r="1.5" fill="#fbbf24"/>
    <path d="M15 17h2l.5 3h-3l.5-3zM9 17H7l-.5 3h3l-.5-3z" fill="#654321"/>
  </svg>
);

const StarIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 inline-block">
    <path d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" fill="#f4d03f"/>
  </svg>
);

const questions = [
  {
    question: "Какая раса известна своей связью с Астральным Планом и способностью к псионике?",
    answers: ["Люди", "Гитьянки", "Дроу", "Полуэльфы"],
    correct: 1,
    difficulty: 1
  },
  {
    question: "Как зовут вампира-спутника, который может присоединиться к вашей группе?",
    answers: ["Гейл", "Астарион", "Уилл", "Халсин"],
    correct: 1,
    difficulty: 1
  },
  {
    question: "Какая богиня является покровительницей магии в Забытых Королевствах?",
    answers: ["Селунэ", "Шар", "Мистра", "Сьюн"],
    correct: 2,
    difficulty: 2
  },
  {
    question: "Кто является лидером культа Абсолюта в начале игры?",
    answers: ["Кетерик Торм", "Орин Красная", "Энвер Гортэш", "Все трое"],
    correct: 3,
    difficulty: 2
  },
  {
    question: "Какое существо паразитирует в голове главного героя?",
    answers: ["Интеллект пожиратель", "Личинка свежевателя разума", "Иллитид", "Церебральный паразит"],
    correct: 1,
    difficulty: 3
  },
  {
    question: "Как называется город, где происходит большая часть событий третьего акта?",
    answers: ["Невервинтер", "Врата Балдура", "Уотердип", "Атката"],
    correct: 1,
    difficulty: 3
  },
  {
    question: "Какой металл используется для создания оружия против свежевателей разума?",
    answers: ["Адамантин", "Митрил", "Серебро", "Холодное железо"],
    correct: 0,
    difficulty: 1
  },
  {
    question: "Кто является богиней тьмы и потери, сестрой Селунэ?",
    answers: ["Ллос", "Тиамат", "Шар", "Талона"],
    correct: 2,
    difficulty: 4
  },
  {
    question: "Как называется способность, позволяющая видеть в темноте?",
    answers: ["Ночное видение", "Тёмное зрение", "Сумеречное зрение", "Теневое зрение"],
    correct: 1,
    difficulty: 2
  },
  {
    question: "Какой артефакт необходим для уничтожения Абсолюта?",
    answers: ["Нетерильские камни", "Корона Карсуса", "Око Бхаала", "Сфера Аннигиляции"],
    correct: 0,
    difficulty: 4
  },
  {
    question: "Как называется древняя магическая империя, создавшая Корону Карсуса?",
    answers: ["Калимшан", "Нетерил", "Миф Драннор", "Кормир"],
    correct: 1,
    difficulty: 3
  },
  {
    question: "Какое проклятие несёт Шэдоухарт в начале игры?",
    answers: ["Вампиризм", "Проклятие оборотня", "Рана Шар", "Метка дьявола"],
    correct: 2,
    difficulty: 5
  },
  {
    question: "Кто из этих персонажей НЕ может стать романтическим партнёром?",
    answers: ["Карлах", "Минтара", "Джахейра", "Минск"],
    correct: 3,
    difficulty: 2
  },
  {
    question: "Как называется демоническая сущность, с которой заключил пакт Уилл?",
    answers: ["Мефистофель", "Зариэль", "Мизора", "Аскодей"],
    correct: 2,
    difficulty: 4
  },
  {
    question: "Какой титул носит герцог Равенгард в Вратах Балдура?",
    answers: ["Великий герцог", "Верховный маршал", "Лорд-командующий", "Регент"],
    correct: 0,
    difficulty: 5
  }
];

const prizes = [
  "500", "1,000", "2,000", "3,000", "5,000",
  "10,000", "15,000", "25,000", "50,000", "100,000",
  "200,000", "400,000", "800,000", "1,500,000", "3,000,000"
];

const guaranteedPrizes = [4, 9, 14];

interface Question {
  question: string;
  answers: string[];
  correct: number;
  difficulty: number;
}

interface PhoneHint {
  type: 'phone';
  name: string;
  text: string;
}

interface AudienceHint {
  type: 'audience';
  percentages: number[];
}

type Hint = PhoneHint | AudienceHint | null;

export default function BG3Millionaire() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [gameState, setGameState] = useState('start');
  const [fiftyFifty, setFiftyFifty] = useState(true);
  const [phoneAFriend, setPhoneAFriend] = useState(true);
  const [askAudience, setAskAudience] = useState(true);
  const [eliminatedAnswers, setEliminatedAnswers] = useState<number[]>([]);
  const [showHint, setShowHint] = useState<Hint>(null);
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const [wonPrize, setWonPrize] = useState("0");
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [, setMusicLoaded] = useState(false);

  useEffect(() => {
    // Сортируем вопросы по сложности от простых к сложным
    const sorted = [...questions].sort((a, b) => a.difficulty - b.difficulty);
    setShuffledQuestions(sorted);
  }, []);

  const toggleMusic = () => {
    const audio = document.getElementById('bg-music') as HTMLAudioElement | null;
    if (audio) {
      if (isMusicPlaying) {
        audio.pause();
        setIsMusicPlaying(false);
        console.log('Music paused');
      } else {
        audio.play().then(() => {
          setIsMusicPlaying(true);
          console.log('Music playing');
        }).catch((err: Error) => {
          console.log('Music play failed:', err);
        });
      }
    }
  };

  useEffect(() => {
    // Сортируем вопросы по сложности от простых к сложным
    const sorted = [...questions].sort((a, b) => a.difficulty - b.difficulty);
    setShuffledQuestions(sorted);
  }, []);

  const startGame = () => {
    // Запускаем музыку при старте игры
    const audio = document.getElementById('bg-music') as HTMLAudioElement | null;
    if (audio && !isMusicPlaying) {
      audio.play().then(() => {
        setIsMusicPlaying(true);
        console.log('Music started on game start');
      }).catch((err: Error) => console.log('Music play failed:', err));
    }

    // Сортируем вопросы по сложности от простых к сложным
    const sorted = [...questions].sort((a, b) => a.difficulty - b.difficulty);
    setShuffledQuestions(sorted);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setGameState('playing');
    setFiftyFifty(true);
    setPhoneAFriend(true);
    setAskAudience(true);
    setEliminatedAnswers([]);
    setShowHint(null);
    setWonPrize("0");
  };

  const handleAnswerClick = (index: number) => {
    if (selectedAnswer !== null || eliminatedAnswers.includes(index)) return;
    setSelectedAnswer(index);
    setShowHint(null);

    setTimeout(() => {
      const correct = shuffledQuestions[currentQuestion].correct;
      if (index === correct) {
        if (currentQuestion === 14) {
          setWonPrize(prizes[14]);
          setGameState('won');
        } else {
          setCurrentQuestion((prev: number) => prev + 1);
          setSelectedAnswer(null);
          setEliminatedAnswers([]);
        }
      } else {
        const lastGuaranteed = guaranteedPrizes.filter(p => p < currentQuestion).pop();
        setWonPrize(lastGuaranteed !== undefined ? prizes[lastGuaranteed] : "0");
        setGameState('lost');
      }
    }, 2000);
  };

  const useFiftyFifty = () => {
    if (!fiftyFifty || selectedAnswer !== null) return;
    setFiftyFifty(false);
    const correct = shuffledQuestions[currentQuestion].correct;
    const wrong = [0, 1, 2, 3].filter(i => i !== correct);
    const toEliminate = wrong.sort(() => Math.random() - 0.5).slice(0, 2);
    setEliminatedAnswers(toEliminate);
  };

  const usePhoneAFriend = () => {
    if (!phoneAFriend || selectedAnswer !== null) return;
    setPhoneAFriend(false);
    const correct = shuffledQuestions[currentQuestion].correct;
    const confidence = Math.random() > 0.2;
    const answer = confidence ? correct : [0, 1, 2, 3].filter(i => i !== correct)[Math.floor(Math.random() * 3)];
    const names = ["Астарион", "Гейл", "Шэдоухарт", "Лаэзель", "Халсин"];
    const name = names[Math.floor(Math.random() * names.length)];
    const phrases = [
      `Я ${confidence ? 'уверен' : 'думаю'}, что это "${shuffledQuestions[currentQuestion].answers[answer]}"`,
      `По-моему, правильный ответ — "${shuffledQuestions[currentQuestion].answers[answer]}"`,
      `Рискну сказать "${shuffledQuestions[currentQuestion].answers[answer]}"`
    ];
    setShowHint({ type: 'phone', name, text: phrases[Math.floor(Math.random() * phrases.length)] });
  };

  const useAskAudience = () => {
    if (!askAudience || selectedAnswer !== null) return;
    setAskAudience(false);
    const correct = shuffledQuestions[currentQuestion].correct;
    const percentages = [0, 0, 0, 0];
    percentages[correct] = 40 + Math.floor(Math.random() * 35);
    let remaining = 100 - percentages[correct];
    [0, 1, 2, 3].filter(i => i !== correct && !eliminatedAnswers.includes(i)).forEach((i, idx, arr) => {
      if (idx === arr.length - 1) {
        percentages[i] = remaining;
      } else {
        const val = Math.floor(Math.random() * remaining * 0.6);
        percentages[i] = val;
        remaining -= val;
      }
    });
    setShowHint({ type: 'audience', percentages });
  };

  const takeTheMoney = () => {
    if (currentQuestion === 0) return;
    setWonPrize(prizes[currentQuestion - 1]);
    setGameState('took_money');
  };

  const getAnswerStyle = (index: number) => {
    const base = "relative px-4 py-3 text-left transition-all duration-300 cursor-pointer text-sm font-serif border-4 ";

    if (eliminatedAnswers.includes(index)) {
      return base + "opacity-30 cursor-not-allowed bg-stone-950 text-stone-700 border-stone-900";
    }

    if (selectedAnswer !== null) {
      const correct = shuffledQuestions[currentQuestion].correct;
      if (index === correct) {
        return base + "bg-gradient-to-br from-emerald-800 to-emerald-950 text-emerald-200 border-emerald-500 shadow-xl animate-pulse"
          + " style-correct";
      }
      if (index === selectedAnswer && selectedAnswer !== correct) {
        return base + "bg-gradient-to-br from-red-900 to-red-950 text-red-300 border-red-600 shadow-lg";
      }
    }

    return base + "bg-gradient-to-b from-amber-950 via-stone-900 to-neutral-950 text-amber-200 border-amber-800 hover:border-amber-600 hover:from-amber-900 hover:to-stone-900 hover:text-amber-100 hover:shadow-lg hover:shadow-amber-900/50";
  };

  const Panel = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <div className={`bg-gradient-to-b from-amber-950 via-stone-900 to-neutral-950 border-4 ${className}`}
         style={{
           boxShadow: 'inset 0 2px 8px rgba(251, 191, 36, 0.2), 0 0 30px rgba(0,0,0,0.8), 0 4px 20px rgba(120, 53, 15, 0.5)',
           borderImage: 'linear-gradient(180deg, #92400e, #451a03) 1',
           borderStyle: 'ridge'
         }}>
      {children}
    </div>
  );

  const TerminalHeader = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900 px-3 py-2 border-b-4 border-amber-950"
         style={{
           boxShadow: '0 2px 10px rgba(217, 119, 6, 0.3)',
           textShadow: '0 1px 3px rgba(0,0,0,0.8)',
           borderStyle: 'solid'
         }}>
      <span className="text-amber-200 text-sm tracking-wide font-serif">{children}</span>
    </div>
  );

  if (shuffledQuestions.length === 0) return null;

  return (
    <div className="min-h-screen p-4" style={{
      background: 'radial-gradient(ellipse at center, #1a0f0a 0%, #0d0604 50%, #000 100%)',
      fontFamily: 'Georgia, serif'
    }}>
      {/* Аудио элемент для фоновой музыки */}
      <audio
        id="bg-music"
        loop
        preload="auto"
        onCanPlay={() => setMusicLoaded(true)}
        onError={(e) => console.log('Audio error:', e)}
      >
        <source src="https://files.catbox.moe/cnhb0v.mp3" type="audio/mpeg" />
        Ваш браузер не поддерживает аудио элемент.
      </audio>

      <div className="max-w-4xl mx-auto">
                  <Panel className="mb-4 p-1">
          <TerminalHeader>✦ ДРЕВНИЙ СВИТОК ✦ СРОЧНЫЙ КВЕСТ ✦</TerminalHeader>
          <div className="p-4 text-center">
            <div className="flex justify-end mb-2">
              <button
                onClick={toggleMusic}
                className="px-3 py-1 text-xs bg-gradient-to-b from-amber-800 to-amber-900 text-amber-200 border-2 border-amber-700 hover:from-amber-700 hover:to-amber-800 transition-all font-serif"
                style={{ borderStyle: 'ridge' }}
              >
                {isMusicPlaying ? '🔊 Музыка вкл' : '🔇 Музыка выкл'}
              </button>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-amber-400 tracking-wider mb-1"
                style={{
                  textShadow: '0 0 15px #fbbf24, 0 0 30px #d97706, 2px 2px 4px #000',
                  fontFamily: 'Georgia, serif'
                }}>
              КТО ХОЧЕТ СТАТЬ МИЛЛИОНЕРОМ
            </h1>
            <h2 className="text-lg text-amber-600 tracking-wide italic" style={{ lineHeight: '1.5' }}>
              [ BALDUR'S GATE 3 EDITION ]
            </h2>
            <div className="flex justify-center gap-6 mt-3">
              <div className="flex items-center gap-1">
                <SwordIcon />
                <span className="text-blue-400 text-xs font-serif">ГЕРОЙ</span>
              </div>
              <div className="flex items-center gap-1">
                <MindFlayerIcon />
                <span className="text-purple-400 text-xs font-serif">ИЛЛИТИД</span>
              </div>
              <div className="flex items-center gap-1">
                <DarkUrgeIcon />
                <span className="text-red-400 text-xs font-serif">СОБЛАЗН</span>
              </div>
            </div>
          </div>
        </Panel>

        {gameState === 'start' && (
          <Panel className="p-1">
            <TerminalHeader>✦ СВИТОК КВЕСТА ✦</TerminalHeader>
            <div className="text-center py-12 px-4">
              <SwordIcon />
              <p className="text-amber-200 text-base mb-8 max-w-md mx-auto leading-relaxed mt-4 font-serif">
                Искатель приключений! Перед тобой испытание на знание Забытых Королевств.
                15 вопросов, 3 магические подсказки, 3,000,000 золотых на кону.
              </p>
              <button
                onClick={startGame}
                className="px-8 py-3 bg-gradient-to-b from-amber-700 via-amber-800 to-amber-900 text-amber-50 font-bold text-lg tracking-wide border-4 border-amber-600 hover:from-amber-600 hover:via-amber-700 hover:to-amber-800 transition-all transform hover:scale-105 font-serif"
                style={{
                  boxShadow: '0 0 25px rgba(217, 119, 6, 0.5), inset 0 1px 0 rgba(251, 191, 36, 0.3)',
                  borderStyle: 'ridge',
                  textShadow: '0 2px 4px rgba(0,0,0,0.8)'
                }}
              >
                ⚔ НАЧАТЬ ПРИКЛЮЧЕНИЕ ⚔
              </button>
            </div>
          </Panel>
        )}

        {gameState === 'playing' && (
          <div className="grid md:grid-cols-4 gap-3">
            <div className="md:col-span-3 space-y-3">
              <Panel className="p-1">
                <TerminalHeader>✦ ВОПРОС #{currentQuestion + 1} ✦ СЛОЖНОСТЬ: {'★'.repeat(shuffledQuestions[currentQuestion].difficulty)}{'☆'.repeat(5-shuffledQuestions[currentQuestion].difficulty)}</TerminalHeader>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-amber-700 text-xs font-serif">Прогресс: {currentQuestion + 1}/15</span>
                    <span className="text-amber-400 font-bold flex items-center font-serif">
                      <CoinIcon />
                      {prizes[currentQuestion]}
                    </span>
                  </div>
                  <p className="text-amber-100 text-base leading-relaxed font-serif">
                    {shuffledQuestions[currentQuestion].question}
                  </p>
                </div>
              </Panel>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {shuffledQuestions[currentQuestion].answers.map((answer, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerClick(index)}
                    disabled={selectedAnswer !== null || eliminatedAnswers.includes(index)}
                    className={getAnswerStyle(index)}
                    style={{ borderStyle: 'ridge' }}
                  >
                    <span className="text-amber-400 mr-2 font-bold">
                      [{['A', 'B', 'C', 'D'][index]}]
                    </span>
                    {answer}
                  </button>
                ))}
              </div>

              {showHint && (
                <Panel className="p-1">
                  <TerminalHeader>✦ {showHint.type === 'phone' ? 'МАГИЧЕСКОЕ ПОСЛАНИЕ' : 'РЕЗУЛЬТАТЫ ГАДАНИЯ'} ✦</TerminalHeader>
                  <div className="p-3">
                    {showHint.type === 'phone' && (
                      <div>
                        <p className="text-amber-600 text-xs mb-1 font-serif">
                          <ScrollIcon /> Отправитель: {showHint.name}
                        </p>
                        <p className="text-amber-200 italic font-serif">"{showHint.text}"</p>
                      </div>
                    )}
                    {showHint.type === 'audience' && (
                      <div>
                        <p className="text-amber-600 text-xs mb-2 font-serif">
                          <TavernIcon /> Мнение таверны:
                        </p>
                        <div className="grid grid-cols-4 gap-2">
                          {showHint.percentages.map((p, i) => (
                            <div key={i} className="text-center">
                              <div className="h-16 bg-black border-2 border-amber-900 relative overflow-hidden" style={{ borderStyle: 'inset' }}>
                                <div
                                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-amber-700 to-amber-500 transition-all duration-500"
                                  style={{ height: `${p}%` }}
                                />
                              </div>
                              <span className="text-xs text-amber-400 font-serif">[{['A', 'B', 'C', 'D'][i]}] {p}%</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </Panel>
              )}

              <Panel className="p-1">
                <TerminalHeader>✦ МАГИЧЕСКИЕ СПОСОБНОСТИ ✦</TerminalHeader>
                <div className="flex flex-wrap gap-2 p-3 justify-center">
                  <button
                    onClick={useFiftyFifty}
                    disabled={!fiftyFifty || selectedAnswer !== null}
                    className={`px-4 py-2 text-sm transition-all border-3 font-serif ${
                      fiftyFifty && selectedAnswer === null
                        ? 'bg-gradient-to-b from-orange-700 to-orange-900 border-orange-500 text-orange-100 hover:from-orange-600'
                        : 'bg-stone-950 border-stone-800 text-stone-600 cursor-not-allowed'
                    }`}
                    style={{
                      borderStyle: 'ridge',
                      boxShadow: fiftyFifty && selectedAnswer === null ? '0 0 15px rgba(249, 115, 22, 0.4)' : 'none'
                    }}
                  >
                    ⚡ 50:50
                  </button>
                  <button
                    onClick={usePhoneAFriend}
                    disabled={!phoneAFriend || selectedAnswer !== null}
                    className={`px-4 py-2 text-sm transition-all border-3 font-serif ${
                      phoneAFriend && selectedAnswer === null
                        ? 'bg-gradient-to-b from-blue-700 to-blue-900 border-blue-500 text-blue-100 hover:from-blue-600'
                        : 'bg-stone-950 border-stone-800 text-stone-600 cursor-not-allowed'
                    }`}
                    style={{
                      borderStyle: 'ridge',
                      boxShadow: phoneAFriend && selectedAnswer === null ? '0 0 15px rgba(59, 130, 246, 0.4)' : 'none'
                    }}
                  >
                    📜 Послание
                  </button>
                  <button
                    onClick={useAskAudience}
                    disabled={!askAudience || selectedAnswer !== null}
                    className={`px-4 py-2 text-sm transition-all border-3 font-serif ${
                      askAudience && selectedAnswer === null
                        ? 'bg-gradient-to-b from-purple-700 to-purple-900 border-purple-500 text-purple-100 hover:from-purple-600'
                        : 'bg-stone-950 border-stone-800 text-stone-600 cursor-not-allowed'
                    }`}
                    style={{
                      borderStyle: 'ridge',
                      boxShadow: askAudience && selectedAnswer === null ? '0 0 15px rgba(168, 85, 247, 0.4)' : 'none'
                    }}
                  >
                    🍺 Таверна
                  </button>
                  <button
                    onClick={takeTheMoney}
                    disabled={currentQuestion === 0 || selectedAnswer !== null}
                    className={`px-4 py-2 text-sm transition-all border-3 font-serif ${
                      currentQuestion > 0 && selectedAnswer === null
                        ? 'bg-gradient-to-b from-yellow-700 to-yellow-900 border-yellow-600 text-yellow-100 hover:from-yellow-600'
                        : 'bg-stone-950 border-stone-800 text-stone-600 cursor-not-allowed'
                    }`}
                    style={{
                      borderStyle: 'ridge',
                      boxShadow: currentQuestion > 0 && selectedAnswer === null ? '0 0 15px rgba(234, 179, 8, 0.4)' : 'none'
                    }}
                  >
                    💰 Забрать
                  </button>
                </div>
              </Panel>
            </div>

            <Panel className="p-1 h-fit">
              <TerminalHeader>✦ СПИСОК НАГРАД ✦</TerminalHeader>
              <div className="p-2 space-y-1">
                {prizes.map((prize, index) => {
                  const isGuaranteed = guaranteedPrizes.includes(index);
                  const isCurrent = index === currentQuestion;
                  const isPassed = index < currentQuestion;

                  return (
                    <div
                      key={index}
                      className={`text-xs px-2 py-1 flex justify-between items-center font-serif transition-all border-l-4 ${
                        isCurrent
                          ? 'bg-amber-900/60 text-amber-200 border-amber-400 shadow-lg'
                          : isPassed
                          ? 'bg-amber-950/40 text-amber-700 border-amber-800'
                          : isGuaranteed
                          ? 'bg-yellow-950/40 text-yellow-600 border-yellow-700'
                          : 'text-stone-600 border-stone-800'
                      }`}
                      style={isCurrent ? {
                        boxShadow: '0 0 15px rgba(251, 191, 36, 0.4)',
                        borderStyle: 'solid'
                      } : { borderStyle: 'solid' }}
                    >
                      <span>{String(15 - index).padStart(2, '0')}</span>
                      <span>{prize}</span>
                      {isGuaranteed && <StarIcon />}
                    </div>
                  );
                }).reverse()}
              </div>
            </Panel>
          </div>
        )}

        {(gameState === 'won' || gameState === 'lost' || gameState === 'took_money') && (
          <Panel className="p-1">
            <TerminalHeader>
              ✦ {gameState === 'won' ? 'КВЕСТ ЗАВЕРШЁН' : gameState === 'took_money' ? 'НАГРАДА ПОЛУЧЕНА' : 'КВЕСТ ПРОВАЛЕН'} ✦
            </TerminalHeader>
            <div className="text-center py-12 px-4">
              {gameState === 'won' && <TrophyIcon />}
              {gameState === 'took_money' && <MoneyIcon />}
              {gameState === 'lost' && <SkullIcon />}

              <h2 className={`text-2xl font-bold mt-4 mb-4 tracking-wide font-serif ${
                gameState === 'won' ? 'text-yellow-400' :
                gameState === 'took_money' ? 'text-amber-400' : 'text-red-400'
              }`} style={{ textShadow: gameState === 'won' ? '0 0 25px #facc15, 0 2px 8px #000' : gameState === 'took_money' ? '0 0 25px #fbbf24, 0 2px 8px #000' : '0 0 25px #ef4444, 0 2px 8px #000' }}>
                {gameState === 'won' && '⚔ ЛЕГЕНДАРНЫЙ ГЕРОЙ ⚔'}
                {gameState === 'took_money' && '✨ МУДРЫЙ ВЫБОР ✨'}
                {gameState === 'lost' && '💀 КРИТИЧЕСКИЙ ПРОВАЛ 💀'}
              </h2>

              <p className="text-amber-200 text-lg mb-2 font-serif">
                {gameState === 'won' && 'Вы завоевали величайшее сокровище Фаэруна!'}
                {gameState === 'took_money' && 'Мудрое решение, искатель приключений.'}
                {gameState === 'lost' && 'Кость брошена. Неверный ответ.'}
              </p>

              <div className="flex items-center justify-center gap-2 text-xl text-yellow-300 font-bold mb-6 font-serif">
                <CoinIcon />
                <span>НАГРАДА: {wonPrize} ЗОЛОТЫХ</span>
              </div>

              {gameState === 'lost' && (
                <p className="text-amber-600 mb-6 text-sm font-serif italic">
                  Правильный ответ: {shuffledQuestions[currentQuestion].answers[shuffledQuestions[currentQuestion].correct]}
                </p>
              )}

              <button
                onClick={startGame}
                className="px-8 py-3 bg-gradient-to-b from-amber-700 via-amber-800 to-amber-900 text-amber-50 font-bold tracking-wide border-4 border-amber-600 hover:from-amber-600 hover:via-amber-700 hover:to-amber-800 transition-all transform hover:scale-105 font-serif"
                style={{
                  boxShadow: '0 0 25px rgba(217, 119, 6, 0.5), inset 0 1px 0 rgba(251, 191, 36, 0.3)',
                  borderStyle: 'ridge',
                  textShadow: '0 2px 4px rgba(0,0,0,0.8)'
                }}
              >
                ⚔ НОВОЕ ПРИКЛЮЧЕНИЕ ⚔
              </button>
            </div>
          </Panel>
        )}

        <div className="text-center mt-4 text-orange-600 text-xs tracking-wide font-serif italic">
          ✦ By Mystra's Grace ✦ For the Realms ✦ Gather Your Party ✦
        </div>
      </div>
    </div>
  );
}
