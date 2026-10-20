/* The full tool list. Launcher and every tool read this. Set the last value to 1 when a tool is built. */
window.DT_CATS = [
 {name:"Security and hashing", tools:[
  ["password-generator","🔐","Password Generator","Random passwords and passphrases from your browser's secure random source",1],
  ["password-strength","🔑","Password Strength Checker","See how long a password would hold up, and what weakens it",1],
  ["hash-generator","🔢","Hash Generator","MD5, SHA-1, SHA-256, SHA-384, and SHA-512 of any text, with optional HMAC key",1],
  ["hash-checker","🔍","Hash Checker","Compare two hashes, or verify a download against its published checksum",1],
  ["file-hash","💾","File Hash Calculator","Checksums for files of any type, calculated on your device",1],
  ["uuid-generator","🔢","UUID Generator","Version 4 and version 7 UUIDs, one at a time or in bulk",1],
  ["guid-generator","🆔","GUID Generator","GUIDs in registry, braces, and code-ready formats",1]]},
 {name:"Encode and decode", tools:[
  ["base64","🔤","Base64 Encoder/Decoder","Text and files to Base64 and back, including URL-safe and data URIs",1],
  ["url-encoder","🌐","URL Encoder/Decoder","Percent-encode text and break a URL into its parts",1],
  ["number-base","🔢","Number Base Converter","Binary, octal, decimal, and hex side by side",1],
  ["unix-timestamp","⏱️","Unix Timestamp Converter","Epoch seconds and milliseconds to readable dates and back",1]]},
 {name:"Data formats", tools:[
  ["json-formatter","📋","JSON Formatter","Pretty-print, minify, and sort JSON with syntax colors",1],
  ["json-validator","🔎","JSON Validator","Find the exact line and column of a JSON error, and fix common mistakes",1],
  ["yaml-formatter","📝","YAML Formatter","Clean up and check YAML indentation",1],
  ["json-yaml","🔄","JSON ↔ YAML Converter","Convert between JSON and YAML in either direction",1],
  ["xml-formatter","📜","XML Formatter","Indent, minify, and check XML",1]]},
 {name:"Text", tools:[
  ["lorem-ipsum","🔢","Lorem Ipsum Generator","Placeholder paragraphs, sentences, or words",1],
  ["markdown-editor","📝","Markdown Editor","Write Markdown with a live preview beside it",1],
  ["markdown-previewer","👀","Markdown Previewer","Paste Markdown and see how it renders",1],
  ["text-case","🔤","Text Case Converter","camelCase, snake_case, Title Case, and more",1],
  ["duplicate-lines","🧹","Duplicate Line Remover","Remove repeated lines, with sort and trim options",1],
  ["line-counter","🔢","Line Counter","Count lines, blank lines, and the longest line",1],
  ["word-counter","📊","Word Counter","Words, characters, sentences, and reading time",1],
  ["regex-tester","🔎","Regex Tester","Test a pattern against text and see every match and group",1],
  ["regex-generator","🧪","Regex Generator","Build common patterns from plain options",1]]},
 {name:"Design and color", tools:[
  ["color-picker","🎨","Color Picker","Pick a color and get HEX, RGB, HSL, and contrast",1],
  ["color-palette","🌈","Color Palette Generator","Harmonious palettes from one starting color",1],
  ["gradient-generator","🎨","Gradient Generator","Linear and radial CSS gradients with live preview",1],
  ["font-previewer","🔠","Font Previewer","Compare fonts on your own sample text",1],
  ["screen-resolution","🖥️","Screen Resolution Tester","Your screen, window, and pixel ratio at a glance",1],
  ["responsive-tester","📱","Responsive Design Tester","Preview a page at common device sizes",1],
  ["aspect-ratio","📐","Aspect Ratio Calculator","Solve for width or height at any ratio",1]]},
 {name:"Converters and calculators", tools:[
  ["unit-converter","📏","Unit Converter","Length, weight, temperature, volume, and more",1],
  ["time-zone","🕐","Time Zone Converter","One moment shown across several time zones",1],
  ["date-calculator","📅","Date Calculator","Days between dates, and add or subtract time",1],
  ["file-size","📦","File Size Converter","Bytes, KB, MB, GB, and KiB, MiB, GiB",1],
  ["dev-calculator","🧮","Developer Calculator","Bitwise math in any base",1]]},
 {name:"Network", tools:[
  ["ip-calculator","🌐","IP Address Calculator","Network, broadcast, and host range for any address",1],
  ["ip-lookup","📍","IP Address Lookup","Who owns an IP address, roughly where it is, and its reverse DNS",1],
  ["subnet-calculator","🧮","Subnet Calculator","Split a network into equal subnets, or plan VLANs by how many devices each needs",1],
  ["url-shortener","🔗","URL Shortener","Short links on your own domain (needs a small server piece)",1]]},
 {name:"Reference", tools:[
  ["http-status","📡","HTTP Status Code Reference","Every status code with what it means and when to use it",1],
  ["http-headers","📖","HTTP Header Reference","Request and response headers explained",1],
  ["dns-records","🧭","DNS Record Reference","A, AAAA, CNAME, MX, TXT, SRV, and the rest",1],
  ["ports","🔌","Port Reference","Common TCP and UDP ports and what uses them",1],
  ["keyboard-shortcuts","💻","Keyboard Shortcut Reference","Windows, macOS, ChromeOS, and common app shortcuts",1]]}
];
