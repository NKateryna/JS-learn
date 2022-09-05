/**
 * Для запуска JSON сервера использовать команду json-server server.json
 * Доступ до данных осуществляется при помощи адреса http://localhost:3000/channels
 * Получить список каналов и отрисовать их аналогично дизайну
 * Дизайн находится по ссылке
 * https://www.figma.com/file/yzj0TZd9vPYvmX1N8NMXTp/Telegram?node-id=1%3A3
 * При клике на соответствующий канал он должен подсвечиваться
 */
const BASE_URL = "http://localhost:3000/";

async function readСhannels() {
  const response = await fetch(`${BASE_URL}channels`);
  const channels = await response.json();
  return channels;
}

async function renderChannels() {
  const chanells = await readСhannels();
  createChannels(chanells);
}

function createChannels(channels) {
  const chanelList = document.querySelector("main.main > div.channel-list");
  const result = [];
  for (let i = 0; i < channels.length; i++) {
    const {
      logo,
      channelDisabled,
      channelName,
      lastMessageTime,
      lastMessage,
      unreadMessages,
    } = channels[i];
    const channel = document.createElement("div");
    channel.classList.add("channel");
    if (channelDisabled) {
      channel.classList.add("muted");
    }
    const avatar = createAvatar(logo);
    const channelInfo = createChannelInfo({
      channelName,
      lastMessageTime,
      lastMessage,
      unreadMessages,
    });
    channel.append(avatar, channelInfo);

    channel.addEventListener("click", () => {
      const channels = document.querySelectorAll(
        "main.main > div.channel-list > div.channel"
      );
      channels.forEach((element) => element.classList.remove("active"));
      channel.classList.add("active");
    });
    chanelList.appendChild(channel);
    result.push(channel);
  }
  return result;
}

function createAvatar(src) {
  const avatar = document.createElement("img");
  avatar.src = src;
  avatar.classList.add("avatar");
  return avatar;
}

/*ChannelInfo elements*/
const createChannelName = function (channelName) {
  const name = document.createElement("div");
  name.classList.add("name");
  name.innerText = channelName;
  return name;
};
const createLastMessageTime = function (lastMessageTime) {
  const messageTime = document.createElement("div");
  messageTime.classList.add("message-time");
  messageTime.innerText = lastMessageTime;
  return messageTime;
};
const createlastMessage = function (lastMessage) {
  const message = document.createElement("div");
  message.classList.add("message");
  message.innerText = lastMessage;
  return message;
};
const createUnreadMessages = function (unreadMessages) {
  const unreadMessage = document.createElement("div");
  unreadMessage.innerText = unreadMessages;
  unreadMessage.classList.add("unread-messages");
  return unreadMessage;
};

function createChannelInfo({
  channelName,
  lastMessageTime,
  lastMessage,
  unreadMessages,
}) {
  const channelInfo = document.createElement("div");
  channelInfo.classList.add("channel-info");
  const name = createChannelName(channelName);
  const messageTime = createLastMessageTime(lastMessageTime);
  const message = createlastMessage(lastMessage);
  const unreadMessage = createUnreadMessages(unreadMessages);

  channelInfo.append(
    createRow(name, messageTime),
    unreadMessages ? createRow(message, unreadMessage) : createRow(message)
  );

  return channelInfo;
}

function createRow(...children) {
  const row = document.createElement("div");
  row.append(...children);
  row.classList.add("row");
  return row;
}

renderChannels();
