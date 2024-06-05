# FE DEMO

## Description

This is a demo that renders a products list page with simple search functionality

## Tech Stack

It utilizes [Next.js](https://nextjs.org), [Prisma](https://prisma.io), [Drizzle](https://orm.drizzle.team), [Tailwind CSS](https://tailwindcss.com), [tRPC](https://trpc.io), and [shadcn](https://ui.shadcn.com)

## Setting up local development

1. Install bun `curl -fsSL https://bun.sh/install | bash` as the main javascript runtime
2. During initial setup, you will need to seed the database: `bun run db:generate`
3. Start the development server: `bun run dev`
4. Navigate to `http://localhost:3000`

## Running E2E Tests

1. Build app `bun run build`
2. Run `bun run e2e` or `bun run e2e:headless`
