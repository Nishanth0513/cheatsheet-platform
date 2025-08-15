---
title: "C language"
description: "Quick reference for C language features and syntax"
category: "Programming Languages"
tags: ["C language"]
version: "C23"
---

## Basics
```c
#include <stdio.h>

int main() {
    int x = 10;
    char y[] = "Hello";

    if (x > 0) {
        printf("Positive");
    } else if (x == 0) {
        printf("Zero");
    } else {
        printf("Negative");
    }

    for (int i = 0; i < 5; i++) {
        printf("%d", i);
    }

    while (x > 0) {
        x--;
    }

    return 0;
}
```

## Functions
```c
int add(int a, int b) {
    return a + b;
}
```
