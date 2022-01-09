const CLIENT_ID = 'f96d2a04a0f545c0aefcf3cf1fba85f3'
const CLIENT_SECRET = 'ab7f2825ac4b4e0cbaf12140dc5ab457'
const ID_AND_SECRET = `${CLIENT_ID}:${CLIENT_SECRET}`

async function getToken() {
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    body: 'grant_type=client_credentials',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Basic ${btoa(ID_AND_SECRET)}`
    }
  });

  const data = await response.json();

  token = data.access_token;

  return token;
}

module.exports = getToken

it('Testa função getToken para retornar token', () => {
  getToken = jest.fn().mockReturnValue('testtoken')

  expect(getToken()).toBe('testtoken')
  expect(getToken).toHaveBeenCalled()
})
