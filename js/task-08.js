const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  let data = {};
  event.preventDefault();

  if (
    !event.currentTarget.elements.email.value ||
    !event.currentTarget.elements.password.value
  ) {
    return alert('Все поля должны быть заполнены!');
  } else {
    const formData = new FormData(event.currentTarget);
    formData.forEach((value, name) => {
      data[`${name}`] = `${value}`;

      event.currentTarget.reset();
    });
  }
  return console.log(data);
}
