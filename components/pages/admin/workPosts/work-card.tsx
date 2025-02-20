// /components/work-posts/work-card.tsx
'use client'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { usePutWork } from '@/hooks/putWork'
import { useLanguage } from '@/context/LanguageContext'

interface WorkCardProps {
  id: string
  translations: {
    lang: string
    title: string
    miniDescription: string
    workType: string
    location: string
    money: string
    title2: string
    description2: string
    title3: string
    title3Labels: string[]
    title4: string
    title4Labels: string[]
  }[]
  isNew?: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onCreate?: (tempId: string, data: any) => Promise<void>
  onDelete?: () => void
}

export default function WorkCard({
  id,
  translations,
  isNew,
  onCreate,
  onDelete,
}: WorkCardProps) {
  const { selectedLanguage } = useLanguage()
  // Use the translation matching the selected language, or fallback to the first translation.
  const translation = translations.find((t) => t.lang === selectedLanguage) || translations[0]

  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [newTitle, setNewTitle] = useState(translation.title)
  const [newDescription, setNewDescription] = useState(translation.miniDescription)
  const [newWorkType, setNewWorkType] = useState(translation.workType)
  const [newLocation, setNewLocation] = useState(translation.location)
  const [newMoney, setNewMoney] = useState(translation.money)
  const [newTitle2, setNewTitle2] = useState(translation.title2)
  const [newDescription2, setNewDescription2] = useState(translation.description2)
  const [newTitle3, setNewTitle3] = useState(translation.title3)
  const [newTitle3Labels, setNewTitle3Labels] = useState<string[]>(translation.title3Labels || [])
  const [newTitle4, setNewTitle4] = useState(translation.title4)
  const [newTitle4Labels, setNewTitle4Labels] = useState<string[]>(translation.title4Labels || [])

  const { updateWorkAdmin } = usePutWork()

  const handlerSave = async () => {
    if (isNew && onCreate) {
      // For new posts, call the create callback instead of updating.
      await onCreate(id, {
        translations: [
          {
            lang: selectedLanguage,
            title: newTitle,
            miniDescription: newDescription,
            workType: newWorkType,
            location: newLocation,
            money: newMoney,
            title2: newTitle2,
            description2: newDescription2,
            title3: newTitle3,
            title3Labels: newTitle3Labels,
            title4: newTitle4,
            title4Labels: newTitle4Labels,
          },
        ],
      })
    } else {
      // For existing posts, update via your API.
      await updateWorkAdmin(
        selectedLanguage,
        id,
        newTitle,
        newDescription,
        newWorkType,
        newLocation,
        newMoney,
        newTitle2,
        newDescription2,
        newTitle3,
        newTitle3Labels,
        newTitle4,
        newTitle4Labels
      )
    }
    setIsDialogOpen(false)
  }

  const addNewTitle3Label = () => {
    setNewTitle3Labels([...newTitle3Labels, ''])
  }

  const addNewTitle4Label = () => {
    setNewTitle4Labels([...newTitle4Labels, ''])
  }

  return (
    <div className="w-36 h-auto p-2 bg-white text-black rounded-lg flex flex-col items-center justify-center gap-4 text-center relative">
      <div>{newTitle}</div>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button variant="default" onClick={() => setIsDialogOpen(true)}>
            Edit
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader className="flex flex-col items-center gap-3 h-[400px] overflow-y-auto">
            <DialogTitle className="w-full space-y-2">
              <p>Title</p>
              <Input
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                placeholder="Title"
              />
            </DialogTitle>
            <div className='w-full flex gap-4'>
              <div className='w-full space-y-2'>
                <p>WorkType</p>
                <Input
                  value={newWorkType}
                  onChange={(e) => setNewWorkType(e.target.value)}
                  placeholder="Work Type"
                />
              </div>
              <div className='w-full space-y-2'>
                <p>Location</p>
                <Input
                  value={newLocation}
                  onChange={(e) => setNewLocation(e.target.value)}
                  placeholder="Location"
                />
              </div>
            </div>
            <div className='w-full space-y-2'>
              <p>Money</p>
              <Input
                value={newMoney}
                onChange={(e) => setNewMoney(e.target.value)}
                placeholder="Money"
              />
            </div>
            <div className='w-full space-y-2'>
              <p>Mini Description</p>
              <DialogDescription className="w-full">
                <Textarea
                  value={newDescription}
                  className='resize-none'
                  onChange={(e) => setNewDescription(e.target.value)}
                  placeholder="Mini Description"
                />
              </DialogDescription>
            </div>
            <div className='w-full space-y-2'>
              <p>Title 2</p>
              <Input
                value={newTitle2}
                onChange={(e) => setNewTitle2(e.target.value)}
                placeholder="Title 2"
              />
            </div>
            <div className='w-full space-y-2'>
              <p>Description 2</p>
              <Textarea
                value={newDescription2}
                onChange={(e) => setNewDescription2(e.target.value)}
                className='text-black resize-none'
                placeholder="Description 2"
              />
            </div>
            <div className='w-full space-y-2'>
              <p>Title 3</p>
              <Input
                value={newTitle3}
                onChange={(e) => setNewTitle3(e.target.value)}
                placeholder="Title 3"
              />
            </div>
            <div className='w-full space-y-2'>
              <p>Title 3 Labels</p>
              {newTitle3Labels.map((label, index) => (
                <div className='flex gap-2' key={index}>
                  <Input
                    value={label}
                    onChange={(e) => {
                      const updated = [...newTitle3Labels]
                      updated[index] = e.target.value
                      setNewTitle3Labels(updated)
                    }}
                    placeholder="Label"
                  />
                  <Button onClick={() => {
                    const updated = newTitle3Labels.filter((_, i) => i !== index)
                    setNewTitle3Labels(updated)
                  }}>x</Button>
                </div>
              ))}
              <Button onClick={addNewTitle3Label}>Add new item</Button>
            </div>
            <div className='w-full space-y-2'>
              <p>Title 4</p>
              <Input
                value={newTitle4}
                onChange={(e) => setNewTitle4(e.target.value)}
                placeholder="Title 4"
              />
            </div>
            <div className='w-full space-y-2'>
              <p>Title 4 Labels</p>
              {newTitle4Labels.map((label, index) => (
                <div className='flex gap-2' key={index}>
                  <Input
                    value={label}
                    onChange={(e) => {
                      const updated = [...newTitle4Labels]
                      updated[index] = e.target.value
                      setNewTitle4Labels(updated)
                    }}
                    placeholder="Label"
                  />
                  <Button onClick={() => {
                    const updated = newTitle4Labels.filter((_, i) => i !== index)
                    setNewTitle4Labels(updated)
                  }}>x</Button>
                </div>
              ))}
              <Button onClick={addNewTitle4Label}>Add new item</Button>
            </div>
          </DialogHeader>
          <DialogFooter className="sm:justify-between mt-4">
            <Button onClick={handlerSave} type="button" variant="green" className="w-40">
              Save
            </Button>
            <DialogClose asChild>
              <Button type="button" variant="destructive" className="w-40">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <div className="absolute top-0 right-0">
        <Button className='translate-x-1/2 -translate-y-1/2 rounded-full' variant="destructive" onClick={onDelete}>
          X
        </Button>
      </div>
    </div>
  )
}
