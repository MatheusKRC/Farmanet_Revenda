import requests
from parsel import Selector
from requests.exceptions import ConnectTimeout, HTTPError
import time

def fetch_html(base_url: str):
    time.sleep(0.5)
    try:
        res = requests.get(base_url)
        res.raise_for_status()
    except (ConnectTimeout, HTTPError):
        return ""

    return res.text

def scrape_quotes():
    pages = Selector(fetch_html("file:///home/matheuskrc/Downloads/Vencidos.HTML"))
    new_item = []

    for clients in pages.css("div.pagina"):
        name = clients.xpath(f"//div[@style='top:0px;left:168px;']")
        new_item.append(name)
    print(new_item)
    print(len(new_item))

scrape_quotes()