import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`I'm Rohanth, a grade 10 student based in Toronto, Canada. I'm passionate about technology and I love to build things.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
