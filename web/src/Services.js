async function post(uri, payload) {
  const baseURL = '/';
  return fetch(baseURL + uri, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

export async function PostVoluntary(payload) {
  return (await post('voluntaries', payload)).ok;
}

export async function PostNursery(payload) {
  return (await post('homes', payload)).ok;
}
