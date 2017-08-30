# ./levelup/170523-pig-latin.rb
# Move the first letter of each word to the end of it, then add 'ay' to the end of the word.
#
# pig_it('Pig latin is cool') # igPay atinlay siay oolcay

def pig_it(text)
  text.split(' ').map{|word| latin_it(word) }.join(' ')
end

def latin_it(word)
  return word unless word.match(/\w/)
  arr = word.split('')
  first_char = arr.shift
  arr << first_char << 'ay'
  arr.join
end

class AssertionError < RuntimeError
end
def assert &block
  raise AssertionError unless yield
end

assert { latin_it("Pig") == 'igPay' }
assert { pig_it("Pig latin") == 'igPay atinlay' }
assert { pig_it("Quis custodiet ipsos custodes ?") == "uisQay ustodietcay psosiay ustodescay ?"}
