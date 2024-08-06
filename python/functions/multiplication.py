'''
x  1   2   3  4   5   6
1  1   2   3  4   5    6 
2  2   4   6  8   10  12 
3  3   6   9  12  15  18
4  4   8  12  16  20  24
5  5  10  15  20  25  30
6  5  10  18  24  24  36

'''

num = int(input("Enter a number between 1 and 10: "))


for i in range(1, num+1):
    print(i, end=' ')
    for j in range(2, num+1):
        print(j*i, end='')