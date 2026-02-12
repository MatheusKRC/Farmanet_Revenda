# importação do webdriver, que é o que possibilita a implementação para todos
# os principais navegadores da web
from time import sleep
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
import json

# criação de uma instância de navegador utilizando o Firefox
firefox = webdriver.Firefox()

# requisições para essa instância criada utilizando o método `get`
# firefox.get("file:///home/matheuskrc/Downloads/Vencidos.HTML")

def scrape(url):
    firefox.get(url)
    
    perPage = [80, 96, 112, 128, 144, 160, 176, 192, 208, 224, 240, 256, 272, 288, 304, 320, 336, 352, 368, 384, 400, 416, 432, 448, 464, 480, 496, 512, 528, 544, 560, 576, 592, 608, 624, 640, 656, 672, 688, 704, 720, 736, 752, 768, 784, 800, 816, 832, 848, 864, 880, 896, 912, 928, 944, 960, 976, 992]

    new_item = []
    pages = firefox.find_elements(By.CLASS_NAME, 'folha')
    number = 0

    for i in pages:
        firefox.execute_script(f'window.scrollTo(0, {number})')
        number += 1100
        for numbers in perPage:
            name = firefox.find_element(By.XPATH, f"//div[@style='top:{numbers}px;left:168px;']").get_attribute('innerHTML')
            expirate_date = firefox.find_element(By.XPATH, f"//div[@style='top:{numbers}px;left:536px;']").get_attribute('innerHTML')
            value = firefox.find_element(By.XPATH, f"//div[@style='top:{numbers}px;left:576px;Width:100px;text-align:right;']").get_attribute('innerHTML')
            days = firefox.find_element(By.XPATH, f"//div[@style='top:{numbers}px;left:696px;']").get_attribute('innerHTML')

            new_item.append({
                'name': name, 
                'expirate_date': expirate_date, 
                'value': value, 
                'days': days})
        
    with open('teste.json', 'w') as arquivo:
        json.dump(new_item, arquivo, indent=4)

    print(len(perPage))
    print(new_item)
    print(len(new_item))

    sleep(2)

    firefox.quit()

scrape("file:///home/matheuskrc/Downloads/Vencidos.HTML")