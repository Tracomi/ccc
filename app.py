from flask import Flask, send_from_directory
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS #comment this on deployment
from api.HelloApiHandler import HelloApiHandler
from api.CoinsApiHandler import CoinsApiHandler
from api.RatesApiHandler import RatesApiHandler
from api.test import test

app = Flask(__name__, static_url_path='', static_folder='frontend/CryptoExchange/build')
CORS(app) #comment this on deployment
api = Api(app)

@app.route("/", defaults={'path':''})
def serve(path):
    return send_from_directory(app.static_folder,'index.html')

api.add_resource(HelloApiHandler, '/api/prices')
api.add_resource(CoinsApiHandler, '/api/coins')
api.add_resource(RatesApiHandler, '/api/rates')
api.add_resource(test, '/api/test')
