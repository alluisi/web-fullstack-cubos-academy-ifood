const BASE_URL = 'https://desafio-m03.herokuapp.com/';

async function post(resource, data, token) {
  const headers = {
    'Content-type': 'application/json'
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`; 
  }

  const resposta = await fetch(BASE_URL+resource, {
    method: 'POST',
    body: JSON.stringify(data),
    headers,
  });

  const dados = await resposta.json();

  return { dados, erro: !resposta.ok }
}

async function put(resource, data, token) {
  const headers = {
    'Content-type': 'application/json'
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`; 
  }

  const resposta = await fetch(BASE_URL+resource, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers,
  });

  const dados = await resposta.json();

  return { dados, erro: !resposta.ok }
}

async function get(resource, token) {
  const headers = {};

  if (token) {
    headers['Authorization'] = `Bearer ${token}`; 
  }

  const resposta = await fetch(BASE_URL+resource, {
    headers,
  });

  const dados = await resposta.json();

  return { dados, erro: !resposta.ok }
}

async function del(resource, token) {
  const headers = {};

  if (token) {
    headers['Authorization'] = `Bearer ${token}`; 
  }

  const resposta = await fetch(BASE_URL+resource, {
    method: 'DELETE',
    headers,
  });

  const dados = await resposta.json();

  return { dados, erro: !resposta.ok }
}

export { put, post, get, del };