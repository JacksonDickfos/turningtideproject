# Domain connection (Namecheap → Vercel) — turningtideproject.com

You have added both domains in Vercel:
- `turningtideproject.com` (apex/root)
- `www.turningtideproject.com` (www)

Vercel is currently showing **Invalid configuration** because the DNS at Namecheap hasn’t been updated to match.

## Use the DNS records Vercel shows in your Project → Settings → Domains

Vercel may show **project-specific** DNS targets (they can differ from older “standard” values like `76.76.21.21` / `cname.vercel-dns.com`).

Based on your screenshot, Vercel wants:

### `turningtideproject.com` (apex/root)
- Type: `A`
- Host/Name: `@`
- Value: `216.150.1.1`
- TTL: `Automatic`

### `www.turningtideproject.com` (www)
- Type: `CNAME`
- Host/Name: `www`
- Value: `9ddc00051cbf2ba2.vercel-dns-016.com.`
- TTL: `Automatic`

> If Vercel’s UI ever shows different values, **use Vercel’s latest values**.

## Where to set this in Namecheap

Namecheap → **Domain List** → **Manage** → **Advanced DNS**

- Remove/replace any existing conflicting records for `@` and `www` (including “Parking” / “URL Redirect Record”).
- Add the `A` record for `@` and the `CNAME` for `www` exactly as above.

## Verify

- Back in Vercel → Project → Settings → Domains, click **Refresh**.
- DNS propagation is often a few minutes, sometimes up to 24 hours.
- Once verified, Vercel will automatically provision **HTTPS/SSL**.
