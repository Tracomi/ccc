import json
from flask import (
    Flask, 
    request,
    render_template
)


from crypto import FetchCoins, supported_coins
from utils import *

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/api/coins")
def payment():
    return FetchCoins()


@app.route("/api/checkcode")
def checkdiscount():
    code = request.args.get("code")
    if CodeExists(code):
        return JsonMe({
            "status": True,
            "discount": CodeNumber(code)
        })
    else:
        return JsonMe({
            "status": False,
            "message": "invalid code"
        })


@app.route("/api/removecode")
def removediscount():
    code = request.args.get("code")
    if CodeExists(code):
        RemoveCode(code)
        return JsonMe({
            "status": True
        })
    else:
        return JsonMe({
            "status": False,
            "message": "invalid code"
        })
        



@app.route("/api/addcode")
def adddiscount():
    code = request.args.get("code")
    procent = request.args.get("procent")
    if not CodeExists(code):
        AddCode(code, int(procent))
        return JsonMe({
            "status": True
        })
    else:
        return JsonMe({
            "status": False,
            "message": "code already exists"
        })
        



@app.route("/api/changeaddy")
def changeaddy():
    coin_id = request.args.get("coin_id")
    addy = request.args.get("addy")
    exists = CoinExists(coin_id)
    if exists:
        ChangeAddy(coin_id, addy)
        return JsonMe(
            {
                "status": True, 
            }
        )
    else:
        return JsonMe(
            {
                "status": False,
                "message": "invalid coin"
            }
        )

@app.route("/api/activatecoin")
def activatecoin():
    coin_id = request.args.get("coin_id")
    exists = CoinExists(coin_id)
    if exists:
        if CoinStatus(coin_id):
            return JsonMe(
            {
                "status": False,
                "message": "coin already enabled"
            }
        )
        ActivateCoin(coin_id)
        return JsonMe(
            {
                "status": True, 
            }
        )
    else:
        return JsonMe(
            {
                "status": False,
                "message": "invalid coin"
            }
        )

@app.route("/api/disablecoin")
def disablecoin():
    coin_id = request.args.get("coin_id")
    exists = CoinExists(coin_id)
    if exists:
        if not CoinStatus(coin_id):
            return JsonMe(
            {
                "status": False,
                "message": "coin already disabled"
            }
        )
        DisableCoin(coin_id)
        return JsonMe(
            {
                "status": True, 
            }
        )
    else:
        return JsonMe(
            {
                "status": False,
                "message": "invalid coin"
            }
        )
    

if __name__ == "__main__":
    app.run(
        host="localhost",
        port="80",
        debug=True
    )