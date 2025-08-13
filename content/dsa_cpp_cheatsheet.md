---
title: "Data Structures & Algorithms (DSA) in C++ — Ultimate Cheatsheet"
description: "Concise, practical reference covering core DSA topics with idiomatic C++17/20 examples and patterns for interviews and competitive programming."
category: "Programming"
tags: ["c++", "dsa", "algorithms", "data-structures", "competitive-programming"]
version: "1.0"
---

## 👨‍💻 Setup & Snippets

### Fast I/O & Template
```cpp
#include <bits/stdc++.h>
using namespace std;
using ll = long long;
using ull = unsigned long long;
using ld = long double;
#define all(x) begin(x), end(x)

template<class T> inline bool chmin(T &a, const T &b){ if(b < a){ a=b; return true;} return false; }
template<class T> inline bool chmax(T &a, const T &b){ if(a < b){ a=b; return true;} return false; }

int main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    // your code
}
```

### Big-O Quick Table
- Array access `O(1)`, insert/delete middle `O(n)`
- Vector push_back `Amortized O(1)`, insert/erase middle `O(n)`
- Deque `O(1)` ends
- Stack/Queue ops `O(1)`
- Set/Map (RB-tree) `O(log n)`
- Unordered_set/map `O(1)` avg, `O(n)` worst
- Heap push/pop top `O(log n)`
- DSU ops ~`α(n)` (inverse Ackermann)
- Binary search `O(log n)`
- DFS/BFS `O(n+m)`
- Dijkstra (pq) `O((n+m)log n)`
- Toposort `O(n+m)`
- KMP `O(n+m)`
- Segment Tree / Fenwick `O(log n)` update/query

---

## 🧰 Core STL Containers & Tricks

### Vector & Two-Pointers
```cpp
vector<int> a = {1,2,2,3,4,4,5};
a.erase(unique(all(a)), a.end()); // dedupe sorted

// two pointers: find pair sum = k (sorted)
bool twoSum(vector<int>& v, int k){
    int i=0, j=(int)v.size()-1;
    while(i<j){
        long long s = (long long)v[i]+v[j];
        if(s==k) return true;
        if(s<k) i++; else j--;
    }
    return false;
}
```

### String Basics & KMP
```cpp
// prefix-function (pi) for KMP
vector<int> prefix_function(const string& s){
    int n=s.size(); vector<int> pi(n);
    for(int i=1;i<n;i++){
        int j=pi[i-1];
        while(j>0 && s[i]!=s[j]) j=pi[j-1];
        if(s[i]==s[j]) j++;
        pi[i]=j;
    }
    return pi;
}
// find pattern occurrences
vector<int> kmp_find(const string& text, const string& pat){
    string s=pat+"#"+text;
    auto pi = prefix_function(s);
    vector<int> pos;
    for(int i=(int)pat.size()+1;i<(int)s.size();i++)
        if(pi[i]==(int)pat.size())
            pos.push_back(i-2*(int)pat.size());
    return pos;
}
```

### Stack/Queue/Deque
```cpp
stack<int> st; st.push(1); st.top(); st.pop();
queue<int> q; q.push(1); q.front(); q.pop();
deque<int> dq; dq.push_front(1); dq.push_back(2); dq.pop_front();
```

### Set/Map vs Unordered
```cpp
set<int> s; s.insert(3); s.insert(1);
// order statistics? use PBDS or sort + index

unordered_map<string,int> freq;
for(string w: {"a","b","a"}) freq[w]++;
```

### Priority Queue (Heap)
```cpp
priority_queue<int> mx;            // max-heap
priority_queue<int, vector<int>, greater<int>> mn; // min-heap
```

---

## 🔢 Searching & Sorting

### Binary Search (STL + Custom)
```cpp
int x = 5;
vector<int> v = {1,3,5,7};
bool exists = binary_search(all(v), x);
int i = lower_bound(all(v), x) - v.begin(); // first >= x
int j = upper_bound(all(v), x) - v.begin(); // first > x

// custom predicate binary search
int bs_first_true(int lo, int hi, auto ok){
    while(lo<hi){
        int mid = lo + (hi-lo)/2;
        if(ok(mid)) hi=mid; else lo=mid+1;
    }
    return lo;
}
```

### Classic Sorts (use `sort` unless asked)
```cpp
sort(all(v)); // O(n log n)
// custom comparator
sort(all(v), [](const auto& a, const auto& b){
    if(a.first != b.first) return a.first < b.first;
    return a.second > b.second;
});
```

---

## 🧮 Math & Number Theory

### GCD/LCM, Fast Power, Mod Inverse
```cpp
long long mod = 1'000'000'007LL;
long long modpow(long long a, long long e, long long m=mod){
    long long r=1%m; a%=m;
    while(e){ if(e&1) r=r*a%m; a=a*a%m; e>>=1; }
    return r;
}
long long modinv(long long a){ return modpow(a, mod-2); } // mod prime
long long lcmll(long long a,long long b){ return a / gcd(a,b) * b; }
```

### Sieve of Eratosthenes
```cpp
vector<int> primes, spf; // smallest prime factor
vector<bool> isprime;
void sieve(int N){
    isprime.assign(N+1,true); isprime[0]=isprime[1]=false;
    spf.assign(N+1,0);
    for(int i=2;i<=N;i++){
        if(isprime[i]){ primes.push_back(i); spf[i]=i; }
        for(int p: primes){
            if(1LL*i*p>N || p>spf[i]) break;
            isprime[i]=false; spf[i]=p;
        }
    }
}
```

### Combinatorics (nCr mod prime)
```cpp
const int MAXN = 1'000'000;
long long fact[MAXN+1], invfact[MAXN+1];
void build_fact(){
    fact[0]=1;
    for(int i=1;i<=MAXN;i++) fact[i]=fact[i-1]*i%mod;
    invfact[MAXN]=modinv(fact[MAXN]);
    for(int i=MAXN;i>0;i--) invfact[i-1]=invfact[i]*i%mod;
}
long long nCr(int n,int r){
    if(r<0||r>n) return 0;
    return fact[n]*invfact[r]%mod*invfact[n-r]%mod;
}
```

### Bit Tricks
```cpp
bool isPow2(unsigned x){ return x && !(x & (x-1)); }
int lsb(int x){ return x & -x; } // lowest set bit
int pop = __builtin_popcount(12345);
int msb = 31 - __builtin_clz(1u<<20);
```

---

## 🧱 Data Structures

### Linked List (basic)
```cpp
struct Node{ int val; Node* next; Node(int v):val(v),next(nullptr){} };
// reverse
Node* rev(Node* head){
    Node *prev=nullptr, *cur=head;
    while(cur){ Node* nxt=cur->next; cur->next=prev; prev=cur; cur=nxt; }
    return prev;
}
```

### Binary Tree & Traversals
```cpp
struct T{ int v; T* l; T* r; T(int x):v(x),l(nullptr),r(nullptr){} };

void inorder(T* n){ if(!n) return; inorder(n->l); cout<<n->v<<" "; inorder(n->r); }
void preorder(T* n){ if(!n) return; cout<<n->v<<" "; preorder(n->l); preorder(n->r); }
void postorder(T* n){ if(!n) return; postorder(n->l); postorder(n->r); cout<<n->v<<" "; }
```

### BST Ops
```cpp
T* insertBST(T* r, int x){
    if(!r) return new T(x);
    if(x < r->v) r->l = insertBST(r->l,x);
    else if(x > r->v) r->r = insertBST(r->r,x);
    return r;
}
bool findBST(T* r, int x){
    while(r){
        if(r->v==x) return true;
        r = (x<r->v)? r->l : r->r;
    }
    return false;
}
```

### Heap (priority_queue) for k-largest
```cpp
vector<int> kLargest(vector<int>& a, int k){
    priority_queue<int, vector<int>, greater<int>> pq;
    for(int x: a){
        pq.push(x);
        if((int)pq.size()>k) pq.pop();
    }
    vector<int> res;
    while(!pq.empty()){ res.push_back(pq.top()); pq.pop(); }
    reverse(all(res)); return res;
}
```

### Disjoint Set Union (Union-Find)
```cpp
struct DSU{
    vector<int> p, r, sz;
    DSU(int n=0){ init(n); }
    void init(int n){ p.resize(n); iota(all(p),0); r.assign(n,0); sz.assign(n,1); }
    int find(int x){ return p[x]==x? x : p[x]=find(p[x]); }
    bool unite(int a,int b){
        a=find(a); b=find(b); if(a==b) return false;
        if(r[a]<r[b]) swap(a,b);
        p[b]=a; sz[a]+=sz[b];
        if(r[a]==r[b]) r[a]++;
        return true;
    }
    int size(int x){ return sz[find(x)]; }
};
```

### Trie (prefix tree)
```cpp
struct Trie{
    struct N{ int nxt[26]; bool end; N(){ memset(nxt,-1,sizeof nxt); end=false; } };
    vector<N> t = {N()};
    void insert(const string& s){
        int u=0;
        for(char c: s){
            int v=c-'a';
            if(t[u].nxt[v]==-1){ t[u].nxt[v]=t.size(); t.push_back(N()); }
            u=t[u].nxt[v];
        }
        t[u].end=true;
    }
    bool search(const string& s){
        int u=0;
        for(char c: s){
            int v=c-'a';
            if(t[u].nxt[v]==-1) return false;
            u=t[u].nxt[v];
        }
        return t[u].end;
    }
};
```

### Fenwick Tree (Binary Indexed Tree)
```cpp
struct BIT{
    int n; vector<long long> f;
    BIT(int n):n(n),f(n+1,0){}
    void add(int i,long long v){ for(; i<=n; i+=i&-i) f[i]+=v; }
    long long sumPrefix(int i){ long long s=0; for(; i>0; i-=i&-i) s+=f[i]; return s; }
    long long sumRange(int l,int r){ return sumPrefix(r)-sumPrefix(l-1); }
};
```

### Segment Tree (range sum)
```cpp
struct Seg{
    int n; vector<long long> st;
    Seg(int n):n(n),st(4*n){}
    void build(vector<long long>& a,int p,int l,int r){
        if(l==r){ st[p]=a[l]; return; }
        int m=(l+r)/2;
        build(a,2*p,l,m); build(a,2*p+1,m+1,r);
        st[p]=st[2*p]+st[2*p+1];
    }
    void upd(int p,int l,int r,int idx,long long val){
        if(l==r){ st[p]=val; return; }
        int m=(l+r)/2;
        if(idx<=m) upd(2*p,l,m,idx,val);
        else upd(2*p+1,m+1,r,idx,val);
        st[p]=st[2*p]+st[2*p+1];
    }
    long long query(int p,int l,int r,int ql,int qr){
        if(qr<l||r<ql) return 0;
        if(ql<=l&&r<=qr) return st[p];
        int m=(l+r)/2;
        return query(2*p,l,m,ql,qr)+query(2*p+1,m+1,r,ql,qr);
    }
};
```

---

## 🌐 Graphs

### Representation
```cpp
int n, m;
vector<vector<pair<int,int>>> g; // weighted
vector<vector<int>> g2;          // unweighted
```

### BFS (shortest path on unweighted)
```cpp
vector<int> bfs(int s, const vector<vector<int>>& g){
    int n=g.size(); vector<int> dist(n, -1);
    queue<int> q; q.push(s); dist[s]=0;
    while(!q.empty()){
        int u=q.front(); q.pop();
        for(int v: g[u]) if(dist[v]==-1){
            dist[v]=dist[u]+1; q.push(v);
        }
    }
    return dist;
}
```

### DFS (components / cycle detection)
```cpp
void dfs(int u, const vector<vector<int>>& g, vector<int>& vis){
    vis[u]=1;
    for(int v: g[u]) if(!vis[v]) dfs(v,g,vis);
}
```

### Topological Sort (Kahn)
```cpp
vector<int> topo_sort(const vector<vector<int>>& g){
    int n=g.size(); vector<int> indeg(n);
    for(int u=0;u<n;u++) for(int v: g[u]) indeg[v]++;
    queue<int> q; for(int i=0;i<n;i++) if(indeg[i]==0) q.push(i);
    vector<int> order;
    while(!q.empty()){
        int u=q.front(); q.pop(); order.push_back(u);
        for(int v: g[u]) if(--indeg[v]==0) q.push(v);
    }
    if((int)order.size()!=n) order.clear(); // cycle
    return order;
}
```

### Dijkstra (non-negative weights)
```cpp
vector<long long> dijkstra(int s, const vector<vector<pair<int,int>>>& g){
    const long long INF = (1LL<<60);
    int n=g.size(); vector<long long> dist(n, INF);
    priority_queue<pair<long long,int>, vector<pair<long long,int>>, greater<pair<long long,int>>> pq;
    dist[s]=0; pq.push({0,s});
    while(!pq.empty()){
        auto [d,u]=pq.top(); pq.pop();
        if(d!=dist[u]) continue;
        for(auto [v,w]: g[u]){
            if(dist[v]>d+w){ dist[v]=d+w; pq.push({dist[v],v}); }
        }
    }
    return dist;
}
```

### Bellman-Ford (negatives; detect cycles)
```cpp
vector<long long> bellman(int n,int s, vector<tuple<int,int,int>>& edges){
    const long long INF=(1LL<<60);
    vector<long long> d(n,INF); d[s]=0;
    for(int i=0;i<n-1;i++){
        bool any=false;
        for(auto [u,v,w]: edges)
            if(d[u]<INF && d[v] > d[u]+w){ d[v]=d[u]+w; any=true; }
        if(!any) break;
    }
    // negative cycle check: if relaxes again
    return d;
}
```

### Floyd–Warshall (all-pairs)
```cpp
const long long INF = (1LL<<60);
vector<vector<long long>> dist(n, vector<long long>(n, INF));
for(int i=0;i<n;i++) dist[i][i]=0;
// set dist[u][v]=w for edges
for(int k=0;k<n;k++)
 for(int i=0;i<n;i++)
  for(int j=0;j<n;j++)
    dist[i][j]=min(dist[i][j], dist[i][k]+dist[k][j]);
```

### Minimum Spanning Tree (Kruskal)
```cpp
struct Edge{ int u,v,w; };
int mst_kruskal(int n, vector<Edge>& es){
    sort(all(es), [](auto& a, auto& b){ return a.w<b.w; });
    DSU d(n); int total=0, cnt=0;
    for(auto &e: es) if(d.unite(e.u,e.v)){ total+=e.w; if(++cnt==n-1) break; }
    return total;
}
```

---

## 🧠 Dynamic Programming Patterns

### 0/1 Knapsack
```cpp
int knap01(vector<int>& wt, vector<int>& val, int W){
    vector<int> dp(W+1, 0);
    for(int i=0;i<(int)wt.size();i++)
        for(int w=W; w>=wt[i]; --w)
            dp[w] = max(dp[w], dp[w-wt[i]] + val[i]);
    return dp[W];
}
```

### LIS (n log n)
```cpp
int LIS(vector<int>& a){
    vector<int> d;
    for(int x: a){
        auto it = lower_bound(all(d), x);
        if(it==d.end()) d.push_back(x);
        else *it = x;
    }
    return (int)d.size();
}
```

### Edit Distance
```cpp
int edit_distance(const string& a, const string& b){
    int n=a.size(), m=b.size();
    vector<vector<int>> dp(n+1, vector<int>(m+1));
    for(int i=0;i<=n;i++) dp[i][0]=i;
    for(int j=0;j<=m;j++) dp[0][j]=j;
    for(int i=1;i<=n;i++)
        for(int j=1;j<=m;j++)
            dp[i][j]= min({ dp[i-1][j]+1, dp[i][j-1]+1, dp[i-1][j-1] + (a[i-1]!=b[j-1]) });
    return dp[n][m];
}
```

### Coin Change (min coins)
```cpp
int coin_change_min(vector<int>& c, int T){
    const int INF=1e9;
    vector<int> dp(T+1, INF); dp[0]=0;
    for(int x: c) for(int s=x; s<=T; s++)
        dp[s]=min(dp[s], dp[s-x]+1);
    return dp[T]==INF ? -1 : dp[T];
}
```

---

## 🔍 Sliding Window & Prefix

### Longest Substring Without Repeats
```cpp
int lengthOfLongestSubstring(const string& s){
    vector<int> last(256,-1);
    int best=0, st=0;
    for(int i=0;i<(int)s.size();i++){
        if(last[s[i]]>=st) st=last[s[i]]+1;
        last[s[i]]=i;
        best=max(best, i-st+1);
    }
    return best;
}
```

### Subarray Sum = k (prefix + hashmap)
```cpp
int subarraySum(vector<int>& a, int k){
    unordered_map<long long,int> cnt; cnt[0]=1;
    long long pref=0; int ans=0;
    for(int x: a){
        pref+=x;
        if(cnt.count(pref-k)) ans+=cnt[pref-k];
        cnt[pref]++;
    }
    return ans;
}
```

---

## 🔁 Recursion & Backtracking

### Subsets
```cpp
void subsets(int i, vector<int>& nums, vector<int>& cur, vector<vector<int>>& out){
    if(i==(int)nums.size()){ out.push_back(cur); return; }
    subsets(i+1, nums, cur, out);
    cur.push_back(nums[i]);
    subsets(i+1, nums, cur, out);
    cur.pop_back();
}
```

### N-Queens
```cpp
void nqueens(int n, int r, vector<int>& col, vector<int>& d1, vector<int>& d2, vector<int>& cur, vector<vector<string>>& res){
    if(r==n){
        vector<string> board(n, string(n,'.'));
        for(int i=0;i<n;i++) board[i][cur[i]]='Q';
        res.push_back(board); return;
    }
    for(int c=0;c<n;c++) if(!col[c] && !d1[r-c+n-1] && !d2[r+c]){
        col[c]=d1[r-c+n-1]=d2[r+c]=1; cur[r]=c;
        nqueens(n,r+1,col,d1,d2,cur,res);
        col[c]=d1[r-c+n-1]=d2[r+c]=0;
    }
}
```

---

## 📐 Geometry (Basics)

### Point/Vector Ops
```cpp
struct P{ double x,y; };
double dot(P a,P b){ return a.x*b.x + a.y*b.y; }
double cross(P a,P b){ return a.x*b.y - a.y*b.x; }
double norm(P a){ return hypot(a.x,a.y); }
```

### CCW / Orientation
```cpp
int sgn(double x){ return (x>1e-9)-(x<-1e-9); }
int orient(P a,P b,P c){
    return sgn(cross({b.x-a.x,b.y-a.y},{c.x-a.x,c.y-a.y}));
}
```

---

## 🧪 Testing Patterns

- **Deterministic seeds**: `mt19937 rng(chrono::steady_clock::now().time_since_epoch().count());`
- **Assert invariants** inside loops to catch errors early.
- **Edge cases**: empty, size=1, all equal, negatives, duplicates, large bounds.

---

## 📌 Typical Interview Patterns (Quick Picks)

- **Two pointers**: sorted arrays, dedupe, window shrink/expand
- **Monotonic stack**: next/prev greater element, histogram rectangles
- **Greedy + sorting**: intervals, scheduling, activity selection
- **Heap**: merge k lists, k largest/smallest, streaming medians
- **Hashing**: frequency maps, seen sets, prefix sums
- **DFS/BFS**: grids, islands, shortest path unweighted
- **DP**: knapsack, LIS, coin change, matrix chain
- **Advanced DS**: Fenwick, Segment tree, Trie, DSU
- **Math**: gcd/lcm, sieve, combinatorics, modpow
- **Bits**: subset DP, bitmasks, tricks

---

## 🏁 Notes
- Prefer `vector` over raw arrays, pass by const ref to avoid copies.
- Watch for overflow (`long long`), modulo arithmetic, and 0-based vs 1-based indices.
- For competitive programming, compile with: `g++ -std=gnu++17 -O2 -pipe -static -s -o main main.cpp`.
