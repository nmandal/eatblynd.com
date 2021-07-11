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
    <form className="mb-10 flex items-center space-x-4">
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
      <br />
      {isAuthenticated && (
        <button className="button" type="button" onClick={() => logout()}>
          Logout
        </button>
      )}
    </form>
  ) : (
    <div className="mb-10 rounded-md bg-yellow-50 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <ExclamationIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-yellow-800">Please login</h3>
          <div className="mt-2 text-sm text-yellow-700">
            <p>
              Login to request or upvote a restaurant.
            </p>
          </div>
        </div>
        
      </div>
      <div className="mt-5 sm:mt-6">
          <button
            type="button"
            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 sm:mt-0 sm:col-start-1 sm:text-sm"
            onClick={() => loginWithRedirect()}
          >
            Login
          </button>
        </div>
    </div>
  )
}
