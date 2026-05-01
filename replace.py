import re

with open('src/index.css', 'r') as f:
    content = f.read()

# Replace variables
content = re.sub(r'--bg: #080b12;', '--bg: #0a0f1a;', content)
content = re.sub(r'--surface: #0e1420;', '--surface: #111827;', content)
content = re.sub(r'--card: #111827;', '--card: #1e293b;', content)
content = re.sub(r'--accent: #e63946;', '--accent: #0ea5e9;', content)
content = re.sub(r'--accent2: #f4a261;', '--accent2: #8b5cf6;', content)
content = re.sub(r'--text: #eef2ff;', '--text: #f8fafc;', content)
content = re.sub(r'--muted: #8892b0;', '--muted: #94a3b8;', content)
content = re.sub(r'rgba\(230,57,70,', 'rgba(14,165,233,', content)

# Replace fonts
content = content.replace("'DM Sans'", "'Inter'")
content = content.replace("'Syne'", "'Inter'")

# Make eyebrows and tags Fira Code
content = re.sub(r'(\.section-tag \{.*?)font-size: 0\.72rem; letter-spacing: 0\.2em;', r"\1font-family: 'Fira Code', monospace; font-size: 0.8rem; letter-spacing: 0.1em;", content)
content = re.sub(r'(\.hero-eyebrow \{.*?)font-size: 0\.75rem; letter-spacing: 0\.2em;', r"\1font-family: 'Fira Code', monospace; font-size: 0.85rem; letter-spacing: 0.1em;", content)
content = re.sub(r'(\.nav-links a \{.*?)font-size: 0\.85rem; letter-spacing: 0\.08em;', r"\1font-family: 'Fira Code', monospace; font-size: 0.85rem; letter-spacing: 0.05em;", content)
content = re.sub(r'(\.btn-primary \{.*?)font-weight: 500;', r"\1font-weight: 600; font-family: 'Inter', sans-serif;", content)
content = re.sub(r'(\.btn-ghost \{.*?)font-weight: 400;', r"\1font-weight: 500; font-family: 'Inter', sans-serif;", content)
content = re.sub(r'(\.hero-name \{.*?)letter-spacing: -0\.03em;', r"\1letter-spacing: -0.04em;", content)

# Remove the red border from cert-cards hover (was hardcoded e63946)
content = re.sub(r'rgba\(230,57,70,', 'rgba(14,165,233,', content)
content = re.sub(r'rgba\(244,162,97,', 'rgba(139,92,246,', content)

with open('src/index.css', 'w') as f:
    f.write(content)

