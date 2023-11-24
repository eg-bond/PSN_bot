import TelegramAPI from 'node-telegram-bot-api'
import { token } from './config.js'
import { delay, makeInlineKeyboard, makeKeyboard } from './keyboards/helpers.js'
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
import { eaPlayMainFields, eaPlayMainKeyboard } from './keyboards/ea_play.js'

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
Мы очень рады видеть тебя в ShagovsEbaniuPSN_Bot!💥

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

    if (text === chatFields.feedback.text) {
      return await bot.sendMessage(chatId, 'СУС')
    }

    if (text === chatFields.support.text) {
      return await bot.sendMessage(
        chatId,
        'Редирект на аккаунт поддержки (нет)'
      )
    }

    if (text === chatFields.faq.text) {
      await bot.sendMessage(chatId, 'Вопросов тут конечноже не будет')
      await delay(800)
      await bot.sendMessage(
        chatId,
        'Зато будут мемы с Тиньковым - наслаждайтесь:'
      )
      await delay(500)
      await bot.sendPhoto(
        chatId,
        'https://i.ytimg.com/vi/EN5fu6deOgg/maxresdefault.jpg'
      )
      await bot.sendPhoto(
        chatId,
        'https://i.ytimg.com/vi/HhWXUDOLsaE/maxresdefault.jpg'
      )
      await bot.sendPhoto(
        chatId,
        'https://memasno.ru/uploads/posts/2022-07/memy-pro-bank-tinkoff-ogranichenija-i-nadeemsja-na-ponimanie-1.jpg'
      )
      await bot.sendPhoto(
        chatId,
        'https://static10.tgcnt.ru/posts/_0/28/281692d3eea6c8c162b31507de912388.jpg'
      )
      return await bot.sendPhoto(
        chatId,
        'https://www.pvsm.ru/images/2022/08/27/ubiistvo-razrabotki-opyt-tinkov-strahovanie-2.png'
      )
    }

    return await bot.sendMessage(chatId, 'Не знаю такой команды')
  })

  bot.on('callback_query', async msg => {
    const data = msg.data
    const chatId = msg.message.chat.id

    // PS plus block ------------------------------------------------
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
    //--------------------------------------------------------------------
    // EA play block------------------------------------------------------------
    if (data === mainMenuFields.eaPlay.cb_data) {
      return await bot.sendMessage(
        chatId,
        'Подписки и игры приобретаются через аккаунт поддержки (Тут должен быть аккаунт поддержки)',
        makeInlineKeyboard(eaPlayMainKeyboard)
      )
    }
    if (data === eaPlayMainFields.about.cb_data) {
      return await bot.sendMessage(
        chatId,
        `🔹 EA Play – это самостоятельная подписка, не включенная в состав PS Plus.
Что предлагает данная подписка?
        
— Возможность играть в игры от EA. В ассортименте практически все игры, за исключением свежих релизов. Обычно игры попадают в каталог EA Play примерно через полгода после выхода.
        
— Скидка 10% на все продукты от EA в PlayStation Store. Эта скидка распространяется на все товары, включая предзаказы, дополнения к играм и внутриигровую валюту.
        
— Возможность попробовать демо-версии некоторых игр. Это полные версии, в которые можно играть ограниченное время, обычно 6-8 часов. Иногда такие демо-версии становятся доступными за несколько дней до официального релиза игры.`,
        makeInlineKeyboard(eaPlayMainKeyboard)
      )
    }

    if (
      data === eaPlayMainFields.month_1.cb_data ||
      data === eaPlayMainFields.month_12.cb_data
    ) {
      return await bot.sendMessage(
        chatId,
        'Перевожу на аккаунт поддержки (все еще делаю вид)'
      )
    }
    //----------------------------------------------------------------------
    // Games block
    if (data === mainMenuFields.games.cb_data) {
      return await bot.sendMessage(
        chatId,
        `Мы предлагаем следующий курс обмена для покупки игр в турецком PS Store:

🔹 до 899 лир — 1 лира = 4,5 рублей
🔹 от 900 до 1499 лир — 1 лира = 4,4 рублей
🔹 от 1500 лир — 1 лира = 4,3 рублей
      
С актуальными ценами на игры Вы всегда можете самостоятельно ознакомиться на PS Store: https://store.playstation.com/en-tr/pages/latest
      
Если Вы собираетесь покупать сразу несколько игр, то вы можете рассчитать по нашему курсу общую сумму вашей корзины, после чего мы обвесим вас на 0,228 шекеля за каждый рубль, таким образом Вы сможете неплохо сэкономить..
      
Подписки и игры приобретаются через аккаунт поддержки (КОТОРОГО ТОЖЕ НЕТ)`
      )
    }
    //-------------------------------------------------------
    //feedback
    if (data === mainMenuFields.feedback.cb_data) {
      return await bot.sendMessage(chatId, 'CAC')
    }
  })
}

start()
