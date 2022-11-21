from flask_restful import Api, Resource, reqparse
import requests;
from crypto import FetchCoins
from utils import *
from flask import jsonify


class CoinsApiHandler(Resource):
  def get(self):
    return JsonMe(FetchCoins())

 