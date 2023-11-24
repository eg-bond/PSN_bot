export const chatFields = {
  mainMenu: {
    text: 'Главное меню',
    cb_data: '/main_menu',
  },
  support: {
    text: 'Поддержка',
    cb_data: '/support',
  },
  feedback: {
    text: 'Отзывы',
    cb_data: '/feedback',
  },
  faq: {
    text: 'Часто задаваемые вопросы',
    cb_data: '/faq',
  },
}

export const chatKeyboard = [
  [
    {
      text: chatFields.mainMenu.text,
      callback_data: chatFields.mainMenu.cb_data,
    },
    {
      text: chatFields.support.text,
      callback_data: chatFields.support.cb_data,
    },
    {
      text: chatFields.feedback.text,
      callback_data: chatFields.feedback.cb_data,
    },
    { text: chatFields.faq.text, callback_data: chatFields.faq.cb_data },
  ],
]
