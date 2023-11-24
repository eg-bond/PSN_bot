const TelegramAPI = require('node-telegram-bot-api')
const { token } = require('./config')

const bot = new TelegramAPI(token, { polling: true })

let bd = {}

const startGame = async chatId => {
  await bot.sendMessage(chatId, 'Сейчас загадаю число от 0 до 9')
  const num = String(Math.floor(Math.random() * 10))
  bd[chatId] = num
  await bot.sendMessage(chatId, 'Отгадывай сука', gameOptions)
}

const againOptions = {
  reply_markup: JSON.stringify({
    inline_keyboard: [[{ text: 'Играть еще раз', callback_data: '/again' }]],
  }),
}

const chatMenu = {
  reply_markup: {
    keyboard: [
      [
        { text: 'Главное меню', callback_data: '/main_menu' },
        { text: 'Поддержка', callback_data: '/support' },
        { text: 'Отзывы', callback_data: '/feedback' },
        { text: 'Часто задаваемые вопросы', callback_data: '/faq' },
      ],
    ],
    resize_keyboard: true,
  },
}

const mainMenuOptions = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [
        { text: 'PS Plus', callback_data: '/ps_plus' },
        { text: 'EA Play', callback_data: '/ea_play' },
      ],
      [
        { text: 'Игры', callback_data: '/games' },
        { text: 'Отзывы', callback_data: '/feedback' },
      ],
    ],
  }),
}

const start = () => {
  // makes set of predefined commands, accessible in tg menu
  bot.setMyCommands([
    { command: '/start', description: 'Начальное приветствие' },
    { command: '/info', description: 'Данные о тебе' },
    { command: '/game', description: 'Начать игру' },
  ])

  bot.on('message', async msg => {
    console.log(msg)
    const text = msg.text
    const chatId = msg.chat.id
    const firstName = msg.chat.first_name

    if (text === '/start') {
      return await bot.sendMessage(
        chatId,
        `Привет, ${firstName}
Мы очень рады видеть тебя в PlayStation Store Bot!💥

🔥 У нас ты можешь приобрести подписки и игры для PlayStation по самым выгодным ценам!

🔹 В настоящее время мы осуществляем оформление подписок и покупку игр только для Турецких аккаунтов PlayStation.
🔸 Если у тебя нет Турецкого аккаунта PlayStation, просто дай нам знать, и мы создадим его бесплатно при любой покупке.

✅ Жми на кнопку «📨Главное меню» и начинай пользоваться ботом!`,
        chatMenu
      )
    }

    if (text === 'Главное меню') {
      return await bot.sendMessage(
        chatId,
        `Вы в главном меню! Что Вас интересует?`,
        mainMenuOptions,
        chatMenu
      )
    }

    if (text === 'Главное меню') {
      return await bot.sendMessage(
        chatId,
        `Вы в главном меню! Что Вас интересует?`,
        mainMenuOptions,
        chatMenu
      )
    }

    // if (text === '/game') {
    //   return startGame(chatId)
    // }

    return await bot.sendMessage(chatId, 'Не знаю такой команды')
  })

  bot.on('callback_query', async msg => {
    console.log(msg)
    const data = msg.data
    const chatId = msg.message.chat.id

    if (data === '/ps_plus') {
      await bot.sendMessage(chatId, 'Какую подписку хотите приобрести?')
    }

    // return await bot.sendMessage(
    //   chatId,
    //   `Petux, была загадана цифра ${bd[chatId]}`,
    //   againOptions
    // )
    //
  })
}

start()
