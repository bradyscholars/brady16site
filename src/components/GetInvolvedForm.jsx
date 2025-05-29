"use client"
import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
// import * as ReactHookForm from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import { z } from 'zod';
import { 
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
 } from './ui/form'
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { ClipLoader } from 'react-spinners';

// const { useForm } = ReactHookForm;

const formSchema = z.object({

    firstName : z.string().min(1, {message : "Name cannot be empty"}),
    lastName : z.string().min(1, {message : "Name cannot be empty"}),

    email : z.string().email('Invalid email'),
    // phone : z.string().optional.or(z.literal('')),
    phone : z.string().optional().refine((val) => !val || /^\+?[0-9\s\-().]{7,}$/.test(val), {message : 'Invalid phone number'}),

    comments : z.string().optional(),

    pledgeVal : z.coerce.number().min(0)


});



const GetInvolvedForm = () => {

    // 0 == open form
    // 1 == loading form
    // honestly i'm not gonna concern myself with failures. it should be working lol.

    const [loadingState, setLoadingState] = useState(0);

    const form = useForm({
        resolver : zodResolver(formSchema),
        defaultValues : {
            firstName : '',
            lastName : '',
            email : '',
            phone : '',
            comments : '',
            pledgeVal : 0
        },

    });

    const handleSubmitLocal = async (values) => {

      // set a state indicating work is in progress
      setLoadingState(1);
      // console.log(`trying to send email with : \n ${JSON.stringify(values)}`)

      // send the email over the api
      const succ = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });

      form.reset();

      // if succ has statuscode 200, indicate success

      setLoadingState(0);
      // if succ has statuscode 500 (or anything but 200) -- indicae failure
      console.log(succ.status, succ.text);

        
    }

  return (
    <div className='get-involved-form w-full md:w-[90%] lg:w-[50%] mb-48 md:mb-10'>
      <Card>

        {/* title and cta */}
        <CardHeader>
            <CardTitle>
                Get Involved
            </CardTitle>
            <CardDescription>
                Show your support for the hard work of the C&W Market, and for The Brady Scholars. Please feel free to pledge to make a donation of any size.
            </CardDescription>
        </CardHeader>

        {/* intake form in the card */}
        <CardContent>

            <Form {...form} className="relative">
                <form onSubmit={form.handleSubmit(handleSubmitLocal)} className="space-y-6 pr-10">

                  {/* first and last name side by side */}
                  <div className="flex flex-col md:flex-row w-full justify-start items-start md:items-end gap-2">

                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({field}) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="First name" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({field}) => (
                        <FormItem>
                          {/* <FormLabel>Last Name</FormLabel> */}
                          <FormControl>
                            <Input placeholder="Last name" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                  </div>

                  {/* email  */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({field}) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="john@example.com" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  {/* phone  */}
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({field}) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="(opitional)" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  {/* comments  */}

                  <FormField
                    control={form.control}
                    name="comments"
                    render={({ field }) => (
                      <FormItem>
                        {/* <FormLabel>Comments</FormLabel> */}
                        <FormControl>
                          <Textarea placeholder="Any additional comments..." {...field} className="resize-none"/>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />


                  {/* PLEDGE  */}
                  <FormField
                    control={form.control}
                    name="pledgeVal"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Pledge Amount ($)</FormLabel>
                        <FormControl>
                          <Input type="number" min="0" step="1" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className='submit-button w-full flex justify-center py-3'>
                    <Button type="submit" className="bg-green-800 hover:bg-green-900 px-5 py-5 rounded-full text-base font-medium shadow-md">Submit Pledge</Button>
                  </div>

                </form>
            </Form>

            {
              loadingState === 1 && (
                <div className='loading-comp w-full h-full bg-white absolute inset-0 flex justify-center items-center'>
                  <ClipLoader
                    size={48}
                    color="#15803D"
                    loading={true}
                  />
                </div>
              )
            }

        </CardContent>

        {/* no footer necessary? */}
      </Card>
    </div>
  )
}

export default GetInvolvedForm
