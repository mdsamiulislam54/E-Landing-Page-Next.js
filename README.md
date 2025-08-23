# NextBuy - E-Landing Page

NextBuy is an **E-Landing Page** project built with **Next.js**.  
This project is mainly created to explore Next.js features, combining both frontend and backend functionality.

---


- Live Link: [https://e-landing-page-chi.vercel.app/](https://e-landing-page-chi.vercel.app/)
## Project Features

### 1. Layout & Styling
- Responsive **Navbar** and **Footer** design.
- **Hero Section** for a strong first impression.
- Styling is done using **TailwindCSS**.
- Products section displayed in **Card View** for easy browsing.

### 2. Authentication
- **Login** and **Registration** system implemented using **NextAuth**.
- User data is saved in the database during registration.
- Passwords are hashed using **bcryptjs** for security.
- Only authenticated users can access protected routes.

### 3. Products
- T-Shirt products are displayed in **Card View**.
- Each product has a **Details** button:
  - Clicking it opens a **dynamic page** based on product ID.
- **Add Products Page**:
  - Logged-in users can add new products.
  - This is a **private page**, access controlled using **Middleware** and JWT verification.

### 4. JavaScript & React
- Frontend logic handled using **React**.
- State management and dynamic behavior using **useState**, **useEffect**, etc.

### 5. Deployment
- Deployed on **Vercel**.
- During deployment, some issues were encountered:
  - Middleware problems
  - bcrypt module issues  
  All issues were resolved and the project is now production-ready.

---




First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



---

## Tech Stack
- **Next.js 15**
- **React**
- **TailwindCSS**
- **NextAuth** (Authentication)
- **MongoDB** (Database)
- **bcryptjs** (Password hashing)
- **Vercel** (Deployment)

---

## Notes
- Dynamic routes are used for product detail pages.
- Middleware is used to secure private routes.
- Users who are not logged in cannot access protected pages.
- Future improvements could include:
  - Shopping Cart
  - Payment Gateway integration

---

## Author
- Developed by: **Md. Shamiul Islam**
- GitHub: [https://github.com/mdsamiulislam54](https://github.com/mdsamiulislam54)
- Portfolio: [https://shamiul-portfolio.netlify.app/](https://shamiul-portfolio.netlify.app/)
