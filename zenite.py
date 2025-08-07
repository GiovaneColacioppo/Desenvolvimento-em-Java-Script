from PIL import Image, ImageDraw

# Definindo as cores da paleta "Zênite"
palette = {
    "Zênite Claro": "#87CEEB",
    "Azul Altitude": "#4682B4",
    "Luz Atmosférica": "#B0E0E6",
    "Zênite Profundo": "#191970",
    "Silêncio Cósmico": "#0B0B45",
    "Brisa Estelar": "#2F4F4F",
    "Horizonte Elevado": "#6A5ACD",
    "Aura do Zênite": "#8A2BE2"
}

# Configurações da imagem
width = 800
height_per_color = 80
image = Image.new("RGB", (width, height_per_color * len(palette)), "white")
draw = ImageDraw.Draw(image)

# Desenhando as faixas de cor
for i, (name, hex_color) in enumerate(palette.items()):
    top = i * height_per_color
    bottom = top + height_per_color
    draw.rectangle([0, top, width, bottom], fill=hex_color)
    draw.text((10, top + 25), name, fill="white" if i > 2 else "black")

# Mostrar a imagem
image.show()
