#  Libraries & Variables

from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.options import Options

classNum = 0
classNames = []
classOverallGrades = []
classIndividualGrades = [][]




#  Hide Pop-Up Window

WINDOW_SIZE = "1920,1080"
chrome_options = Options()
chrome_options.add_argument("--headless")
chrome_options.add_argument("--window-size=%s" % WINDOW_SIZE)


#  Login

id_num = '390099'
password_num = 'Geonwoo384973'

browser = webdriver.Chrome(options=chrome_options)
browser.get("https://parentvue.cusdk8.org/PXP2_Login_Student.aspx?regenerateSessionId=True")
id_search_box = browser.find_element("id", "ctl00_MainContent_username")
password_search_box = browser.find_element("id", "ctl00_MainContent_password")
login_click = browser.find_element("id", "ctl00_MainContent_Submit1")

id_search_box.send_keys(id_num)
password_search_box.send_keys(password_num)
login_click.click()


#  Gradebook

browser.get("https://parentvue.cusdk8.org/PXP2_Gradebook.aspx?AGU=0&studentGU=E2D240A7-37CF-4998-9B44-162637F00C62")






browser.close()
