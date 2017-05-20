# ./fundamentals/170518-did-i-finish-my-sudoku.rb
# Write a function done_or_not passing a board (list[list_lines]) as parameter. If the board is valid return 'Finished!', otherwise return 'Try again!'
#
# Sudoku rules:
#
# Complete the Sudoku puzzle so that each and every row, column, and region contains the numbers one through nine only once.
#
# Test.assert_equals(done_or_not([[5, 3, 4, 6, 7, 8, 9, 1, 2],
#                          [6, 7, 2, 1, 9, 5, 3, 4, 8],
#                          [1, 9, 8, 3, 4, 2, 5, 6, 7],
#                          [8, 5, 9, 7, 6, 1, 4, 2, 3],
#                          [4, 2, 6, 8, 5, 3, 7, 9, 1],
#                          [7, 1, 3, 9, 2, 4, 8, 5, 6],
#                          [9, 6, 1, 5, 3, 7, 2, 8, 4],
#                          [2, 8, 7, 4, 1, 9, 6, 3, 5],
#                          [3, 4, 5, 2, 8, 6, 1, 7, 9]]), 'Finished!')
#
# Test.assert_equals(done_or_not([[5, 3, 4, 6, 7, 8, 9, 1, 2],
#                          [6, 7, 2, 1, 9, 0, 3, 4, 9],
#                          [1, 0, 0, 3, 4, 2, 5, 6, 0],
#                          [8, 5, 9, 7, 6, 1, 0, 2, 0],
#                          [4, 2, 6, 8, 5, 3, 7, 9, 1],
#                          [7, 1, 3, 9, 2, 4, 8, 5, 6],
#                          [9, 0, 1, 5, 3, 7, 2, 1, 4],
#                          [2, 8, 7, 4, 1, 9, 6, 3, 5],
#                          [3, 0, 0, 4, 8, 1, 1, 7, 9]]), 'Try again!')

def done_or_not(board)
  if check_horizontal(board) && check_vertical(board) && check_square(board)
    'Finished!'
  else
    'Try again!'
  end
end

private def check_horizontal(board)
  board.all? {|line| check_line(line)}
end

private def check_vertical(board)
  rotated = rotate_board(board)
  check_horizontal(rotated)
end

private def check_line(line)
  return false if line.include?(0)
  line.sort == (1..9).to_a
end

private def rotate_board(board)
  rotated = Array.new(9){Array.new()}

  board.each_with_index do |line, index|
    line.each_with_index do |val, idx|
      rotated[idx] << val
    end
  end
  rotated
end

private def check_square(board)
  truths = []
  board.each_slice(3) do |slice|
    squared = Array.new(3){Array.new}

    slice.to_a.each do |line|
      counter = 0
      line.each_slice(3) do |slice|
        squared[counter] += slice.to_a
        counter += 1
      end
    end
    truths << check_horizontal(squared)
  end
  truths.all?{ |square| square }
end

test1 = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
]

test2 = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 0, 3, 4, 9],
  [1, 0, 0, 3, 4, 2, 5, 6, 0],
  [8, 5, 9, 7, 6, 1, 0, 2, 0],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 0, 1, 5, 3, 7, 2, 1, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 0, 0, 4, 8, 1, 1, 7, 9]
]

test3 = [
  [1, 3, 2, 5, 7, 9, 4, 6, 8],
  [4, 9, 8, 2, 6, 1, 3, 7, 5],
  [7, 5, 6, 3, 8, 4, 2, 1, 9],
  [6, 4, 3, 1, 5, 8, 7, 9, 2],
  [5, 2, 1, 7, 9, 3, 8, 4, 6],
  [9, 8, 7, 4, 2, 6, 5, 3, 1],
  [2, 1, 4, 9, 3, 5, 6, 8, 7],
  [3, 6, 5, 8, 1, 7, 9, 2, 4],
  [8, 7, 9, 6, 4, 2, 1, 3, 5]
]

class AssertionError < RuntimeError
end
def assert &block
  raise AssertionError unless yield
end

assert { done_or_not(test1) == 'Finished!' }
assert { done_or_not(test2) == 'Try again!' }
assert { done_or_not(test3) == 'Try again!' }
