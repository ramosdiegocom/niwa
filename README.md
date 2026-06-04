# Niwa 庭

## Apps

### `finance`
A fully functional demo of an AI invoice scanner. Users submit their invoices and an ollama vision LLM extracts structured data from it. Turning pdfs/images into a queryable database.

This setup achieves private inference because the LLM runs on a local machine, which is exposed to the internet using a Cloudflare Tunnel + Zero Trust Access.

![Finance app demo](apps/finance/public/finance.gif)

**What's next:** The extraction performance can be improved with image compression (reduce payload size), and better PDF processing strategies. The economics only make sense at high volume, thousands of invoices per day, and that's exactly the target use case I'm validating.

---

## Stack

**Monorepo**
- [Turborepo](https://turbo.build) — task orchestration and build caching
- [Bun](https://bun.sh) — package manager and runtime

**Frontend**
- [Next.js 16](https://nextjs.org) + React 19
- [Tailwind CSS v4](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com) + [Base UI](https://base-ui.com) — component primitives
- [TanStack Form](https://tanstack.com/form) — form management
- [TanStack Table](https://tanstack.com/table) — data tables
- [TanStack Query](https://tanstack.com/query) — server state

**Backend & Data**
- [oRPC](https://orpc.unnoq.com) — end-to-end typesafe RPC
- [Drizzle ORM](https://orm.drizzle.team) + [Neon](https://neon.tech) — serverless Postgres
- [Better Auth](https://better-auth.com) + passkeys — authentication
- [Zod v4](https://zod.dev) — schema validation, co-located with Drizzle table definitions

**Infrastructure**
- [Cloudflare Tunnel](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/) + Zero Trust Access — securely exposes local services to deployed apps
- [Ollama](https://ollama.com) — local LLM / vision model inference

**Tooling**
- [Biome](https://biomejs.dev) + [Ultracite](https://ultracite.dev) — linting and formatting
- [Husky](https://typicode.github.io/husky/) + lint-staged — pre-commit hooks
- [Resend](https://resend.com) + [React Email](https://react.email) — transactional email
- [Polar](https://polar.sh) — billing


