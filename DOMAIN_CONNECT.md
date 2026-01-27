# Domain connection (Namecheap → Vercel)

Target domain:
- `turningtideproject.com` (apex/root)
- `www.turningtideproject.com` (www)

> You told me `www.turningtideproject.com`. Best practice is to connect **both** apex + `www` and then set one as the canonical redirect.

## 1) Add domains in Vercel

1. Deploy the project to Vercel.
2. In Vercel → Project → **Settings** → **Domains**, add:
   - `turningtideproject.com`
   - `www.turningtideproject.com`
3. Pick which is canonical (recommended: **apex** `turningtideproject.com`) and enable redirect:
   - `www.turningtideproject.com` → `turningtideproject.com`

## 2) Set DNS in Namecheap

In Namecheap, go to:
- **Domain List** → **Manage** (for `turningtideproject.com`) → **Advanced DNS**

Then add/update these records (remove conflicting ones for `@` and `www`):

### Required DNS records (Vercel)

- **A record (apex/root)**
  - Type: `A`
  - Host: `@`
  - Value: `76.76.21.21`
  - TTL: `Automatic`

- **CNAME record (www)**
  - Type: `CNAME`
  - Host: `www`
  - Value: `cname.vercel-dns.com.`
  - TTL: `Automatic`

## 3) Wait for verification + HTTPS

- DNS propagation is often a few minutes, sometimes up to 24 hours.
- Once Vercel sees the records, it will auto-issue **HTTPS/SSL**.

## 4) Quick troubleshooting

- If Namecheap has an existing `CNAME` or `A` record for `www` or `@`, remove/replace it.
- If you’re using Namecheap “Parking” or “URL Redirect Record”, disable those for this domain.
- If verification is stuck, confirm:
  - `@` is exactly `76.76.21.21`
  - `www` CNAME points to exactly `cname.vercel-dns.com.`

Reference: Vercel domain setup docs.
