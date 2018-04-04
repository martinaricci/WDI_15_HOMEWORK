### Arrays

# Starting with the following array...

planeteers = ["Earth", "Wind", "Captain Planet", "Fire", "Water"]


# # Access the second value in `planeteers`.

# # ```rb
puts planeteers[1]
# # ```

# # Add "Heart" to the end of `planeteers`.

# ```rb
puts planeteers.push('Heart')
# ```

# # Remove "Captain Planet" from the array (without using a method).

# ```rb
puts planeteers.delete('Captain Planet')
# ```

# # Combine `planeteers` with `rangers = ["Red", "Blue", "Pink", "Yellow", "Black"]` and save the result in a variable called `heroes`.

# ```rb
rangers = ["Red", "Blue", "Pink", "Yellow", "Black"]
heroes = planeteers + rangers
# ```

# Alphabetize the contents of `heroes` using a method. [The Ruby documentation might help](http://ruby-doc.org/core-2.2.0/Array.html).

# ```rb
puts heroes.sort
# ```

# # Randomize the contents of `heroes` using a method. [The Ruby documentation might help](http://ruby-doc.org/core-2.2.0/Array.html).

# ```rb
puts heroes.sample
# ```

# #### Bonus

# # Select a random element from `heroes` using a method. [The Ruby documentation might help](http://ruby-doc.org/core-2.2.0/Array.html).

# ```rb
puts heroes.sample
# ```

# # Select all elements in `heroes` that begin with "B" using a method. [The Ruby documentation might help](http://ruby-doc.org/core-2.2.0/Array.html).

# ```rb

# ```

# ### Hashes

# # Initialize a hash called `ninja_turtle` with the properties `name`, `weapon` and `radical`. They should have values of "Michelangelo", "Nunchuks" and `true` respectively.

# ```rb
ninja_turtle = {"name" => "Michelangelo", "weapon" => "Nunchuks", "radical" => true}
# ```

# # Add a key `age` to `ninja_turtle`. Set it to whatever numerical value you'd like.

# ```rb
puts ninja_turtle["age"] = 23
# ```

# # Remove the `radical` key-value pair from `ninja_turtle`.

# ```rb
puts ninja_turtle.delete("radical")
# ```

# # Add a key `pizza_toppings` to `ninja_turtle`. Set it to an array of strings (e.g., `["cheese", "pepperoni", "peppers"]`).

# ```rb
ninja_turtle["pizza_topping"] = ["cheese", "pepperoni", "peppers"]
# ```

# # Access the first element of `pizza_toppings`.

# ```rb
ninja_turtle["pizza_topping"].first()
# ```

# # Produce an array containing all of `ninja_turtle`'s keys using a method. [The Ruby documentation might help](http://ruby-doc.org/core-1.9.3/Hash.html).

# ```rb
array = ninja_turtle.keys
# ```

# #### Bonus

# # Print out each key-value pair in the following format - "KEY's is equal to VALUE" -- using a method. [The Ruby documentation might help](http://ruby-doc.org/core-1.9.3/Hash.html).

# ```rb
# # Your answer here
# ```