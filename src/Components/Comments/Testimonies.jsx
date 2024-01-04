import React from 'react';
import { Card, Group, Button, Badge, Image, Text, Blockquote } from '@mantine/core';
import { IconQuote } from '@tabler/icons-react';

const posts = [
    {
        id: 1,
        description:
            `I can't wait for the launch. Finally, healthcare that adapts to our busy lives. No more long waits, just expert advice at my fingertips. Exciting times ahead!`,
        author: {
            name: 'Roland A',
            role: 'Kampala',
        },
    },
    {
        id: 2,
        description:
            `As a parent, the convenience of telemedicine is a game changer. Looking forward to the launch! It means quicker access to healthcare for my family.`,
        author: {
            name: 'Rebecca N',
            role: 'Entebbe',
        },
    },
    {
        id: 3,
        description:
            `Excited about this platform in Uganda - it's a step forward in healthcare accessibility. As a physician, it means efficient patient reach and timely advice. Eager for the positive impact on doctor-patient interactions`,
        author: {
            name: 'Dr. Kenneth M',
            role: 'Physician, Kampala',
        },
    },
]

const Trusts = [
    {
        id: 'Convenience and Accessibility',
        description: 'Experience healthcare on your terms. Connect with our expert medical professionals from the comfort of your home or office, making quality healthcare just a click away'
    },
    {
        id: 'Time Efficiency',
        description: 'Say goodbye to long wait times. Our platform is designed for efficiency, allowing you to schedule and attend appointments without the hassle, providing swift and seamless medical care.'
    },
    {
        id: 'Broad Access to Specialists',
        description: 'Access a world of expertise. Connect with a diverse range of healthcare specialists without geographical constraints. Our platform brings top-notch medical professionals to you, wherever you are.'
    }
]

export default function Testimonies() {
    const icon = <IconQuote />;

    return (
        
        <div className="bg-white py-24 sm:py-32" id='testimonies'>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Don't believe us, believe them</h2>
                </div>
                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts.map((post) => (                           
                            <Blockquote radius="xl" iconSize={60} color="blue" icon={icon} mt="xl">
                                <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">

                                    <div className="group relative">
                                        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                                    </div>
                                    <div className="relative mt-8 flex items-center gap-x-4">

                                        <div className="text-sm leading-6">
                                            <p className="font-semibold text-gray-900">                                                
                                                    <span className="absolute inset-0" />
                                                    {post.author.name}                                                
                                            </p>
                                            <p className="text-gray-600">{post.author.role}</p>
                                        </div>
                                    </div>
                                </article>
                            </Blockquote>
                    ))}
                </div>
            </div>
        </div>

    )
}  