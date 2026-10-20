# Developer Tools

46 free developer and IT tools that run in any web browser. Open the launcher, pick a tool, and go. No accounts, no install, no build step, and they work offline after the first visit.

Made by [Davis Tech Support](https://davis-tech-support.com) in Farmville, Virginia.

## Tools

### Security and hashing

- 🔐 **[Password Generator](apps/password-generator/index.html)**: Random passwords and passphrases from your browser's secure random source
- 🔑 **[Password Strength Checker](apps/password-strength/index.html)**: See how long a password would hold up, and what weakens it
- 🔢 **[Hash Generator](apps/hash-generator/index.html)**: MD5, SHA-1, SHA-256, SHA-384, and SHA-512 of any text, with optional HMAC key
- 🔍 **[Hash Checker](apps/hash-checker/index.html)**: Compare two hashes, or verify a download against its published checksum
- 💾 **[File Hash Calculator](apps/file-hash/index.html)**: Checksums for files of any type, calculated on your device
- 🔢 **[UUID Generator](apps/uuid-generator/index.html)**: Version 4 and version 7 UUIDs, one at a time or in bulk
- 🆔 **[GUID Generator](apps/guid-generator/index.html)**: GUIDs in registry, braces, and code-ready formats

### Encode and decode

- 🔤 **[Base64 Encoder/Decoder](apps/base64/index.html)**: Text and files to Base64 and back, including URL-safe and data URIs
- 🌐 **[URL Encoder/Decoder](apps/url-encoder/index.html)**: Percent-encode text and break a URL into its parts
- 🔢 **[Number Base Converter](apps/number-base/index.html)**: Binary, octal, decimal, and hex side by side
- ⏱️ **[Unix Timestamp Converter](apps/unix-timestamp/index.html)**: Epoch seconds and milliseconds to readable dates and back

### Data formats

- 📋 **[JSON Formatter](apps/json-formatter/index.html)**: Pretty-print, minify, and sort JSON with syntax colors
- 🔎 **[JSON Validator](apps/json-validator/index.html)**: Find the exact line and column of a JSON error, and fix common mistakes
- 📝 **[YAML Formatter](apps/yaml-formatter/index.html)**: Clean up and check YAML indentation
- 🔄 **[JSON ↔ YAML Converter](apps/json-yaml/index.html)**: Convert between JSON and YAML in either direction
- 📜 **[XML Formatter](apps/xml-formatter/index.html)**: Indent, minify, and check XML

### Text

- 🔢 **[Lorem Ipsum Generator](apps/lorem-ipsum/index.html)**: Placeholder paragraphs, sentences, or words
- 📝 **[Markdown Editor](apps/markdown-editor/index.html)**: Write Markdown with a live preview beside it
- 👀 **[Markdown Previewer](apps/markdown-previewer/index.html)**: Paste Markdown and see how it renders
- 🔤 **[Text Case Converter](apps/text-case/index.html)**: camelCase, snake_case, Title Case, and more
- 🧹 **[Duplicate Line Remover](apps/duplicate-lines/index.html)**: Remove repeated lines, with sort and trim options
- 🔢 **[Line Counter](apps/line-counter/index.html)**: Count lines, blank lines, and the longest line
- 📊 **[Word Counter](apps/word-counter/index.html)**: Words, characters, sentences, and reading time
- 🔎 **[Regex Tester](apps/regex-tester/index.html)**: Test a pattern against text and see every match and group
- 🧪 **[Regex Generator](apps/regex-generator/index.html)**: Build common patterns from plain options

### Design and color

- 🎨 **[Color Picker](apps/color-picker/index.html)**: Pick a color and get HEX, RGB, HSL, and contrast
- 🌈 **[Color Palette Generator](apps/color-palette/index.html)**: Harmonious palettes from one starting color
- 🎨 **[Gradient Generator](apps/gradient-generator/index.html)**: Linear and radial CSS gradients with live preview
- 🔠 **[Font Previewer](apps/font-previewer/index.html)**: Compare fonts on your own sample text
- 🖥️ **[Screen Resolution Tester](apps/screen-resolution/index.html)**: Your screen, window, and pixel ratio at a glance
- 📱 **[Responsive Design Tester](apps/responsive-tester/index.html)**: Preview a page at common device sizes
- 📐 **[Aspect Ratio Calculator](apps/aspect-ratio/index.html)**: Solve for width or height at any ratio

### Converters and calculators

- 📏 **[Unit Converter](apps/unit-converter/index.html)**: Length, weight, temperature, volume, and more
- 🕐 **[Time Zone Converter](apps/time-zone/index.html)**: One moment shown across several time zones
- 📅 **[Date Calculator](apps/date-calculator/index.html)**: Days between dates, and add or subtract time
- 📦 **[File Size Converter](apps/file-size/index.html)**: Bytes, KB, MB, GB, and KiB, MiB, GiB
- 🧮 **[Developer Calculator](apps/dev-calculator/index.html)**: Bitwise math in any base

### Network

- 🌐 **[IP Address Calculator](apps/ip-calculator/index.html)**: Network, broadcast, and host range for any address
- 📍 **[IP Address Lookup](apps/ip-lookup/index.html)**: Who owns an IP address, roughly where it is, and its reverse DNS
- 🧮 **[Subnet Calculator](apps/subnet-calculator/index.html)**: Split a network into equal subnets, or plan VLANs by how many devices each needs
- 🔗 **[URL Shortener](apps/url-shortener/index.html)**: Short links on your own domain (needs a small server piece)

### Reference

- 📡 **[HTTP Status Code Reference](apps/http-status/index.html)**: Every status code with what it means and when to use it
- 📖 **[HTTP Header Reference](apps/http-headers/index.html)**: Request and response headers explained
- 🧭 **[DNS Record Reference](apps/dns-records/index.html)**: A, AAAA, CNAME, MX, TXT, SRV, and the rest
- 🔌 **[Port Reference](apps/ports/index.html)**: Common TCP and UDP ports and what uses them
- 💻 **[Keyboard Shortcut Reference](apps/keyboard-shortcuts/index.html)**: Windows, macOS, ChromeOS, and common app shortcuts

## Privacy
Everything runs on your device. Settings are saved in your browser only. There are two exceptions, and both say so on the page:

- **IP Address Lookup** sends the address you look up to free public services: ipwho.is (with ipapi.co as a backup) for location, RDAP for ownership, and Google DNS for names. Private addresses like 192.168.x.x are explained without sending anything.
- **Password Strength Checker**, only when you click "Check known breaches," sends the first 5 characters of the password's SHA-1 hash to Have I Been Pwned. The password itself never leaves the device.

## Run it
It's plain HTML, CSS, and JavaScript with no build step.

- **On your computer:** open `index.html` in a browser. Everything works except offline mode, which needs a web server.
- **Local server (optional):** `python -m http.server` in this folder, then open http://localhost:8000.

## Deploy
**Netlify (recommended):** connect this repository in Netlify (Add new site > Import an existing project). Leave the build command empty and set the publish directory to the repository root. Every push redeploys. `netlify.toml` already holds these settings plus basic security headers.

**GitHub Pages:** in the repository, go to Settings > Pages, choose "Deploy from a branch," and pick `main` and `/ (root)`. The `.nojekyll` file is already included so nothing is skipped. Note that the URL Shortener's `_redirects` file only works on Netlify or Cloudflare Pages, not GitHub Pages.

**Cloudflare Pages** also works with no build command and the root as the output folder.

## Good to know
- Every tool has a light and dark theme. The choice carries across all tools.
- The Markdown Editor saves your draft on that device as you type.
- **URL Shortener:** make links in the tool, download the `_redirects` file it creates, commit it to the top of this repository next to `index.html`, and push. The links go live with that deploy.
- The Responsive Design Tester can't show sites that block framing (most big sites). Your own sites usually work.

## Project layout
```
index.html             Launcher with search
apps/<tool>/index.html One folder per tool
shared/kit.css         Blueprint theme used by every page
shared/kit.js          Shared helpers (copy, download, hashing, JSON, theme)
shared/tools.js        The tool list the launcher and pages read
shared/color.js        Color helpers for the design tools
shared/vendor/         Third-party libraries, with their licenses
sw.js                  Offline support (service worker)
manifest.webmanifest   Install-as-app support
```

## Adding or changing a tool
1. Copy an existing tool folder in `apps/` as a starting point. Each page loads `shared/kit.css`, `shared/tools.js`, and `shared/kit.js`, then calls `DT.mount("your-slug")`.
2. Add a line for it in `shared/tools.js`. The last value is `1` when the tool is ready (`0` shows it as "In progress").
3. After changing any file, bump `VERSION` in `sw.js` so devices that installed the app pick up the update.

## Credits
- EFF short word list (passphrases) by the Electronic Frontier Foundation, CC BY 3.0
- [js-yaml](https://github.com/nodeca/js-yaml) by Vitaly Puzrin, MIT
- [marked](https://github.com/markedjs/marked), MIT
- [DOMPurify](https://github.com/cure53/DOMPurify) by Cure53, Apache 2.0 or MPL 2.0
- Fonts: Atkinson Hyperlegible and Martian Mono, via Google Fonts, SIL Open Font License

## License
The code is MIT licensed; see [LICENSE](LICENSE). The Davis Tech Support name and logo are not covered by that license; see [TRADEMARKS.md](TRADEMARKS.md).

## Contact
Davis Tech Support · [davis-tech-support.com](https://davis-tech-support.com) · davis.tech.va@gmail.com · 434-294-4456
