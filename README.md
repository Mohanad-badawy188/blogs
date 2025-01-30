# Movie App

Welcome to the **Blog App**, A simple blogging platform built with Next.js.

## Getting Started

Ensure you have the following installed:
• Node.js (Latest LTS)
• Yarn or npm

## Installation

Clone the repository:
git clone https://github.com/Mohanad-badawy188/blogs.git
cd blogs

## Install dependencies

npm install

## Running the Project

1️⃣ Local Development
npm run dev

The app will be available at http://localhost:3000.

2️⃣ Running in Production
npm run build
npm start

## Approach

Structure

• Server Components: The home page uses a server component to fetch and display the list of blogs.
• Dynamic Routing: Clicking on a blog navigates to a dynamic route (/post/[id]).
• Custom Fetch Function: All API requests are handled by a custom fetch function that abstracts the HTTP logic (URL, method, and body).
• Navigation: A navbar allows switching between the home page and the about page.

Key Considerations

• Optimized API calls using server components for faster load times.
• Used Next.js dynamic routing for blog pages.
• Followed best practices in Next.js with modular components and structured API handling.

## Features

Server-Side Fetching for better performance
Dynamic Routing for individual blogs
Custom API Handling for cleaner request logic
Minimalist Navigation using a navbar
