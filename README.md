# Personal Blog

A minimal blog built with [Hugo](https://gohugo.io/) and hosted on GitHub Pages.

## Local Development

1. Install Hugo:
```bash
brew install hugo
```

2. Run development server:
```bash
hugo server -D
```

3. Build site:
```bash
hugo --minify
```

## Deployment

This site automatically deploys to GitHub Pages using GitHub Actions whenever changes are pushed to the `source` branch.

The workflow builds the Hugo site and deploys it to the `gh-pages` branch.

## Project Structure

```
├── archetypes/       # Content templates
├── content/          # Markdown content files
│   ├── posts/       # Blog posts
│   └── about.md     # About page
├── layouts/          # HTML templates
│   ├── _default/    # Default layouts
│   └── partials/    # Reusable components
├── static/           # Static files (images, CSS, etc.)
│   └── css/         # Stylesheets
└── hugo.toml        # Hugo configuration
```

## Creating New Posts

```bash
hugo new posts/my-new-post.md
```

## License

MIT
