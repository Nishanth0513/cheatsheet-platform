---
title: "React Hooks Cheatsheet"
description: "Essential React Hooks with examples and usage patterns"
category: "Frameworks"
tags: ["react", "hooks", "frontend", "javascript"]
version: "16.8+"
---

## useState

Manages state in functional components.

```jsx
import React, { useState } from 'react';

function Counter() {
  // Declare state variable with initial value
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
```

### Using functional updates

```jsx
// When new state depends on previous state
setCount(prevCount => prevCount + 1);
```

### Using with objects

```jsx
const [user, setUser] = useState({ name: '', email: '' });

// Update object state (merging must be done manually)
setUser(prevUser => ({ ...prevUser, name: 'John' }));
```

## useEffect

Performs side effects in functional components.

```jsx
import React, { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // This runs after render
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data');
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
    
    fetchData();
    
    // Optional cleanup function
    return () => {
      // This runs before component unmounts or before next effect
      console.log('Cleaning up');
    };
  }, []); // Empty dependency array means run once on mount
  
  if (loading) return <div>Loading...</div>;
  return <div>{JSON.stringify(data)}</div>;
}
```

### Dependency array behaviors

```jsx
// Runs on every render
useEffect(() => { ... });

// Runs only on mount (and unmount for cleanup)
useEffect(() => { ... }, []);

// Runs on mount and when any dependency changes
useEffect(() => { ... }, [prop1, prop2]);
```

## useContext

Accesses context values without nesting.

```jsx
import React, { useContext, createContext } from 'react';

// Create a context
const ThemeContext = createContext('light');

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <ThemedButton />
    </ThemeContext.Provider>
  );
}

function ThemedButton() {
  // Use the context
  const theme = useContext(ThemeContext);
  
  return (
    <button style={{ background: theme === 'dark' ? '#333' : '#fff', color: theme === 'dark' ? '#fff' : '#333' }}>
      I am styled based on theme context!
    </button>
  );
}
```

## useReducer

Manages complex state logic with a reducer function.

```jsx
import React, { useReducer } from 'react';

// Reducer function
function counterReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
}

function Counter() {
  // Initialize useReducer with reducer function and initial state
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  
  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  );
}
```

## useCallback

Memoizes callback functions to prevent unnecessary re-renders.

```jsx
import React, { useState, useCallback } from 'react';

function ParentComponent() {
  const [count, setCount] = useState(0);
  
  // This function is recreated only when dependencies change
  const handleClick = useCallback(() => {
    console.log(`Button clicked, count: ${count}`);
  }, [count]); // Recreate when count changes
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ChildComponent onClick={handleClick} />
    </div>
  );
}

// This component will only re-render when props change
const ChildComponent = React.memo(({ onClick }) => {
  console.log('ChildComponent rendered');
  return <button onClick={onClick}>Click me</button>;
});
```

## useMemo

Memoizes computed values to avoid expensive recalculations.

```jsx
import React, { useState, useMemo } from 'react';

function ExpensiveCalculation({ list, filter }) {
  const [count, setCount] = useState(0);
  
  // This calculation only runs when list or filter changes
  const filteredList = useMemo(() => {
    console.log('Filtering list...');
    return list.filter(item => item.includes(filter));
  }, [list, filter]);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ul>
        {filteredList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
```

## useRef

Creates a mutable reference that persists across renders.

```jsx
import React, { useRef, useEffect } from 'react';

function TextInputWithFocus() {
  // Create a ref
  const inputRef = useRef(null);
  
  // Focus the input on mount
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  
  return <input ref={inputRef} type="text" />;
}
```

### Using for instance variables

```jsx
function Timer() {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);
  
  const startTimer = () => {
    if (intervalRef.current !== null) return;
    intervalRef.current = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);
  };
  
  const stopTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };
  
  // Clean up on unmount
  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}
```

## Custom Hooks

Extract reusable logic into custom hooks.

```jsx
import { useState, useEffect } from 'react';

// Custom hook for fetching data
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
        setError(null);
      } catch (e) {
        setError(e.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [url]);
  
  return { data, loading, error };
}

// Using the custom hook
function UserProfile({ userId }) {
  const { data, loading, error } = useFetch(`https://api.example.com/users/${userId}`);
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data) return null;
  
  return (
    <div>
      <h1>{data.name}</h1>
      <p>Email: {data.email}</p>
    </div>
  );
}
```