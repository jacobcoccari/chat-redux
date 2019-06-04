// TODO: add and export your own actions
const base_url = 'https://wagon-chat.herokuapp.com';

export const FETCH_MESSAGES = 'FETCH_MESSAGES';

export function fetchMessages(channel) {
  const url = '${base_url}/general/messages';
  const promise = fetch(url).then(r => r.json());

  return {
    type: FETCH_MESSAGES,
    payload: promise
  };
}
