import json


def CodeExists(name: str):
    with open("promocodes.json", "r") as m:
        codes = json.load(m)
    return name in codes

def CodeNumber(name: str):
    with open("promocodes.json", "r") as m:
        codes = json.load(m)
    return codes[name]

def RemoveCode(name: str):
    with open("promocodes.json", "r") as m:
        codes = json.load(m)
    del codes[name]
    with open("promocodes.json", "w") as m:
        json.dump(codes, m)

def AddCode(name: str, procent: int):
    with open("promocodes.json", "r") as m:
        codes = json.load(m)
    codes[name] = procent
    with open("promocodes.json", "w") as m:
        json.dump(codes, m)

def CoinExists(name: str):
    with open("coins.json", "r") as m:
        coins = json.load(m)
    return name in coins

def CoinStatus(name: str):
    with open("coins.json", "r") as m:
        coins = json.load(m)
    return coins[name]

def ActivateCoin(name: str):
    with open("coins.json", "r") as m:
        coins = json.load(m)
    coins[name] = True
    with open("coins.json", "w") as m:
        json.dump(coins, m)

def DisableCoin(name: str):
    with open("coins.json", "r") as m:
        coins = json.load(m)
    coins[name] = False
    with open("coins.json", "w") as m:
        json.dump(coins, m)

def ChangeAddy(name: str, addy: str):
    with open("settings.json", "r") as m:
        addies = json.load(m)
    addies["addy_"+name] = addy
    with open("settings.json", "w") as m:
        json.dump(addies, m)


def JsonMe(text: str):
    return json.dumps(text)
    