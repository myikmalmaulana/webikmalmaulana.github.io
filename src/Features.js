import { ArrowPathIcon, CloudArrowUpIcon, DocumentTextIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import Navbar from './Navbar';
import Footer from './Footer';
import backgroundImage from './images/OIP.jpg';

const features = [
  {
    name: 'Share to deploy the store',
    description:
      'You can easy-send or share our application with people and communities near you and those you know.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Promotions & Discounts',
    description:
      'There be a several gradual promotions and discounts in our shop, the discounts are quite good and the promotions are also exciting.',
    icon: DocumentTextIcon,
  },
  {
    name: 'Ease of online shopping',
    description:
      'Have an online shop or delivery service. Customers will feel the convenience of shopping from home.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Security certification',
    description:
      'Security certification, such as PCI DSS (Data Security Standard) certification for our online store that accepts credit cards.',
    icon: LockClosedIcon,
  },
]

export default function App() {
  return (
    <div className="h-full py-16 sm:py-24"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }}>

      <Navbar />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Toko elektronik!</h2>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <footer className='App-footer' class='h-0 block pt-32 pb-0' style={{ marginTop: '40px' }}>
        <Footer />
      </footer>
    </div>
  )
}
