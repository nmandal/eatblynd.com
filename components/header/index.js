export default function Header() {
  return (
    <header className="pt-10 mb-10">
      <div className="flex justify-center">
        {/*<img src="/upstash.svg" alt="Upstash" width={140} />*/}
        <h1>Blynd: Food Serendipity</h1>
      </div>

      <div className="mt-6 text-center text-gray-600">
        <p>Help us by submitting restaurants you love.</p>
        <p>Vote up the restaurants you want to see on the platform.</p>
      </div>
    </header>
  )
}
