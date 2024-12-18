import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from 'next/head';
import styles from '../styles/main.css';
import normalize from '../styles/normalize.css';

export default function Home({ images }) {
  return (
    <div>
      <Head>
        <title>Textures</title>
        <meta name="description" content="Find the perfect texture for your design project, wallpaper or print" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Textures" />
        <meta property="og:type" content="" />
        <meta property="og:url" content="" />
        <meta property="og:image" content="" />
        <link rel="stylesheet" href={normalize} />
        <link rel="stylesheet" href={styles} />
      </Head>

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
              <a href="./about">About</a>
            </li>
          </ul>
        </nav>
        <h1 className="title">Textures</h1>
      </header>
      <main>
        <section>
          <ul className="grid">
            {images.map((image, index) => (
              <li key={index}>
                <img src={image} />
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'public/images/textures.md');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data } = matter(fileContents);
  const images = data.images;

  return {
    props: {
      images,
    },
  };
}
