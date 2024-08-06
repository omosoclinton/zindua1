'''
Write a Python program to check if each number is prime in a given list of numbers. 
Return True if all numbers are prime otherwise False.
Sample Data:
([0, 3, 4, 7, 9]) -> False
([3, 5, 7, 13]) -> True
([1, 5, 3]) -> False

'''
def prime_checker(number):
        result = False    
        if number < 2:
            return result
        i = 2
        while i*i <= number:
            if number % i == 0:
                return result
            i= i+1
        return True

def prime_list(list):
     for number in list:
          if prime_checker(number) == False:
               return False
          else:
               return True

print(prime_checker(12))

print(prime_list([0, 3, 4, 7, 9])) 
print(prime_list([3, 5, 7, 13, 12]))
print(prime_list([1, 5, 3]))
        