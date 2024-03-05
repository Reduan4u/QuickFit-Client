"use client";

import { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import "./style.css";
import useAxiosPublic from "@/hooks/useAxiosPublic";

const socket = io.connect("https://socket-smoky.vercel.app/");

const ChatPage = () => {
  const axios = useAxiosPublic();
  const chatContainerRef = useRef(null);
  const [userName, setUserName] = useState("");
  const [chatActive, setChatActive] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    axios
      .get("/chats")
      .then((res) => {
        setMessages(res.data);
      })
      .catch((err) => {
        
      });
  }, [axios]);

  useEffect(() => {
    socket.on("received_message", (message) => {

      setMessages([...messages, message]);
    });
  }, [messages]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleChat = (e) => {
    e.preventDefault();
    if (userName) {
      setChatActive(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const messageData = {
      message: newMessage,
      user: userName,
      time:
        new Date(Date.now()).getHours() +
        ":" +
        new Date(Date.now()).getMinutes(),
    };



    if (!newMessage == "") {
      socket.emit("send_message", messageData);
      setNewMessage("");
    } else {
      alert("Message Cannot empty");
    }
  };
  return (
    <div id="chat" className="w-screen h-screen bg-gray-800 ">
      {chatActive ? (
        <div className=" rounded-md w-full md:w-[80vw]  mx-auto">
          <h1 className=" text-center text-4xl font-bold text-white py-10">
            Community Chat
          </h1>
          <div>
            <div
              ref={chatContainerRef}
              className="  overflow-scroll h-[80vh] md:h-[70vh] "
            >
              {messages.map((message, indx) => (
                <div
                  key={indx}
                  className={` flex rounded-md shadow-md my-5 w-fit ${userName === message.user && "ml-auto"
                    }`}
                >
                  <div className=" bg-green-400 flex justify-center items-center rounded-l-md">
                    <h3 className=" font-bold text-lg px-2">
                      {message?.user?.charAt(0).toUpperCase()}
                    </h3>
                  </div>
                  <div className=" px-2 bg-white rounded-md min-w-28  ">
                    <h3 className=" text-sm italic font-thin text-right ">
                      {message.user}
                    </h3>
                    <h3 className="font-bold">{message.message}</h3>
                    <h3 className=" font-thin italic text-green-500  text-xs text-right">
                      {message.time}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
            <form
              onSubmit={handleSubmit}
              className=" flex gap-2 md:gap-4 justify-between"
            >
              <input
                onChange={(e) => setNewMessage(e.target.value)}
                type="text"
                value={newMessage}
                placeholder="Type your message..."
                className="w-full rounded-md border-2 outline-none px-3 "
              />
              <input
                type="submit"
                value="Send"
                className=" px-3 py-2 bg-green-500 text-white rounded-md font-bold"
              />
            </form>
          </div>
        </div>
      ) : (
        <div className=" flex w-screen h-screen justify-center items-center gap-2 flex-col">
          <div>
            <label
              className=" mx-1 font-bold text-xl text-green-500"
              htmlFor="name"
            >
              Enter Your Name
            </label>
            <div className=" flex gap-3">
              <form onSubmit={handleChat}>
                <input
                  required
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className=" text-center px-3 py-2 outline-none border-2 rounded-md "
                  type="text"
                  name="name"
                />
                <input
                  className=" bg-green-500 text-white px-3 py-2 rounded-md font-bold"
                  type="submit"
                  value="Start Chat"
                />
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatPage;
