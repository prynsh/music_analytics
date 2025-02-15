# 🎵 Streamify Analytics Dashboard  

A **Next.js** dashboard that provides insights into user activity, revenue, and content performance for a fictional music streaming service, **Streamify**.  

## Features  

- A SPA displaying key metrics like total users, active users, total streams, revenue, and top-performing artists.  
- Interactive charts to visualize user growth, revenue distribution, and top streamed songs.  
- A sortable and filterable data table for recent streams.  
- Responsive design with a modern UI.
- Implemented Hard Coded values using Zustand. I was to use Recoil but since Recoil is no longer maintained I have used Zustand which I learned in 1 hour and then implemented it.
.  
## Callouts
- Responsive until 768 pixels that is screen size of a Tab. The reason for it to be not responsive <768 pixels is an issue with Recharts which still hasn't been patched yet. Still I have used Recharts because the UI looks real good.  
- I will be adding Test Cases in sometime since it was optional and also add dark mode feature to make it more appealing to all genre of individuals.
- Used Memo wherever required and Zustand to minimize re-renders.
- I haven't used lazy loading because I am routing to a different page (SPA) and have everything under the same page.
## Tech Stack  

- **Next.js** & **React** for the frontend.  
- **Tailwind CSS and Shadcn** for styling.  
- **Zustand** for state management.  

## Setup  

1. Clone the repository:  
   ```bash
   git clone https://github.com/prynsh/music_analytics.git
   cd music_analytics
2. Install the dependencies:
   ```bash
    npm install
   ```
3. Running the code: 
   ```bash
   npm run dev
   ```
## Open in browser
Go to http://localhost:3000 in your browser.