from flask_restful import Api, Resource, reqparse
import requests;


class HelloApiHandler(Resource):
  def get(self):
    reqBtc = requests.get("https://api.coincap.io/v2/assets/bitcoin").json()["data"]["priceUsd"]
    btcPrice = (int(float(reqBtc)))
    reqEth = requests.get("https://api.coincap.io/v2/assets/ethereum").json()["data"]["priceUsd"]
    ethPrice = (int(float(reqEth)))
    reqLtc = requests.get("https://api.coincap.io/v2/assets/litecoin").json()["data"]["priceUsd"]
    ltcPrice = (int(float(reqLtc)))
    return [btcPrice, ethPrice, ltcPrice]
 