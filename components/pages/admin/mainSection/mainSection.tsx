'use client'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import React, { useRef, useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { imageConverter } from '@/utils/imageConverter'
import Image from 'next/image'
import { useMain } from '@/hooks/getMain'
import { usePutMain } from '@/hooks/putMain'

export default function MainSection() {
  const { selectedLanguage } = useLanguage()
  const { mainInfo, loading } = useMain(selectedLanguage);

  // State management
  const [updatedTitle, setUpdatedTitle] = useState('')
  const [updateImage, setUpdateImage] = useState('')
  const [updateEmail, setUpdateEmail] = useState('')
  const [updatePhone, setUpdatePhone] = useState('')
  const [socialLinks, setSocialLinks] = useState<{ link: string; icon: string }[]>([])
  const [currentSocialIndex, setCurrentSocialIndex] = useState<number | null>(null)

  // Refs
  const logoFileRef = useRef<HTMLInputElement>(null)
  const socialFileRef = useRef<HTMLInputElement>(null)

  // Handle file uploads
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      const newFile = await imageConverter(file)
      
      if (currentSocialIndex !== null) {
        const newLinks = [...socialLinks]
        newLinks[currentSocialIndex].icon = newFile
        setSocialLinks(newLinks)
      } else {
        setUpdateImage(newFile)
      }
      setCurrentSocialIndex(null)
    }
  }

  // Social media management
  const addSocialLink = () => {
    setSocialLinks([...socialLinks, { link: '', icon: '' }])
  }

  const removeSocialLink = (index: number) => {
    const newLinks = socialLinks.filter((_, i) => i !== index)
    setSocialLinks(newLinks)
  }

  const handleSocialLinkChange = (index: number, field: 'link' | 'icon', value: string) => {
    const newLinks = [...socialLinks]
    newLinks[index][field] = value
    setSocialLinks(newLinks)
  }

  // Initial state setup
  React.useEffect(() => {
    if (mainInfo.length > 0) {
      setUpdateImage(mainInfo[0]?.logo)
      setUpdateEmail(mainInfo[0]?.email)
      setUpdatePhone(mainInfo[0]?.phone)
      setSocialLinks(mainInfo[0]?.socialMedia || [])
      setUpdatedTitle(
        mainInfo[0]?.translations.find((t) => t.lang === selectedLanguage)?.title || ''
      )
    }
  }, [mainInfo, selectedLanguage])

  const { updateMainInfo } = usePutMain()
  
  const hanlderUpdatMainInfo = async () => {
    updateMainInfo(
      selectedLanguage,
      updatedTitle,
      updateImage,
      updatePhone,
      updateEmail,
      socialLinks 
    )
  }

  return (
    <div className='mt-20'>
      <h3 className='font-bebas text-8xl mb-10 text-white text-center'>Main</h3>
      
      {loading ? (
        <div className='w-full p-10 bg-darkS rounded-3xl flex flex-col gap-12'>
          Loading...
        </div>
      ) : (
        <div className='w-full p-10 bg-darkS rounded-3xl flex flex-col gap-12'>
          		<div className='flex flex-col gap-4'>
							<div className='flex flex-col gap-2'>
								<h3 className='font-bebas text-4xl text-white'>Main Title</h3>
								<Input
									value={updatedTitle}
									type='text'
									className='w-full p-2 text-black'
									onChange={(e) => setUpdatedTitle(e.target.value)}
								/>
							</div>
						</div>
          <div className='flex flex-col gap-2'>
            <h3 className='font-bebas text-4xl text-white'>Logo</h3>
            <input
              ref={logoFileRef}
              type='file'
              accept='image/*'
              className='hidden'
              onChange={handleFileChange}
            />
            <div className='flex gap-2'>
              <div
                className='w-44 h-44 rounded-xl bg-gray-200 flex items-center justify-center text-black text-center cursor-pointer'
                onClick={() => logoFileRef.current?.click()}
              >
                UPLOAD LOGO
              </div>
              {updateImage && (
                <div className='w-44 h-44 bg-darkS rounded-2xl flex items-center justify-center p-4 border border-white'>
                  <Image
                    src={updateImage}
                    width={96}
                    height={96}
                    alt='Company Logo'
                    className='w-20 h-20'
                  />
                </div>
              )}
            </div>
          </div>

          {/* Static Contact Information */}
          <div className='flex flex-col gap-4'>
            <h3 className='font-bebas text-4xl text-white'>Contact Information</h3>
            
            <div className='w-auto gap-2'>
              <div className='flex items-center gap-2'>
                <Image
                  width={35}
                  height={35}
                  src={'/images/assets/landing/socials/gmail.svg'}
                  alt='gmail'
                />
                <p>Email</p>
              </div>
              <Input
                value={updateEmail}
                type='text'
                className='w-96 h-10 text-black'
                onChange={(e) => setUpdateEmail(e.target.value)}
              />
            </div>

            <div className='w-auto gap-2'>
              <div className='flex items-center gap-2'>
                <Image
                  width={35}
                  height={35}
                  className='cursor-pointer'
                  src={'/images/assets/landing/socials/phone.svg'}
                  alt='phone'
                />
                <p>Phone</p>
              </div>
              <Input
                value={updatePhone}
                type='tel'
                className='w-96 h-10 text-black'
                onChange={(e) => setUpdatePhone(e.target.value)}
              />
            </div>
          </div>

          {/* Social Media Section */}
          <div className='flex flex-col gap-4'>
            <div className='flex justify-between items-center'>
              <h3 className='font-bebas text-4xl text-white'>Social Links</h3>
              <Button onClick={addSocialLink} variant="default">
                Add New Social
              </Button>
            </div>

            <input
              ref={socialFileRef}
              type='file'
              accept='image/*'
              className='hidden'
              onChange={handleFileChange}
            />
            
            {socialLinks.map((social, index) => (
              <div key={index} className='flex items-center gap-4 group'>
                <div className='relative flex-1 flex gap-4 items-center'>
                  <div className='relative'>
                    <div
                      className='w-16 h-16 rounded-lg bg-gray-800 flex items-center justify-center cursor-pointer border border-dashed border-gray-600'
                      onClick={() => {
                        setCurrentSocialIndex(index)
                        socialFileRef.current?.click()
                      }}
                    >
                      {social.icon ? (
                        <Image
                          src={social.icon}
                          width={64}
                          height={64}
                          alt={`Social icon ${index + 1}`}
                          className='w-16 h-16 object-contain rounded-lg'
                        />
                      ) : (
                        <span className='text-gray-400 text-sm text-center'>Upload Icon</span>
                      )}
                    </div>
                  </div>

                  <Input
                    value={social.link}
                    onChange={(e) => handleSocialLinkChange(index, 'link', e.target.value)}
                    placeholder='Paste social media URL'
                    className='flex-1'
                  />
                </div>

                <Button
                  variant="default"
                  size="icon"
                  className='text-white'
                  onClick={() => removeSocialLink(index)}
                >
                  x
                </Button>
              </div>
            ))}
          </div>

          {/* Save Button */}
          <Button 
            onClick={hanlderUpdatMainInfo}
            variant='default'
          >
            Save Changes
          </Button>
        </div>
      )}
    </div>
  )
}