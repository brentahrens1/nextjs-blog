import Link from 'next/link'
import fs from 'fs'

export default function Home({slugs}) {
  return (
    <div className="container">
      {slugs.map(slug => {
        return (
          <div key={slug}>
            <Link href={'/blog/' + slug}>
              <a>{slug}</a>
            </Link>
          </div>
        )
      })}
      <main>
      </main>
    </div>
  )
}

export const getStaticProps = async () => {
  const files  = fs.readdirSync("posts")
  return {
    props: {
      slugs: files.map(file => file.replace('.md', ''))
    }
  }
}
