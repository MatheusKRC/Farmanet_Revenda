# importação do webdriver, que é o que possibilita a implementação para todos
# os principais navegadores da web
from time import sleep
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By

# criação de uma instância de navegador utilizando o Firefox
firefox = webdriver.Firefox()

# requisições para essa instância criada utilizando o método `get`
# firefox.get("file:///home/matheuskrc/Downloads/Vencidos.HTML")

def scrape(browser):
    perPage = [80, 96, 112, 128, 144, 160, 176, 192, 208, 224, 240, 256, 272, 288, 304, 320, 336, 352, 368, 384, 400, 416, 432, 448, 464, 480, 496, 512, 528, 544, 560, 576, 592, 608, 624, 640, 656, 672, 688, 704, 720, 736, 752, 768, 784, 800, 816, 832, 848, 864, 880, 896, 912, 928, 944, 960, 976, 992]

    pages = browser.find_elements(By.CLASS_NAME, 'pagina')
    firefox.execute_script("window.scrollBy(0, 1300)")
    new_item = []

    for clients in pages:
        for numbers in perPage:
            new_item.append({'name':(
            clients.find_element(By.XPATH, f"//div[@style='top:{numbers}px;left:168px;']")
            .get_attribute('innerHTML')
            )})

    return new_item

def main():
    firefox.get("file:///home/matheuskrc/Downloads/Vencidos.HTML")

    while True:
        pages = scrape(firefox)

        if not pages:
            continue
        
        
        print(pages)
        return pages


if __name__ == '__main__':
    main()