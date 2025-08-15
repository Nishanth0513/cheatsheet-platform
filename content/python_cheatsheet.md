---
title: "Python Basics"
description: "Essential Python syntax and built-in functions"
category: "Programming Languages"
tags: ["python", "basics", "syntax"]
version: "3.x"
---

## Basics
```python
# Variables
x = 10
y = "Hello"

# Data Types
int_var = 5
float_var = 5.5
str_var = "Python"
list_var = [1, 2, 3]
tuple_var = (1, 2, 3)
dict_var = {"a": 1, "b": 2}

# Conditional Statements
if x > 0:
    print("Positive")
elif x == 0:
    print("Zero")
else:
    print("Negative")

# Loops
for i in range(5):
    print(i)

while x > 0:
    x -= 1

# Functions
def add(a, b):
    return a + b
```

## File Handling
```python
with open("file.txt", "r") as f:
    data = f.read()

with open("file.txt", "w") as f:
    f.write("Hello")
```

## Classes
```python
class Person:
    def __init__(self, name):
        self.name = name
    
    def greet(self):
        print(f"Hello, {self.name}")
```

## Modules
```python
import math
print(math.sqrt(16))
```

