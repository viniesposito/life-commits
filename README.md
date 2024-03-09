# Life Commits

![App Screenshot](https://github.com/viniesposito/life-commits/blob/main/assets/screenshot.png?raw=true)

Life Commits is a dumb app I created as a proof of concept for myself. Things like the GitHub tiles or Strava's weekly activity summary work really well as enforcers of consistency. As a result, I wanted to have something similar but for things that are not commits or running mileage. This was also a nice opportunity to learn a bit more of webdev, specifically NextJS/React/Tailwind which seems to be the most popular framework these days.

## Installation

Clone the repository and install packages:

```bash
git clone https://github.com/viniesposito/life-commits.git
cd life-commits
npm i
```

Set up .env file:

```
CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
```

Run app + convex:

```bash
npx convex dev
```

```bash
npm run dev
```

