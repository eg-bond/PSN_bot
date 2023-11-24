import TelegramAPI from 'node-telegram-bot-api'
import { token } from './config.js'

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

const psPlusOptions = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [
        { text: 'PS+ Essential', callback_data: '/ps_plus_ess' },
        { text: 'PS+ Extra', callback_data: '/ps_plus_ext' },
        { text: 'PS+ Deluxe', callback_data: '/ps_plus_del' },
      ],
      [{ text: 'Подробнее о подписках', callback_data: '/about_ps_plus' }],
    ],
  }),
}

const psPlusEssOptions = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{ text: 'PS+ Essential 1 месяц', callback_data: '/ps_plus_ess_1m' }],
      [{ text: 'PS+ Essential 3 месяца', callback_data: '/ps_plus_ess_3m' }],
      [{ text: 'PS+ Essential 12 месяцев', callback_data: '/ps_plus_ess_12m' }],
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
    // console.log(msg)
    const data = msg.data
    const chatId = msg.message.chat.id

    if (data === '/ps_plus') {
      return await bot.sendMessage(
        chatId,
        'Какую подписку хотите приобрести?',
        psPlusOptions
      )
    }
    // PS plus block -------------------------------------
    if (data === '/about_ps_plus') {
      return await bot.sendMessage(
        chatId,
        ` PS Plus Essential
        PS Plus Essential представляет собой самый доступный вариант. В его рамках предоставляются 3 бесплатные игры каждый месяц, доступ к онлайн-играм, дополнительные скидки, облачное хранилище, game help и эксклюзивный контент.
        
        🔹 PS Plus Extra
        PS Plus Extra представляет собой улучшенную версию PS Plus. В дополнение к возможностям Essential, она дает доступ к библиотеке из 450+ бесплатных игр, которая пополняется новыми каждый месяц.
        
        🔹 PS Plus Deluxe
        PS Plus Deluxe – это самый расширенный вариант PS Plus, включающий более 900 игр. В эту подписку входит все, что предлагают предыдущие версии, а также каталог классических игр от Sony для PS1 и PS2 (более 100 игр) и пробные версии самых свежих релизов.`,
        psPlusOptions
      )
    }

    if (data === '/ps_plus_ess') {
      return await bot.sendMessage(
        chatId,
        'Подписки и игры приобретаются через аккаунт поддержки (Тут должен быть аккаунт поддержки lul)',
        psPlusEssOptions
      )
    }

    if (
      data === '/ps_plus_ess_1m' ||
      data === '/ps_plus_ess_3m' ||
      data === '/ps_plus_ess_12m'
    ) {
      await bot.sendMessage(chatId, 'Перевожу на аккаунт поддержки')
      setTimeout(async () => {
        await bot.sendMessage(
          chatId,
          'Ну, на самом деле проcто делаю вид что перевожу'
        )
      }, 1000)
      setTimeout(async () => {
        await bot.sendMessage(chatId, 'Аккаунта то нет')
      }, 2000)
    }

    // /ps_plus_ess_1m
  })
}

start()
