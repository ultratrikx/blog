import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        rohanth marem
      </h1>
      <p className="mb-4">
        {`I'm Rohanth, a grade 10 student based in Toronto. 
        This is my public notebook, where I write about things I'm learning, projects I'm working on and other things I find interesting.
        Feel free to reach out to me at  `}<a href="mailto:rohanthm@outlook.com">rohanthm@outlook.com.</a>
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
