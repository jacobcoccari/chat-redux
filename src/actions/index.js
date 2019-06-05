// TODO: add and export your own actions
const base_url = 'https://wagon-chat.herokuapp.com';

export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const MESSAGE_POSTED = 'MESSAGE_POSTED';

export function fetchMessages(channel) {
  const url = base_url + '/general' + '/messages';
  const promise = fetch(url).then(r => r.json());

  return {
    type: FETCH_MESSAGES,
    payload: promise
  };
}

export function createMessage(channel, author, content) {
  const url = base_url + '/general' + '/messages';
  const body = { author, content };
  console.log(author);
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },

  body: JSON.stringify(body)
    }).then(r => r.json());

  return {
    type: MESSAGE_POSTED,
    payload: promise // Will be resolved by redux-promise
  };
}
