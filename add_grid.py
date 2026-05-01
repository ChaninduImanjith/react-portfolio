import re

with open('src/index.css', 'r') as f:
    content = f.read()

grid_css = """
    body::after {
      content: '';
      position: fixed;
      inset: 0;
      background-image: 
        linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
      background-size: 40px 40px;
      mask-image: radial-gradient(ellipse at center, black 10%, transparent 80%);
      -webkit-mask-image: radial-gradient(ellipse at center, black 10%, transparent 80%);
      pointer-events: none;
      z-index: 0;
    }
"""

if 'body::after' not in content:
    content = content.replace('body::before {', grid_css + '\n    body::before {')

with open('src/index.css', 'w') as f:
    f.write(content)

