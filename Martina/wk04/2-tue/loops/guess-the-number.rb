# You are to generate a basic "guess my number" game. The computer will pick a random number between 0 and 10. The user will guess the number until they guess correctly.
# Specification:
# The user should be asked to guess a number
# If the user's guess is correct, the user should see a congratulatory message
# # If the user's guess is not correct, the user should be asked to guess the number again

number = (Math.floor(Math.random() * 10))

puts('welcome to the guessing game')
print('guess a number: ')
guess = gets.chomp.to_i

while guess != number
    print ('nooo, that\'s the wrong number, try again: ')
    guess gets.chomp.to_i
end

puts('correct!')
