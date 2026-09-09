# Modern React.js Complete Learning Guide 2024-2025

> **Master React the Modern Way** - From Zero to Expert

---

## 📚 Table of Contents

1. [Introduction & Setup](#introduction--setup)
2. [React Fundamentals](#react-fundamentals)
3. [Components & JSX](#components--jsx)
4. [Props & State](#props--state)
5. [Hooks - The Modern Way](#hooks---the-modern-way)
6. [Advanced Hooks Patterns](#advanced-hooks-patterns)
7. [State Management](#state-management)
8. [Routing](#routing)
9. [Asynchronous Operations](#asynchronous-operations)
10. [Performance Optimization](#performance-optimization)
11. [Best Practices](#best-practices)
12. [Project Structure](#project-structure)
13. [Real-World Patterns](#real-world-patterns)
14. [Testing](#testing)
15. [Deployment](#deployment)

---

## 🚀 Introduction & Setup

### What is React?

React is a **declarative, component-based JavaScript library** for building user interfaces efficiently with reusable components and automatic UI updates.

### Prerequisites

- JavaScript ES6+ knowledge
- Node.js (v14+) and npm/yarn installed
- HTML & CSS fundamentals
- Command line basics

### Modern Setup Methods

#### Method 1: Vite (RECOMMENDED - Fastest)
```bash
npm create vite@latest my-react-app -- --template react
cd my-react-app
npm install
npm run dev
```

#### Method 2: Create React App (Traditional)
```bash
npx create-react-app my-react-app
cd my-react-app
npm start
```

#### Method 3: Next.js (Full-Stack)
```bash
npx create-next-app@latest my-app
cd my-app
npm run dev
```

### Project Structure (Modern)
```
my-react-app/
├── src/
│   ├── components/
│   │   ├── common/
│   │   ├── features/
│   │   └── layouts/
│   ├── hooks/
│   ├── context/
│   ├── services/
│   ├── utils/
│   ├── pages/
│   ├── App.jsx
│   └── main.jsx
├── public/
├── package.json
└── vite.config.js
```

---

## 💡 React Fundamentals

### The React Philosophy

1. **Declarative** - Describe what UI should look like
2. **Component-Based** - Build encapsulated components
3. **Learn Once, Write Anywhere** - Use same principles everywhere

### Virtual DOM & Reconciliation

```
User Action → State Change → Virtual DOM Update → Diff → Real DOM Update → UI Renders
```

### Key Concepts

| Concept | Meaning |
|---------|---------|
| **JSX** | Syntax extension for JavaScript that looks like HTML |
| **Component** | Reusable piece of UI logic |
| **Props** | Read-only data passed from parent to child |
| **State** | Mutable data that triggers re-renders when changed |
| **Render** | Process of converting components to DOM elements |

### First React App
```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return <h1>Hello, React World! 🚀</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

---

## 🏗️ Components & JSX

### Understanding JSX

JSX is syntactic sugar that compiles to JavaScript:

```jsx
// JSX
const element = <h1>Hello {name}</h1>;

// Compiles to JavaScript
const element = React.createElement('h1', null, `Hello ${name}`);
```

### Functional Components (Modern Standard)

```jsx
// Basic Functional Component
function Welcome() {
  return <h1>Welcome to React!</h1>;
}

// Arrow Function Component
const Welcome = () => {
  return <h1>Welcome to React!</h1>;
};

// Shorthand
const Welcome = () => <h1>Welcome to React!</h1>;
```

### JSX Rules & Best Practices

```jsx
// ✅ CORRECT
function Component() {
  const user = { name: 'John', age: 30 };
  
  return (
    <div>
      <h1>{user.name}</h1>
      <p>Age: {user.age}</p>
      
      {/* JavaScript expressions inside {} */}
      <p>2 + 2 = {2 + 2}</p>
      
      {/* Conditional rendering */}
      {user.age > 18 ? <p>Adult</p> : <p>Minor</p>}
      
      {/* Lists - always use key */}
      <ul>
        {[1, 2, 3].map(num => (
          <li key={num}>{num}</li>
        ))}
      </ul>
    </div>
  );
}

// ❌ WRONG
function BadComponent() {
  return (
    <>
      {/* Don't use array index as key */}
      {items.map((item, index) => <li key={index}>{item}</li>)}
      
      {/* Can't use if statements directly */}
      {if (condition) <div>Text</div>}
      
      {/* Don't forget closing tags */}
      <input>
      <br>
    </>
  );
}
```

### Component Composition

```jsx
// Small, reusable components
const Button = ({ text, onClick }) => (
  <button onClick={onClick}>{text}</button>
);

const Card = ({ title, children }) => (
  <div className="card">
    <h2>{title}</h2>
    {children}
  </div>
);

// Composing components
function App() {
  return (
    <Card title="My Card">
      <p>Card content here</p>
      <Button text="Click Me" onClick={() => alert('Clicked!')} />
    </Card>
  );
}
```

---

## 🎯 Props & State

### Props - Component Communication

Props are how parent components pass data to child components.

```jsx
// Parent Component
function Parent() {
  return (
    <Child 
      name="John" 
      age={30} 
      isActive={true}
      items={['a', 'b', 'c']}
      onGreet={() => console.log('Greeted!')}
    />
  );
}

// Child Component
function Child({ name, age, isActive, items, onGreet }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>Age: {age}</p>
      <p>Active: {isActive ? 'Yes' : 'No'}</p>
      <button onClick={onGreet}>Greet</button>
    </div>
  );
}

// Destructuring in function parameters
const Child = ({ name, age, ...rest }) => {
  return <div>{name}, {age}</div>;
};
```

### State - Component Data

```jsx
import { useState } from 'react';

function Counter() {
  // Syntax: const [state, setState] = useState(initialValue)
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [user, setUser] = useState({ name: 'John', age: 30 });

  // Updating state
  const increment = () => {
    setCount(count + 1);
    // OR use function form for previous state
    setCount(prev => prev + 1);
  };

  // Updating object state
  const updateUser = () => {
    setUser(prev => ({
      ...prev,
      age: prev.age + 1
    }));
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={updateUser}>Update User Age</button>
    </div>
  );
}
```

### Props Drilling Problem & Solution

```jsx
// ❌ PROBLEM - Props Drilling
function App() {
  const [theme, setTheme] = useState('light');
  return <Page theme={theme} />;
}

function Page({ theme }) {
  return <Component theme={theme} />;
}

function Component({ theme }) {
  return <Button theme={theme} />;
}

function Button({ theme }) {
  return <button style={{ background: theme }}>Click</button>;
}

// ✅ SOLUTION - Using Context (See Context section)
```

---

## 🎣 Hooks - The Modern Way

### What Are Hooks?

Hooks are functions that let you "hook into" React features from functional components. They're the **modern standard** (no more class components!).

### 1. useState Hook

```jsx
import { useState } from 'react';

function FormComponent() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log({ name, email });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        type="email"
      />
      <button type="submit">Submit</button>
      {submitted && <p>Form submitted!</p>}
    </form>
  );
}
```

### 2. useEffect Hook

```jsx
import { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userId, setUserId] = useState(1);

  // Run once on mount
  useEffect(() => {
    console.log('Component mounted');
    return () => console.log('Component unmounted');
  }, []);

  // Run when userId changes
  useEffect(() => {
    setLoading(true);
    
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setError(null);
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [userId]); // Dependency array

  return (
    <div>
      <button onClick={() => setUserId(prev => prev + 1)}>Next User</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && <p>{data.name}</p>}
    </div>
  );
}

// DEPENDENCY ARRAY EXPLAINED:
// 1. [] - Run once on mount
// 2. [dependency1, dependency2] - Run when dependencies change
// 3. No array - Run after every render (avoid!)
```

### 3. useContext Hook

```jsx
import { createContext, useContext, useState } from 'react';

// Create context
const ThemeContext = createContext();

// Context Provider Component
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook for using context
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}

// Using context in components
function App() {
  return (
    <ThemeProvider>
      <Header />
      <Main />
    </ThemeProvider>
  );
}

function Header() {
  const { theme, toggleTheme } = useTheme();
  return (
    <header style={{ background: theme === 'light' ? '#fff' : '#333' }}>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </header>
  );
}
```

### 4. useReducer Hook

```jsx
import { useReducer } from 'react';

// Reducer function
const initialState = { count: 0, step: 1 };

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + state.step };
    case 'DECREMENT':
      return { ...state, count: state.count - state.step };
    case 'SET_STEP':
      return { ...state, step: action.payload };
    case 'RESET':
      return initialState;
    default:
      throw new Error('Unknown action type');
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <p>Step: {state.step}</p>
      
      <input 
        type="number" 
        value={state.step}
        onChange={(e) => dispatch({ 
          type: 'SET_STEP', 
          payload: Number(e.target.value) 
        })}
      />
      
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  );
}
```

### 5. useCallback Hook

```jsx
import { useState, useCallback, memo } from 'react';

// Memoized child component
const Button = memo(({ onClick, label }) => {
  console.log(`Button "${label}" rendered`);
  return <button onClick={onClick}>{label}</button>;
});

function Parent() {
  const [count, setCount] = useState(0);

  // Without useCallback - function created every render
  // const handleClick = () => { setCount(prev => prev + 1); };

  // With useCallback - function cached
  const handleClick = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <Button onClick={handleClick} label="Increment" />
    </div>
  );
}
```

### 6. useMemo Hook

```jsx
import { useMemo, useState } from 'react';

function ExpensiveComponent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('John');

  // Expensive computation
  const expensiveValue = useMemo(() => {
    console.log('Computing expensive value...');
    let sum = 0;
    for (let i = 0; i < 1000000000; i++) sum += i;
    return sum;
  }, [count]); // Only recompute when count changes

  return (
    <div>
      <p>Count: {count}</p>
      <p>Name: {name}</p>
      <p>Expensive Value: {expensiveValue}</p>
      <button onClick={() => setCount(prev => prev + 1)}>Increment Count</button>
      <button onClick={() => setName(prev => prev + '!')}>Update Name</button>
    </div>
  );
}
```

### 7. useRef Hook

```jsx
import { useRef, useEffect } from 'react';

function TextInput() {
  const inputRef = useRef(null);
  const focusCount = useRef(0);

  useEffect(() => {
    // Focus input on mount
    inputRef.current?.focus();
  }, []);

  const handleClick = () => {
    focusCount.current += 1;
    console.log(`Focused ${focusCount.current} times`);
    inputRef.current?.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}
```

---

## 🔧 Advanced Hooks Patterns

### Custom Hooks

```jsx
// Custom hook for form handling
function useForm(initialValues, onSubmit) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
  };

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue: (name, value) => 
      setValues(prev => ({ ...prev, [name]: value }))
  };
}

// Usage
function LoginForm() {
  const form = useForm(
    { email: '', password: '' },
    (values) => console.log('Submit:', values)
  );

  return (
    <form onSubmit={form.handleSubmit}>
      <input
        type="email"
        name="email"
        value={form.values.email}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
      />
      <input
        type="password"
        name="password"
        value={form.values.password}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
      />
      <button type="submit">Login</button>
    </form>
  );
}
```

### Custom Hook - useFetch

```jsx
import { useState, useEffect } from 'react';

function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url, {
          signal: abortController.signal,
          ...options
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result = await response.json();
        setData(result);
        setError(null);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => abortController.abort();
  }, [url, options]);

  return { data, loading, error };
}

// Usage
function UsersList() {
  const { data: users, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/users'
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {users?.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

### Custom Hook - useLocalStorage

```jsx
import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (err) {
      console.error(err);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (err) {
      console.error(err);
    }
  };

  return [storedValue, setValue];
}

// Usage
function App() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  return (
    <div>
      <button onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}>
        Current Theme: {theme}
      </button>
    </div>
  );
}
```

---

## 🗂️ State Management

### 1. Context API (Built-in)

```jsx
import { createContext, useContext, useState } from 'react';

// User Context
const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (email, password) => {
    setIsLoading(true);
    try {
      // API call here
      const userData = { id: 1, email, name: 'John' };
      setUser(userData);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}

// App.jsx
function App() {
  return (
    <AuthProvider>
      <Main />
    </AuthProvider>
  );
}

// In any component
function UserProfile() {
  const { user, logout } = useAuth();

  if (!user) return <p>Not logged in</p>;

  return (
    <div>
      <h1>Welcome, {user.name}</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
```

### 2. Redux (for Complex State)

```jsx
// Redux setup
import { createSlice, configureStore } from '@reduxjs/toolkit';
import { Provider, useDispatch, useSelector } from 'react-redux';

// Slice (combines reducer + actions)
const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1; },
    decrement: (state) => { state.value -= 1; },
    incrementByAmount: (state, action) => { state.value += action.payload; }
  }
});

// Store
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  }
});

// Component
function Counter() {
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.value);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(counterSlice.actions.increment())}>+</button>
      <button onClick={() => dispatch(counterSlice.actions.decrement())}>-</button>
      <button onClick={() => dispatch(counterSlice.actions.incrementByAmount(5))}>
        Add 5
      </button>
    </div>
  );
}

// App setup
function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
```

### 3. Zustand (Simple & Modern)

```jsx
import { create } from 'zustand';

// Store
const useStore = create((set) => ({
  count: 0,
  name: 'John',
  
  increment: () => set(state => ({ count: state.count + 1 })),
  decrement: () => set(state => ({ count: state.count - 1 })),
  setName: (name) => set({ name }),
  reset: () => set({ count: 0, name: 'John' })
}));

// Component
function App() {
  const count = useStore(state => state.count);
  const name = useStore(state => state.name);
  const increment = useStore(state => state.increment);
  const setName = useStore(state => state.setName);

  return (
    <div>
      <p>{name}: {count}</p>
      <button onClick={increment}>Increment</button>
      <input onChange={(e) => setName(e.target.value)} value={name} />
    </div>
  );
}
```

---

## 🛣️ Routing

### React Router v6 (Modern)

```jsx
import { BrowserRouter, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';

// Pages
function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function User() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h1>User {id}</h1>
      <button onClick={() => navigate('/')}>Back Home</button>
    </div>
  );
}

// Router Setup
function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/user/1">User 1</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}
```

---

## ⏳ Asynchronous Operations

### Handling API Calls

```jsx
import { useState, useEffect } from 'react';

function PostsList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {posts.slice(0, 5).map(post => (
        <article key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </article>
      ))}
    </div>
  );
}
```

### Loading States Pattern

```jsx
function DataFetcher() {
  const [state, setState] = useState({
    data: null,
    loading: false,
    error: null
  });

  const fetchData = async () => {
    setState({ loading: true, error: null, data: null });
    
    try {
      const res = await fetch('/api/data');
      const data = await res.json();
      setState({ data, loading: false, error: null });
    } catch (error) {
      setState({ error: error.message, loading: false, data: null });
    }
  };

  const { data, loading, error } = state;

  return (
    <div>
      <button onClick={fetchData} disabled={loading}>
        {loading ? 'Loading...' : 'Fetch Data'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {data && <p>{JSON.stringify(data)}</p>}
    </div>
  );
}
```

---

## ⚡ Performance Optimization

### 1. Memoization (React.memo)

```jsx
import { memo } from 'react';

// Prevent re-render if props don't change
const UserCard = memo(function UserCard({ user, onSelect }) {
  console.log('UserCard rendered');
  return (
    <div onClick={() => onSelect(user.id)}>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  );
});

function App() {
  const [users] = useState([...]);
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div>
      {users.map(user => (
        <UserCard key={user.id} user={user} onSelect={setSelectedId} />
      ))}
    </div>
  );
}
```

### 2. Code Splitting (Lazy Loading)

```jsx
import { lazy, Suspense } from 'react';

// Lazy load components
const HeavyComponent = lazy(() => import('./HeavyComponent'));
const Dashboard = lazy(() => import('./pages/Dashboard'));

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <HeavyComponent />
      <Dashboard />
    </Suspense>
  );
}
```

### 3. Avoiding Unnecessary Renders

```jsx
import { useState, useCallback, useMemo } from 'react';

function OptimizedApp() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('John');

  // Memoized callback
  const handleIncrement = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  // Memoized object/array
  const userConfig = useMemo(() => ({
    name,
    id: 1,
    roles: ['admin', 'user']
  }), [name]);

  return (
    <div>
      <p>Count: {count}</p>
      <ChildComponent onIncrement={handleIncrement} config={userConfig} />
    </div>
  );
}
```

### 4. Key Prop in Lists

```jsx
// ❌ BAD - Using index as key
{items.map((item, index) => <li key={index}>{item.name}</li>)}

// ✅ GOOD - Using unique id
{items.map(item => <li key={item.id}>{item.name}</li>)}

// Why? If list reorders, index keys cause bugs
```

### 5. Image Optimization

```jsx
function ImageGallery() {
  return (
    <img 
      src="/image.jpg" 
      alt="Description"
      loading="lazy"  // Lazy load
      width={300}
      height={200}
      srcSet="/image-sm.jpg 300w, /image-md.jpg 600w"
    />
  );
}
```

---

## ✅ Best Practices

### 1. Component Design

```jsx
// ✅ GOOD - Focused, reusable
const Button = ({ variant, size, children, ...props }) => {
  const className = `btn btn--${variant} btn--${size}`;
  return <button className={className} {...props}>{children}</button>;
};

// Usage
<Button variant="primary" size="lg" onClick={handleClick}>
  Click Me
</Button>

// ❌ BAD - Too many props, unclear
const SpecificButton = ({ isPrimary, isLarge, hasIcon, onClick, ... }) => {
  // 20 lines of conditional logic
};
```

### 2. Naming Conventions

```jsx
// Event handlers should start with 'handle'
const handleClick = () => { };
const handleSubmit = (e) => { };

// Callbacks/props should describe the action
const onUserSelect = (user) => { };
const onFormChange = (values) => { };

// Boolean variables/functions should start with 'is' or 'has'
const isLoading = true;
const hasError = false;
const isVisible = true;

// Fetch functions should start with 'fetch' or 'use'
const fetchUsers = async () => { };
const useUsers = () => { };
```

### 3. Error Boundaries

```jsx
import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught:', error, errorInfo);
    // Log to error service
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong: {this.state.error?.message}</div>;
    }
    return this.props.children;
  }
}

// Usage
<ErrorBoundary>
  <YourComponent />
</ErrorBoundary>
```

### 4. PropTypes & TypeScript

```jsx
// Using PropTypes
import PropTypes from 'prop-types';

function User({ name, age, email, isActive }) {
  return <div>{name}, {age}</div>;
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  email: PropTypes.string.isRequired,
  isActive: PropTypes.bool
};

User.defaultProps = {
  age: 0,
  isActive: true
};

// Using TypeScript (BETTER)
interface UserProps {
  name: string;
  age?: number;
  email: string;
  isActive: boolean;
}

function User({ name, age = 0, email, isActive }: UserProps) {
  return <div>{name}, {age}</div>;
}
```

### 5. Conditional Rendering

```jsx
// Good patterns
function Component({ isLoading, error, data }) {
  // Pattern 1: Ternary
  return isLoading ? <Loading /> : <Content data={data} />;

  // Pattern 2: Logical AND
  return data && <Content data={data} />;

  // Pattern 3: Early return
  if (isLoading) return <Loading />;
  if (error) return <Error error={error} />;
  return <Content data={data} />;

  // Pattern 4: Switch statement
  switch (status) {
    case 'loading': return <Loading />;
    case 'error': return <Error />;
    case 'success': return <Content />;
    default: return null;
  }
}
```

---

## 🏗️ Project Structure

### Scalable Folder Organization

```
src/
├── components/
│   ├── common/
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   └── Modal.jsx
│   ├── features/
│   │   ├── UserProfile/
│   │   │   ├── UserProfile.jsx
│   │   │   ├── UserCard.jsx
│   │   │   └── useUser.js
│   │   └── Auth/
│   │       ├── LoginForm.jsx
│   │       └── SignupForm.jsx
│   └── layouts/
│       ├── MainLayout.jsx
│       └── AuthLayout.jsx
├── hooks/
│   ├── useForm.js
│   ├── useFetch.js
│   └── useAuth.js
├── context/
│   ├── AuthContext.jsx
│   ├── ThemeContext.jsx
│   └── AppContext.jsx
├── pages/
│   ├── Home.jsx
│   ├── Dashboard.jsx
│   ├── NotFound.jsx
│   └── Profile.jsx
├── services/
│   ├── api.js
│   ├── auth.js
│   └── storage.js
├── utils/
│   ├── helpers.js
│   ├── validators.js
│   ├── formatters.js
│   └── constants.js
├── styles/
│   ├── index.css
│   ├── variables.css
│   └── globals.css
├── types/ (if using TypeScript)
│   ├── user.ts
│   └── api.ts
├── App.jsx
└── main.jsx
```

### API Service Pattern

```jsx
// services/api.js
const API_BASE = 'https://api.example.com';

const handleResponse = async (response) => {
  if (!response.ok) {
    throw new Error(`API Error: ${response.statusText}`);
  }
  return response.json();
};

export const api = {
  users: {
    getAll: () => 
      fetch(`${API_BASE}/users`).then(handleResponse),
    
    getById: (id) => 
      fetch(`${API_BASE}/users/${id}`).then(handleResponse),
    
    create: (data) => 
      fetch(`${API_BASE}/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      }).then(handleResponse),
    
    update: (id, data) => 
      fetch(`${API_BASE}/users/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      }).then(handleResponse),
    
    delete: (id) => 
      fetch(`${API_BASE}/users/${id}`, { method: 'DELETE' })
  }
};

// Usage in component
import { api } from '../services/api';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.users.getAll().then(setUsers).catch(console.error);
  }, []);

  return <div>{users.map(u => <div key={u.id}>{u.name}</div>)}</div>;
}
```

---

## 🎨 Real-World Patterns

### 1. Form Handling

```jsx
import { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subscribe: false
  });
  
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (data) => {
    const newErrors = {};
    if (!data.name) newErrors.name = 'Name is required';
    if (!data.email) newErrors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(data.email)) newErrors.email = 'Email is invalid';
    if (!data.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validate(formData);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '', subscribe: false });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      setErrors({ submit: error.message });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your name"
      />
      {errors.name && <span className="error">{errors.name}</span>}

      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Your email"
      />
      {errors.email && <span className="error">{errors.email}</span>}

      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Your message"
      />
      {errors.message && <span className="error">{errors.message}</span>}

      <label>
        <input
          type="checkbox"
          name="subscribe"
          checked={formData.subscribe}
          onChange={handleChange}
        />
        Subscribe to newsletter
      </label>

      <button type="submit">Send</button>
      {submitted && <p>Message sent successfully!</p>}
      {errors.submit && <p className="error">{errors.submit}</p>}
    </form>
  );
}
```

### 2. Search & Filter

```jsx
import { useState, useMemo } from 'react';

function UserSearch({ users }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    role: 'all',
    status: 'all'
  });

  const filteredUsers = useMemo(() => {
    return users.filter(user => {
      const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           user.email.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesRole = filters.role === 'all' || user.role === filters.role;
      const matchesStatus = filters.status === 'all' || user.status === filters.status;
      
      return matchesSearch && matchesRole && matchesStatus;
    });
  }, [users, searchTerm, filters]);

  return (
    <div>
      <input
        type="search"
        placeholder="Search by name or email..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <select
        value={filters.role}
        onChange={(e) => setFilters(prev => ({ ...prev, role: e.target.value }))}
      >
        <option value="all">All Roles</option>
        <option value="admin">Admin</option>
        <option value="user">User</option>
      </select>

      <select
        value={filters.status}
        onChange={(e) => setFilters(prev => ({ ...prev, status: e.target.value }))}
      >
        <option value="all">All Status</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>

      <ul>
        {filteredUsers.map(user => (
          <li key={user.id}>{user.name} ({user.role})</li>
        ))}
      </ul>
      <p>Found {filteredUsers.length} users</p>
    </div>
  );
}
```

### 3. Modal/Dialog Pattern

```jsx
import { useState } from 'react';

function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{title}</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
      
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Important Message"
      >
        <p>This is modal content</p>
      </Modal>
    </div>
  );
}
```

### 4. Pagination Pattern

```jsx
import { useState } from 'react';

function Pagination({ items, itemsPerPage = 10 }) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = items.slice(startIndex, startIndex + itemsPerPage);

  const goToPage = (page) => {
    const pageNum = Math.max(1, Math.min(page, totalPages));
    setCurrentPage(pageNum);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <div>
        {currentItems.map(item => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>

      <div className="pagination">
        <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => goToPage(i + 1)}
            className={currentPage === i + 1 ? 'active' : ''}
          >
            {i + 1}
          </button>
        ))}

        <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>

      <p>Page {currentPage} of {totalPages}</p>
    </div>
  );
}
```

---

## 🧪 Testing

### Unit Testing with Vitest

```jsx
import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

describe('Button Component', () => {
  it('renders button with text', () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('calls onClick handler when clicked', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();
    
    render(<Button onClick={handleClick}>Click</Button>);
    await user.click(screen.getByText('Click'));
    
    expect(handleClick).toHaveBeenCalledOnce();
  });

  it('disables button when disabled prop is true', () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
```

### Hook Testing

```jsx
import { renderHook, act } from '@testing-library/react';
import { useCounter } from './useCounter';

describe('useCounter', () => {
  it('increments count', () => {
    const { result } = renderHook(() => useCounter());
    
    act(() => {
      result.current.increment();
    });
    
    expect(result.current.count).toBe(1);
  });
});
```

---

## 🚀 Deployment

### Build for Production

```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

### Environment Variables

```
# .env.local
VITE_API_URL=https://api.example.com
VITE_APP_NAME=MyApp
```

```jsx
// Usage
const apiUrl = import.meta.env.VITE_API_URL;
```

### Deployment Platforms

- **Vercel** (Recommended for Next.js)
  ```bash
  npm install -g vercel
  vercel
  ```

- **Netlify**
  ```bash
  npm run build
  # Connect GitHub repo to Netlify
  ```

- **GitHub Pages**
  ```bash
  npm install --save-dev gh-pages
  ```

---

## 📋 React Best Practices Checklist

- [ ] Use functional components with hooks
- [ ] Keep components small and focused
- [ ] Use meaningful variable and function names
- [ ] Memoize expensive computations
- [ ] Use dependency arrays correctly in useEffect
- [ ] Avoid prop drilling (use Context)
- [ ] Handle loading and error states
- [ ] Use key prop correctly in lists
- [ ] Avoid index as key
- [ ] Lazy load components and routes
- [ ] Optimize images
- [ ] Use TypeScript for large projects
- [ ] Write tests for critical components
- [ ] Use error boundaries
- [ ] Manage state appropriately (local vs global)
- [ ] Follow semantic HTML
- [ ] Make components accessible (a11y)
- [ ] Use React DevTools for debugging

---

## 🔗 Resources

- **Official Docs**: https://react.dev
- **React Router**: https://reactrouter.com
- **Redux Toolkit**: https://redux-toolkit.js.org
- **TailwindCSS**: https://tailwindcss.com
- **TypeScript**: https://www.typescriptlang.org

---

## 📞 Quick Reference

### Common Imports
```jsx
import { useState, useEffect, useContext, useReducer, useCallback, useMemo, useRef } from 'react';
import { createContext } from 'react';
import { BrowserRouter, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
```

### Common Patterns

| Use Case | Solution |
|----------|----------|
| Toggle state | `const [isOpen, setIsOpen] = useState(false)` |
| Form input | `useState` with onChange |
| Fetch data | `useEffect` with fetch |
| Global state | `useContext` or Redux |
| Complex state | `useReducer` |
| Prevent re-renders | `React.memo`, `useCallback`, `useMemo` |
| Side effects | `useEffect` |
| DOM manipulation | `useRef` |

---

**Happy React Learning! 🎉**

Keep practicing, build projects, and master the concepts step by step.
