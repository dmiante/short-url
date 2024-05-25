'use client'

import { useForm } from 'react-hook-form'
import { Button } from './ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'
import { useState } from 'react'
import { Link as Url } from '@/types/link.type'
import Link from 'next/link'
import { formSchema } from '@/server/schemas'
import { createUrl } from '@/server/data/links'

export default function MainInput() {
  const [newLink, setNewLink] = useState<Url>()
  const [loading, setLoading] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      url: ""
    },
  }) 
     
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setLoading(true)
      const data = await createUrl(values)
      setNewLink(data)
      toast.success('Link created successfully!',{
        description: `https://slug.vercel.app/${data.slug}`,
        duration: 10000,
        closeButton: true
      })
      form.reset()
    } catch (error) {
      toast.error('An unexpected error has ocurred. Please try again later.')
    } finally {
      setLoading(false)
    }
  }
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-5 w-full">
          <FormField
            control={form.control}
            name="url"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input placeholder="Paste URL here" {...field}/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full text-lg font-bold">Shorten</Button>
        </form>
      </Form>
      {
        loading ? 
        <span>Loading created link...</span> :
        <Link
          href={`${newLink?.url}`}
          className="text-xl hover:underline"
          rel="noreferrer"
          target="_blank"
          >
          {
            newLink?.slug
          }
        </Link>
      }
  </>
  )
}
