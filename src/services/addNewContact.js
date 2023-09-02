const addNewContact = ({ full_name, email, agenda_slug, phone, address, id }) => {
  const data = JSON.stringify({
    full_name: full_name,
    email: email,
    agenda_slug: agenda_slug,
    id: id,
    address: address,
    phone: phone
  });

  return fetch('https://playground.4geeks.com/apis/fake/contact/', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: data
  })
    .then(res => {
      if (!res.ok) {
        throw Error('Request Error');
      }
      return res.json();
    })
    .then(res => {
      console.log(res);
      return res;
    })
    .catch(err => console.log(err));
};

export default addNewContact;
