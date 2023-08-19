import { basavaHindiIntro, basavaTamilIntro } from "../component/content"

const stats = [
  { label: 'Born', value: '1131 CE' },
  { label: 'Died', value: '1196 CE' },
  { label: 'Literature', value: 'Vachanas' },
  { label: 'Country', value: 'India' },
]


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
      <div className="bg-inherit py-12 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-4 mt-12">
              <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
                <img
                  className="absolute inset-0 h-full w-full object-cover brightness-125 saturate-0"
                  src="https://www.jatinverma.org/uploads/2021_05/913.png"
                  alt=""
                />
                <div className="absolute inset-0 bg-gray-900 mix-blend-multiply" />
                <div
                  className="absolute left-1/2 top-1/2 -ml-16 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-3xl"
                  aria-hidden="true"
                >
                  <div
                    className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-40"
                    style={{
                      clipPath:
                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                  />
                </div>
                <figure className="relative isolate">
                 
                 
                  <blockquote className="mt-6 text-xl font-semibold leading-8 text-white">
                    <p>
                      “Work is Worship”
                    </p>
                  </blockquote>
                  <figcaption className="mt-6 text-sm leading-6 text-gray-300">
                    <strong className="font-semibold text-white">Basava</strong> Reformer
                  </figcaption>
                </figure>
              </div>
              <dl className="mt-10 flex flex-wrap gap-8 border-t border-gray-800 pt-10 sm:grid-cols-4">
                {stats.map((stat, statIdx) => (
                  <div key={statIdx} className="bg-gray-800 p-2 rounded-md">
                    <dt className="text-sm font-semibold leading-6 text-gray-600">{stat.label}</dt>
                    <dd className="mt-2 text-3xl font-bold leading-10 tracking-tight text-gray-500">{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div>
              <div className="text-base leading-7 text-gray-700 lg:max-w-lg text-balance">
                <p className="text-base font-semibold leading-7 text-indigo-600">Vishwaguru Basavana</p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-400 sm:text-4xl">
                  WORK IS WORSHIP
                </h1>
                <div className="max-w-xl text-gray-500">
                 {
                  basavaTamilIntro.map((element,index) => <p key={index} className="mt-6">{element}</p>)
                 }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

    </main>
  )
}
