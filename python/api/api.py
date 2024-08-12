import requests

response = requests.get('https://fcsapi.com/api-v3/forex/latest?symbol=all_forex&access_key=YD2xIqTMGBwEcfivAb7J')
#if response.status_code == 200:
data = response.json()

rates = data['response']
kenyan_rates = [r for r in rates if 'KES' in r['s'] ]
print(kenyan_rates)