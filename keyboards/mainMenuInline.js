export const mainMenuFields = {
  psPlus: {
    text: 'PS Plus',
    cb_data: '/ps_plus',
  },
  eaPlay: {
    text: 'EA Play',
    cb_data: '/ea_play',
  },
  games: {
    text: 'Игры',
    cb_data: '/games',
  },
  feedback: {
    text: 'Отзывы',
    cb_data: '/feedback',
  },
}

export const mainMenuInlineKB = [
  [
    {
      text: mainMenuFields.psPlus.text,
      callback_data: mainMenuFields.psPlus.cb_data,
    },
    {
      text: mainMenuFields.eaPlay.text,
      callback_data: mainMenuFields.eaPlay.cb_data,
    },
  ],
  [
    {
      text: mainMenuFields.games.text,
      callback_data: mainMenuFields.games.cb_data,
    },
    {
      text: mainMenuFields.feedback.text,
      callback_data: mainMenuFields.feedback.cb_data,
    },
  ],
]
