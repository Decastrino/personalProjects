import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.keys import Keys

options = webdriver.ChromeOptions()
options.add_experimental_option("detach", True)

driver = webdriver.Chrome(options=options)

driver.get("http://demostore.supersqa.com")

#WebDriverWait(driver, 10).until(EC.presence_of_element_located(By.CSS_SELECTOR,"#main > ul > li.product.type-product.post-24.status-publish.instock.product_cat-music.has-post-thumbnail.downloadable.virtual.purchasable.product-type-simple")).click()

search_field = driver.find_element(By.CSS_SELECTOR,"#woocommerce-product-search-field-0")
search_field.send_keys("hoodie")
time.sleep(5)
search_field.send_keys(Keys.ENTER)

# Login to account
found = False
print(found)
nav_items = driver.find_elements('css selector', '#site-navigation > div:nth-child(2) > ul')

for items in nav_items:
    acc = items.find_element(By.CLASS_NAME,'page-item-9')
    if acc:
        found = True
        acc.click()
        if found:
            uname = driver.find_element(By.ID, 'username')
            uname.send_keys('helix')
            pword = driver.find_element(By.ID, 'password')
            pword.send_keys("pword")
            submit = driver.find_element(By.CSS_SELECTOR, "#customer_login > div.u-column1.col-1 > form > p:nth-child(3) > button")
            submit.click()