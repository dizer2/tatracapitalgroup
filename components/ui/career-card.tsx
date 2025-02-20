import React from 'react'
import { Button } from './button'
import { useRouter } from 'next/navigation'

interface CareerCardProps {
  title: string | undefined
  miniDescription: string | undefined
  workType: string |undefined
  index: string | undefined
  buttonCardText: string | undefined
}

export default function CareerCard({ title, miniDescription, workType, index, buttonCardText}: CareerCardProps) {
  const navigator = useRouter();

  const handlerCareerPost = () => {
    navigator.push(`career/${index}`);
  }
  return (
    <div className="w-96 sm:h-auto rounded-3xl bg-darkS p-6 flex flex-col justify-between relative overflow-hidden z-10 md:gap-0">
      <div>
        <p className="mb-6">{workType}</p>
        <div className="flex flex-col gap-2">
          <h4 className="font-bold text-2xl">
            {title}
          </h4>
          <p className="text-md text-white text-opacity-50 break-words whitespace-normal">
            {miniDescription}
          </p>
        </div>
      </div>

      <Button className="md:w-2/3 w-full h-16 mt-10" variant="default" onClick={handlerCareerPost}>
        {buttonCardText}
      </Button>

      <div
        className="bg-[url('/images/assets/career/card-bg.svg')] w-full h-full absolute top-0 left-0 -z-10 select-none bg-cover bg-center"
      ></div>
    </div>
  )
}
