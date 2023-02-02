from selenium import webdriver
#from selenium.webdriver.chrome.service import Service

#1 pass executable as an arg
# se = Service(executable_path='/Users/htinubu/Downloads/chromedriver_mac64/chromedriver')
# driver = webdriver.Chrome(service=se)

#2 Add executable into system path
# echo $PATH
#  mv /Users/htinubu/Downloads/chromedriver_mac64/chromedriver /usr/local/bin
driver = webdriver.Chrome()
driver.get("https://www.google.com")

#print(driver)
#print(se)
