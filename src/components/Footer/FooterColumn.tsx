import React from 'react'

interface FooterColumnProps {
  title: string
  items: string[]
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, items }) => {
  return (
    <div className="flex flex-col mt-5 text-white">
      <h3 className="text-lg font-bold">{title}</h3>
      <ul className="mt-11 text-sm max-md:mt-10">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default FooterColumn
