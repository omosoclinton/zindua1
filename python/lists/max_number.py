
def getMax(lists):
    max = 0
    for i in lists:
        if i > max:
            max = i
    return max

print(getMax([90,89,100]))