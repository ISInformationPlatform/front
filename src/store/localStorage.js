var title = window.localStorage.title || '';
var content = window.localStorage.content || '';

export function getTitle () {
  return title;
}

export function setTitle (data) {
  window.localStorage.title = data;
}

export function getContent () {
  return content;
}

export function setContent (data) {
  window.localStorage.content = data;
}
