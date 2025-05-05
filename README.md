# LightPad Website

This is the official website for LightPad, a lightweight application launcher for Linux (X11 and Wayland compatible) made with Vala and GTK+ 3.0.

## Project Structure

```
lightpad-website/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # Custom CSS styles
├── js/
│   └── main.js         # JavaScript functionality
└── assets/             # Images and other assets
    └── logo.png        # LightPad logo
```

## Features

- Responsive design using Tailwind CSS
- Modern and clean UI
- Smooth scrolling and animations
- Mobile-friendly navigation
- SEO optimized
- Static site for easy deployment

## Deployment

The website is designed to be deployed on SourceForge.net. To deploy:

1. Create a new project on SourceForge.net
2. Upload all files to the project's web space
  - Login to SourceForge.net using SFTP:
    ```sh
    sftp libredeb@web.sourceforge.net
    ```
  - Move to the `htdocs` folder:
    ```sh
    cd /home/project-web/lightpad/htdocs
    ```
  - Upload all files recursively:
    ```sh
    put -r .
    ```

3. Ensure the file structure is maintained
4. Test the website after deployment

## Development

To make changes to the website:

1. Clone the repository
2. Make your changes
3. Test locally
4. Commit and push changes
5. Deploy to SourceForge.net

## Dependencies

- Tailwind CSS (loaded via CDN)
- Custom CSS and JavaScript
- No build process required (static site)

## License

This website is licensed under the same license as LightPad (GPL-3.0). 