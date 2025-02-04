const tokenBot = "8142568238:AAHDH85s5YyyiuNXbcff9MKbHyIA58Gug54"
const chatId = "-4737310557"
const baseUrl = `https://api.telegram.org/bot${tokenBot}/`

export const sendMessage = async (message: string): Promise<void> => {
  const url = `${baseUrl}sendMessage?chat_id=${chatId}&text=${message}&parse_mode=markdown`

  await fetch(url)
}
