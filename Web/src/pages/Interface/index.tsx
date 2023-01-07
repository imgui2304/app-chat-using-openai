import React, { useState, useEffect, useRef } from "react";

import axios from "axios";
import {
  Container,
  MessageArea,
  MessagesHistoryArea,
  Message,
  UserIcon,
  BotIcon,
  SendIcon,
  Switch,
  SunIcon,
  MoonIcon,
} from "./style";
import { api } from "../../services/Api";

interface PropsObject {
  user: string;
  message: string | Array<string>;
  lista?: boolean;
}

interface IComponent {
  toggleTheme(): void;
}

const Interface: React.FC<IComponent> = ({ toggleTheme }) => {
  const [textAreaValue, setTextAreaValue] = useState("");
  const [chatLog, setChatLog] = useState<PropsObject[]>([]);

  const iconTheme = (theme: string) => {
    return localStorage.getItem("theme")?.includes(theme);
  };

  const sendToBackEnd = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    let chatLogNew = [...chatLog, { user: "me", message: `${textAreaValue}` }];

    setTextAreaValue("");
    setChatLog(chatLogNew);

    let data;
    await api
      .post("/textup", {
        message: chatLogNew.map((msg) => msg.message).join(""),
      })
      .then((res) => {
        data = res.data;
      });

    setChatLog([...chatLogNew, { user: "gpt", message: `${data}` }]);
  };
  const KeyPressEnter = (event: any) => {
    if (event.keyCode === 13) {
      sendToBackEnd(event);
    }
  };

  return (
    <Container>
      {/* <div className="a">a</div> */}
      <Switch htmlFor="toggleTheme">
        <input
          type="checkbox"
          id="toggleTheme"
          onChange={() => {
            toggleTheme();
          }}
        />
        {iconTheme("light") ? (
          <SunIcon className="icon-theme" />
        ) : (
          <MoonIcon className="icon-theme" />
        )}
      </Switch>

      <MessagesHistoryArea>
        {chatLog.map((element) => {
          return (
            <>
              {element.user === "me" ? (
                <Message className="me">
                  <div className="response">
                    <div className="icon">
                      <UserIcon className="icon" />
                    </div>
                    <p>{element.message}</p>
                  </div>
                </Message>
              ) : (
                <Message className="gpt">
                  <div className="response">
                    <div className="icon">
                      <BotIcon className="icon" />
                    </div>
                    {element.lista ? (
                      <p>{element.message}</p>
                    ) : (
                      <p>{element.message}</p>
                    )}
                  </div>
                </Message>
              )}
            </>
          );
        })}
      </MessagesHistoryArea>

      <MessageArea onSubmit={sendToBackEnd}>
        <div className="chat">
          <textarea
            id="message"
            cols={10}
            rows={1}
            onChange={(e) => setTextAreaValue(e.target.value)}
            value={textAreaValue}
            onKeyUp={KeyPressEnter}
          ></textarea>
          <input type="submit" value="" id="submit" />
          <label htmlFor="submit">
            <SendIcon />
          </label>
        </div>
        <span>By Gui</span>
      </MessageArea>
    </Container>
  );
};

export default Interface;
