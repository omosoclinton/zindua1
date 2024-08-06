
# def getSecondLargest(lists):
#     new_list = []
#     max = 0
#     for i in lists:
#         if i > max:
#             max = i
#             new_list.append(max)
#     return new_list

# print(getSecondLargest([87,90,89,100]))

def secondLarge(numbers):
    max = 0
    second_max = 0
    for n in numbers:
        if n> max:
            prev_max = max
            max = n
            second_max = prev_max
        elif n>second_max and n<max:
            second_max = n
    return second_max

print(secondLarge([87,90,89,100,91]))
