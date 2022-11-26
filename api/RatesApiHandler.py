from flask_restful import Api, Resource, reqparse
import requests;
from crypto import FetchCoinsRate
from utils import *
from flask import jsonify, request


class RatesApiHandler(Resource):
  def get(self):
    amount = request.args.get("amount")
    fromCurrency = request.args.get("fromCurrency")
    toCurrency = request.args.get("toCurrency")
    exists = CoinExists(fromCurrency)
    exists2 = CoinExists(toCurrency)
    if exists and exists2:
        try:
            parsed_amount = float(amount)
            coins = FetchCoinsRate()
            return jsonify(
            {
                "amount": float((parsed_amount*float(coins[fromCurrency][1])) / float(coins[toCurrency][1]))
            })
        except:
            return jsonify(
            {
                "status": False,
                "message": "invalid amount"
            }
        )
    else:
        return jsonify(
            {
                "status": False,
                "message": "invalid coin/s"
            }
        )

 