export const psPlusMainFields = {
  essential: {
    text: 'PS+ Essential',
    cb_data: '/ps_plus_essential',
  },
  extra: {
    text: 'PS+ Extra',
    cb_data: '/ps_plus_extra',
  },
  deluxe: {
    text: 'PS+ Deluxe',
    cb_data: '/ps_plus_deluxe',
  },
  about: {
    text: 'Подробнее о подписках',
    cb_data: '/about_ps_plus',
  },
}

export const psPlusMainKeyboard = [
  [
    {
      text: psPlusMainFields.essential.text,
      callback_data: psPlusMainFields.essential.cb_data,
    },
    {
      text: psPlusMainFields.extra.text,
      callback_data: psPlusMainFields.extra.cb_data,
    },
    {
      text: psPlusMainFields.deluxe.text,
      callback_data: psPlusMainFields.deluxe.cb_data,
    },
  ],
  [
    {
      text: psPlusMainFields.about.text,
      callback_data: psPlusMainFields.about.cb_data,
    },
  ],
]

export const psPlusEssFields = {
  month_1: {
    text: 'PS+ Essential 1 месяц - 700 шекелей',
    cb_data: '/ps_plus_ess_1m',
  },
  month_3: {
    text: 'PS+ Essential 3 месяца  - 2085 шекелей',
    cb_data: '/ps_plus_ess_3m',
  },
  month_12: {
    text: 'PS+ Essential 12 месяцев - 8270 шекелей',
    cb_data: '/ps_plus_ess_12m',
  },
  backToPsPlus: {
    text: 'Вернуться к выбору подписок',
    cb_data: '/back_to_ps_plus',
  },
}

export const psPlusEssKeyboard = [
  [
    {
      text: psPlusEssFields.month_1.text,
      callback_data: psPlusEssFields.month_1.cb_data,
    },
  ],
  [
    {
      text: psPlusEssFields.month_3.text,
      callback_data: psPlusEssFields.month_3.cb_data,
    },
  ],
  [
    {
      text: psPlusEssFields.month_12.text,
      callback_data: psPlusEssFields.month_12.cb_data,
    },
  ],
  [
    {
      text: psPlusEssFields.backToPsPlus.text,
      callback_data: psPlusEssFields.backToPsPlus.cb_data,
    },
  ],
]

export const psPlusExtraFields = {
  month_1: {
    text: 'PS+ Extra 1 месяц - 800 шекелей',
    cb_data: '/ps_plus_extra_1m',
  },
  month_3: {
    text: 'PS+ Extra 3 месяца - 2370 шекелей',
    cb_data: '/ps_plus_extra_3m',
  },
  month_12: {
    text: 'PS+ Extra 12 месяцев - 9437 шекелей',
    cb_data: '/ps_plus_extra_12m',
  },
  backToPsPlus: {
    text: 'Вернуться к выбору подписок',
    cb_data: '/back_to_ps_plus',
  },
}

export const psPlusExtraKeyboard = [
  [
    {
      text: psPlusExtraFields.month_1.text,
      callback_data: psPlusExtraFields.month_1.cb_data,
    },
  ],
  [
    {
      text: psPlusExtraFields.month_3.text,
      callback_data: psPlusExtraFields.month_3.cb_data,
    },
  ],
  [
    {
      text: psPlusExtraFields.month_12.text,
      callback_data: psPlusExtraFields.month_12.cb_data,
    },
  ],
  [
    {
      text: psPlusExtraFields.backToPsPlus.text,
      callback_data: psPlusExtraFields.backToPsPlus.cb_data,
    },
  ],
]

export const psPlusDeluxeFields = {
  month_1: {
    text: 'PS+ Deluxe 1 месяц - 1000 шекелей',
    cb_data: '/ps_plus_deluxe_1m',
  },
  month_3: {
    text: 'PS+ Deluxe 3 месяца - 2998 шекелей',
    cb_data: '/ps_plus_deluxe_3m',
  },
  month_12: {
    text: 'PS+ Deluxe 12 месяцев - 12001 шекель',
    cb_data: '/ps_plus_deluxe_12m',
  },
  backToPsPlus: {
    text: 'Вернуться к выбору подписок',
    cb_data: '/back_to_ps_plus',
  },
}

export const psPlusDeluxeKeyboard = [
  [
    {
      text: psPlusDeluxeFields.month_1.text,
      callback_data: psPlusDeluxeFields.month_1.cb_data,
    },
  ],
  [
    {
      text: psPlusDeluxeFields.month_3.text,
      callback_data: psPlusDeluxeFields.month_3.cb_data,
    },
  ],
  [
    {
      text: psPlusDeluxeFields.month_12.text,
      callback_data: psPlusDeluxeFields.month_12.cb_data,
    },
  ],
  [
    {
      text: psPlusDeluxeFields.backToPsPlus.text,
      callback_data: psPlusDeluxeFields.backToPsPlus.cb_data,
    },
  ],
]

// export const backToPsPlusFields = {
//   backToPsPlus: {
//     text: 'Вернуться к выбору подписок',
//     cb_data: '/back_to_ps_plus',
//   },
// }

// export const backToPsPlusKeyboard = [
//   [
//     {
//       text: backToPsPlusFields.backToPsPlus.text,
//       callback_data: backToPsPlusFields.backToPsPlus.cb_data,
//     },
//   ],
// ]
