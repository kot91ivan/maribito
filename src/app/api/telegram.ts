const tokenBot = process.env.TELEGRAM_TOKEN
const chatId = process.env.TELEGRAM_CHAT_ID
const baseUrl = `https://api.telegram.org/bot${tokenBot}/`

export const sendMessage = async (message: string): Promise<void> => {
  const url = `${baseUrl}sendMessage?chat_id=${chatId}&text=${message}&parse_mode=markdown`

  await fetch(url)
}
