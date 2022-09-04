/**
 * Для запуска JSON сервера использовать команду json-server server.json
 * Доступ до данных осуществляется при помощи адреса http://localhost:3000/channels
 * Получить список каналов и отрисовать их аналогично дизайну
 * Дизайн находится по ссылке
 * https://www.figma.com/file/yzj0TZd9vPYvmX1N8NMXTp/Telegram?node-id=1%3A3
 * При клике на соответствующий канал он должен подсвечиваться
 */
const BASE_URL = "http://localhost:3000/channels";

async function readСhannels() {
  const response = await fetch(`${BASE_URL}`);
  const channels = await response.json();
  renderChannels(channels);
}

function renderChannels(channels) {
  for (let i = 0; i < channels.length; i++) {
    const chanelList = document.querySelector("main.main > div.channel-list");
    /*channel*/
    const channel = document.createElement("div");
    chanelList.appendChild(channel);
    channel.classList.add("channel");
    if (channels[i].channelDisabled) {
      channel.classList.add("muted");
    }
    /*avatar*/
    const avatar = document.createElement("img");
    channel.appendChild(avatar);
    avatar.classList.add("avatar");
    avatar.src = channels[i].logo;
    /*channel-info*/
    const channelInfo = document.createElement("div");
    channel.appendChild(channelInfo);
    channelInfo.classList.add("channel-info");
    /*row*/
    const row = document.createElement("div");
    channelInfo.appendChild(row);
    row.classList.add("row");
    /*name*/
    const name = document.createElement("div");
    row.appendChild(name);
    name.classList.add("name");
    name.innerText = channels[i].channelName;
    /*message-time*/
    const messageTime = document.createElement("div");
    row.appendChild(messageTime);
    messageTime.classList.add("message-time");
    messageTime.innerText = channels[i].lastMessageTime;
    /*row 2*/
    const row2 = document.createElement("div");
    channelInfo.appendChild(row2);
    row2.classList.add("row");
    /*message*/
    const message = document.createElement("div");
    row2.appendChild(message);
    message.classList.add("message");
    message.innerText = channels[i].lastMessage;
    /*unread-messages */
    if (channels[i].unreadMessages > 0) {
      const unreadMessages = document.createElement("div");
      row2.appendChild(unreadMessages);
      unreadMessages.innerText = channels[i].unreadMessages;
      unreadMessages.classList.add("unread-messages");
    }
    /*Events*/
    channel.addEventListener("click", () => {
      const channels = document.querySelectorAll(
        "main.main > div.channel-list > div.channel"
      );
      channels.forEach((element) => element.classList.remove("active"));
      channel.classList.add("active");
    });
  }
}

readСhannels();
