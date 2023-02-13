from telebot import TeleBot

import os
import time

bot = TeleBot('6203278864:AAEOWPUIiS2iUCC7npiLsdGS58-lKUW3PZE')
def send_poll():
    bot.send_poll(-1001604685917, 'Are you going to eat lunch at saturday in staff mess', ['Yes', 'No'], is_anonymous=False)

if __name__ == '__main__':
    while True:
        send_poll()
        time.sleep(86400)
        

