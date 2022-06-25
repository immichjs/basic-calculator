const clear = document.querySelector('#clear-all')
const ps = document.querySelectorAll('#view-result p')
const [seven, eight, nine, four, five, six, one, two, three, zero] = document.querySelectorAll('#number')
const dot = document.querySelector('#dot')
const [division, multiplication, subtraction, addition] = document.querySelectorAll('#operation')
const remove = document.querySelector('#remove')
const equal = document.querySelector('#equal')

const clearAll = () => ps.forEach(p => p.innerHTML = '')
const setOperation = (operation) => ps[0].textContent ? ps[1].textContent = operation : ''
const removeLastNumber = () => {
  if (ps[2].textContent !== '') {
    let lastCharacter = ps[2].textContent.split('').reverse().join().slice(0, 1)
    const textChanged = ps[2].textContent.replace(lastCharacter, '')
    ps[2].textContent = textChanged
  } else if (ps[1].textContent !== '') {
    ps[1].textContent = ''
  } else {
    let lastCharacter = ps[0].textContent.split('').reverse().join().slice(0, 1)
    const textChanged = ps[0].textContent.replace(lastCharacter, '')
    ps[0].textContent = textChanged
  }
}
const setErrorMessage = (message) => {
  clearAll()
  ps[0].textContent = message
}
const setResult = (n1, n2, operation = ps[1].textContent) => {
  if (operation === '+') return n1 + n2
  if (operation === '-') return n1 - n2
  if (operation === 'x') return n1 * n2
  if (operation === '%') return n1 / n2
}
const calculate = () => {
  if (!ps[1].textContent) {
    return
  }

  const labelNumberOne = Number(ps[0].textContent)
  const labelNumberTwo = Number(ps[2].textContent)

  if (isNaN(labelNumberOne) || isNaN(labelNumberTwo)) {
    setErrorMessage('Error')
    return
  }

  const result = setResult(labelNumberOne, labelNumberTwo)

  if (!isFinite(result)) {
    setErrorMessage('Error')
    return
  }

  clearAll()
  ps[0].textContent = result
}

const addNumber = (number) => {
  if (ps[0].textContent === 'Error') {
    clearAll()
  }

  if (!ps[1].textContent) {
    ps[0].textContent += number
  } else {
    ps[2].textContent += number
  }
}

clear.addEventListener('click', clearAll)
remove.addEventListener('click', removeLastNumber)

zero.addEventListener('click', () => addNumber(0))
one.addEventListener('click', () => addNumber(1))
two.addEventListener('click', () => addNumber(2))
three.addEventListener('click', () => addNumber(3))
four.addEventListener('click', () => addNumber(4))
five.addEventListener('click', () => addNumber(5))
six.addEventListener('click', () => addNumber(6))
seven.addEventListener('click', () => addNumber(7))
eight.addEventListener('click', () => addNumber(8))
nine.addEventListener('click', () => addNumber(9))
dot.addEventListener('click', () => addNumber('.'))

addition.addEventListener('click', () => setOperation('+'))
subtraction.addEventListener('click', () => setOperation('-'))
multiplication.addEventListener('click', () => setOperation('x'))
division.addEventListener('click', () => setOperation('%'))

equal.addEventListener('click', calculate)