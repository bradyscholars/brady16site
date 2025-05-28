"use client"
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
// import * as ReactHookForm from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
// import {useForm} from 'react-hook-form';
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

// const { useForm } = ReactHookForm;

const formSchema = z.object({

    firstName : z.string().min(1, {message : "Name cannot be empty"}),
    lastName : z.string().min(1, {message : "Name cannot be empty"}),

    email : z.string().email('Invalid email'),
    // phone : z.string().optional.or(z.literal('')),
    phone : z.string().optional().refine((val) => !val || /^\+?[0-9\s\-().]{7,}$/.test(val), {message : 'Invalid phone number'}),

    comments : z.string().optional(),

    pledgeAmount : z.coerce.number().min(0)


});



const GetInvolvedForm = () => {

    

    // const {register, handleSubmit, formState : { errors }} = useForm({
    //     resolver : zodResolver(formSchema),
    //     defaultValues : {
    //         firstName : '',
    //         lastName : '',
    //         email : '',
    //         phone : '',
    //         comments : '',
    //         pledgeAmount : 0
    //     },

    // });

    const handleSubmitLocal = (values) => {
        // do nothing right now
        return;
    }

  return (
    <div className='get-involved-form w-[50%]'>
      <Card>

        {/* title and cta */}
        <CardHeader>
            <CardTitle>
                Get Involved
            </CardTitle>
            <CardDescription>
                Show your support for the hard work of the C&W Foundation, and for The Brady Scholars. Please feel free to pledge to make a donation of any size.
            </CardDescription>
        </CardHeader>

        {/* intake form in the card */}
        <CardContent>

            <Form >
                <form onSubmit={handleSubmitLocal} className="space-y-6">



                </form>
            </Form>

        </CardContent>

        {/* no footer necessary? */}
      </Card>
    </div>
  )
}

export default GetInvolvedForm
