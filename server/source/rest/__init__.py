
import logging
import json


from lib.bottle import abort, put, post, delete, get, request, error, debug, redirect, response, static_file

from google.appengine.api import mail

@post('/question')
def email_us_question():
    data = request.json
    name = data.get('name')
    email = data.get('email')
    question = data.get('question')

    mail.send_mail(sender="coletteandbovard.com <teebs85@gmail.com>",
              to="Bovard Tiberi <bovard.tiberi@gmail.com>, Colette Doerschuk <doerschuk.colette@gmail.com>",
              subject="Wedding Question",
              body="Dear Bovard and Colette:\n {}\n Thanks!,\n {}\n{}".format(question, name, email)
    )
