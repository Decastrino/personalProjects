
from selenium import webdriver
from selenium.webdriver.common.by import By

options = webdriver.ChromeOptions()
options.add_experimental_option("detach", True)
driver = webdriver.Chrome(options=options)

driver.get("http://demostore.supersqa.com")

#cart = driver.find_element('id', 'site-header-cart')
cart = driver.find_element(By.ID, 'site-header-cart')
cart.click()

import pdb;pdb.set_trace()