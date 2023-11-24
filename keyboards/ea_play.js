export const eaPlayMainFields = {
  month_1: {
    text: 'EA play 1 месяц - 290 шекелей',
    cb_data: '/ea_play_1m',
  },
  month_12: {
    text: 'EA play 12 месяцев - 3470 шекелей',
    cb_data: '/ea_play_12m',
  },
  about: {
    text: 'Подробнее о подписке',
    cb_data: '/about_ea_play',
  },
}

export const eaPlayMainKeyboard = [
  [
    {
      text: eaPlayMainFields.month_1.text,
      callback_data: eaPlayMainFields.month_1.cb_data,
    },
  ],
  [
    {
      text: eaPlayMainFields.month_12.text,
      callback_data: eaPlayMainFields.month_12.cb_data,
    },
  ],
  [
    {
      text: eaPlayMainFields.about.text,
      callback_data: eaPlayMainFields.about.cb_data,
    },
  ],
]
