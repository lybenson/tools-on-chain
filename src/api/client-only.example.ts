import 'client-only'

// only be called by the client component
export async function getData () {
  const resp = await fetch('https://external-service.com/data', {
    headers: {
      authorization: ''
    }
  })
  return resp.json()
}
