from urllib import response
from flask import Flask, request
import random

api = Flask(__name__)


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
    user = request.json["user"]
    print(user)
    return user
