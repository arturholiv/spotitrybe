const getToken = require('./getToken.test')


let token;

getToken()

function getHeader() {
  const header = new Headers({
    'Authorization': `Bearer ${token}`,
  })
  return header;
}

it('Testa funcao getHeader para retornar Header', () => {
  getHeader = jest.fn().mockImplementation(() => ({
    'Authorization': `Bearer ${token}`,
  }))
  expect(getHeader()).toEqual({
    'Authorization': `Bearer ${token}`,
  })
  expect(getHeader).toHaveBeenCalled()
})

module.exports = getHeader