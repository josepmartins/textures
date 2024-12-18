import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Image from 'next/image';

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('content'));

  const images = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join('content', filename),
      'utf-8'
    );

    const { data: frontmatter, content } = matter(markdownWithMeta);

    return {
      frontmatter,
      content,
    };
  });

  return {
    props: {
      images,
    },
  };
}

export default function Home({ images }) {
  return (
    <div>
      <header>
        <nav className="navigation">
          <ul>
            <li>
              <input className="rb-all" name="all" id="rb-all" type="radio" />
              <label className="label" for="rb-all">All</label>
            </li>
            <li>
              <input className="rb-wallpaper" name="wallpaper" id="rb-wallpaper" type="radio" />
              <label className="label" for="rb-wallpaper">Wallpaper</label>
            </li>
            <li>
              <input className="rb-street" name="street" id="rb-street" type="radio" />
              <label className="label" for="rb-street">Street</label>
            </li>
            <li>
              <input className="rb-graffiti" name="graffiti" id="rb-graffiti" type="radio" />
              <label className="label" for="rb-graffiti">Graffiti</label>
            </li>
            <li>
              <input className="rb-abstract" name="abstract" id="rb-abstract" type="radio" />
              <label className="label" for="rb-abstract">Abstract</label>
            </li>
            <li>
              <input className="rb-nature" name="nature" id="rb-nature" type="radio" />
              <label className="label" for="rb-nature">Nature</label>
            </li>
          </ul>
          <ul>
            <li>
              <a href="./about.html">About</a>
            </li>
          </ul>
        </nav>
        <h1 className="title">Textures</h1>
      </header>
      <main>
        <section>
          <ul className="grid">
            {images.map(({ frontmatter: { title, location, description, image }, content }) => (
              <li key={title}>
                // <Image src={image} alt={title} width={800} height={1067} />
                <h2>{title}</h2>
                <p>{location}</p>
                <p>{description}</p>
                <div>{content}</div>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
