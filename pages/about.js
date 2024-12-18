import React from 'react';
import Head from 'next/head';
import '../styles/main.css';
import '../styles/normalize.css';

const About = () => {
  return (
    <div>
      <Head>
        <title>About - Textures</title>
        <meta name="description" content="Find the perfect texture for your design project, wallpaper or print" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header>
        <nav className="navigation">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
          </ul>
        </nav>
        <h1 className="title">Textures</h1>
      </header>
      <main>
        <section className="about">
          <p>
            ABOUT Textures.club is an online place to find and purchase texture images.
          </p>
          <p>
            PURCHASE & USAGE On each purchase you will get an HD wallpaper in 3024x4032px (3:4). This wallpaper is for personal use only. For a commercial license contact me here (typeform).
          </p>
          <p>
            ARTIST All pictures are taken by Josep Martins. Visit the Unsplash for all free versions.
          </p>
        </section>
      </main>
    </div>
  );
};

export default About;
