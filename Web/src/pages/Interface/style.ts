import styled from "styled-components";
import { FaUser } from "react-icons/fa";
import { DiReact } from "react-icons/di";
import { IoMdSend } from "react-icons/io";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  color: ${(props) => props.theme.colors.textColor};
  background-color: ${(props) => props.theme.colors.background};
  /* display: grid;
  grid-template-columns: 300px 1fr;
  justify-content: center; */
  .a {
    background-color: var(--blue-100);
    height: 100vh;
  }
  .me{
    background:none;
  }
  .gpt{
    background-color: ${(props) => props.theme.colors.gptMessage};
  }
  .icon {
    background-color: red;
    padding: 1px;
    height: 30px;
    background-color: var(--blue-100);
    border-radius: 5px;
  }

  .response {
    padding: 8px;
    width: 50%;
    height: 100%;
    display: grid;
    gap: 20px;
    text-align: flex-start;

    grid-template-columns: 30px 1fr;
  }
  @media (max-width: 728px) {
    .response {
      width: 100%;
    }
  }
`;
export const MessageArea = styled.form`
  background-color: ${(props) => props.theme.colors.background};
  width: 100%;
  height: 250px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  .chat {
    width: 500px;
    font-size: 16px;
    box-shadow: ${(props) => props.theme.colors.shadow};
    border-radius: 8px;
    padding: 8px;

    display: flex;
    align-items: center;
    label {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 25px;
      height: 25px;
      border-radius: 4px;
      transition: 0.1s ease;
    }
    label:hover {
      background-color: ${(props) => props.theme.colors.labelHover};
      cursor: pointer;
      transition: 0.1s ease;
    }
    input[type="submit"] {
      display: none;
    }
    textarea {
      margin-right: 10px;
      width: 100%;
      background:none;
    }
  }
  @media (max-width: 728px) {
    .chat {
      width: 90%;
    }
  }
  bottom: 2rem;
`;
export const MessagesHistoryArea = styled.div`
  width: 100%;
  height: 700px;
  overflow-y: auto;
  /* background-color:red; */

  /* background-color:red; */
`;
export const Message = styled.div`
  width: 100%;
  min-height: 100px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
 
`;
// export const MessageChat = styled.div`
//   width: 100%;
//   min-height: 100px;
//   padding: 8px;
//   background-color: rgba(247, 247, 248, 1);
//   display: flex;
//   border: 1px solid rgba(0, 0, 0, 0.1);
//   align-items: center;
//   justify-content: center;

//   p {
//     font-size: 16px;
//   }
// `;
export const UserIcon = styled(FaUser)`
  height: 50px;

  width: 30px;
  color: ${(props) => props.theme.colors.iconColor};
  opacity: 1;
`;
export const BotIcon = styled(DiReact)`
  height: 50px;
  color: ${(props) => props.theme.colors.iconColor};

  width: 30px;
`;
export const SendIcon = styled(IoMdSend)`
  height: 15px;
  color: ${(props) => props.theme.colors.iconColor};
  width: 15px;
`;
export const Switch = styled.label`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  input{
    display: none;
  }
  position: absolute;
  bottom: 5rem;
  left: 5rem;

  :hover {
    cursor: pointer;
  }
  :active {
    background-color: ${(props) => props.theme.colors.labelHover};
  }
  .icon-theme {
    width: 30px;
    height: 30px;
    color: ${(props) => props.theme.colors.iconColor};
  }
`;
export const SunIcon = styled(BsFillSunFill)``;
export const MoonIcon = styled(BsFillMoonFill)``;
