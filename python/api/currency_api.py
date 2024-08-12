import requests

response = requests.get('https://fcsapi.com/api-v3/forex/latest?symbol=all_forex&access_key=MKCTH87SQiyPvnt983YgKZK')
print(response.status_code)
# if response.status_code == 200:
data = response.json()

rates = data['response']


user_input = input('Enter a currency symbol to get variation with other currencies: ')
symbol_input = user_input.upper()

symbol_rates = [rate for rate in rates if symbol_input in rate['s'] ]

symbol_lower = symbol_input.lower()
file = open(symbol_lower+'_exchange_rates.txt', 'w')
file.write('*** '+symbol_input+' Currency Pair rates ***\n\n\n')
for rate in symbol_rates:
    rate_symbol = rate['s'].split('/') # returns a list of the currency pairs
    symbol_display= rate_symbol[0] # store 0 to symbol display
    if symbol_input == symbol_display: # we only want the ones where the user input currency is on index 0
        file.write(rate_symbol[1] + ' - '+ rate['c']+'\n') # This just writes to file
file.close()

