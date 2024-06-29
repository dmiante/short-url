'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Button } from './ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from './ui/form'
import { Input } from './ui/input'

import { Loader2 } from 'lucide-react'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'
import { Link as Url } from '@prisma/client'
import Link from 'next/link'

import { formSchema } from '@/server/schemas'
import { createUrl, getSlug } from '@/server/data/links'

export default function MainInput() {
  const [newLink, setNewLink] = useState<Url>()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      url: ''
    }
  })

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = form

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const data = await createUrl(values)
      setNewLink(data)
      const dataLink = await getSlug(data.slug)
      console.log(dataLink?.slug)
      console.log(form)
      toast.success('Link created successfully!', {
        duration: 10000
      })
    } catch (error) {
      console.error(errors)
      toast.error('An unexpected error has ocurred. Please try again later.')
    } finally {
      reset()
    }
  }

  const copyLink = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      toast.success('Link copied successfully!', {
        duration: 10000
      })
    } catch (error) {
      console.error(error)
      toast.error('An unexpected error has ocurred. Please try again later.')
    }
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className='w-full space-y-5'>
          <FormField
            control={control}
            name='url'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormControl>
                  <Input placeholder='Paste URL here' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type='submit'
            className='w-full text-lg font-bold'
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                Creating link...
              </>
            ) : (
              'Shorten'
            )}
          </Button>
        </form>
      </Form>
      {newLink && (
        <>
          <section className='w-full space-y-5'>
            <div className='flex items-center justify-between gap-4'>
              <Link
                href={`/${newLink?.slug}`}
                className='text-xl hover:underline'
                rel='noreferrer'
                target='_blank'
              >
                \{newLink?.slug}
              </Link>
              <Button
                onClick={() =>
                  copyLink(`${window.location.origin}/${newLink?.slug}`)
                }
              >
                Click here to copy
              </Button>
            </div>
          </section>
        </>
      )}
    </>
  )
}
