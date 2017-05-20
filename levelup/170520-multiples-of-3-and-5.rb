# ./levelup/170520-multiples-of-3-and-5.rb

# If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
#
# Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
#
# Note: If the number is a multiple of both 3 and 5, only count it once.
def solution(number)
  multiples = []

 (1...number).each do |num|
   if (num % 3 == 0)
     multiples << num
   elsif (num % 5 ==0)
     multiples << num
   end
 end

 multiples.reduce(:+)
end

class AssertionError < RuntimeError
end
def assert &block
  raise AssertionError unless yield
end

assert { solution(10) == 23 }
