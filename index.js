import TelegramAPI from 'node-telegram-bot-api'
import { token } from './config.js'
import { makeInlineKeyboard, makeKeyboard } from './keyboards/helpers.js'
import { chatFields, chatKeyboard } from './keyboards/chat.js'
import { mainMenuFields, mainMenuInlineKB } from './keyboards/mainMenuInline.js'
import {
  psPlusDeluxeKeyboard,
  psPlusEssFields,
  psPlusEssKeyboard,
  psPlusExtraKeyboard,
  psPlusMainFields,
  psPlusMainKeyboard,
} from './keyboards/psPlus.js'

const bot = new TelegramAPI(token, { polling: true })

const start = () => {
  // makes set of predefined commands, accessible in tg menu
  bot.setMyCommands([
    { command: '/start', description: 'Начальное приветствие' },
  ])

  bot.on('message', async msg => {
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
        makeKeyboard(chatKeyboard)
      )
    }

    if (text === chatFields.mainMenu.text) {
      return await bot.sendMessage(
        chatId,
        `Вы в главном меню! Что Вас интересует?`,
        makeInlineKeyboard(mainMenuInlineKB)
      )
    }

    return await bot.sendMessage(chatId, 'Не знаю такой команды')
  })

  bot.on('callback_query', async msg => {
    const data = msg.data
    const chatId = msg.message.chat.id

    // PS plus block -------------------------------------
    if (
      data === mainMenuFields.psPlus.cb_data ||
      data === psPlusEssFields.backToPsPlus.cb_data
    ) {
      return await bot.sendMessage(
        chatId,
        'Какую подписку хотите приобрести?',
        makeInlineKeyboard(psPlusMainKeyboard)
      )
    }

    if (data === '/about_ps_plus') {
      return await bot.sendMessage(
        chatId,
        `🔹 PS Plus Essential
PS Plus Essential представляет собой самый доступный вариант. В его рамках предоставляются 3 бесплатные игры каждый месяц, доступ к онлайн-играм, дополнительные скидки, облачное хранилище, game help и эксклюзивный контент.
        
🔹 PS Plus Extra
PS Plus Extra представляет собой улучшенную версию PS Plus. В дополнение к возможностям Essential, она дает доступ к библиотеке из 450+ бесплатных игр, которая пополняется новыми каждый месяц.
        
🔹 PS Plus Deluxe
PS Plus Deluxe – это самый расширенный вариант PS Plus, включающий более 900 игр. В эту подписку входит все, что предлагают предыдущие версии, а также каталог классических игр от Sony для PS1 и PS2 (более 100 игр) и пробные версии самых свежих релизов.`,
        makeInlineKeyboard(psPlusMainKeyboard)
      )
    }
    //Essential
    if (data === psPlusMainFields.essential.cb_data) {
      return await bot.sendMessage(
        chatId,
        'Подписки и игры приобретаются через аккаунт поддержки (Тут должен быть аккаунт поддержки lul)',
        makeInlineKeyboard(psPlusEssKeyboard)
      )
    }

    if (
      data === '/ps_plus_ess_1m' ||
      data === '/ps_plus_ess_3m' ||
      data === '/ps_plus_ess_12m'
    ) {
      await bot.sendMessage(chatId, 'Перевожу на аккаунт поддержки')
      await bot.sendMessage(
        chatId,
        'Ну, на самом деле проcто делаю вид что перевожу, аккунта то нет'
      )
    }

    //Extra
    if (data === psPlusMainFields.extra.cb_data) {
      return await bot.sendMessage(
        chatId,
        'Подписки и игры приобретаются через аккаунт поддержки (Тут должен быть аккаунт поддержки lul)',
        makeInlineKeyboard(psPlusExtraKeyboard)
      )
    }

    if (
      data === '/ps_plus_extra_1m' ||
      data === '/ps_plus_extra_3m' ||
      data === '/ps_plus_extra_12m'
    ) {
      await bot.sendMessage(chatId, 'Перевожу на аккаунт поддержки')
      await bot.sendMessage(
        chatId,
        'Ну, на самом деле проcто делаю вид что перевожу, аккунта то нет'
      )
    }

    //Deluxe
    if (data === psPlusMainFields.deluxe.cb_data) {
      return await bot.sendMessage(
        chatId,
        'Подписки и игры приобретаются через аккаунт поддержки (Тут должен быть аккаунт поддержки lul)',
        makeInlineKeyboard(psPlusDeluxeKeyboard)
      )
    }

    if (
      data === '/ps_plus_deluxe_1m' ||
      data === '/ps_plus_deluxe_3m' ||
      data === '/ps_plus_deluxe_12m'
    ) {
      await bot.sendMessage(chatId, 'Перевожу на аккаунт поддержки')
      await bot.sendMessage(
        chatId,
        'Ну, на самом деле проcто делаю вид что перевожу, аккунта то нет'
      )
    }
  })
}

start()
