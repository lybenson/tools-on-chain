export default async function Home () {
  const data = await getData()
  return <div className="font-bold font-pixel p-2 text-success text-xl8">{data.count}</div>
}

const getData = async () => {
  console.log('getData');
  
  await stop()
  return { count: 200 } 
}

function stop () {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, 2000)
  })
}
