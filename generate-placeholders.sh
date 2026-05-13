#!/bin/bash

# ============================================
# 🎨 SCRIPT GENERATE PLACEHOLDER IMAGES
# ============================================
# 
# Script ini membuat placeholder SVG untuk semua
# gambar yang dibutuhkan portfolio.
# 
# Gunakan jika Anda belum punya gambar asli.
# Component akan otomatis menampilkan placeholder
# ini sampai Anda menggantinya dengan gambar asli.
#
# CARA MENGGUNAKAN:
# 1. chmod +x generate-placeholders.sh
# 2. ./generate-placeholders.sh
# 3. Refresh browser
# ============================================

echo "🎨 Generating placeholder images..."

# Create directories
mkdir -p public/images/skills
mkdir -p public/images/projects
mkdir -p public/images/testimonials
mkdir -p public/images/blog
mkdir -p public/images/services

# Function to create skill icon placeholder
create_skill_icon() {
  local name=$1
  local color1=$2
  local color2=$3
  local letter=${name:0:1}
  
  cat > "public/images/skills/${name}.svg" << EOF
<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
  <defs>
    <linearGradient id="grad-${name}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${color1};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${color2};stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="64" height="64" rx="12" fill="url(#grad-${name})"/>
  <text x="32" y="40" text-anchor="middle" fill="white" font-size="28" font-family="system-ui" font-weight="bold">${letter}</text>
</svg>
EOF
  echo "✓ Created skills/${name}.svg"
}

# Create skill icons
create_skill_icon "react" "#61DAFB" "#00D8FF"
create_skill_icon "typescript" "#3178C6" "#00599C"
create_skill_icon "tailwind" "#06B6D4" "#0EA5E9"
create_skill_icon "vue" "#42B883" "#35495E"
create_skill_icon "html" "#E34F26" "#FF5722"
create_skill_icon "javascript" "#F7DF1E" "#FFD700"
create_skill_icon "nodejs" "#339933" "#4CAF50"
create_skill_icon "python" "#3776AB" "#2E5C8A"
create_skill_icon "postgresql" "#336791" "#4A7BA7"
create_skill_icon "mongodb" "#47A248" "#58B859"
create_skill_icon "graphql" "#E535AB" "#FF4BC8"
create_skill_icon "rest" "#FF6C37" "#FF8C5A"
create_skill_icon "git" "#F05032" "#F76D51"
create_skill_icon "docker" "#2496ED" "#3BA8F3"
create_skill_icon "aws" "#FF9900" "#FFB347"
create_skill_icon "cicd" "#F7DF1E" "#FFE066"
create_skill_icon "linux" "#FCC624" "#FFD54A"
create_skill_icon "vercel" "#000000" "#333333"
create_skill_icon "figma" "#F24E1E" "#FF6B4A"
create_skill_icon "adobexd" "#FF61F6" "#FF8AFC"
create_skill_icon "uiux" "#A855F7" "#C084FC"
create_skill_icon "prototyping" "#EC4899" "#F472B6"

echo "✓ Created 20 skill icons"

# Function to create project placeholder
create_project_placeholder() {
  local name=$1
  local color1=$2
  local color2=$3
  local icon=$4
  
  cat > "public/images/projects/${name}.svg" << EOF
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
  <defs>
    <linearGradient id="grad-${name}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${color1};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${color2};stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#grad-${name})"/>
  <text x="400" y="280" text-anchor="middle" fill="white" font-size="120" font-family="system-ui" opacity="0.3">${icon}</text>
  <text x="400" y="350" text-anchor="middle" fill="white" font-size="32" font-family="system-ui" font-weight="bold">Project Placeholder</text>
  <text x="400" y="390" text-anchor="middle" fill="white" font-size="18" font-family="system-ui" opacity="0.7">Replace with your screenshot</text>
</svg>
EOF
  echo "✓ Created projects/${name}.svg"
}

# Create project placeholders
create_project_placeholder "ecommerce" "#8B5CF6" "#6366F1" "🛒"
create_project_placeholder "dashboard" "#06B6D4" "#3B82F6" "📊"
create_project_placeholder "social" "#EC4899" "#F43F5E" "💬"
create_project_placeholder "ai" "#10B981" "#14B8A6" "🤖"
create_project_placeholder "task" "#F97316" "#F59E0B" "📋"
create_project_placeholder "crypto" "#EAB308" "#84CC16" "₿"

echo "✓ Created 6 project placeholders"

# Function to create service icon
create_service_icon() {
  local name=$1
  local color1=$2
  local color2=$3
  local icon=$4
  
  cat > "public/images/services/${name}.svg" << EOF
<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
  <defs>
    <linearGradient id="grad-${name}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${color1};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${color2};stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="64" height="64" rx="12" fill="url(#grad-${name})"/>
  <text x="32" y="40" text-anchor="middle" fill="white" font-size="28" font-family="system-ui">${icon}</text>
</svg>
EOF
  echo "✓ Created services/${name}.svg"
}

# Create service icons
create_service_icon "webdev" "#8B5CF6" "#6366F1" "💻"
create_service_icon "design" "#EC4899" "#F43F5E" "🎨"
create_service_icon "mobile" "#06B6D4" "#3B82F6" "📱"
create_service_icon "consulting" "#10B981" "#14B8A6" "👥"

echo "✓ Created 4 service icons"

# Function to create blog placeholder
create_blog_placeholder() {
  local name=$1
  local color1=$2
  local color2=$3
  local title=$4
  
  cat > "public/images/blog/${name}.svg" << EOF
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="400" viewBox="0 0 800 400">
  <defs>
    <linearGradient id="grad-${name}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${color1};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${color2};stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="800" height="400" fill="url(#grad-${name})"/>
  <text x="400" y="180" text-anchor="middle" fill="white" font-size="48" font-family="system-ui" font-weight="bold">Blog Post</text>
  <text x="400" y="230" text-anchor="middle" fill="white" font-size="24" font-family="system-ui" opacity="0.7">${title}</text>
  <text x="400" y="300" text-anchor="middle" fill="white" font-size="16" font-family="system-ui" opacity="0.5">Replace with featured image</text>
</svg>
EOF
  echo "✓ Created blog/${name}.svg"
}

# Create blog placeholders
create_blog_placeholder "react-server" "#06B6D4" "#3B82F6" "React Server Components"
create_blog_placeholder "typescript" "#3178C6" "#00599C" "TypeScript Best Practices"
create_blog_placeholder "tailwind" "#06B6D4" "#0EA5E9" "Tailwind CSS Design System"

echo "✓ Created 3 blog placeholders"

# Create testimonial placeholders
create_testimonial_placeholder() {
  local name=$1
  local color1=$2
  local color2=$3
  local initials=$4
  
  cat > "public/images/testimonials/${name}.svg" << EOF
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
  <defs>
    <linearGradient id="grad-${name}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${color1};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${color2};stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="200" height="200" rx="40" fill="url(#grad-${name})"/>
  <text x="100" y="120" text-anchor="middle" fill="white" font-size="72" font-family="system-ui" font-weight="bold">${initials}</text>
</svg>
EOF
  echo "✓ Created testimonials/${name}.svg"
}

# Create testimonial placeholders
create_testimonial_placeholder "budi" "#8B5CF6" "#6366F1" "BS"
create_testimonial_placeholder "sarah" "#EC4899" "#F43F5E" "SW"
create_testimonial_placeholder "michael" "#06B6D4" "#3B82F6" "MC"
create_testimonial_placeholder "dewi" "#10B981" "#14B8A6" "DA"

echo "✓ Created 4 testimonial placeholders"

# Create avatar placeholder
cat > public/images/avatar.svg << EOF
<svg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500">
  <defs>
    <linearGradient id="grad-avatar" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#6366f1;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#ec4899;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="500" height="500" rx="100" fill="url(#grad-avatar)"/>
  <text x="250" y="280" text-anchor="middle" fill="white" font-size="180" font-family="system-ui" font-weight="bold">AP</text>
  <text x="250" y="350" text-anchor="middle" fill="white" font-size="24" font-family="system-ui" opacity="0.7">Your Photo Here</text>
</svg>
EOF

echo "✓ Created avatar placeholder"

echo ""
echo "============================================"
echo "✅ DONE! Semua placeholder telah dibuat."
echo "============================================"
echo ""
echo "📁 Lokasi file: public/images/"
echo ""
echo "🔄 Refresh browser untuk melihat hasil."
echo ""
echo "💡 TIPS:"
echo "   - Ganti placeholder dengan gambar asli Anda"
echo "   - Lihat IMAGE_GUIDE.md untuk panduan lengkap"
echo "   - Gunakan format JPG untuk foto, SVG untuk icon"
echo ""
