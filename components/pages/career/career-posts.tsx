'use client'

import CareerCard from '@/components/ui/career-card'
import { Skeleton } from '@/components/ui/skeleton'
import { useLanguage } from '@/context/LanguageContext'
import { useWork } from '@/hooks/getWork'
import { useWorkSection } from '@/hooks/getWorkSection'
import Image from 'next/image'
import React from 'react'

export default function CareerPosts() {
  const { selectedLanguage } = useLanguage()
  const { work, loading } = useWork(selectedLanguage)
  const { workSection, loading2 } = useWorkSection(selectedLanguage)

  const workSectionTitle = workSection?.[0]?.translations?.find(
    (t) => t.lang === selectedLanguage
  )?.title
  const workSectionDescription = workSection?.[0]?.translations?.find(
    (t) => t.lang === selectedLanguage
  )?.description

  return (
    <div className='w-full min-h-screen relative'>
      <div className='md:mb-40 mb-20 mt-40 2xl:px-20 lg:px-16 md:px-10 px-10 flex flex-col items-center gap-4'>
        {loading2 || loading ? (
          <>
            <Skeleton className='w-1/2 h-16' />
            <Skeleton className='w-full h-40' />
          </>
        ) : (
          <>
            <h3 className='font-bebas lg:text-8xl text-6xl text-center md:mb-12 mb-3 text-white'>
              {workSectionTitle || 'Title not available'}
            </h3>
            <p className='md:text-2xl text-lg text-center'>
              {workSectionDescription || 'Description not available'}
            </p>
          </>
        )}
      </div>

      <div className='2xl:px-20 lg:px-16 md:px-10 px-10 w-full flex flex-wrap items-center xl:justify-between justify-center gap-8'>
        {loading2 || loading ? (
          <>
            <Skeleton className='w-96 h-96' />
            <Skeleton className='w-96 h-96' />
            <Skeleton className='w-96 h-96' />
          </>
        ) : (
          <>
            {work.map((post) => (
              <CareerCard
                key={post.id}
                title={
                  post.translations.find((t) => t.lang === selectedLanguage)
                    ?.title
                }
                miniDescription={
                  post.translations.find((t) => t.lang === selectedLanguage)
                    ?.miniDescription
                }
                workType={
                  post.translations.find((t) => t.lang === selectedLanguage)
                    ?.workType
                }
                buttonCardText={
                  workSection?.[0]?.translations?.find(
                    (t) => t.lang === selectedLanguage
                  )?.buttonCardText
                }
                index={post.id}
              />
            ))}
          </>
        )}
      </div>

      <Image
        width={1920}
        height={1080}
        src={'/images/assets/career/bg.svg'}
        alt='Tatra Capital Group'
        className='absolute bottom-0 left-0 w-full lg:h-auto h-[600px] object-cover -z-10 translate-y-10'
      />
    </div>
  )
}
