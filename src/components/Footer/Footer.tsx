import React from 'react'
import FooterColumn from './FooterColumn'
import EmailSubscription from './EmailSubscription'

interface FooterProps {
  logoSrc: string
  logoAltSrc: string
}

const Footer: React.FC<FooterProps> = ({ logoSrc, logoAltSrc }) => {
  const footerColumns = [
    {
      title: 'Pages',
      items: ['Home it work', 'Pricing', 'Blog', 'Demo']
    },
    {
      title: 'Service',
      items: ['Shopify', 'WordPress', 'UI/UX Design']
    },
    {
      title: 'Resource',
      items: [
        'HTML',
        'CSS',
        'JavaScript',
        'Java',
        'JSON',
        'UI/UX Design',
        'Component'
      ]
    },
    {
      title: 'Company',
      items: ['Pricing', 'Security', 'Privasi Policy', 'Term of use', 'Carrer']
    }
  ]

  return (
    <footer className="flex flex-col items-center px-1 pt-8 pb-5 bg-gray-50 bg-gray-700 border-gray-600 max-md:px-5 border-t border-gray-200">
      <div className="flex gap-5 justify-between items-start w-full max-w-[1225px] max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-col">
          <img
            loading="lazy"
            src={logoSrc}
            alt="Company logo"
            className="self-center aspect-[2.56] w-[187px] h-[40px]"
          />
          <img
            loading="lazy"
            src={logoAltSrc}
            alt="Company logo alternative"
            className="mt-3.5 max-w-full aspect-[5.88] w-[102px] h-6"
          />
        </div>
        {footerColumns.map((column, index) => (
          <FooterColumn key={index} title={column.title} items={column.items} />
        ))}
        <EmailSubscription />
      </div>
      <hr className="self-stretch mt-10 w-full border border-solid border-neutral-900 max-md:max-w-full" />
      <div className="mt-5 text-base text-white">
        © 2024 Luck Companies | Powered by Intervision
      </div>
    </footer>
  )
}

export default Footer
