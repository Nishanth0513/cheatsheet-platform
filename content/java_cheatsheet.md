---
title: "Java Cheatsheet"
description: "Quick reference for java features and syntax"
category: "Programming Languages"
tags: ["java"]
version: "JDK21"
---


## Basics
```java
// Variables
int x = 10;
String y = "Hello";

// Conditional Statements
if (x > 0) {
    System.out.println("Positive");
} else if (x == 0) {
    System.out.println("Zero");
} else {
    System.out.println("Negative");
}

// Loops
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}

while (x > 0) {
    x--;
}

// Methods
public static int add(int a, int b) {
    return a + b;
}
```

## Classes
```java
class Person {
    String name;
    
    Person(String name) {
        this.name = name;
    }
    
    void greet() {
        System.out.println("Hello, " + name);
    }
}
```

## File Handling
```java
import java.io.File;
import java.io.FileWriter;
import java.util.Scanner;

File file = new File("file.txt");
Scanner reader = new Scanner(file);
while (reader.hasNextLine()) {
    System.out.println(reader.nextLine());
}
reader.close();

FileWriter writer = new FileWriter("file.txt");
writer.write("Hello");
writer.close();
```
