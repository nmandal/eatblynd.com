import { useAuth0 } from '@auth0/auth0-react'
import { ExclamationIcon } from '@heroicons/react/solid'


export default function FeatureForm({ onSubmitNewFeature, inputNewFeature }) {
  const {
    user,
    isLoading,
    isAuthenticated,
    loginWithRedirect,
    logout
  } = useAuth0()

  const onSubmit = (e) => {
    e.preventDefault()
    onSubmitNewFeature()
  }

  if (isLoading) return null

  return isAuthenticated ? (
    <form className="mb-5 flex items-center space-x-4">
      <img src={user.picture} alt={user.name} width={40} className="rounded" />
      <input
        className="input"
        type="text"
        ref={inputNewFeature}
        placeholder="Enter a new restaurant request"
      />
      <button className="button" type="button" onClick={onSubmit}>
          Submit
        </button>
    </form>
  ) : (
    <div className="mb-5 rounded-md bg-yellow-50 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <ExclamationIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <h3 className="text-lg font-large text-yellow-800">Please login</h3>
          <div className="mt-2 text-md text-yellow-700">
            <p>
              Login to request or upvote a restaurant.
            </p>
          </div>
        </div>
        
      </div>
      <div className="mt-5 sm:mt-6">
      <div>
          <a
            href="#"
            className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            onClick={() => loginWithRedirect()}
          >
            <span className="sr-only">Sign in with Facebook</span>
            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
        </div>
    </div>
  )
}
