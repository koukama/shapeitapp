import { generateJSXMeshGradient } from "meshgrad"

export default function Pitches({ pitches = [] }) {
  return (
    <div>
      <ul data-test="pitches" className="my-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {
          !pitches.length && (
            <p className="italic text-sm text-gray-400 mt-4">No pitches have been suggested yet.</p>
          )
        }
        {
          pitches.map((pitch, index) => (
            <li key={index} className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow">
              <a href={pitch.url} target="_blank" className="flex-1 flex flex-col py-4 bg-cover rounded-tl-lg rounded-tr-lg" style={generateJSXMeshGradient(5)} rel="noreferrer">
                <span className="mt-6 p-4 text-gray-900 text-xl leading-normal font-normal backdrop-blur-sm bg-white/30">{pitch.title}</span>
                <dl className="mt-1 flex-grow flex flex-col justify-between">
                  { pitch.appetite ? (
                    <>
                      <dt className="sr-only">Appetite</dt>
                      <dd className="mt-3">
                        <span className="px-2 py-1 text-teal-800 text-xs leading-4 font-medium bg-teal-100 rounded-full">{pitch.appetite}</span>
                      </dd>
                    </>
                  ) : (<div className="flex-grow" />) }
                  <dt className="sr-only">Author avatar</dt>
                  <dd className="text-gray-700 text-sm leading-5 mt-6 mb-1">
                    <img className="inline w-10 h-10 shadow border-2 border-gray-600 bg-gray-300 rounded-full" src={pitch.author.avatarUrl} title={pitch.author.login}></img>
                  </dd>
                  <dt className="sr-only">Author</dt>
                  <dd className="sr-only">{pitch.author.login}</dd>
                </dl>
              </a>
              <div className="border-t border-gray-200">
                <div className="-mt-px flex">
                  <div className="w-0 flex-1 flex">
                    <a href={pitch.url} target="_blank" className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm leading-5 text-gray-700 font-medium border border-transparent rounded-bl-lg rounded-br-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-150" rel="noreferrer">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            </li>
          ))
        }
      </ul>

    </div>
  )
}