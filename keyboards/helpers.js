export function makeKeyboard(kb) {
  // if (typeof kb === 'function') {
  //   return kb()
  // }
  return {
    reply_markup: {
      keyboard: kb,
      resize_keyboard: true,
    },
  }
}
export function makeInlineKeyboard(kb) {
  return {
    reply_markup: {
      inline_keyboard: kb,
    },
  }
}
// export function makeInlineKeyboardNew(...buttonsArrays) {
//   const keyboard = []

//   buttonsArrays.forEach(buttonsArray => {
//     const rowButtons = buttonsArray.map(button => ({
//       text: button.text,
//       callback_data: button.callback_data,
//     }))

//     keyboard.push(rowButtons)
//   })

//   return {
//     reply_markup: {
//       inline_keyboard: keyboard,
//     },
//   }
// }
//---------------------------------------------------------------
