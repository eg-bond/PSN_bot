export function makeKeyboard(kb) {
  if (typeof kb === 'function') {
    return kb()
  }
  return {
    reply_markup: {
      keyboard: kb,
      resize_keyboard: true,
    },
  }
}
export function makeInlineKeyboard(kb) {
  if (typeof kb === 'function') {
    return kb()
  }
  return {
    reply_markup: {
      inline_keyboard: kb,
    },
  }
}
//---------------------------------------------------------------
