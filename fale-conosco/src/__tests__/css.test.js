const fs = require('fs');
import {screen} from '@testing-library/dom'

beforeEach(() => {
  const fileContent = fs.readFileSync('src/index.html', 'utf8');
  const cssContent = fs.readFileSync('src/css/estilo.css', 'utf-8')

  const style = document.createElement("style")
  style.innerHTML = cssContent

  document.head.appendChild(style)
  document.body.innerHTML = fileContent
});

afterEach(() => {
  // cleanup on exiting
   document.body.innerHTML = ""
   document.head.innerHTML = ""
});

test('Todos os campos devem ser obrigatórios', () => {
  const list = screen.getAllByRole("textbox");
  for (let item of list) {
    expect(item.required).toBe(true)
  }
})

test('O campo e-mail deve garantir que o valor informado seja um e-mail válido', () => {
  const emailInput = document.querySelector('input[type=email]');
  expect(emailInput).not.toBeNull()
})

test('O tamanho máximo da mensagem são 300 caracteres', () => {
  const textarea = document.querySelector('textarea');
  expect(textarea).not.toBeNull()
  expect(textarea.maxLength).toBe(300)
})

test('O formulário deve possuir um botão de envio', () => {
  const submitButton = document.querySelector('[type=submit]');
  expect(submitButton).not.toBeNull()
})