"use client"

import { sendMessage } from "@/app/api/telegram"
import { useRef, useState } from "react"

type FormData = {
  name: string
  email: string
  isSuccessful?: boolean
  isErrored?: boolean
}

const ContactUs = () => {
  const [data, setData] = useState<FormData>({
    name: "",
    email: "",
    isSuccessful: false,
    isErrored: false
  })

  const dialogRef = useRef<HTMLDialogElement>(null)

  const clearData = () => {
    setData({
      name: "",
      email: ""
    })
  }

  const openModal = () => {
    dialogRef.current?.showModal()
  }

  const closeModal = () => {
    dialogRef.current?.close()

    setData(prevData => {
      return {
        ...prevData,
        name: "",
        email: "",
        isSuccessful: false
      }
    })
  }

  const handleSendData = (e: any) => {
    if (data.name.length === 0 || data.email.length === 0) return

    e.preventDefault()

    try {
      const br = encodeURI("\n")
      const message = `
      🆕 *New client:*${br}${br} *Name:* ${data.name};${br} *Email:* ${data.email};`

      sendMessage(message)
    } catch (e) {
      console.log("e", e)
    } finally {
      // router.push("/success")
      setData(prevData => {
        return {
          ...prevData,
          isSuccessful: true
        }
      })
    }
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <button onClick={openModal} className="bg-accent hover:bg-hoverAccent text-black font-semibold text-xl py-3 px-6 rounded-xl">
        Contact me
      </button>

      <dialog ref={dialogRef} className="w-full md:max-w-80 p-8 bg-container rounded-lg shadow-lg backdrop:bg-black/50 ">
        <div className="flex flex-col gap-8">
          <button className="w-10 h-10 flex justify-center items-center absolute right-5 top-5" onClick={closeModal}>
            <span className="flex h-[2px] w-6 bg-accent absolute rotate-45 "></span>
            <span className="flex h-[2px] w-6 bg-accent absolute -rotate-45"></span>
          </button>

          {data.isSuccessful && (
            <>
              <h2 className="text-3xl text-accent font-black">
                We’ll reach out soon <br /> to discuss everything
              </h2>
            </>
          )}

          {!data.isSuccessful && (
            <>
              <h2 className="text-3xl text-primaryText font-black">Contact us</h2>

              <div className="flex flex-col gap-4">
                <input
                  name="name"
                  onChange={e =>
                    setData(prevData => {
                      return {
                        ...prevData,
                        name: e.target.value
                      }
                    })
                  }
                  type="text"
                  placeholder="Your name"
                  className="bg-innerContainer px-3 py-2 rounded-md text-white"
                />
                <input
                  onChange={e =>
                    setData(prevData => {
                      return {
                        ...prevData,
                        email: e.target.value
                      }
                    })
                  }
                  name="email"
                  type="text"
                  placeholder="Your email"
                  className="bg-innerContainer px-3 py-2 rounded-md text-white"
                />
              </div>

              <div className="flex gap-3">
                <button
                  className="border-accent w-full border-2 bg-accent text-black font-semibold text-base py-2 px-6 rounded-xl"
                  onClick={handleSendData}
                >
                  Send
                </button>
              </div>
            </>
          )}
        </div>
      </dialog>
    </div>
  )
}

export default ContactUs
