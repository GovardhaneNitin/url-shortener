# URL Shortener 🌐

Welcome to the URL Shortener project! Create shortened links quickly and efficiently using Node.js, Express.js, and MongoDB.

# Preview

<img src="/assets/URL-Shortener.png" alt="URL-Shortener">

<img src="/assets/URL-Shortener-DB.png" alt="URL-Shortener-DB">

## Features ✨

- **Shorten URLs**: Easily generate short and shareable links.
- **Fast Redirection**: Redirects users to the original long URL seamlessly.
- **Node.js and Express.js**: Backend powered by Node.js with Express.js for smooth routing.
- **MongoDB Database**: Utilizing MongoDB to store and retrieve URL data.
- **Simple and Intuitive UI**: User-friendly interface for a straightforward experience.

## Technologies Used 💻

- **Node.js**: Backend server scripting.
- **Express.js**: Web application framework for Node.js.
- **MongoDB**: NoSQL database for storing URL data.

## Getting Started 🚀

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/url-shortener.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd url-shortener
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Set up MongoDB:**

   - Create a MongoDB database and update connection details in `config.js`.

5. **Run the server:**

   ```bash
   npm start
   ```

6. **Open your browser and visit:**
   ```bash
   http://localhost:3000
   ```

## Configuration 🔧

- Update MongoDB connection details in `config.js` to match your database setup.

## API Endpoints 🛣️

- **Shorten URL:**
  ```bash
  POST /api/shorten
  ```
