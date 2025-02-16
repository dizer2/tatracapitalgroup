import React from 'react'
import { Button } from './button'

export default function CareerCard() {
  return (
    <div className="w-96 sm:h-96 rounded-3xl bg-darkS p-6 flex flex-col justify-between relative overflow-hidden z-10 md:gap-0 gap-10">
      <div>
        <p className="mb-6">Part-Time</p>
        <div className="flex flex-col gap-2">
          <h4 className="font-bold text-2xl">
            Business Registration & Compliance Specialist
          </h4>
          <p className="text-md text-white text-opacity-50">
            We need a business registration expert to assist with the legal and regulatory setup of our company in Slovakia, ensuring compliance with local and EU trade laws.
          </p>
        </div>
      </div>

      <Button className="md:w-2/3 w-full h-16" variant="default">
        MORE INFO
      </Button>

      <div
        className="bg-[url('/images/assets/career/card-bg.svg')] w-full h-full absolute top-0 left-0 -z-10 select-none bg-cover bg-center"
      ></div>
    </div>
  )
}
