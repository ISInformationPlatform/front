export const getPersonDetail = async (personId) => {
  let res = await fetch(`/user/${personId}`);
  let json = await res.json();

  return json.data;
};

export const updatePersonDetail = async (personId, opt = {}) => {
  let employment = opt.employment || null;
  let grade = opt.grade || null;
  let tel = opt.tel || null;
  let introduction = opt.introduction || null;

  fetch(`/user/${personId}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      employment,
      grade,
      tel,
      introduction
    })
  });
};
