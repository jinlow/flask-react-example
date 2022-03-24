from urllib import response
from flask import Flask, request
import random

api = Flask(__name__)

data = []

@api.route("/profile")
def my_profile():
    response = {
        "name": "James",
        "about": "Yo yo yo, I'm James.",
        "number": random.randint(0, 10),
    }
    return response


@api.route("/add", methods=["POST"])
def add_user():
    res = request.json
    print(res)
    user_ = res["user"]
    if user_ is None:
        user = ""
    else:
        data.append(user_)
        user = user_
    print(user)
    print(data)
    return user
