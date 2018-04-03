# Create a variable named days_of_the_week as an array of the following:

# Remove Sunday from the last postion and move it to the first position. Use array methods.

# Create a new array of the days of the week:
# The first inner array should be the weekdays
# The second inner array should be the weekend days.

# Remove either the weekdays or the weekends.

# Sort the remaining days alphabetically.

# -------------------------------------


days_of_the_week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

puts days_of_the_week.pop
puts days_of_the_week.unshift

days_of_the_week = [['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], ['Saturday', 'Sunday']]

puts days_of_the_week.shift.sort


