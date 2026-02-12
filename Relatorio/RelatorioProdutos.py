from bs4 import BeautifulSoup
import json
import re
import sys

def get_position(style, key):
    match = re.search(rf'{key}:(\d+)px', style)
    return int(match.group(1)) if match else None

def html_to_json_from_string(html_text):
    soup = BeautifulSoup(html_text, "html.parser")

    produtos = []
    atual = None
    top_atual = None

    for div in soup.find_all("div", style=True):
        texto = div.get_text(strip=True)
        if not texto:
            continue

        style = div["style"]
        top = get_position(style, "top")
        left = get_position(style, "left")

        if top is None or left is None:
            continue

        if left == 0 and texto.isdigit():
            atual = {
                "codigo": texto,
                "descricao": None,
                "fabricante": None,
                "quantidade": None,
                "preco_compra": None,
                "preco_venda": None
            }
            produtos.append(atual)
            top_atual = top
            continue

        if atual and top == top_atual:
            if 40 <= left <= 80:
                atual["descricao"] = texto

            elif 300 <= left <= 380:
                atual["fabricante"] = texto

            elif 500 <= left <= 560:
                if texto.isdigit():
                    atual["quantidade"] = int(texto)
                else:
                    atual["preco_compra"] = float(texto.replace(',', '.'))

            elif 470 <= left <= 520:
                atual["preco_compra"] = float(texto.replace(',', '.'))

            elif 640 <= left <= 720:
                atual["preco_venda"] = float(texto.replace(',', '.'))

    return produtos


if __name__ == "__main__":
    html = sys.stdin.read()           # ⬅️ recebe HTML do Node
    result = html_to_json_from_string(html)
    print(json.dumps(result, ensure_ascii=False))
