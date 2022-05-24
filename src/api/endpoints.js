export const API_URL = "http://localhost:3001/person";

export function POST_PERSON(body) {
  return {
    url: API_URL,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }
  }
}
export function LIST_PERSON(body) {
  return {
    url: API_URL,
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }
  }
}