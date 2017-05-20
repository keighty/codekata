def longest_consec(strarr, k)
  if strarr.length == 0
    return ""
  end
  
    length_arr = strarr.map { |str| str.length  }
    final_str = ""
    k.times do
      max_size = length_arr.max
      max_index = length_arr.index(max_size)
      final_str += strarr[max_index]
      length_arr[max_index] = 0
    end
    final_str
end

tests = [
  [["zone", "abigail", "theta", "form", "libe", "zas"], 2, "expecting abigailtheta"]
]

# def testing(actual, expected)
#     Test.assert_equals(actual, expected)
# end

# Test.describe("longest_consec") do
#     Test.it("Basic tests") do
#         testing(longest_consec(["zone", "abigail", "theta", "form", "libe", "zas"], 2), "abigailtheta")
#         testing(longest_consec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1), "oocccffuucccjjjkkkjyyyeehh")
#         testing(longest_consec([], 3), "")
#         testing(longest_consec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2), "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck")
#         testing(longest_consec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2), "wlwsasphmxxowiaxujylentrklctozmymu")
#         testing(longest_consec(["zone", "abigail", "theta", "form", "libe", "zas"], -2), "")
#         testing(longest_consec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3), "ixoyx3452zzzzzzzzzzzz")
#         testing(longest_consec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15), "")
#         testing(longest_consec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0), "")
#     end
# end

tests.each do |test|
  result = longest_consec(test[0], test[1])
  puts result
  puts test[2]
  puts result == test[2]
end
