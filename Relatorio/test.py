# importação do webdriver, que é o que possibilita a implementação para todos
# os principais navegadores da web
from time import sleep
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By 
from selenium.webdriver.chrome.options import Options
import json

# criação de uma instância de navegador utilizando o Firefox

options = Options()
options.binary_location = "/usr/bin/google-chrome"

driver = webdriver.Chrome(options=options)

# requisições para essa instância criada utilizando o método `get`
# driver.get("file:///home/matheuskrc/Downloads/Vencidos.HTML")

def scrape(url):
    driver.get(url)
    
    perPage = [80, 96, 112, 128, 144, 160, 176, 192, 208, 224, 240, 256, 272, 288, 304, 320, 336, 352, 368, 384, 400, 416, 432, 448, 464, 480, 496, 512, 528, 544, 560, 576, 592, 608, 624]

    new_item = []

    for numbers in perPage:
            cod = driver.find_element(By.XPATH, f"//div[@style='top:{numbers}px;left:0px;']").get_attribute('innerHTML')
            desc = driver.find_element(By.XPATH, f"//div[@style='top:{numbers}px;left:56px;']").get_attribute('innerHTML')
            fabricante = driver.find_element(By.XPATH, f"//div[@style='top:{numbers}px;left:344px;']").get_attribute('innerHTML')
            qtd = driver.find_element(By.XPATH, f"//div[@style='top:{numbers}px;left:512px;Width:27px;text-align:right;']").get_attribute('innerHTML')
            pr_compra = driver.find_element(By.XPATH, f"//div[@style='top:{numbers}px;left:504px;Width:100px;text-align:right;']").get_attribute('innerHTML')
            pr_venda = driver.find_element(By.XPATH, f"//div[@style='top:{numbers}px;left:648px;Width:100px;text-align:right;']").get_attribute('innerHTML')

            new_item.append({
                'cod': cod,
                'desc': desc, 
                'fabricante': fabricante, 
                'qtd': qtd, 
                'pr_compra': pr_compra,
                'pr_venda': pr_venda})
        
    with open('Relatorio.json', 'w') as arquivo:
        json.dump(new_item, arquivo, indent=4)

    driver.quit()

scrape("file:///home/matheuskrc/Projects/My_Projects/farmanet-revenda/Relatorio/ProdutosMaisDe100.HTML")