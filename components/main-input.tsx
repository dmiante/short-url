"use client"

import { useForm } from "react-hook-form"
import { Button } from "./ui/button"
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form"
import { Input } from "./ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { toast } from "sonner"


const formSchema = z.object({
  url: z.string().url({ message: 'Invalid url' })
})

export default function MainInput() {


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      url: ""
    },
  }) 
     
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const res = await fetch('http://localhost:3000/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      })
      const data = await res.json()
      console.log(data)
      toast.success('Link created successfully!')
    } catch (error) {
      toast.error('An unexpected error has ocurred. Please try again later.')
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
  </>
  )
}
