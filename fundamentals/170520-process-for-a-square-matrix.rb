# # ./fundamentals/170520-process-for-a-square-matrix.rb
# Given a certain square matrix A, of dimension n x n, that has negative and positive values (many of them are 0).
#
# We need the following values rounded to the closest integer:
#
# the average of all the positive numbers (more or equal to 0) that are in the principal diagonal and in the columns with odd index, avg1
# the absolute value of the average of all the negative numbers in the secondary diagonal and in the columns with even index, avg2
# Let's see the requirements in an example:
#
# A = [[ 1,   3, -4,   5, -2,  5,  1],
#     [  2,   0, -7,   6,  8,  8, 15],
#     [  4,   4, -2, -10,  7, -1,  7],
#     [ -1,   3,  1,   0, 11,  4, 21],
#     [ -7,   6, -4,  10,  5,  7,  6],
#     [ -5,   4,  3,  -5,  7,  8, 17],
#     [-11,   3,  4,  -8,  6, 16,  4]]
# The elements of the principal diagonal are:
#
# [1, 0, -2, 0, 5, 8, 4]
# The ones that are also in the "odd columns" (we consider the index starting with 0) are:
#
# [0, 0, 8] all positives
# So,
#
# avg1 =  [8 / 3] = 3
# The elements of the secondary diagonal are:
#
# [1, 8, 7, 0, -4, 4, -11]
# The ones that are in the even columns are:
#
# [1, 7, -4, -11]
# The negative ones are:
#
# [-4, -11]
# So,
#
# avg2 = [|-15 / 2|] = 8
# Create a function avg_diags()that may receive a square matrix of uncertain dimensions and may output both averages in an array in the following order: [avg1, avg2]
#
# If one of the diagonals have no elements fulfilling the requirements described above the function should return -1 So, if the function processes the matrix given above, it should output:
#
# [3, 8]
# Features of the random tests:
#
# number of tests = 110
# 5 ≤ matrix_length ≤ 1000
# -1000000 ≤ matrix[i, j] ≤ 1000000
def avg_diags(m)
  [avg_1(m), avg_2(m)]
end

private
def avg_1(matrix)
  diagonal = principal_diagonal(matrix)
  odds = extract_odds(diagonal)
  return -1 if odds.empty?
  average(odds)
end

def avg_2(matrix)
  diagonal = secondary_diagonal(matrix)
  evens = extract_evens(diagonal)
  return -1 if evens.empty?
  average(evens).abs
end

def principal_diagonal(matrix)
  (0...matrix.length).map {|num| matrix[num][num] }
end

def secondary_diagonal(matrix)
  (0...matrix.length).map { |num| matrix[matrix.length - 1 - num][num] }
end

def extract_odds(arr)
  arr.select.with_index { |val, idx| val if (idx % 2 != 0 && val >= 0) }
end

def extract_evens(arr)
  arr.select.with_index { |val, idx| val if (idx % 2 == 0 && val <= 0) }
end

def average(arr)
  (arr.reduce(:+) / arr.length.to_f).round
end

class AssertionError < RuntimeError
end
def assert &block
  raise AssertionError unless yield
end

test1 = [[ 1,   3, -4,   5, -2,  5,  1],
        [  2,   0, -7,   6,  8,  8, 15],
        [  4,   4, -2, -10,  7, -1,  7],
        [ -1,   3,  1,   0, 11,  4, 21],
        [ -7,   6, -4,  10,  5,  7,  6],
        [ -5,   4,  3,  -5,  7,  8, 17],
        [-11,   3,  4,  -8,  6, 16,  4]]

primary_diagonal = [1, 0, -2, 0, 5, 8, 4]
diagonal_with_negative_number = [1, -1, -2, 0, 5, 8, 4]

secondary_diagonal_result = [1, 8, 7, 0, -4, 4, -11].reverse

# assert { principal_diagonal(test1) == primary_diagonal }
# assert { extract_odds(primary_diagonal) == [0, 0, 8]}
# assert { extract_odds(diagonal_with_negative_number) == [0, 8]}
# assert { average_positive([0,0,8]) == 3}
# assert { secondary_diagonal(test1) == secondary_diagonal_result }
# assert { extract_evens(secondary_diagonal_result) == [-4, -11] }
# assert { average_negative([-4, -11]) == 8 }
# assert { avg_1(test1) == 3}
# assert { avg_2(test1) == 8 }
#
test2 = [[ 1,   3, -4,   5, -2,  5,  1],
        [  2,   0, -7,   6,  8,  8, 15],
        [  4,   4, -2, -10,  7, -1,  7],
        [ -1,   3,  1,   0, 11,  4, 21],
        [ -7,   6,  4,  10,  5,  7,  6],
        [ -5,   4,  3,  -5,  7, -8, 17],
        [ 11,   3,  4,  -8,  6, 16,  4]]

assert { avg_1(test2) == 0 }
assert { avg_2(test2) == -1 }
assert { avg_diags(test2) == [0, -1]}
