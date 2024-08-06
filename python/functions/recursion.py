def getSum(n):
    if n == 1:
        result = 1
    else:
        result = n * getSum(n-1)
    return result

print(getSum(5))