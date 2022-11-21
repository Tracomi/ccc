import requests, json

supported_coins = [
    "bitcoin", #1
    "ethereum", #2
    "litecoin", #3
    "bitcoin-cash", #4
    "dash", #5
    "monero", #6
    "dogecoin", #7
    "binance-coin", #8
    "usd-coin", #9
    "xrp", #10
    "solana", #11
    "tether" #12
]
def FetchCoins():
    list_of_coins = []
    req = requests.get("https://api.coincap.io/v2/assets/").json()
    for each in req["data"]:
        if each["id"] in supported_coins:
            list_of_coins.append(
                {
                    "id": each["id"],
                    "name": each["name"],
                    "price": each["priceUsd"]
                }
            )
            #list_of_coins[each["id"]] = [each["name"], each["priceUsd"]]
    return json.dumps(list_of_coins)