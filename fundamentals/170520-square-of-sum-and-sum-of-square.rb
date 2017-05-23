# ./fundamentals/170520-square-of-sum-and-sum-of-square.rb

# Find the difference between the square of the sum and the sum of the squares of the first N natural numbers.
#
# The square of the sum of the first ten natural numbers is
# (1 + 2 + ... + 10)² = 55² = 3025.
#
# The sum of the squares of the first ten natural numbers is
# 1² + 2² + ... + 10² = 385.
#
# Hence the difference between the square of the sum of the first
# ten natural numbers and the sum of the squares of the first ten
# natural numbers is 3025 - 385 = 2640.

# nat·u·ral num·bers
# noun
# noun: natural number
# the positive integers (whole numbers) 1, 2, 3, etc., and sometimes zero as well.

def difference(number)
  square_of_sums(number) - sum_of_squares(number)
end

private def square_of_sums(number)
  sum = (1..number).reduce(:+)
  sum * sum
end

private def sum_of_squares(number)
  (1..number).reduce { |a, num| a += (num * num) }
end

class AssertionError < RuntimeError
end
def assert &block
  raise AssertionError unless yield
end

assert {sum_of_squares(10) == 385}
assert {square_of_sums(10) == 3025}
assert { difference(10) == 2640 }
