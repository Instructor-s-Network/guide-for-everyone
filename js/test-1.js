let questions = [
  //1 РП И НОНРП
  [
    {
      question: 'Вы сидите с вашим коллегой в ООС канале дискорда. Он едет по трассе один и его останавливают, чтобы ограбить. Он просит вас приехать. Поедете ли вы ему помогать?',
      variants: ['Да, коллегам надо помогать.', 'Да, если нападающих меньше.', 'Да, если я понимаю, что успею.', 'Нет.'],
      trueAnswer: ['4']
    },
    {
      question: 'Вы патрулируете на трассе. Ваш начальник пишет в /fb рацию "СТРОЙ НА ЗП, КОГО НЕ БУДЕТ -- RR". Как вы можете поступить?',
      variants: ['Поеду в LSSD и встану в строй.', 'Могу написать в /fb "Не обязан".', 'Напишу в рацию, что не могу приехать.', 'Продолжу патрулировать.'],
      trueAnswer: ['2', '4']
    },
    {
      question: 'Заместителя шерифа похитили. В личные сообщения в дискорде он отправил вам место, где он находится, и потребовал организовать спасательную операцию. Что вы будете делать?',
      variants: ['Тактично откажусь.', 'Соберу всех на ЗП и мы вместе поедем.', 'Дождусь момента, когда запросят переговорщика, и вместе с коллегами поеду пушить.', 'Дождусь требований от бандитов и дальше буду решать, пушить или нет.'],
      trueAnswer: ['1']
    }
  ],
  //2 ПОЛУЧЕНИЕ ИНФОРМАЦИИ С ПОМОЩЬЮ ОТЫГРОВОК
  [
    {
      question: 'Напротив вас стоит сотрудник FIB  в форме с id 750. Вам нужно узнать номер его нашивки. Как вы это сделаете?',
      variants: ['Попрошу показать нашивку.', '/do Что написано на нашивке @750?', '/do Какой номер написан на нашивке @750?', '/me внимательно присмотрелся к нашивке @750'],
      trueAnswer: ['1', '2', '3']
    },
    {
      question: 'Вы стоите в парке. К вам подходит гражданин, показывает вам свой рисунок и просит сказать, что вы на нем видите. Как вы можете узнать, что изображено на рисунке?',
      variants: ['Признаюсь, что не понимаю, что на нем нарисовано и попрошу гражданина самому рассказать.', '/me взял рисунок и начал пристально на него смотреть', '/do Что изображено на рисунке?', '/do На рисунке изображен хомяк?'],
      trueAnswer: ['1', '3']
    },
    {
      question: 'Перед вами отыгровки. С помощью какой отыгровки вы можете получить информацию, которую сможете использовать в IC?',
      variants: ['/do Что лежит у Мари дома на тумбочке?', '/todo Когда вы родились? *улыбнувшись', '/do Сколько родинок на лице у человека напротив?', '/b Какой у вас номер телефона?'],
      trueAnswer: ['2', '3']
    }
  ],
  //3
  [
    {
      question: 'Вы едете по трассе, за вами гонится 3 машины с грабителями. Пытаясь вас остановить, они прострелили вам колесо и заднее стекло. Что вы будете делать?',
      variants: ['Продолжу уезжать, моя машина быстрее их.', 'Остановлюсь на обочине и буду ждать их дальнейшие действия.', 'Осталось всего 5 километров до ШД, я смогу спастись там.', 'Съеду с трассы и попробую оторваться по горам.'],
      trueAnswer: ['2']
    },
    {
      question: 'Вы поехали в одиночный патруль и остановились на обочине, чтобы поесть. К вам подъехала машина с двумя грабителями и встала перел вами. Они кричат вам из машины, что хотят вас ограбить. Что вы будете делать?',
      variants: ['Перестану есть и буду ждать их дальнейшие действия.', 'Быстро заведу машину и уеду.', 'Достану оружие и постараюсь отбиться.', 'Быстро запрошу помощь в рацию.'],
      trueAnswer: ['1', '3', '4']
    },
    {
      question: 'Вас сдуло ветром из штата. Вы прилетели обратно и оказались на трассе без формы. К вам подъехали двое граждан без масок и оружия на такси и попросили поднять руки за голову, чтобы они могли вас ограбить. Что вы сделаете?',
      variants: ['Подниму руки за голову.', 'Достану оружие и попытаюсь их затулить.', 'Напишу в рацию, чтобы меня забрали.', 'Мне ничего не угрожает. Просто отойду.'],
      trueAnswer: ['3', '4']
    }
  ],
  //4 Адекватность
  [
    {
      question: 'В холле ШД стоит гражданин с розовыми волосами. Вам не нравится цвет его волос. Что вы будете делать?',
      variants: ['Задержу его, ходить с такими волосами это хулиганство.', 'Подойду и уточню, почему он тут стоит и нужна ли ему помощь.', 'Агрессивно начну расспрашивать, что он тут забыл. В случае взаимной грубости задержу и посажу в КПЗ.', 'Убежусь что никого нет рядом и нокну его. Он в любом случае не вспомнит, кто это сделал.'],
      trueAnswer: ['2']
    },
    {
      question: 'Вы шли по улице в сторону своего дома. Вдруг вам навстречу вышли 2 подозрительных человека и один из них выстрелил вам в голову. Вы очнулись в больнице. Что вы можете делать дальше?',
      variants: ['Сильно удивлюсь, вылечусь и поеду домой на такси.', 'Расстроюсь, ведь я боюсь врачей. Позвоню другу, попрошу его меня забрать и отвезти домой.', 'Позвоню друзьям, опишу подонков и мы вместе поедем с ними разбираться.', 'Напишу в рацию, попрошу коллег меня забрать и мы поедем задерживать нарушителей.'],
      trueAnswer: ['1', '2']
    },
    {
      question: 'К вам подходит человек в джинсах и футболке. Он представляется сотрудником PD и приказывает вам отойти. Что вы сделаете?',
      variants: ['Скажу: "У меня аномалия или вы без формы? Покажите нашивку или жетон.".', 'Попрошу уточнить, на каком основании.', 'Подчинюсь приказу и отойду.', 'Буду молча стоять и наблюдать.'],
      trueAnswer: ['1', '2', '4']
    }
  ],
  //5 Отыгровка /me
  [
    {
      question: 'Вы при исполнении. К вам подошел гражданин и попросил показать удостоверение. Что вы сделаете?',
      variants: ['Скажу, что не обязан.', 'Отыграю голосом, что сейчас достану удостоверение и покажу человеку напротив не передавая.', '/me достал удостоверение и показал гражданину @n', '/do Удостоверение забыто дома.'],
      trueAnswer: ['2', '3']
    },
    {
      question: 'Начальница вызвала вас в свой кабинет. Она выдала вам премию и попросила расписаться в документе о том, что вы ее получили. Как вы это сделаете?',
      variants: ['Отыграю голосом, что сейчас возьму ручку и подпишу документ.', '/b подписал документ и поблагодарил', 'Молча возьму премию и убегу.', '/me внимательно прочитал документ и подписал его'],
      trueAnswer: ['1', '4']
    },
    {
      question: 'В чате отобразились несколько отыгровок. Какая отыгровка была написана человеком неправильно?',
      variants: ['Adam Ways[100] взял шоколадку', '(( Adam Ways[100]: /me взял шоколадку ))', 'Adam Ways[100] откусил шоколадку.', 'Adam Ways[100] вытаскивает шоколадку из обертки'],
      trueAnswer: ['2', '3', '4']
    },
    {
      question: 'Вам нужно достать ручку из рюкзака. Как вы это сделаете?',
      variants: ['/me достаю ручку из рюкзака', 'Достану функционально, открыв инвентарь.', '/me достал ручку из рюкзака.', '/me открыл рюкзак и достал из него ручку'],
      trueAnswer: ['4']
    },
    {
      question: 'Вам приказал начальник помыть полы в туалете. Как вы будете это делать?',
      variants: ['Скажу, что помою завтра.', 'Приду в туалет и отыграю: /me взял швабру и начал мыть пол', '/do полы и так чистые', '/me мою полы.'],
      trueAnswer: ['2']
    }
  ],
  //6 Отыгровка /todo
  [
    {
      question: 'Где отыгровка команды /todo неправильная?',
      variants: ['/todo Что-то я походу забыл*почесав затылок', '/todo посмотрев на свои джинсы.', '/todo Какая сегодня хорошая погода *достав из кармана пачку сигарет.', '/todo девушка, вы отлично выглядите*послав воздушный поцелуй'],
      trueAnswer: ['2', '3', '4']
    },
    {
      question: 'Где отыгровка команды /todo правильная?',
      variants: ['/todo Что-то я походу забыл*почесав затылок', '/todo посмотрев на свои джинсы', '/todo Какая сегодня хорошая погода *достав из кармана пачку сигарет.', '/todo девушка, вы отлично выглядите*послав воздушный поцелуй'],
      trueAnswer: ['1']
    },
    {
      question: 'В чат вывелась строчка:"Какая сегодня хорошая погода",- сказал(а) Ray Hamster[1], посмотрев на небо. Какая отыгровка использовалась, чтобы получился такой результат? ',
      variants: ['Какая сегодня хорошая погода /me сказал(а) Ray Hamster[1], посмотрев на небо.', '/do "Какая сегодня хорошая погода"посмотрев на небо', '/do Какая сегодня хорошая погода*посмотрев на небо.', '/todo Какая сегодня хорошая погода *посмотрев на небо'],
      trueAnswer: ['4']
    }
  ],
  //7 Отыгровка /do
  [
    {
      question: 'В каком случае команда /do использовалась правильно?',
      variants: ['/do Как себя чувствует Таллупа?', '/do В кармане Таллупы лежит конфета.', '/do снял с себя сумку и плавно поставил её на пол', 'Все варианты верны'],
      trueAnswer: ['1', '2']
    },
    {
      question: 'Кто из предложенных игроков использовал "/do У Джона на картинке изображен хомяк." или "/do У Джона в кармане сигарета."?',
      variants: ['Jonathan Price', 'Oliver Cooper', 'John Baker', 'Evan Reed'],
      trueAnswer: ['3']
    },
    {
      question: 'В каком случае команда /do использовалась неправильно?',
      variants: ['/do Как себя чувствует Джон?', '/do В кармане Джона лежит батарейка.', '/do снял с себя сумку и плавно поставил её на пол', '/do Джон улыбается.'],
      trueAnswer: ['3']
    }
  ],
  //8 | 5 вопросов
  [
    {
      question: 'Что такое вареник? ((IC))',
      variants: ['Вид наказания. Когда админы увольняют из фракции.', 'Блюдо в виде отварных изделий из пресного теста с начинкой.', 'Термин в гинекологии.', 'Все ответы верны.'],
      trueAnswer: ['2']
    },
    {
      question: 'Что такое Ручной Пулемет? ((IC))',
      variants: ['Так может расшифровываться аббревиатура РП.', 'Вид оружия.', 'Так называлась песня какой-то группы.', 'Все варианты верны.'],
      trueAnswer: ['4']
    },
    {
      question: 'Что такое РП? ((ООС))',
      variants: ['Рука Павлова.', 'Отыгрывание роли в игре.', 'Ручной Пулемет.', 'РолеПлей.'],
      trueAnswer: ['2', '4']
    },
    {
      question: 'У вас спросили, что такое IC? Как вы можете ответить? ((IC))',
      variants: ['Интро СаниMC.', 'In Character.', 'Информация, относящаяся к процессу РолеПлея.', 'Иван Степаныч.'],
      trueAnswer: ['1', '4']
    },
    {
      question: 'У вас спросили, кто такой Дядя Миша? Как вы можете ответить? ((IC))',
      variants: ['Так на собесках расшифровывают DM или DeathMatch.', 'Какой-то человек в штате, чей-то дядя.', 'Неизвестная мне личность, которую все почему-то знают.', 'Все варианты верны.'],
      trueAnswer: ['2', '3']
    }
  ],
  //9 IC, OOC, RP, NonRP | 5 вопросов
  [
    {
      question: 'Что из этого является IC информацией?',
      variants: ['Время на часах в холле LSSD.', 'Количество людей в патрульной машине.', 'Имя в паспорте вашего персонажа.', 'Возраст вашего друга, с которым вы играете в GTA.'],
      trueAnswer: ['1', '2', '3']
    },
    {
      question: 'Что такое IC? ((OOC))',
      variants: ['Все фантастическое, не относящееся к реальному миру.', 'Все что касается GTA.', 'Все что касается жизни персонажей в игре.', 'Все ответы верны.'],
      trueAnswer: ['3']
    },
    {
      question: 'Что считается нонРП поведением?',
      variants: ['Могу купить оружие и пойти растрелять целую банду.', 'Подойти к человеку и спросить, не является ли он дядей Мишей.', 'Гулять по Чиллиаду и случайно упасть с него.', 'Написать в WN: "Продаю тачку за 300к."'],
      trueAnswer: ['1']
    },
    {
      question: 'Что является OOC информацией?',
      variants: ['Приказ в НонРП рацию.', 'Правила проекта GTA5RP.', 'Возраст мэра города Лос-Сантос.', 'Разговор на эльфийском в игре.'],
      trueAnswer: ['1', '2', '4']
    },
    {
      question: 'С вами с помощью текстового чата разговаривает гражданин. Какие из приведенных реплик мог услышать ваш персонаж?',
      variants: ['(( Kirill Ways[100]: Опять работать ))', 'Придется драться,- сказал(а) Kirill Ways[100], обнажив кулаки', 'Kirill Ways[100]: Работа не волк, в лес не убежит', '(( Kirill Ways[100]: Я приказываю вам покинуть ЗОТ))'],
      trueAnswer: ['2', '3']
    },
    {
      question: 'Что из этого является IC информацией?',
      variants: ['Номер паспорта вашего персонажа.', 'РП — это отыгрывание роли в игре.', 'Наличие военного билета у вашего персонажа.', 'Термин ООС в правилах проекта GTA5RP.'],
      trueAnswer: ['1', '3']
    },
  ],
  //10 | 5 вопросов
  [
    {
      question: 'Можно ли гос. служащему оскорблять людей?',
      variants: ['Нет, это неправильно.', 'Да, если они мне не нравятся.', 'У меня характер такой, хочу и оскорбляю.', 'Если человек начинает оскорбять первым — я не буду молчать.'],
      trueAnswer: ['1']
    },
    {
      question: 'У вас спросили, кто такие BLOODS? Как вы можете ответить? ((IC))',
      variants: ['Какая-то компания. Кажется, они делали чешки.', 'Всем известная банда.', 'Клуб фанатов сериалов про вампиров.', 'Скажу, что я не знаю.'],
      trueAnswer: ['1', '3', '4']
    },
    {
      question: 'В каком штате мы живем? ((IC))',
      variants: ['Los Angeles.', 'Sunrise.', 'San Andreas', 'Los-Santos.'],
      trueAnswer: ['3']
    },
    {
      question: 'Кто такие Los Santos Vagos? ((OOC))',
      variants: ['Какая-то автомастерская.', 'Уличная группировка(банда).', 'Фанаты желтого цвета.', 'Частная организация, занимаются пошивом футболок.'],
      trueAnswer: ['2']
    },
    {
      question: 'Вы потерялись в городе когда гуляли. Как вы можете попасть домой? ((IC))',
      variants: ['Вызову такси.', 'Открою карту в телефоне и по ней вернусь домой.', 'Релогнусь и заспавнюсь дома.', 'Умышленно спрыгну с моста, дождусь своей смерти и вызову от больницы такси до дома.'],
      trueAnswer: ['1', '2']
    }
  ]
]

let dText = [
  'Тест №1', 'Всего в тесте 10 вопросов. На его прохождение вам дается 10 минут. В конце не забудьте заскринить итог и отправить фотокарточку в соответствующий канал.', 'Важно: покидать страницу нельзя до того момента, как вы заскрините результат. Иначе тест придется проходить заново.'
]

let container = document.getElementsByClassName('main')[0]

let seconds = 0
let minutes = 10
let score = 0
let name = ''
let key = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let testAnswers = []

document.addEventListener('DOMContentLoaded', () => {
  if (window.screen.width <= 800){
    openedOnPhone()
  } else {
    firstScreen()
  }
})

function firstScreen() {
  info = document.createElement('div');
  info.classList.add('information');
  container.appendChild(info);

  header = document.createElement('p')
  header.classList.add('h1');
  header.textContent = dText[0];
  info.appendChild(header);

  header = document.createElement('p')
  header.classList.add('h1des');
  header.textContent = 'ТЕСТ НА ПОНИМАНИЕ РП';
  info.appendChild(header);

  frame = document.createElement('div')
  frame.classList.add('frame')
  container.appendChild(frame)

  text = document.createElement('div')
  text.classList.add('text')
  frame.appendChild(text)

  description = document.createElement('p')
  description.textContent = dText[1];
  text.appendChild(description);

  description = document.createElement('p')
  description.textContent = dText[2];
  text.appendChild(description);

  but = document.createElement('button')
  but.classList.add('button')
  but.classList.add('start')
  but.textContent = 'Начать';
  frame.appendChild(but);

  butStart = document.getElementsByClassName('start')[0]
  butStart.onclick = function() {
    if ((window.screen.width - window.outerWidth) < 10) {
        clean();
        createTest();
    } else {
      alertWindowSize()
    }
  }
}

function clean() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

function randomTest() {
  for (let i = 0; i < key.length; i++) {
    let n = Math.floor(Math.random() * 10)
    let a = key[i]
    key[i] = key[n]
    key[n] = a
  }
}

function createTest() {
  randomTest();

  info = document.createElement('div');
  info.classList.add('information');
  info.classList.add('testInfo');
  container.appendChild(info);

  header = document.createElement('p')
  header.classList.add('h1');
  header.textContent = dText[0];
  info.appendChild(header);

  time = document.createElement('p')
  time.classList.add('time')
  time.textContent = minutes + ':0' + seconds;
  container.appendChild(time);

  test = document.createElement('div')
  test.classList.add('test')
  container.appendChild(test)

  qContainer = document.createElement('div');
  qContainer.classList.add('user-info_container');
  qContainer.classList.add('question_container');
  test.appendChild(qContainer);

  q = document.createElement('p')
  q.textContent = 'Ваши имя и фамилия.';
  qContainer.appendChild(q);

  answer = document.createElement('input');
  answer.classList.add('input')
  answer.classList.add('user-name')
  qContainer.appendChild(answer);

  for (let i = 0; i < key.length; i++){
    qContainer = document.createElement('div');
    qContainer.classList.add('question_container');
    test.appendChild(qContainer);

    let n = Math.floor(Math.random() * questions[key[i]].length)

    q = document.createElement('p')
    q.textContent = 'Вопрос ' + (i+1) + '. ' + questions[key[i]][n].question;
    qContainer.appendChild(q);

      for (let l = 0; l <  questions[key[i]][n].variants.length; l++) {
        answerContainer = document.createElement('div');
        answerContainer.classList.add('answer-container')
        qContainer.appendChild(answerContainer);

        answer = document.createElement('input');
        answer.classList.add('answer')
        answer.classList.add('userAnswer' + i + l)
        answer.type='checkbox'
        answerContainer.appendChild(answer);

        v = document.createElement('p')
        v.classList.add('variants')
        v.textContent = questions[key[i]][n].variants[l];
        answerContainer.appendChild(v);
      }
    testAnswers.push(questions[key[i]][n].trueAnswer)
  }

  window.onblur = function() {
    console.log('Кто-то вышел');
    clearInterval(timerId);
    windowClosed()
  }

  but = document.createElement('button')
  but.classList.add('button')
  but.classList.add('finishTest')
  but.textContent = 'Завершить';
  test.appendChild(but);

  butEnd = document.getElementsByClassName('finishTest')[0]
  butEnd.onclick = function() {
    name = document.getElementsByClassName('user-name')[0].value
    resultFinishTest();
  }

  timerId = setInterval(timer, 1000);
}

function timer(){

  if ((minutes >= 0) && (seconds > 0)){
    --seconds;
  } else if ((seconds == 0) && (minutes > 0)){
    --minutes;
    seconds = 59;
  } else {
    resultTimerEnd();
    return;
  }

  timer = document.getElementsByClassName('time')[0]

  if (seconds < 10) {
    timer.textContent = minutes + ':0' + seconds;
  } else {
    timer.textContent = minutes + ':' + seconds;
  }

}

function checkAnswers() {
  name = document.getElementsByClassName('user-name')[0].value
  let antiCheat = 0
  let maxAnswers = 0

  for (let i = 0; i < testAnswers.length; i++) {
    for (let k = 0; k < 4; k++) {
      let answer = document.getElementsByClassName('userAnswer' + i + k)[0]
      if (answer.checked) {
        antiCheat ++
        //console.log('Choosed ', antiCheat);
      }
    }
  }

  for (let i = 0; i < testAnswers.length; i++) {
    for (let k = 0; k < testAnswers[i].length; k++) {
      let answer = document.getElementsByClassName('userAnswer' + i + k)[0]
      maxAnswers ++
    }
  }
  //console.log('Choosed ', maxAnswers);

  if (antiCheat > Math.floor((35 + maxAnswers) / 2)) {
    score = -10
  }

  for (let i = 0; i < testAnswers.length; i++) {
    for (let k = 0; k < testAnswers[i].length; k++) {
      let answer = document.getElementsByClassName('userAnswer' + i + (testAnswers[i][k] - 1))[0]
      //console.log(answer.checked);
      if (answer.checked) {
        score = score + (1 / testAnswers[i].length)
        //console.log(score);
      }
    }
  }
}

function resultTimerEnd() {
  clearInterval(timerId)
  alertTimerEnd()
}

function alertTimerEnd() {
  alertBg = document.createElement('div')
  alertBg.classList.add('alertBg')
  container.appendChild(alertBg)

  customAlert = document.createElement('div')
  customAlert.classList.add('customAlertContainer')
  container.appendChild(customAlert)

  text = document.createElement('p')
  text.classList.add('alert-header');
  text.style.marginBottom = '24px';
  text.textContent = 'Время закончилось';
  customAlert.appendChild(text);

  but = document.createElement('button')
  but.classList.add('alert-button')
  but.textContent = 'Ок';
  customAlert.appendChild(but);

  butOk = document.getElementsByClassName('alert-button')[0]
  butOk.onclick = function() {
    resultFinishTest();
  }
}

function resultFinishTest() {
  checkAnswers()

  clean();
  clearInterval(timerId);

  container.style.backgroundImage = "url('./images/result-bg.png')"
  container.style.backgroundPosition = "center center";
  container.style.backgroundSize = "cover";

  info = document.createElement('div');
  info.classList.add('information');
  container.appendChild(info);

  header = document.createElement('p')
  header.classList.add('h1');
  header.textContent = 'Ответы проверены.';
  info.appendChild(header);

  header = document.createElement('p')
  header.classList.add('h1des');
  header.textContent = new Date().toLocaleDateString()
  info.appendChild(header);

  frame = document.createElement('div')
  frame.classList.add('frame')
  container.appendChild(frame)

  text = document.createElement('div')
  text.classList.add('text')
  frame.appendChild(text)

  description = document.createElement('p')
  description.textContent = 'Поздравляем, ' + name + '.';
  description.style.fontSize = '48px'
  text.appendChild(description);

  description = document.createElement('p')
  description.textContent = 'Не забудьте заскринить результат и отправить его в соостветствующий канал.';
  text.appendChild(description);

  var img = document.createElement("img");
  img.src = showResult();
  img.style.opacity = "0.3";
  frame.appendChild(img);
}

function showResult() {
  if (score >= 9.9) {
    return('./images/resultA+.svg')
  } else if ((score < 9.9) && (score >= 8)) {
    return('./images/resultA.svg')
  } else if ((score < 8) && (score >= 7)) {
    return('./images/resultB.svg')
  } else if ((score < 7) && (score >= 5)) {
    return('./images/resultC.svg')
  } else if ((score < 5) && (score >= 3)) {
    return('./images/resultD.svg')
  } else {
    return('./images/resultF.svg')
  }
}

function windowClosed() {
  clean()

  info = document.createElement('div');
  info.classList.add('information');
  container.appendChild(info);

  header = document.createElement('p')
  header.classList.add('h1');
  header.textContent = 'Упс, кажется вы свернули тест...';
  header.style.width = '864px';
  info.appendChild(header);

  frame = document.createElement('div')
  frame.classList.add('frame')
  container.appendChild(frame)

  text = document.createElement('div')
  text.classList.add('text')
  frame.appendChild(text)

  description = document.createElement('p')
  description.textContent = 'Теперь его придется проходить заново.';
  description.style.color = '#D0471D';
  description.style.textDecoration = 'underline';
  text.appendChild(description);

  text.onclick = function() {
    location.reload();
  }
}

function openedOnPhone() {
  img = document.createElement("img");
  img.src = './images/sad-face.svg';
  img.classList.add('sad-face');
  container.appendChild(img);

  description = document.createElement('p')
  description.classList.add('phoneDescription');
  description.textContent = 'К сожалению, этот тест нельзя проходить с мобильного устройства.';
  container.appendChild(description);
}

function alertWindowSize() {
  alertBg = document.createElement('div')
  alertBg.classList.add('alertBg')
  container.appendChild(alertBg)

  customAlert = document.createElement('div')
  customAlert.classList.add('customAlertContainer')
  container.appendChild(customAlert)
  text = document.createElement('p')
  text.classList.add('alert-header');
  text.textContent = 'Ой, что-то пошло не так';
  customAlert.appendChild(text);

  text = document.createElement('p')
  text.classList.add('alert-text');
  text.textContent = 'Разверните вкладку на весь экран.';
  customAlert.appendChild(text);

  but = document.createElement('button')
  but.classList.add('alert-button')
  but.textContent = 'Ок';
  customAlert.appendChild(but);

  butOk = document.getElementsByClassName('alert-button')[0]
  butOk.onclick = function() {
    location.reload();
  }
}
