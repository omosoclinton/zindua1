'''
the nth Fibonacci number Fn = Fn-1 + Fn-2.
0, 1, 1, 2, 3, 5, 8, 13, 21
F1 = 1 + 0
Fibonnaci(n) = fibonacci(n-1) + fibonacci(n-2)

'''

def fibonacci(n):

    if n == 0 or n == 1:
        result = n
        return result
    else:
        result = fibonacci(n-1) + fibonacci(n-2)
        return result
        

print(fibonacci(3))

