const posts = [
    {
      id: 1,
      title: 'Boost your conversion rate',
      href: '#',
      description:
        'Can not wait for the Roll out of this Platform. I believ SwiftDoc will be a Masterpiece for Ugandas Medical System.',
      date: 'December 16, 2023',
      datetime: '2023-12-16',
      category: { title: 'SwiftDoc', href: '#' },
      author: {
        name: 'Hellen Teri Nagawa',
        role: 'Co-Founder',
        href: '#',
        imageUrl:
          'data:image/jpeg;base64,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',
      },
    },
    // More posts...
  ]
  
  export default function Blogs() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the Testimonies</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Hear for yourself from the public
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </article>

            
              
            ))}
          </div>
        </div>
      </div>
    )
  }
  