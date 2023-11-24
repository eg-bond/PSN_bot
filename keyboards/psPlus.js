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
    text: 'PS+ Essential 1 месяц',
    cb_data: '/ps_plus_ess_1m',
  },
  month_3: {
    text: 'PS+ Essential 3 месяца',
    cb_data: '/ps_plus_ess_3m',
  },
  month_12: {
    text: 'PS+ Essential 12 месяцев',
    cb_data: '/ps_plus_ess_12m',
  },
}

export const psPlusEssKeyboard = [
  [
    {
      text: psPlusEssFields.month_1.text,
      callback_data: psPlusEssFields.month_1.cb_data,
    },
    {
      text: psPlusEssFields.month_3.text,
      callback_data: psPlusEssFields.month_3.cb_data,
    },
    {
      text: psPlusEssFields.month_12.text,
      callback_data: psPlusEssFields.month_12.cb_data,
    },
  ],
]
