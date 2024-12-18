# Textures

## Instructions to Run the Next.js Project

1. Clone the repository:
   ```
   git clone https://github.com/josepmartins/textures.git
   cd textures
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run the development server:
   ```
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## New Feature: Fetch Images from .md Files

The main page now displays images fetched from a list of .md files with a title, location, description, and content in their frontmatter. The .md files are located in the `content` directory.

### Example .md File

Here is an example of a .md file with frontmatter:

```
---
title: "Sample Image"
location: "Sample Location"
description: "This is a sample description for the image."
image: "/images/sample.jpg"
---

This is the content of the sample image markdown file. It provides additional information about the image, its context, and any other relevant details.
```
