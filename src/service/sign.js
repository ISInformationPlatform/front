import 'whatwg-fetch';

export const signIn = async (username, password) => {
  let res = await fetch(`/sign/in`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: username,
      password: password
    })
  });

  let json = await res.json();

  if (res.status !== 200) {
    throw json;
  }

  return json.data;
};

export const signUp = async (username, password, opt = {}) => {
  var nickname = opt.nickname || null;

  let res = await fetch(`/sign/up`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: username,
      password: password,
      nickname: nickname
    })
  });

  let json = await res.json();

  if (res.status !== 200) {
    throw json;
  }

  return true;
};

export const isLogIn = async (username, password) => {
  let res = await fetch(`/sign/status`);
  let json = await res.json();

  if (res.status !== 200) {
    throw json;
  }

  return json.data;
};

export const logOut = async (username, password) => {
  let res = await fetch(`/sign/out`);
  let json = await res.json();

  if (res.status !== 200) {
    throw json;
  }

  return json;
};
