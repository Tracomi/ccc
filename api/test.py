from flask_restful import Api, Resource, reqparse
import requests;
from crypto import FetchCoins
from utils import *
from flask import jsonify


class test(Resource):
  def get(self):
        response_body = {
        "name": "Nagato",
        "about" :"Hello! I'm a full stack developer that loves python and javascript"
    }
        return response_body

 