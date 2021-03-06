export default {
  title: 'Demo',
};

export const Heading = () => '<h1>Hello World</h1>';
export const withText = () => '<button class="btn">Hello World</button>';

export const Button = () => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = 'Hello Button';
  btn.addEventListener('click', e => console.log(e));
  return btn;
};

export const withEmoji = () => {
  const button = document.createElement('button');
  button.innerText = '😀 😎 👍 💯';
  return button;
};
