/* This example requires Tailwind CSS v2.0+ */
import {
  CheckIcon,
} from '@heroicons/react/outline'

const features = [
  'Receive valuable feedback from your repeat customers',
  'Add-ons at the time of ordering such as wine pairings and cookbooks',
  'Save on food costs by serving identical meals at volume',
  'Save on labor costs with one serving time',
  'Give your chefs a built-in development kitchen',
  'Test new recipes and changes to existing favorites',
  'Turn your customers into ambassadors',
  'Multi channel ordering from QR code and online',
  'Boost loyalty and engagement',
  'Manage orders with phone or tablet',
  'No hidden fees',
]
const faqs = [
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 2,
    question: 'Why do you never see elephants hiding in trees?',
    answer:
      "Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 3,
    question: 'How do you make holy water?',
    answer:
      'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
  },
  {
    id: 4,
    question: "Why can't you hear a pterodactyl go to the bathroom?",
    answer:
      'Because the pee is silent. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
  },
  {
    id: 5,
    question: 'What do you call someone with no body and no nose?',
    answer: 'Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
  },
  {
    id: 6,
    question: 'Why did the invisible man turn down the job offer?',
    answer:
      "He couldn't see himself doing it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
]

const footerNavigation = {

  social: [
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
    {
      name: 'Twitter',
      href: 'https://twitter.com/eatblynd_',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="bg-white">


      <div className="bg-gradient-to-b from-cyan-50 via-white to-white">
        {/* Pricing section with single price and feature list */}
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="pb-16 xl:flex xl:items-center xl:justify-between">
            <div>
              <h1 className="text-4xl font-extrabold sm:text-5xl sm:tracking-tight">
                <span className="text-gray-900">A fresh take on ordering to </span>
                <span className="text-cyan-600">build your following</span>
              </h1>
              <p className="mt-5 text-xl text-gray-500">
                For restaurants who want to experiment and give their customers a unique dining experience
              </p>
            </div>
            <a
              href="https://app.eatblynd.com/join"
              target="_blank"
              className="mt-8 w-full bg-cyan-600 border border-transparent rounded-md py-3 px-5 inline-flex items-center justify-center text-base font-medium text-white hover:bg-cyan-700 sm:mt-10 sm:w-auto xl:mt-0"
            >
              Get started
            </a>
          </div>
          <div className="border-t border-gray-200 pt-16 xl:grid xl:grid-cols-3 xl:gap-x-8">
            <div>
              <h2 className="text-base font-semibold text-cyan-600 uppercase tracking-wide">Drop new meals & reinvent old favorites</h2>
              <p className="mt-2 text-3xl font-extrabold text-gray-900">Your unique take on food</p>
              <p className="mt-4 text-lg text-gray-500">
              Blynd gives you the tools you need to craft new recipes, engage with customers, and build your brand.
              </p>
            </div>
            <div className="mt-4 sm:mt-8 md:mt-10 md:grid md:grid-cols-2 md:gap-x-8 xl:mt-0 xl:col-span-2">
              <ul role="list" className="divide-y divide-gray-200">
                {features.slice(0, 5).map((feature, featureIdx) => (
                  <li key={feature} className={classNames(featureIdx === 0 ? 'md:py-0 md:pb-4' : '', 'py-4 flex')}>
                    <CheckIcon className="flex-shrink-0 h-6 w-6 text-green-500" aria-hidden="true" />
                    <span className="ml-3 text-base text-gray-500">{feature}</span>
                  </li>
                ))}
              </ul>
              <ul role="list" className="border-t border-gray-200 divide-y divide-gray-200 md:border-t-0">
                {features.slice(5).map((feature, featureIdx) => (
                  <li
                    key={feature}
                    className={classNames(featureIdx === 0 ? 'md:border-t-0 md:py-0 md:pb-4' : '', 'py-4 flex')}
                  >
                    <CheckIcon className="flex-shrink-0 h-6 w-6 text-green-500" aria-hidden="true" />
                    <span className="ml-3 text-base text-gray-500">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

    {/* <div className="bg-white">
      <div className="max-w-7xl mx-auto py-11 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">Frequently asked questions</h2>
        <div className="mt-12">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12 lg:grid-cols-3">
            {faqs.map((faq) => (
              <div key={faq.id}>
                <dt className="text-lg leading-6 font-medium text-gray-900">{faq.question}</dt>
                <dd className="mt-2 text-base text-gray-500">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div> */}


      {/* CTA section */}
      <div className="bg-cyan-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-cyan-900 sm:text-4xl">
            <span className="block">Ready to dive in?</span>
            <span className="block text-cyan-600">Get in touch today.</span>
          </h2>
          <div className="mt-8 flex lg:flex-shrink-0 lg:mt-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="https://app.eatblynd.com/join"
                target="_blank"
                className="bg-cyan-600 border border-transparent rounded-md py-3 px-5 inline-flex items-center justify-center text-base font-medium text-white hover:bg-cyan-700"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Simple footer */}
      <footer className="max-w-7xl mx-auto py-16 px-4 overflow-hidden sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6">
          {footerNavigation.social.map((item) => (
            <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-8 text-center text-base text-gray-500">&copy; 2021 Blynd, Inc. All rights reserved.</p>
      </footer>
    </div>
  )
}
