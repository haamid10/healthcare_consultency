const Blogs = () => {
    const posts = [
        {
          id: 1,
          title: 'Boost your conversion rate',
          href: '#',
          description:
            'egular exercise is not just about maintaining a fit physique; it plays a crucial role in overall health and well-being. Engaging in physical activity helps to strengthen muscles, improve cardiovascular health, and boost the immune system. Additionally, exercise releases endorphins, which are natural mood enhancers that can reduce stress and anxiety. Whether its going for a brisk walk, hitting the gym, or practicing yoga, finding an activity you enjoy and incorporating it into your routine can have significant long-term benefits for your health.',
          date: 'sep 16, 2023',
          datetime: '2023-09-16',
          category: { title: 'doctorate', href: '#' },
          author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
              'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
        },
        {
            id: 1,
            title: '"The Importance of Regular Exercise for a Healthy Lifestyle"',
            href: '#',
            description:"Eating a balanced diet is essential for maintaining optimal health. A diet rich in fruits, vegetables, whole grains, lean proteins, and healthy fats provides the necessary nutrients to support bodily functions and prevent chronic diseases. It's important to limit processed foods high in added sugars and unhealthy fats as they can contribute to weight gain and increase the risk of developing conditions like diabetes and heart disease. Remember, food is fuel for your body – choose wisely!",
            date: 'sep 12, 2023',
            datetime: '2023-09-12',
            category: { title: 'doctorate', href: '#' },
            author: {
              name: 'Michael Foster',
              role: 'Co-Founder / CTO',
              href: '#',
              imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
          },
        // More posts...
      ]
  return (
    <div>
 

    <div className="bg-white ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your health with our expert advice.
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
                <p className="mt-5   text-sm leading-6 text-gray-600">{post.description}</p>
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
    </div>
  )
}

export default Blogs
