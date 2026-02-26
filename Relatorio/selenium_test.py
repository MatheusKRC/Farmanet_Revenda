from bs4 import BeautifulSoup
import json
import re
from decimal import Decimal

def get_position(style, key):
    match = re.search(rf'{key}:(\d+)px', style)
    return int(match.group(1)) if match else None

def html_to_json(html_path, output="Relatorio.json"):
    with open(html_path, encoding="latin1") as f:
        soup = BeautifulSoup(f, "html.parser")

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

        # código = início de um novo produto
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

        # campos pertencentes ao produto atual
        if atual and top == top_atual:
            if 40 <= left <= 80:
                atual["descricao"] = texto

            elif 300 <= left <= 380:
                atual["fabricante"] = texto

            elif 500 <= left <= 560:
        # quantidade costuma ser só número
                if texto.isdigit():
                    atual["quantidade"] = int(texto)
                else:
                    atual["preco_compra"] = float(texto.replace(',','.'))

            elif 470 <= left <= 520:
                atual["preco_compra"] = texto.replace(',','.')

            elif 640 <= left <= 720:
                atual["preco_venda"] = float(texto.replace(',','.'))


    with open(output, "w", encoding="utf-8") as f:
        json.dump(produtos, f, indent=4, ensure_ascii=False)

    print(f"✅ {len(produtos)} produtos exportados")

if __name__ == "__main__":
    html_to_json("/home/matheuskrc/Projects/My_Projects/Farmanet_Revenda/Relatorio/90diasEurofarma.HTML")