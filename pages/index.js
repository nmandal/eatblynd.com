import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import toast from 'react-hot-toast';
import { useRef, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import FeatureList from '../components/feature-list'
import FeatureForm from '../components/feature-form'
import useSWR from 'swr'
import { FEATURE_TYPE } from '../lib/const'

const footerNavigation = {
  solutions: [
    { name: 'Become a Restaurant Partner', href: 'https://app.eatblynd.com/join/' },
  ],
  social: [
    {
      name: 'Twitter',
      href: 'https://twitter.com/eatblynd_',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/eatblynd',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
}


export default function Example() {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0()
  const inputNewFeature = useRef()

  const [notify, setNotify] = useState("")
  const [newsletter, setNewsletter] = useState("")

  const notifySubscriber = async event => {
    event.preventDefault()
    
    const { data, error } = await fetch('/api/subscribe', {
      body: JSON.stringify({email: notify, double_opt_in: false}),
      method: "POST",
      headers: {'Content-Type': 'application/json'}
    })

    if (error) {
      console.log('Error:', error)
      return
    }

    setNotify("")
    toast.success("You're on the list! We'll let you know when it's ready.")
  }

  const newsletterSubsctiber = async event => {
    event.preventDefault()
    
    const { data, error } = await fetch('/api/subscribe', {
      body: JSON.stringify({email: newsletter, double_opt_in: true}),
      method: "POST",
      headers: {'Content-Type': 'application/json'}
    })

    console.log(data)
    console.log(error)

    if (error) {
      console.log('Error:', error)
      return
    }

    setNewsletter("")
    toast.success("You're subscribed! Look out for an email from us.")
  }

  const { data, isValidating, mutate } = useSWR('api/list', {
    initialData: { [FEATURE_TYPE.NEW]: [], [FEATURE_TYPE.RELEASED]: [] },
    revalidateOnMount: true,
    revalidateOnFocus: false
  })

  const getToken = (func) => {
    return async (props) => {
      if (!isAuthenticated) {
        toast.error('Please login')
        return false
      }

      const token = await getAccessTokenSilently()

      if (!token) {
        toast.error('User not found')
        return false
      }

      return func(token, props)
    }
  }

  const onPublish = getToken(async (token, item) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        authorization: token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    }
    fetch('api/publish', requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          toast.error(data.error)
        } else {
          mutate()
        }
      })
  })

  const onRemove = getToken(async (token, item) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        authorization: token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    }
    fetch('api/remove', requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          toast.error(data.error)
        } else {
          mutate()
        }
      })
  })

  const onVote = getToken(async (token, item) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        authorization: token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    }
    fetch('api/vote', requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          toast.error(data.error)
        } else {
          mutate()
        }
      })
  })

  const onSubmitNewFeature = getToken(async (token) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        authorization: token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title: inputNewFeature.current.value })
    }

    fetch('api/create', requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          toast.error(data.error)
        } else {
          toast.info('Your restaurant has been added to the list.')
          inputNewFeature.current.value = ''
          mutate()
        }
      })
  })
  return (
    <div className="bg-white">
      <div className="relative overflow-hidden">

        <main>
        <div className="relative bg-gray-50 overflow-hidden">
      <div className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full" aria-hidden="true">
        <div className="relative h-full max-w-7xl mx-auto">
          <svg
            className="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={784} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
          </svg>
          <svg
            className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={784} fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)" />
          </svg>
        </div>
      </div>

      <div className="relative pt-6 pb-16 sm:pb-24">
        <Popover>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <nav className="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
              <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <a href="#">
                    <span className="sr-only">Blynd</span>
                    <img
                      className="h-8 w-auto sm:h-10"
                      src="https://tailwindui.com/img/logos/workflow-mark-cyan-600.svg"
                      alt=""
                    />
                  </a>
                  <div className="-mr-2 flex items-center md:hidden">
                    <Popover.Button className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500">
                      <span className="sr-only">Open main menu</span>
                      <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="hidden md:flex md:space-x-10">
                {footerNavigation.solutions.map((item) => (
                  <a key={item.name} href={item.href} className="font-medium text-gray-500 hover:text-gray-900">
                    {item.name}
                  </a>
                ))}
              </div>
            </nav>
          </div>

          <Transition
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark-cyan-600.svg"
                      alt=""
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="px-2 pt-2 pb-3">
                  {footerNavigation.solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>

        <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
          <div className="text-center">
            <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Order blindly from your</span>{' '}
              <span className="block text-cyan-600 xl:inline">favorite restaurants</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Restaurants serve one dish at a time. It's unknown to customers and can change at any time. Blynd invites you to experience local cuisine without the hassle.
            </p>
          </div>

          
          <form onSubmit={notifySubscriber} className="mt-12 sm:mx-auto sm:max-w-lg sm:flex">
                <div className="min-w-0 flex-1">
                  
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={notify}
                    onChange={e => setNotify(e.target.value)}
                    className="block w-full border border-gray-300 rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-cyan-600"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-3">
                  <button
                    type="submit"
                    className="block w-full rounded-md border border-transparent px-5 py-3 bg-cyan-500 text-base font-medium text-white shadow hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-cyan-600 sm:px-10"
                  >
                    Nofify me
                  </button>
                </div>
              </form>
        </main>
      </div>
    </div>


          {/* Feature section with grid */}
          <div className="relative bg-white py-16 sm:py-24 lg:py-32">
            <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
              <h2 className="text-base font-semibold tracking-wider text-cyan-600 uppercase">Requests</h2>
              <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                Restaurant Roadmap
              </p>
              <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
                Help us by submitting and upvoting restaurants you want to see on the platform. If the restaurant you request joins Blynd, your first meal is on us!
              </p>
              
            </div>
            <div className="mt-12 antialiased max-w-xl mx-auto px-5">
            <FeatureForm
              onSubmitNewFeature={onSubmitNewFeature}
              inputNewFeature={inputNewFeature}
            />
                <FeatureList
                    data={data}
                    dataLoading={isValidating}
                    onVote={onVote}
                    onPublish={onPublish}
                    onRemove={onRemove}
                />
              </div>
          </div>
        </main>


        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-6 xl:gap-x-8">
              <div className="bg-gray-100 rounded-lg p-6 flex items-center sm:p-10">
                <div className="max-w-sm mx-auto">
                  <h3 className="font-semibold text-gray-900">Sign up for our newsletter</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    The first place we send restaurant reviews, recommendations, and curated menus, sent to your inbox weekly.
                  </p>
                  <form onSubmit={newsletterSubsctiber} className="mt-4 sm:mt-6 sm:flex">
                    <label htmlFor="email" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email"
                      type="text"
                      autoComplete="email"
                      value={newsletter}
                      onChange={e => setNewsletter(e.target.value)}
                      required
                      placeholder="Enter your email"
                      className="appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                    />
                    <div className="mt-3 sm:flex-shrink-0 sm:mt-0 sm:ml-4">
                      <button
                        type="submit"
                        className="w-full bg-cyan-600 border border-transparent rounded-md shadow-sm py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-cyan-500"
                      >
                        Sign up
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <div className="mt-6 relative py-12 px-6 flex items-center sm:py-16 sm:px-10 lg:mt-0">
                <div className="absolute inset-0 rounded-lg overflow-hidden">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/footer-02-exclusive-sale.jpg"
                    alt=""
                    className="w-full h-full filter saturate-0 object-center object-cover"
                  />
                  <div className="absolute inset-0 bg-cyan-600 bg-opacity-90" />
                </div>
                <div className="relative max-w-sm mx-auto text-center">
                  <h3 className="text-2xl font-extrabold tracking-tight text-white">Jump waiting list</h3>
                  <p className="mt-2 text-gray-200">
                    Did you sign up to the newsletter? Subscribers get priority access to the launch.{' '}
                    <a target="_blank" href="https://www.getrevue.co/profile/blynd" className="font-bold text-white whitespace-nowrap hover:text-gray-200">
                      Go now<span aria-hidden="true"> &rarr;</span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
            </div>
        <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        
        <div className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            {footerNavigation.social.map((item) => (
              <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            &copy; 2021 Blynd, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
      </div>
    </div>
  )
}
